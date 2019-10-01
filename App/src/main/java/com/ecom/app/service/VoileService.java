package com.ecom.app.service;

import com.ecom.app.domain.Voile;
import com.ecom.app.repository.VoileRepository;
import com.ecom.app.service.dto.VoileDTO;
import com.ecom.app.service.mapper.VoileMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link Voile}.
 */
@Service
@Transactional
public class VoileService {

    private final Logger log = LoggerFactory.getLogger(VoileService.class);

    private final VoileRepository voileRepository;

    private final VoileMapper voileMapper;

    public VoileService(VoileRepository voileRepository, VoileMapper voileMapper) {
        this.voileRepository = voileRepository;
        this.voileMapper = voileMapper;
    }

    /**
     * Save a voile.
     *
     * @param voileDTO the entity to save.
     * @return the persisted entity.
     */
    public VoileDTO save(VoileDTO voileDTO) {
        log.debug("Request to save Voile : {}", voileDTO);
        Voile voile = voileMapper.toEntity(voileDTO);
        voile = voileRepository.save(voile);
        return voileMapper.toDto(voile);
    }

    /**
     * Get all the voiles.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<VoileDTO> findAll() {
        log.debug("Request to get all Voiles");
        return voileRepository.findAll().stream()
            .map(voileMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one voile by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<VoileDTO> findOne(Long id) {
        log.debug("Request to get Voile : {}", id);
        return voileRepository.findById(id)
            .map(voileMapper::toDto);
    }

    /**
     * Delete the voile by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Voile : {}", id);
        voileRepository.deleteById(id);
    }
}
