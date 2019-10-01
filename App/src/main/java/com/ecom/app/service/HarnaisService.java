package com.ecom.app.service;

import com.ecom.app.domain.Harnais;
import com.ecom.app.repository.HarnaisRepository;
import com.ecom.app.service.dto.HarnaisDTO;
import com.ecom.app.service.mapper.HarnaisMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link Harnais}.
 */
@Service
@Transactional
public class HarnaisService {

    private final Logger log = LoggerFactory.getLogger(HarnaisService.class);

    private final HarnaisRepository harnaisRepository;

    private final HarnaisMapper harnaisMapper;

    public HarnaisService(HarnaisRepository harnaisRepository, HarnaisMapper harnaisMapper) {
        this.harnaisRepository = harnaisRepository;
        this.harnaisMapper = harnaisMapper;
    }

    /**
     * Save a harnais.
     *
     * @param harnaisDTO the entity to save.
     * @return the persisted entity.
     */
    public HarnaisDTO save(HarnaisDTO harnaisDTO) {
        log.debug("Request to save Harnais : {}", harnaisDTO);
        Harnais harnais = harnaisMapper.toEntity(harnaisDTO);
        harnais = harnaisRepository.save(harnais);
        return harnaisMapper.toDto(harnais);
    }

    /**
     * Get all the harnais.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<HarnaisDTO> findAll() {
        log.debug("Request to get all Harnais");
        return harnaisRepository.findAll().stream()
            .map(harnaisMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one harnais by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<HarnaisDTO> findOne(Long id) {
        log.debug("Request to get Harnais : {}", id);
        return harnaisRepository.findById(id)
            .map(harnaisMapper::toDto);
    }

    /**
     * Delete the harnais by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Harnais : {}", id);
        harnaisRepository.deleteById(id);
    }
}
