package com.group6.app.service;

import com.group6.app.domain.Combinaison;
import com.group6.app.domain.Harnais;
import com.group6.app.domain.Reservation;
import com.group6.app.domain.UserProfile;
import com.group6.app.domain.enumeration.Taille;
import com.group6.app.repository.CombinaisonRepository;
import com.group6.app.repository.HarnaisRepository;
import com.group6.app.repository.ReservationRepository;
import com.group6.app.repository.UserProfileRepository;
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

    private final ReservationMapper reservationMapper;
    private final ReservationFullMapper reservationFullMapper;

    public ReservationService(ReservationRepository reservationRepository, CombinaisonRepository combinaisonRepository, HarnaisRepository harnaisRepository,ReservationFullMapper reservationFullMapper, UserProfileRepository userProfileRepository, UserProfileService userProfileService, ReservationMapper reservationMapper) {
        this.reservationRepository = reservationRepository;
        this.reservationMapper = reservationMapper;
        this.userProfileService = userProfileService;
        this.userProfileRepository = userProfileRepository;
        this.harnaisRepository = harnaisRepository;
        this.combinaisonRepository = combinaisonRepository;
        this.reservationFullMapper = reservationFullMapper;
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
            reservation.setUserProfile(userProfileRepository.findByUserLogin(SecurityUtils.getCurrentUserLogin().get()));
            Taille tailleHarnais = userProfileRepository.findByUserLogin(SecurityUtils.getCurrentUserLogin().get()).getTailleHarnais();
            Taille tailleCombinaison = userProfileRepository.findByUserLogin(SecurityUtils.getCurrentUserLogin().get()).getTailleCombinaison();
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
        reservation.setCreatedAt(Instant.now());
        reservation.setDateReservation(Instant.now());      //à modifier lors de l'ajout de la date de réservation
        if (SecurityUtils.getCurrentUserLogin().isPresent()) {
            reservation.setCreatedBy(SecurityUtils.getCurrentUserLogin().get());
            reservation.setUserProfile(userProfileRepository.findByUserLogin(SecurityUtils.getCurrentUserLogin().get()));
            Taille tailleHarnais = userProfileRepository.findByUserLogin(SecurityUtils.getCurrentUserLogin().get()).getTailleHarnais();
            Taille tailleCombinaison = userProfileRepository.findByUserLogin(SecurityUtils.getCurrentUserLogin().get()).getTailleCombinaison();
            if (reservationDTO.getHarnais() != null) {
                Harnais harnais = harnaisRepository.findDistinctFirstByTailleAndReservationsIsNull(tailleHarnais);
                reservation.setHarnais(harnais);
            }
            if (reservationDTO.getCombinaison() != null) {
                Combinaison combi = combinaisonRepository.findDistinctFirstByTailleAndReservationsIsNull(tailleCombinaison);
                reservation.setCombinaison(combi);
            }
        } else {
            reservation.setCreatedBy("Anonymoususer");
        }

        reservation = reservationRepository.save(reservation);
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
