package com.group6.app.service;

import com.group6.app.domain.Planche;
import com.group6.app.repository.PlancheRepository;
import com.group6.app.service.dto.PlancheDTO;
import com.group6.app.service.mapper.PlancheMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link Planche}.
 */
@Service
@Transactional
public class PlancheService {

    private final Logger log = LoggerFactory.getLogger(PlancheService.class);

    private final PlancheRepository plancheRepository;

    private final PlancheMapper plancheMapper;

    public PlancheService(PlancheRepository plancheRepository, PlancheMapper plancheMapper) {
        this.plancheRepository = plancheRepository;
        this.plancheMapper = plancheMapper;
    }

    /**
     * Save a planche.
     *
     * @param plancheDTO the entity to save.
     * @return the persisted entity.
     */
    public PlancheDTO save(PlancheDTO plancheDTO) {
        log.debug("Request to save Planche : {}", plancheDTO);
        Planche planche = plancheMapper.toEntity(plancheDTO);
        planche = plancheRepository.save(planche);
        return plancheMapper.toDto(planche);
    }

    /**
     * Get all the planches.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<PlancheDTO> findAll() {
        log.debug("Request to get all Planches");
        return plancheRepository.findAll().stream()
            .map(plancheMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    @Transactional(readOnly = true)
    public List<PlancheDTO> findAllDamaged() {
        log.debug("Request to get all Planches");
        return plancheRepository.findByEtatNot("").stream()
            .map(plancheMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one planche by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<PlancheDTO> findOne(Long id) {
        log.debug("Request to get Planche : {}", id);
        return plancheRepository.findById(id)
            .map(plancheMapper::toDto);
    }

    /**
     * Delete the planche by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Planche : {}", id);
        plancheRepository.deleteById(id);
    }
}
