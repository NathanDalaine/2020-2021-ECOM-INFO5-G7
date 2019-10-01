package com.ecom.app.web.rest;

import com.ecom.app.service.HarnaisService;
import com.ecom.app.web.rest.errors.BadRequestAlertException;
import com.ecom.app.service.dto.HarnaisDTO;

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
 * REST controller for managing {@link com.ecom.app.domain.Harnais}.
 */
@RestController
@RequestMapping("/api")
public class HarnaisResource {

    private final Logger log = LoggerFactory.getLogger(HarnaisResource.class);

    private static final String ENTITY_NAME = "harnais";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final HarnaisService harnaisService;

    public HarnaisResource(HarnaisService harnaisService) {
        this.harnaisService = harnaisService;
    }

    /**
     * {@code POST  /harnais} : Create a new harnais.
     *
     * @param harnaisDTO the harnaisDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new harnaisDTO, or with status {@code 400 (Bad Request)} if the harnais has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/harnais")
    public ResponseEntity<HarnaisDTO> createHarnais(@RequestBody HarnaisDTO harnaisDTO) throws URISyntaxException {
        log.debug("REST request to save Harnais : {}", harnaisDTO);
        if (harnaisDTO.getId() != null) {
            throw new BadRequestAlertException("A new harnais cannot already have an ID", ENTITY_NAME, "idexists");
        }
        HarnaisDTO result = harnaisService.save(harnaisDTO);
        return ResponseEntity.created(new URI("/api/harnais/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /harnais} : Updates an existing harnais.
     *
     * @param harnaisDTO the harnaisDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated harnaisDTO,
     * or with status {@code 400 (Bad Request)} if the harnaisDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the harnaisDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/harnais")
    public ResponseEntity<HarnaisDTO> updateHarnais(@RequestBody HarnaisDTO harnaisDTO) throws URISyntaxException {
        log.debug("REST request to update Harnais : {}", harnaisDTO);
        if (harnaisDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        HarnaisDTO result = harnaisService.save(harnaisDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, harnaisDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /harnais} : get all the harnais.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of harnais in body.
     */
    @GetMapping("/harnais")
    public List<HarnaisDTO> getAllHarnais() {
        log.debug("REST request to get all Harnais");
        return harnaisService.findAll();
    }

    /**
     * {@code GET  /harnais/:id} : get the "id" harnais.
     *
     * @param id the id of the harnaisDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the harnaisDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/harnais/{id}")
    public ResponseEntity<HarnaisDTO> getHarnais(@PathVariable Long id) {
        log.debug("REST request to get Harnais : {}", id);
        Optional<HarnaisDTO> harnaisDTO = harnaisService.findOne(id);
        return ResponseUtil.wrapOrNotFound(harnaisDTO);
    }

    /**
     * {@code DELETE  /harnais/:id} : delete the "id" harnais.
     *
     * @param id the id of the harnaisDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/harnais/{id}")
    public ResponseEntity<Void> deleteHarnais(@PathVariable Long id) {
        log.debug("REST request to delete Harnais : {}", id);
        harnaisService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
