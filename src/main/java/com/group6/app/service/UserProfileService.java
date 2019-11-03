package com.group6.app.service;

import com.group6.app.domain.Authority;
import com.group6.app.domain.User;
import com.group6.app.domain.UserProfile;
import com.group6.app.repository.AuthorityRepository;
import com.group6.app.repository.UserProfileRepository;
import com.group6.app.repository.UserRepository;
import com.group6.app.security.AuthoritiesConstants;
import com.group6.app.service.dto.UserProfileDTO;
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

    private final UserRepository userRepository;

    private final AuthorityRepository authorityRepository;

    private final PasswordEncoder passwordEncoder;
    private final MailService mailService;

    public UserProfileService(UserRepository userRepository,PasswordEncoder passwordEncoder,MailService mailService,UserProfileRepository userProfileRepository,AuthorityRepository authorityRepository, UserProfileMapper userProfileMapper) {
        this.userProfileRepository = userProfileRepository;
        this.userProfileMapper = userProfileMapper;
        this.userRepository = userRepository;
        this.authorityRepository = authorityRepository;
        this.passwordEncoder = passwordEncoder;
        this.mailService = mailService;
    }

    /**
     * Save a userProfile.
     *
     * @param userProfileDTO the entity to save.
     * @return the persisted entity.
     */
    public UserProfileDTO save(UserProfileDTO userProfileDTO) {
        userRepository.findOneByLogin(userProfileDTO.getLogin().toLowerCase()).ifPresent(existingUser -> {
            boolean removed = false; //removeNonActivatedUser(existingUser);
            if (!removed) {
                throw new UsernameAlreadyUsedException();
            }
        });
        userRepository.findOneByEmailIgnoreCase(userProfileDTO.getEmail()).ifPresent(existingUser -> {
            boolean removed = false; // removeNonActivatedUser(existingUser);
            if (!removed) {
                throw new EmailAlreadyUsedException();
            }
        });
        User newUser = new User();
        // String encryptedPassword = passwordEncoder.encode(userProfileDTO.getPassword());
        newUser.setLogin(userProfileDTO.getLogin().toLowerCase());
        // new user gets initially a generated password
        //  newUser.setPassword(encryptedPassword);
        newUser.setFirstName(userProfileDTO.getFirstName());
        newUser.setLastName(userProfileDTO.getLastName());
        newUser.setEmail(userProfileDTO.getEmail().toLowerCase());
        // newUser.setImageUrl(userDTO.getImageUrl());
        //newUser.setLangKey(userDTO.getLangKey());
        // new user is not active
        newUser.setActivated(false);
        // new user gets registration key
        newUser.setActivationKey(RandomUtil.generateActivationKey());
        Set<Authority> authorities = new HashSet<>();
        authorityRepository.findById(AuthoritiesConstants.USER).ifPresent(authorities::add);
        newUser.setAuthorities(authorities);

        log.debug("Request to save UserProfile : {}", userProfileDTO);
        UserProfile userProfile = userProfileMapper.toEntity(userProfileDTO);
        if(userProfile.getDateAdhesion() == null){
            userProfile.setDateAdhesion(Instant.now());
        }
        if(userProfile.getDateEcheance() == null){
            userProfile.setDateEcheance(Instant.now().plus(365,ChronoUnit.DAYS));
        }
        userProfile.setUser(newUser);
        userProfile = userProfileRepository.save(userProfile);
        return userProfileMapper.toDto(userProfile);
    }

    public UserProfileDTO register(UserProfileDTO userProfileDTO,String password) {
        userRepository.findOneByLogin(userProfileDTO.getLogin().toLowerCase()).ifPresent(existingUser -> {
            boolean removed = false; //removeNonActivatedUser(existingUser);
            if (!removed) {
                throw new UsernameAlreadyUsedException();
            }
        });
        userRepository.findOneByEmailIgnoreCase(userProfileDTO.getEmail()).ifPresent(existingUser -> {
            boolean removed = false; // removeNonActivatedUser(existingUser);
            if (!removed) {
                throw new EmailAlreadyUsedException();
            }
        });
        User newUser = new User();
        String encryptedPassword = passwordEncoder.encode(password);
        newUser.setLogin(userProfileDTO.getLogin().toLowerCase());
        // new user gets initially a generated password
        newUser.setPassword(encryptedPassword);
        newUser.setFirstName(userProfileDTO.getFirstName());
        newUser.setLastName(userProfileDTO.getLastName());
        newUser.setEmail(userProfileDTO.getEmail().toLowerCase());
        // newUser.setImageUrl(userDTO.getImageUrl());
        newUser.setLangKey("fr");
        // new user is not active
        newUser.setActivated(userProfileDTO.getActivated());
        // new user gets registration key
        newUser.setActivationKey(RandomUtil.generateActivationKey());
        Set<Authority> authorities = new HashSet<>();
        authorityRepository.findById(AuthoritiesConstants.USER).ifPresent(authorities::add);
        newUser.setAuthorities(authorities);

        log.debug("Request to save UserProfile : {}", userProfileDTO);
        UserProfile userProfile = userProfileMapper.toEntity(userProfileDTO);
        if(userProfile.getDateAdhesion() == null){
            userProfile.setDateAdhesion(Instant.now());
        }
        if(userProfile.getDateEcheance() == null){
            userProfile.setDateEcheance(Instant.now().plus(365, ChronoUnit.DAYS));
        }
        userProfile.setUser(newUser);
        userProfile = userProfileRepository.save(userProfile);
        if(!userProfileDTO.getActivated()){
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
