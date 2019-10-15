package com.group6.app.web.rest;

import com.group6.app.service.PlancheService;
import com.group6.app.web.rest.errors.BadRequestAlertException;
import com.group6.app.service.dto.PlancheDTO;

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
 * REST controller for managing {@link com.group6.app.domain.Planche}.
 */
@RestController
@RequestMapping("/api")
public class PlancheResource {

    private final Logger log = LoggerFactory.getLogger(PlancheResource.class);

    private static final String ENTITY_NAME = "planche";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PlancheService plancheService;

    public PlancheResource(PlancheService plancheService) {
        this.plancheService = plancheService;
    }

    /**
     * {@code POST  /planches} : Create a new planche.
     *
     * @param plancheDTO the plancheDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new plancheDTO, or with status {@code 400 (Bad Request)} if the planche has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/planches")
    public ResponseEntity<PlancheDTO> createPlanche(@RequestBody PlancheDTO plancheDTO) throws URISyntaxException {
        log.debug("REST request to save Planche : {}", plancheDTO);
        if (plancheDTO.getId() != null) {
            throw new BadRequestAlertException("A new planche cannot already have an ID", ENTITY_NAME, "idexists");
        }
        PlancheDTO result = plancheService.save(plancheDTO);
        return ResponseEntity.created(new URI("/api/planches/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /planches} : Updates an existing planche.
     *
     * @param plancheDTO the plancheDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated plancheDTO,
     * or with status {@code 400 (Bad Request)} if the plancheDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the plancheDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/planches")
    public ResponseEntity<PlancheDTO> updatePlanche(@RequestBody PlancheDTO plancheDTO) throws URISyntaxException {
        log.debug("REST request to update Planche : {}", plancheDTO);
        if (plancheDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        PlancheDTO result = plancheService.save(plancheDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, plancheDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /planches} : get all the planches.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of planches in body.
     */
    @GetMapping("/planches")
    public List<PlancheDTO> getAllPlanches() {
        log.debug("REST request to get all Planches");
        return plancheService.findAll();
    }

    /**
     * {@code GET  /planches/:id} : get the "id" planche.
     *
     * @param id the id of the plancheDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the plancheDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/planches/{id}")
    public ResponseEntity<PlancheDTO> getPlanche(@PathVariable Long id) {
        log.debug("REST request to get Planche : {}", id);
        Optional<PlancheDTO> plancheDTO = plancheService.findOne(id);
        return ResponseUtil.wrapOrNotFound(plancheDTO);
    }

    /**
     * {@code DELETE  /planches/:id} : delete the "id" planche.
     *
     * @param id the id of the plancheDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/planches/{id}")
    public ResponseEntity<Void> deletePlanche(@PathVariable Long id) {
        log.debug("REST request to delete Planche : {}", id);
        plancheService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
