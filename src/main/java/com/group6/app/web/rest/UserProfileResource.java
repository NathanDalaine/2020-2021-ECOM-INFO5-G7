package com.group6.app.web.rest;

import com.group6.app.repository.UserRepository;
import com.group6.app.service.UserProfileService;
import com.group6.app.service.dto.ReservationDTO;
import com.group6.app.service.dto.ReservationFullDTO;
import com.group6.app.service.dto.UserProfileVMDTO;
import com.group6.app.web.rest.errors.BadRequestAlertException;
import com.group6.app.service.dto.UserProfileDTO;

import com.group6.app.web.rest.errors.EmailAlreadyUsedException;
import com.group6.app.web.rest.errors.LoginAlreadyUsedException;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.group6.app.domain.UserProfile}.
 */
@RestController
@RequestMapping("/api")
public class UserProfileResource {

    private final Logger log = LoggerFactory.getLogger(UserProfileResource.class);

    private static final String ENTITY_NAME = "userProfile";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final UserProfileService userProfileService;
    private final UserRepository userRepository;

    public UserProfileResource(UserProfileService userProfileService,UserRepository userRepository) {
        this.userProfileService = userProfileService;
        this.userRepository = userRepository;
    }

    /**
     * {@code POST  /user-profiles} : Create a new userProfile.
     *
     * @param userProfileDTO the userProfileDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new userProfileDTO, or with status {@code 400 (Bad Request)} if the userProfile has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/user-profiles")
    public ResponseEntity<UserProfileDTO> createUserProfile(@RequestBody UserProfileVMDTO userProfileDTO) throws URISyntaxException {
        if (userProfileDTO.getId() != null) {
            throw new BadRequestAlertException("A new user cannot already have an ID", "userManagement", "idexists");
            // Lowercase the user login before comparing with database
        } else {
            log.debug("REST request to save UserProfile : {}", userProfileDTO);
            UserProfileDTO result = userProfileService.register(userProfileDTO, userProfileDTO.getPassword());
            return ResponseEntity.created(new URI("/api/user-profiles/" + result.getId()))
                .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
                .body(result);
        }
    }

    /**
     * {@code PUT  /user-profiles} : Updates an existing userProfile.
     *
     * @param userProfileDTO the userProfileDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated userProfileDTO,
     * or with status {@code 400 (Bad Request)} if the userProfileDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the userProfileDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/user-profiles")
    public ResponseEntity<UserProfileDTO> updateUserProfile(@RequestBody UserProfileDTO userProfileDTO) throws URISyntaxException {
        log.debug("REST request to update UserProfile : {}", userProfileDTO);
        if (userProfileDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        UserProfileDTO result = userProfileService.save(userProfileDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, userProfileDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /user-profiles} : get all the userProfiles.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of userProfiles in body.
     */
    @GetMapping("/user-profiles")
    public List<UserProfileDTO> getAllUserProfiles() {
        log.debug("REST request to get all UserProfiles");
        return userProfileService.findAll();
    }

    @GetMapping("/user-profiles/current-user")
    public UserProfileDTO getCurrentUser(){
        return userProfileService.findCurrentUser();
    }

    @GetMapping("/user-profiles/reservations")
    public List<ReservationDTO> getReservationFromCurrentUser() {
        log.debug("REST request to get all UserProfiles");
        return userProfileService.findReservationFromCurrentUser();
    }

    @GetMapping("/user-profiles/reservationsFull")
    public List<ReservationFullDTO> getReservationFullFromCurrentUser() {
        log.debug("REST request to get all UserProfiles");
        return userProfileService.findReservationFullFromCurrentUser();
    }

    /**
     * {@code GET  /user-profiles/:id} : get the "id" userProfile.
     *
     * @param id the id of the userProfileDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the userProfileDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/user-profiles/{id}")
    public ResponseEntity<UserProfileDTO> getUserProfile(@PathVariable Long id) {
        log.debug("REST request to get UserProfile : {}", id);
        Optional<UserProfileDTO> userProfileDTO = userProfileService.findOne(id);
        return ResponseUtil.wrapOrNotFound(userProfileDTO);
    }

    /**
     * {@code DELETE  /user-profiles/:id} : delete the "id" userProfile.
     *
     * @param id the id of the userProfileDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/user-profiles/{id}")
    public ResponseEntity<Void> deleteUserProfile(@PathVariable Long id) {
        log.debug("REST request to delete UserProfile : {}", id);
        userProfileService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
