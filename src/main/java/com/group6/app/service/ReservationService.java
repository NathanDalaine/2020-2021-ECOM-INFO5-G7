package com.group6.app.service;

import com.group6.app.config.Constants;
import com.group6.app.domain.*;
import com.group6.app.domain.enumeration.Taille;
import com.group6.app.repository.*;
import com.group6.app.security.AuthoritiesConstants;
import com.group6.app.security.SecurityUtils;
import com.group6.app.service.dto.ReservationDTO;
import com.group6.app.service.dto.ReservationFullDTO;
import com.group6.app.service.mapper.ReservationFullMapper;
import com.group6.app.service.mapper.ReservationMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.HttpServerErrorException;

import java.time.Instant;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link Reservation}.
 */
@Service
@Transactional
public class ReservationService {

    private final Logger log = LoggerFactory.getLogger(ReservationService.class);

    private final ReservationRepository reservationRepository;
    private final UserProfileService userProfileService;
    private final UserProfileRepository userProfileRepository;
    private final HarnaisRepository harnaisRepository;
    private final CombinaisonRepository combinaisonRepository;
    private final AuthorityRepository authorityRepository;

    private final ReservationMapper reservationMapper;
    private final ReservationFullMapper reservationFullMapper;

    private final MailService mailService;

    public ReservationService(ReservationRepository reservationRepository, CombinaisonRepository combinaisonRepository, HarnaisRepository harnaisRepository,ReservationFullMapper reservationFullMapper, UserProfileRepository userProfileRepository, UserProfileService userProfileService, ReservationMapper reservationMapper,MailService mailService,AuthorityRepository authorityRepository) {
        this.reservationRepository = reservationRepository;
        this.reservationMapper = reservationMapper;
        this.userProfileService = userProfileService;
        this.userProfileRepository = userProfileRepository;
        this.harnaisRepository = harnaisRepository;
        this.combinaisonRepository = combinaisonRepository;
        this.reservationFullMapper = reservationFullMapper;
        this.mailService = mailService;
        this.authorityRepository = authorityRepository;
    }

    /**
     * Save a reservation.
     *
     * @param reservationDTO the entity to save.
     * @return the persisted entity.
     */
    public ReservationDTO save(ReservationDTO reservationDTO) {
        log.debug("Request to save Reservation : {}", reservationDTO);

        Reservation reservation = reservationMapper.toEntity(reservationDTO);
        reservation.setCreatedAt(Instant.now());
        reservation.setDateReservation(Instant.now());      //à modifier lors de l'ajout de la date de réservation
        if (SecurityUtils.getCurrentUserLogin().isPresent()) {
            reservation.setCreatedBy(SecurityUtils.getCurrentUserLogin().get());
            Optional<UserProfile> user = userProfileRepository.findById(reservationDTO.getUserProfileId());
            Taille tailleHarnais = user.get().getTailleHarnais();
            Taille tailleCombinaison = user.get().getTailleCombinaison();
            if (reservationDTO.getHarnaisId() != null) {
                Harnais harnais = harnaisRepository.findDistinctFirstByTailleAndReservationsIsNull(tailleHarnais);
                reservation.setHarnais(harnais);
            }
            if (reservationDTO.getCombinaisonId() != null) {
                Combinaison combi = combinaisonRepository.findDistinctFirstByTailleAndReservationsIsNull(tailleCombinaison);
                reservation.setCombinaison(combi);
            }
        } else {
            reservation.setCreatedBy("Anonymoususer");
        }
        reservation = reservationRepository.save(reservation);
        return reservationMapper.toDto(reservation);
    }

    public ReservationFullDTO save(ReservationFullDTO reservationDTO) {
        log.debug("Request to save Reservation : {}", reservationDTO);

        Reservation reservation = reservationFullMapper.toEntity(reservationDTO);
        reservation.setUpdatedAt(Instant.now()); //à modifier lors de l'ajout de la date de réservation
        if (SecurityUtils.getCurrentUserLogin().isPresent()) {
            reservation.setUpdatedBy(SecurityUtils.getCurrentUserLogin().get());
        } else {
            reservation.setUpdatedBy("Anonymoususer");
        }

        reservation = reservationRepository.save(reservation);
        boolean declaredDamage = false;
        String damages =  "<!DOCTYPE html>\n" +
            "<html xmlns:th=\"http://www.thymeleaf.org\">\n" +
            "    <head>\n" +
            "        <title th:text=\"#{email.activation.title}\">JHipster activation</title>\n" +
            "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n" +
            "        <link rel=\"shortcut icon\" th:href=\"@{|${baseUrl}/favicon.ico|}\" />\n" +
            "    </head>\n" +
            "    <body>\n";


         damages += "<p>\n" +
             reservation.getUpdatedBy() + " : "+
            "        </p>\n";

        if(reservationDTO.getVoile() != null && reservationDTO.getVoile().getEtat() != null){
            declaredDamage = true;
            damages += "<p>\n" +
                reservationDTO.getVoile().getLibelle() + " : " + reservationDTO.getVoile().getEtat()+
                "        </p>\n";
        }
        if(reservationDTO.getPlanche() != null && reservationDTO.getPlanche().getEtat() != null){
            declaredDamage = true;
            damages += "<p>\n" +
                reservationDTO.getPlanche().getLibelle()+ " : "+reservationDTO.getPlanche().getEtat()+
                "        </p>\n";
        }


        if(declaredDamage){
            List<UserProfile> users = userProfileRepository.findByUserAuthoritiesNameEquals(AuthoritiesConstants.GESTIONNAIRE);
            damages += "    </body>\n" +
                "</html>";
            String finalDamages = damages;
            users.forEach(user ->{
                mailService.sendEmail(user.getUser().getEmail(),"Reservation "+reservationDTO.getId(), finalDamages,false,true);
            });

        }
        return reservationFullMapper.toDto(reservation);
    }

    /**
     * Get all the reservations.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<ReservationDTO> findAll() {
        log.debug("Request to get all Reservations");
        return reservationRepository.findAll().stream()
            .map(reservationMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get all the reservations with all the relationship
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<ReservationFullDTO> findAllFull() {
        log.debug("Request to get all Reservations");
        return reservationRepository.findAll().stream()
            .map(reservationFullMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    @Transactional(readOnly = true)
    public Optional<ReservationFullDTO> findOneFull(Long id) {
        return reservationRepository.findById(id)
            .map(reservationFullMapper::toDto);
    }


    /**
     * Get one reservation by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<ReservationDTO> findOne(Long id) {
        log.debug("Request to get Reservation : {}", id);
        return reservationRepository.findById(id)
            .map(reservationMapper::toDto);
    }

    /**
     * Delete the reservation by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Reservation : {}", id);
        reservationRepository.deleteById(id);
    }
}
