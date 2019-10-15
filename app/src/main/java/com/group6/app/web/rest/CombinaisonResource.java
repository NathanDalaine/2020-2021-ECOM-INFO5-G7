package com.group6.app.web.rest;

import com.group6.app.service.CombinaisonService;
import com.group6.app.web.rest.errors.BadRequestAlertException;
import com.group6.app.service.dto.CombinaisonDTO;

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
 * REST controller for managing {@link com.group6.app.domain.Combinaison}.
 */
@RestController
@RequestMapping("/api")
public class CombinaisonResource {

    private final Logger log = LoggerFactory.getLogger(CombinaisonResource.class);

    private static final String ENTITY_NAME = "combinaison";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final CombinaisonService combinaisonService;

    public CombinaisonResource(CombinaisonService combinaisonService) {
        this.combinaisonService = combinaisonService;
    }

    /**
     * {@code POST  /combinaisons} : Create a new combinaison.
     *
     * @param combinaisonDTO the combinaisonDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new combinaisonDTO, or with status {@code 400 (Bad Request)} if the combinaison has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/combinaisons")
    public ResponseEntity<CombinaisonDTO> createCombinaison(@RequestBody CombinaisonDTO combinaisonDTO) throws URISyntaxException {
        log.debug("REST request to save Combinaison : {}", combinaisonDTO);
        if (combinaisonDTO.getId() != null) {
            throw new BadRequestAlertException("A new combinaison cannot already have an ID", ENTITY_NAME, "idexists");
        }
        CombinaisonDTO result = combinaisonService.save(combinaisonDTO);
        return ResponseEntity.created(new URI("/api/combinaisons/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /combinaisons} : Updates an existing combinaison.
     *
     * @param combinaisonDTO the combinaisonDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated combinaisonDTO,
     * or with status {@code 400 (Bad Request)} if the combinaisonDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the combinaisonDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/combinaisons")
    public ResponseEntity<CombinaisonDTO> updateCombinaison(@RequestBody CombinaisonDTO combinaisonDTO) throws URISyntaxException {
        log.debug("REST request to update Combinaison : {}", combinaisonDTO);
        if (combinaisonDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        CombinaisonDTO result = combinaisonService.save(combinaisonDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, combinaisonDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /combinaisons} : get all the combinaisons.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of combinaisons in body.
     */
    @GetMapping("/combinaisons")
    public List<CombinaisonDTO> getAllCombinaisons() {
        log.debug("REST request to get all Combinaisons");
        return combinaisonService.findAll();
    }

    /**
     * {@code GET  /combinaisons/:id} : get the "id" combinaison.
     *
     * @param id the id of the combinaisonDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the combinaisonDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/combinaisons/{id}")
    public ResponseEntity<CombinaisonDTO> getCombinaison(@PathVariable Long id) {
        log.debug("REST request to get Combinaison : {}", id);
        Optional<CombinaisonDTO> combinaisonDTO = combinaisonService.findOne(id);
        return ResponseUtil.wrapOrNotFound(combinaisonDTO);
    }

    /**
     * {@code DELETE  /combinaisons/:id} : delete the "id" combinaison.
     *
     * @param id the id of the combinaisonDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/combinaisons/{id}")
    public ResponseEntity<Void> deleteCombinaison(@PathVariable Long id) {
        log.debug("REST request to delete Combinaison : {}", id);
        combinaisonService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
