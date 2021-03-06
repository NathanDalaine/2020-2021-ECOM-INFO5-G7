package com.group6.app.service;

import com.group6.app.domain.Authority;
import com.group6.app.domain.User;
import com.group6.app.domain.UserProfile;
import com.group6.app.repository.AuthorityRepository;
import com.group6.app.repository.UserProfileRepository;
import com.group6.app.repository.UserRepository;
import com.group6.app.security.AuthoritiesConstants;
import com.group6.app.security.SecurityUtils;
import com.group6.app.service.dto.ReservationDTO;
import com.group6.app.service.dto.ReservationFullDTO;
import com.group6.app.service.dto.UserProfileDTO;
import com.group6.app.service.mapper.ReservationFullMapper;
import com.group6.app.service.mapper.ReservationMapper;
import com.group6.app.service.mapper.UserProfileMapper;
import com.group6.app.service.util.RandomUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link UserProfile}.
 */
@Service
@Transactional
public class UserProfileService {

    private final Logger log = LoggerFactory.getLogger(UserProfileService.class);

    private final UserProfileRepository userProfileRepository;

    private final UserProfileMapper userProfileMapper;
    private final ReservationMapper reservationMapper;
    private final ReservationFullMapper reservationFullMapper;
    private final UserRepository userRepository;

    private final AuthorityRepository authorityRepository;

    private final PasswordEncoder passwordEncoder;
    private final MailService mailService;

    public UserProfileService(UserRepository userRepository, PasswordEncoder passwordEncoder, ReservationMapper reservationMapper, MailService mailService, UserProfileRepository userProfileRepository, AuthorityRepository authorityRepository, UserProfileMapper userProfileMapper,ReservationFullMapper reservationFullMapper) {
        this.userProfileRepository = userProfileRepository;
        this.userProfileMapper = userProfileMapper;
        this.userRepository = userRepository;
        this.authorityRepository = authorityRepository;
        this.passwordEncoder = passwordEncoder;
        this.mailService = mailService;
        this.reservationMapper = reservationMapper;
        this.reservationFullMapper = reservationFullMapper;
    }

    /**
     * Save a userProfile.
     *
     * @param userProfileDTO the entity to save.
     * @return the persisted entity.
     */
    public UserProfileDTO save(UserProfileDTO userProfileDTO) {
        AtomicReference<User> newUser = new AtomicReference<>(new User());
        userRepository.findOneByLogin(userProfileDTO.getUser().getLogin().toLowerCase()).ifPresent(existingUser -> {
            newUser.set(existingUser);
            boolean removed = true; //removeNonActivatedUser(existingUser);
            if (!removed) {
                throw new UsernameAlreadyUsedException();
            }
        });
        userRepository.findOneByEmailIgnoreCase(userProfileDTO.getUser().getEmail()).ifPresent(existingUser -> {
            boolean removed = true; // removeNonActivatedUser(existingUser);
            if (!removed) {
                throw new EmailAlreadyUsedException();
            }
        });

        // String encryptedPassword = passwordEncoder.encode(userProfileDTO.getPassword());
        newUser.get().setLogin(userProfileDTO.getUser().getLogin().toLowerCase());
        // new user gets initially a generated password
        //  newUser.setPassword(encryptedPassword);
        newUser.get().setFirstName(userProfileDTO.getUser().getFirstName());
        newUser.get().setLastName(userProfileDTO.getUser().getLastName());
        newUser.get().setEmail(userProfileDTO.getUser().getEmail().toLowerCase());
        // newUser.setImageUrl(userDTO.getImageUrl());
        //newUser.setLangKey(userDTO.getLangKey());
        // new user is not active
        newUser.get().setActivated(true);
        // new user gets registration key
        newUser.get().setActivationKey(RandomUtil.generateActivationKey());
        Set<Authority> authorities = new HashSet<>();
        Set<String> userAuthorities = userProfileDTO.getUser().getAuthorities();
        authorityRepository.findById(userAuthorities.iterator().next()).ifPresent(authorities::add);
        if(authorities.isEmpty()){
            throw new Error();
        }
        newUser.get().setAuthorities(authorities);

        log.debug("Request to save UserProfile : {}", userProfileDTO);
        UserProfile userProfile = userProfileMapper.toEntity(userProfileDTO);
        if (userProfile.getDateAdhesion() == null) {
            userProfile.setDateAdhesion(Instant.now());
        }
        if (userProfile.getDateEcheance() == null) {
            userProfile.setDateEcheance(Instant.now().minus(365, ChronoUnit.DAYS));
        }
        userProfile.setUser(newUser.get());
        userProfile = userProfileRepository.save(userProfile);
        return userProfileMapper.toDto(userProfile);
    }

    public UserProfileDTO register(UserProfileDTO userProfileDTO, String password) {
        userRepository.findOneByLogin(userProfileDTO.getUser().getLogin().toLowerCase()).ifPresent(existingUser -> {
            boolean removed = false; //removeNonActivatedUser(existingUser);
            if (!removed) {
                throw new UsernameAlreadyUsedException();
            }
        });
        userRepository.findOneByEmailIgnoreCase(userProfileDTO.getUser().getEmail()).ifPresent(existingUser -> {
            boolean removed = false; // removeNonActivatedUser(existingUser);
            if (!removed) {
                throw new EmailAlreadyUsedException();
            }
        });
        User newUser = new User();
        String encryptedPassword = passwordEncoder.encode(password);
        newUser.setLogin(userProfileDTO.getUser().getLogin().toLowerCase());
        // new user gets initially a generated password
        newUser.setPassword(encryptedPassword);
        newUser.setFirstName(userProfileDTO.getUser().getFirstName());
        newUser.setLastName(userProfileDTO.getUser().getLastName());
        newUser.setEmail(userProfileDTO.getUser().getEmail().toLowerCase());
        // newUser.setImageUrl(userDTO.getImageUrl());
        newUser.setLangKey("fr");
        // new user is not active
        newUser.setActivated(true);
        // new user gets registration key
        newUser.setActivationKey(RandomUtil.generateActivationKey());
        User currentUser;
        if(SecurityUtils.getCurrentUserLogin().isPresent()){
            if(userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin().get()).isPresent()){
                currentUser = userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin().get()).get();
            }else{
                currentUser = null;
            }
        }else{
            currentUser = null;
        }

        Set<Authority> authorities = new HashSet<>();
        authorityRepository.findById(userProfileDTO.getAuthoritie()).ifPresent(authorities::add);
        if(authorities.isEmpty()){
            throw new Error();
        }

        authorities.forEach(
            authoritie ->{
                switch(authoritie.getName()){
                    case AuthoritiesConstants.ADMIN :
                        if(currentUser == null ||!currentUser.getAuthorities().contains(authorityRepository.getOne(AuthoritiesConstants.ADMIN))){
                            throw new AuthorityException();
                        }
                        break;
                    case AuthoritiesConstants.GESTIONNAIRE:
                        if(currentUser == null ||(!currentUser.getAuthorities().contains(authorityRepository.getOne(AuthoritiesConstants.GESTIONNAIRE)) && !currentUser.getAuthorities().contains(authorityRepository.getOne(AuthoritiesConstants.ADMIN)))){
                            throw new AuthorityException();
                        }
                        break;
                }
            }
        );
        newUser.setAuthorities(authorities);

        log.debug("Request to save UserProfile : {}", userProfileDTO);
        UserProfile userProfile = userProfileMapper.toEntity(userProfileDTO);
        if (userProfile.getDateAdhesion() == null) {
            userProfile.setDateAdhesion(Instant.now());
        }
        if (userProfile.getDateEcheance() == null) {
            userProfile.setDateEcheance(Instant.now().plus(365, ChronoUnit.DAYS));
        }
        userProfile.setUser(newUser);
        userProfile = userProfileRepository.save(userProfile);
        if (!userProfileDTO.getUser().getActivated()) {
            mailService.sendActivationEmail(userProfile.getUser());
        }
        return userProfileMapper.toDto(userProfile);
    }

    /**
     * Get all the userProfiles.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<UserProfileDTO> findAll() {
        log.debug("Request to get all UserProfiles");
        return userProfileRepository.findAll().stream()
            .map(userProfileMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    @Transactional(readOnly = true)
    public List<ReservationDTO> findReservationFromCurrentUser() {
        log.debug("Request to get all UserProfiles");
        UserProfile currentUser = userProfileRepository.findByUserLogin(SecurityUtils.getCurrentUserLogin().get());
        if (currentUser == null) {
            return null;
        }
        return currentUser.getReservations().stream()
            .map(reservationMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    @Transactional(readOnly = true)
    public List<ReservationFullDTO> findReservationFullFromCurrentUser() {
        log.debug("Request to get all UserProfiles");
        UserProfile currentUser = userProfileRepository.findByUserLogin(SecurityUtils.getCurrentUserLogin().get());
        if (currentUser == null) {
            return null;
        }
        return currentUser.getReservations().stream()
            .map(reservationFullMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    @Transactional(readOnly = true)
    public UserProfileDTO findCurrentUser() {
        log.debug("Try to find current current user");
        if(SecurityUtils.getCurrentUserLogin().isPresent()){
            if(userProfileRepository.findByUserLogin(SecurityUtils.getCurrentUserLogin().get()) != null){
                return userProfileMapper.toDto(userProfileRepository.findByUserLogin(SecurityUtils.getCurrentUserLogin().get()));
            }
        }
        return null;
    }


    /**
     * Get one userProfile by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<UserProfileDTO> findOne(Long id) {
        log.debug("Request to get UserProfile : {}", id);
        return userProfileRepository.findById(id)
            .map(userProfileMapper::toDto);
    }

    /**
     * Delete the userProfile by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete UserProfile : {}", id);
        userProfileRepository.deleteById(id);
    }
}
