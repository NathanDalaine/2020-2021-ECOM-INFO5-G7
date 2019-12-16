package com.group6.app.web.rest;

import com.group6.app.domain.Combinaison;
import com.group6.app.domain.Harnais;
import com.group6.app.domain.Reservation;
import com.group6.app.domain.UserProfile;
import com.group6.app.repository.*;
import com.group6.app.security.SecurityUtils;
import com.group6.app.security.SecurityUtils;
import com.group6.app.service.ReservationService;
import com.group6.app.service.dto.ReservationFullDTO;
import com.group6.app.web.rest.errors.AlreadyReservedExeception;
import com.group6.app.web.rest.errors.BadRequestAlertException;
import com.group6.app.service.dto.ReservationDTO;

import com.group6.app.web.rest.errors.DueDatePassedException;
import com.group6.app.web.rest.errors.NoHarnessAvailableException;
import com.group6.app.web.rest.errors.NoWetsuitAvailableException;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.Iterator;
import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * REST controller for managing {@link com.group6.app.domain.Reservation}.
 */
@RestController
@RequestMapping("/api")
public class ReservationResource {

    private final Logger log = LoggerFactory.getLogger(ReservationResource.class);

    private static final String ENTITY_NAME = "reservation";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;
    private final UserProfileRepository userProfileRepository;
    private final HarnaisRepository harnaisRepository;
    private final CombinaisonRepository combinaisonRepository;
    private final ReservationRepository reservationRepository;
    private final ReservationService reservationService;

    public ReservationResource(ReservationService reservationService,UserProfileRepository userProfileRepository,ReservationRepository reservationRepository,HarnaisRepository harnaisRepository,CombinaisonRepository combinaisonRepository) {
        this.reservationService = reservationService;
        this.userProfileRepository = userProfileRepository;
        this.harnaisRepository = harnaisRepository;
        this.combinaisonRepository = combinaisonRepository;
        this.reservationRepository = reservationRepository;
    }

    /**
     * {@code POST  /reservations} : Create a new reservation.
     *
     * @param reservationDTO the reservationDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new reservationDTO, or with status {@code 400 (Bad Request)} if the reservation has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/reservations")
    public ResponseEntity<ReservationDTO> createReservation(@RequestBody ReservationDTO reservationDTO) throws URISyntaxException {
        log.debug("REST request to save Reservation : {}", reservationDTO);
        if (reservationDTO.getId() != null) {
            throw new BadRequestAlertException("A new reservation cannot already have an ID", ENTITY_NAME, "idexists");
        }
        if (SecurityUtils.getCurrentUserLogin().isPresent()) {
            Optional<UserProfile> user = userProfileRepository.findById(reservationDTO.getUserProfileId());
            Harnais har = new Harnais();
            List<Harnais> harnais = harnaisRepository.findByTaille(user.get().getTailleHarnais());
            for (Harnais h: harnais) {
                Reservation r = reservationRepository.findDistinctFirstByHarnaisAndDateRenduIsNull(h);
                if(r == null){
                    har = h;
                    break;
                }
            }
            if (reservationDTO.getHarnaisId() != null) {
                if(har == null){
                    throw new NoHarnessAvailableException();
                }
            }
            if (reservationDTO.getCombinaisonId() != null) {
                Combinaison com = new Combinaison();
                List<Combinaison> combi = combinaisonRepository.findByTaille(user.get().getTailleCombinaison());
                for (Combinaison h: combi) {
                    Reservation r = reservationRepository.findDistinctFirstByCombinaisonAndDateRenduIsNull(h);
                    if(r == null){
                        com = h;
                        break;
                    }
                }
                if(com == null){
                    throw new NoWetsuitAvailableException();
                }
            }
            Set<Reservation> reservations = user.get().getReservations();
            Iterator iter = reservations.iterator();
            Reservation res;
            while(iter.hasNext()){
                res = (Reservation) iter.next();
                if(res.getDateRendu() == null && res.getDateReservation() != null){
                    throw new AlreadyReservedExeception();
                }
            }
            Instant d = Instant.now();
            if(user.get().getDateEcheance().compareTo(d) < 0){
                throw new DueDatePassedException();
            }
        }
        ReservationDTO result = reservationService.save(reservationDTO);
        return ResponseEntity.created(new URI("/api/reservations/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /reservations} : Updates an existing reservation.
     *
     * @param reservationDTO the reservationDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated reservationDTO,
     * or with status {@code 400 (Bad Request)} if the reservationDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the reservationDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/reservations")
    public ResponseEntity<ReservationDTO> updateReservation(@RequestBody ReservationDTO reservationDTO) throws URISyntaxException {
        log.debug("REST request to update Reservation : {}", reservationDTO);
        if (reservationDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        ReservationDTO result = reservationService.save(reservationDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, reservationDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /reservations} : Updates an existing reservation.
     *
     * @param reservationFullDTO the reservationDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated reservationDTO,
     * or with status {@code 400 (Bad Request)} if the reservationDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the reservationDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/reservationsfull")
    public ResponseEntity<ReservationFullDTO> updateReservationFull(@RequestBody ReservationFullDTO reservationFullDTO) throws URISyntaxException {
        if (reservationFullDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        ReservationFullDTO result = reservationService.save(reservationFullDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, reservationFullDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /reservations} : get all the reservations.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of reservations in body.
     */
    @GetMapping("/reservations")
    public List<ReservationDTO> getAllReservations() {
        log.debug("REST request to get all Reservations");
        return reservationService.findAll();
    }

    @GetMapping("/reservationsfull")
    public List<ReservationFullDTO> getAllFullReservations() {
        return reservationService.findAllFull();
    }

    @GetMapping("/reservationsfull/{id}")
    public ResponseEntity<ReservationFullDTO> getOneFullReservation(@PathVariable Long id) {
        Optional<ReservationFullDTO> reservationDTO = reservationService.findOneFull(id);
        return ResponseUtil.wrapOrNotFound(reservationDTO);
    }

    /**
     * {@code GET  /reservations/:id} : get the "id" reservation.
     *
     * @param id the id of the reservationDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the reservationDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/reservations/{id}")
    public ResponseEntity<ReservationDTO> getReservation(@PathVariable Long id) {
        log.debug("REST request to get Reservation : {}", id);
        Optional<ReservationDTO> reservationDTO = reservationService.findOne(id);
        return ResponseUtil.wrapOrNotFound(reservationDTO);
    }

    /**
     * {@code DELETE  /reservations/:id} : delete the "id" reservation.
     *
     * @param id the id of the reservationDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/reservations/{id}")
    public ResponseEntity<Void> deleteReservation(@PathVariable Long id) {
        log.debug("REST request to delete Reservation : {}", id);
        reservationService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
