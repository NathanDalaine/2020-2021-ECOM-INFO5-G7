package com.group6.app.web.rest;

import com.group6.app.service.VoileService;
import com.group6.app.web.rest.errors.BadRequestAlertException;
import com.group6.app.service.dto.VoileDTO;

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
 * REST controller for managing {@link com.group6.app.domain.Voile}.
 */
@RestController
@RequestMapping("/api")
public class VoileResource {

    private final Logger log = LoggerFactory.getLogger(VoileResource.class);

    private static final String ENTITY_NAME = "voile";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final VoileService voileService;

    public VoileResource(VoileService voileService) {
        this.voileService = voileService;
    }

    /**
     * {@code POST  /voiles} : Create a new voile.
     *
     * @param voileDTO the voileDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new voileDTO, or with status {@code 400 (Bad Request)} if the voile has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/voiles")
    public ResponseEntity<VoileDTO> createVoile(@RequestBody VoileDTO voileDTO) throws URISyntaxException {
        log.debug("REST request to save Voile : {}", voileDTO);
        if (voileDTO.getId() != null) {
            throw new BadRequestAlertException("A new voile cannot already have an ID", ENTITY_NAME, "idexists");
        }
        VoileDTO result = voileService.save(voileDTO);
        return ResponseEntity.created(new URI("/api/voiles/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /voiles} : Updates an existing voile.
     *
     * @param voileDTO the voileDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated voileDTO,
     * or with status {@code 400 (Bad Request)} if the voileDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the voileDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/voiles")
    public ResponseEntity<VoileDTO> updateVoile(@RequestBody VoileDTO voileDTO) throws URISyntaxException {
        log.debug("REST request to update Voile : {}", voileDTO);
        if (voileDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        VoileDTO result = voileService.save(voileDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, voileDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /voiles} : get all the voiles.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of voiles in body.
     */
    @GetMapping("/voiles")
    public List<VoileDTO> getAllVoiles() {
        log.debug("REST request to get all Voiles");
        return voileService.findAll();
    }

    /**
     * {@code GET  /voiles/:id} : get the "id" voile.
     *
     * @param id the id of the voileDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the voileDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/voiles/{id}")
    public ResponseEntity<VoileDTO> getVoile(@PathVariable Long id) {
        log.debug("REST request to get Voile : {}", id);
        Optional<VoileDTO> voileDTO = voileService.findOne(id);
        return ResponseUtil.wrapOrNotFound(voileDTO);
    }

    /**
     * {@code DELETE  /voiles/:id} : delete the "id" voile.
     *
     * @param id the id of the voileDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/voiles/{id}")
    public ResponseEntity<Void> deleteVoile(@PathVariable Long id) {
        log.debug("REST request to delete Voile : {}", id);
        voileService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
