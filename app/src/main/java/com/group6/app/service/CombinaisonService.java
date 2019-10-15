package com.group6.app.service;

import com.group6.app.domain.Combinaison;
import com.group6.app.repository.CombinaisonRepository;
import com.group6.app.service.dto.CombinaisonDTO;
import com.group6.app.service.mapper.CombinaisonMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link Combinaison}.
 */
@Service
@Transactional
public class CombinaisonService {

    private final Logger log = LoggerFactory.getLogger(CombinaisonService.class);

    private final CombinaisonRepository combinaisonRepository;

    private final CombinaisonMapper combinaisonMapper;

    public CombinaisonService(CombinaisonRepository combinaisonRepository, CombinaisonMapper combinaisonMapper) {
        this.combinaisonRepository = combinaisonRepository;
        this.combinaisonMapper = combinaisonMapper;
    }

    /**
     * Save a combinaison.
     *
     * @param combinaisonDTO the entity to save.
     * @return the persisted entity.
     */
    public CombinaisonDTO save(CombinaisonDTO combinaisonDTO) {
        log.debug("Request to save Combinaison : {}", combinaisonDTO);
        Combinaison combinaison = combinaisonMapper.toEntity(combinaisonDTO);
        combinaison = combinaisonRepository.save(combinaison);
        return combinaisonMapper.toDto(combinaison);
    }

    /**
     * Get all the combinaisons.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<CombinaisonDTO> findAll() {
        log.debug("Request to get all Combinaisons");
        return combinaisonRepository.findAll().stream()
            .map(combinaisonMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one combinaison by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<CombinaisonDTO> findOne(Long id) {
        log.debug("Request to get Combinaison : {}", id);
        return combinaisonRepository.findById(id)
            .map(combinaisonMapper::toDto);
    }

    /**
     * Delete the combinaison by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Combinaison : {}", id);
        combinaisonRepository.deleteById(id);
    }
}
