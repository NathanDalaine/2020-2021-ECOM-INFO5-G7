package com.group6.app.web.rest;

import com.group6.app.EcomgucvoileApp;
import com.group6.app.domain.Planche;
import com.group6.app.repository.PlancheRepository;
import com.group6.app.service.PlancheService;
import com.group6.app.service.dto.PlancheDTO;
import com.group6.app.service.mapper.PlancheMapper;
import com.group6.app.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

import static com.group6.app.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link PlancheResource} REST controller.
 */
@SpringBootTest(classes = EcomgucvoileApp.class)
public class PlancheResourceIT {

    private static final String DEFAULT_MARQUE = "AAAAAAAAAA";
    private static final String UPDATED_MARQUE = "BBBBBBBBBB";

    private static final String DEFAULT_MODELE = "AAAAAAAAAA";
    private static final String UPDATED_MODELE = "BBBBBBBBBB";

    private static final String DEFAULT_NUMERO = "AAAAAAAAAA";
    private static final String UPDATED_NUMERO = "BBBBBBBBBB";

    private static final String DEFAULT_LOCALISATION = "AAAAAAAAAA";
    private static final String UPDATED_LOCALISATION = "BBBBBBBBBB";

    private static final String DEFAULT_ETAT = "AAAAAAAAAA";
    private static final String UPDATED_ETAT = "BBBBBBBBBB";

    private static final String DEFAULT_LIBELLE = "AAAAAAAAAA";
    private static final String UPDATED_LIBELLE = "BBBBBBBBBB";

    private static final Integer DEFAULT_VOLUME = 1;
    private static final Integer UPDATED_VOLUME = 2;
    private static final Integer SMALLER_VOLUME = 1 - 1;

    private static final String DEFAULT_CREATED_BY = "AAAAAAAAAA";
    private static final String UPDATED_CREATED_BY = "BBBBBBBBBB";

    private static final String DEFAULT_UPDATED_BY = "AAAAAAAAAA";
    private static final String UPDATED_UPDATED_BY = "BBBBBBBBBB";

    private static final String DEFAULT_DELETED_BY = "AAAAAAAAAA";
    private static final String UPDATED_DELETED_BY = "BBBBBBBBBB";

    private static final Instant DEFAULT_CREATED_AT = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_CREATED_AT = Instant.now().truncatedTo(ChronoUnit.MILLIS);
    private static final Instant SMALLER_CREATED_AT = Instant.ofEpochMilli(-1L);

    private static final Instant DEFAULT_UPDATED_AT = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_UPDATED_AT = Instant.now().truncatedTo(ChronoUnit.MILLIS);
    private static final Instant SMALLER_UPDATED_AT = Instant.ofEpochMilli(-1L);

    private static final Instant DEFAULT_DELETED_AT = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_DELETED_AT = Instant.now().truncatedTo(ChronoUnit.MILLIS);
    private static final Instant SMALLER_DELETED_AT = Instant.ofEpochMilli(-1L);

    @Autowired
    private PlancheRepository plancheRepository;

    @Autowired
    private PlancheMapper plancheMapper;

    @Autowired
    private PlancheService plancheService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restPlancheMockMvc;

    private Planche planche;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final PlancheResource plancheResource = new PlancheResource(plancheService);
        this.restPlancheMockMvc = MockMvcBuilders.standaloneSetup(plancheResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Planche createEntity(EntityManager em) {
        Planche planche = new Planche()
            .marque(DEFAULT_MARQUE)
            .modele(DEFAULT_MODELE)
            .numero(DEFAULT_NUMERO)
            .localisation(DEFAULT_LOCALISATION)
            .etat(DEFAULT_ETAT)
            .libelle(DEFAULT_LIBELLE)
            .volume(DEFAULT_VOLUME)
            .createdBy(DEFAULT_CREATED_BY)
            .updatedBy(DEFAULT_UPDATED_BY)
            .deletedBy(DEFAULT_DELETED_BY)
            .createdAt(DEFAULT_CREATED_AT)
            .updatedAt(DEFAULT_UPDATED_AT)
            .deletedAt(DEFAULT_DELETED_AT);
        return planche;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Planche createUpdatedEntity(EntityManager em) {
        Planche planche = new Planche()
            .marque(UPDATED_MARQUE)
            .modele(UPDATED_MODELE)
            .numero(UPDATED_NUMERO)
            .localisation(UPDATED_LOCALISATION)
            .etat(UPDATED_ETAT)
            .libelle(UPDATED_LIBELLE)
            .volume(UPDATED_VOLUME)
            .createdBy(UPDATED_CREATED_BY)
            .updatedBy(UPDATED_UPDATED_BY)
            .deletedBy(UPDATED_DELETED_BY)
            .createdAt(UPDATED_CREATED_AT)
            .updatedAt(UPDATED_UPDATED_AT)
            .deletedAt(UPDATED_DELETED_AT);
        return planche;
    }

    @BeforeEach
    public void initTest() {
        planche = createEntity(em);
    }

    @Test
    @Transactional
    public void createPlanche() throws Exception {
        int databaseSizeBeforeCreate = plancheRepository.findAll().size();

        // Create the Planche
        PlancheDTO plancheDTO = plancheMapper.toDto(planche);
        restPlancheMockMvc.perform(post("/api/planches")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(plancheDTO)))
            .andExpect(status().isCreated());

        // Validate the Planche in the database
        List<Planche> plancheList = plancheRepository.findAll();
        assertThat(plancheList).hasSize(databaseSizeBeforeCreate + 1);
        Planche testPlanche = plancheList.get(plancheList.size() - 1);
        assertThat(testPlanche.getMarque()).isEqualTo(DEFAULT_MARQUE);
        assertThat(testPlanche.getModele()).isEqualTo(DEFAULT_MODELE);
        assertThat(testPlanche.getNumero()).isEqualTo(DEFAULT_NUMERO);
        assertThat(testPlanche.getLocalisation()).isEqualTo(DEFAULT_LOCALISATION);
        assertThat(testPlanche.getEtat()).isEqualTo(DEFAULT_ETAT);
        assertThat(testPlanche.getLibelle()).isEqualTo(DEFAULT_LIBELLE);
        assertThat(testPlanche.getVolume()).isEqualTo(DEFAULT_VOLUME);
        assertThat(testPlanche.getCreatedBy()).isEqualTo(DEFAULT_CREATED_BY);
        assertThat(testPlanche.getUpdatedBy()).isEqualTo(DEFAULT_UPDATED_BY);
        assertThat(testPlanche.getDeletedBy()).isEqualTo(DEFAULT_DELETED_BY);
        assertThat(testPlanche.getCreatedAt()).isEqualTo(DEFAULT_CREATED_AT);
        assertThat(testPlanche.getUpdatedAt()).isEqualTo(DEFAULT_UPDATED_AT);
        assertThat(testPlanche.getDeletedAt()).isEqualTo(DEFAULT_DELETED_AT);
    }

    @Test
    @Transactional
    public void createPlancheWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = plancheRepository.findAll().size();

        // Create the Planche with an existing ID
        planche.setId(1L);
        PlancheDTO plancheDTO = plancheMapper.toDto(planche);

        // An entity with an existing ID cannot be created, so this API call must fail
        restPlancheMockMvc.perform(post("/api/planches")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(plancheDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Planche in the database
        List<Planche> plancheList = plancheRepository.findAll();
        assertThat(plancheList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllPlanches() throws Exception {
        // Initialize the database
        plancheRepository.saveAndFlush(planche);

        // Get all the plancheList
        restPlancheMockMvc.perform(get("/api/planches?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(planche.getId().intValue())))
            .andExpect(jsonPath("$.[*].marque").value(hasItem(DEFAULT_MARQUE.toString())))
            .andExpect(jsonPath("$.[*].modele").value(hasItem(DEFAULT_MODELE.toString())))
            .andExpect(jsonPath("$.[*].numero").value(hasItem(DEFAULT_NUMERO.toString())))
            .andExpect(jsonPath("$.[*].localisation").value(hasItem(DEFAULT_LOCALISATION.toString())))
            .andExpect(jsonPath("$.[*].etat").value(hasItem(DEFAULT_ETAT.toString())))
            .andExpect(jsonPath("$.[*].libelle").value(hasItem(DEFAULT_LIBELLE.toString())))
            .andExpect(jsonPath("$.[*].volume").value(hasItem(DEFAULT_VOLUME)))
            .andExpect(jsonPath("$.[*].createdBy").value(hasItem(DEFAULT_CREATED_BY.toString())))
            .andExpect(jsonPath("$.[*].updatedBy").value(hasItem(DEFAULT_UPDATED_BY.toString())))
            .andExpect(jsonPath("$.[*].deletedBy").value(hasItem(DEFAULT_DELETED_BY.toString())))
            .andExpect(jsonPath("$.[*].createdAt").value(hasItem(DEFAULT_CREATED_AT.toString())))
            .andExpect(jsonPath("$.[*].updatedAt").value(hasItem(DEFAULT_UPDATED_AT.toString())))
            .andExpect(jsonPath("$.[*].deletedAt").value(hasItem(DEFAULT_DELETED_AT.toString())));
    }
    
    @Test
    @Transactional
    public void getPlanche() throws Exception {
        // Initialize the database
        plancheRepository.saveAndFlush(planche);

        // Get the planche
        restPlancheMockMvc.perform(get("/api/planches/{id}", planche.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(planche.getId().intValue()))
            .andExpect(jsonPath("$.marque").value(DEFAULT_MARQUE.toString()))
            .andExpect(jsonPath("$.modele").value(DEFAULT_MODELE.toString()))
            .andExpect(jsonPath("$.numero").value(DEFAULT_NUMERO.toString()))
            .andExpect(jsonPath("$.localisation").value(DEFAULT_LOCALISATION.toString()))
            .andExpect(jsonPath("$.etat").value(DEFAULT_ETAT.toString()))
            .andExpect(jsonPath("$.libelle").value(DEFAULT_LIBELLE.toString()))
            .andExpect(jsonPath("$.volume").value(DEFAULT_VOLUME))
            .andExpect(jsonPath("$.createdBy").value(DEFAULT_CREATED_BY.toString()))
            .andExpect(jsonPath("$.updatedBy").value(DEFAULT_UPDATED_BY.toString()))
            .andExpect(jsonPath("$.deletedBy").value(DEFAULT_DELETED_BY.toString()))
            .andExpect(jsonPath("$.createdAt").value(DEFAULT_CREATED_AT.toString()))
            .andExpect(jsonPath("$.updatedAt").value(DEFAULT_UPDATED_AT.toString()))
            .andExpect(jsonPath("$.deletedAt").value(DEFAULT_DELETED_AT.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingPlanche() throws Exception {
        // Get the planche
        restPlancheMockMvc.perform(get("/api/planches/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updatePlanche() throws Exception {
        // Initialize the database
        plancheRepository.saveAndFlush(planche);

        int databaseSizeBeforeUpdate = plancheRepository.findAll().size();

        // Update the planche
        Planche updatedPlanche = plancheRepository.findById(planche.getId()).get();
        // Disconnect from session so that the updates on updatedPlanche are not directly saved in db
        em.detach(updatedPlanche);
        updatedPlanche
            .marque(UPDATED_MARQUE)
            .modele(UPDATED_MODELE)
            .numero(UPDATED_NUMERO)
            .localisation(UPDATED_LOCALISATION)
            .etat(UPDATED_ETAT)
            .libelle(UPDATED_LIBELLE)
            .volume(UPDATED_VOLUME)
            .createdBy(UPDATED_CREATED_BY)
            .updatedBy(UPDATED_UPDATED_BY)
            .deletedBy(UPDATED_DELETED_BY)
            .createdAt(UPDATED_CREATED_AT)
            .updatedAt(UPDATED_UPDATED_AT)
            .deletedAt(UPDATED_DELETED_AT);
        PlancheDTO plancheDTO = plancheMapper.toDto(updatedPlanche);

        restPlancheMockMvc.perform(put("/api/planches")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(plancheDTO)))
            .andExpect(status().isOk());

        // Validate the Planche in the database
        List<Planche> plancheList = plancheRepository.findAll();
        assertThat(plancheList).hasSize(databaseSizeBeforeUpdate);
        Planche testPlanche = plancheList.get(plancheList.size() - 1);
        assertThat(testPlanche.getMarque()).isEqualTo(UPDATED_MARQUE);
        assertThat(testPlanche.getModele()).isEqualTo(UPDATED_MODELE);
        assertThat(testPlanche.getNumero()).isEqualTo(UPDATED_NUMERO);
        assertThat(testPlanche.getLocalisation()).isEqualTo(UPDATED_LOCALISATION);
        assertThat(testPlanche.getEtat()).isEqualTo(UPDATED_ETAT);
        assertThat(testPlanche.getLibelle()).isEqualTo(UPDATED_LIBELLE);
        assertThat(testPlanche.getVolume()).isEqualTo(UPDATED_VOLUME);
        assertThat(testPlanche.getCreatedBy()).isEqualTo(UPDATED_CREATED_BY);
        assertThat(testPlanche.getUpdatedBy()).isEqualTo(UPDATED_UPDATED_BY);
        assertThat(testPlanche.getDeletedBy()).isEqualTo(UPDATED_DELETED_BY);
        assertThat(testPlanche.getCreatedAt()).isEqualTo(UPDATED_CREATED_AT);
        assertThat(testPlanche.getUpdatedAt()).isEqualTo(UPDATED_UPDATED_AT);
        assertThat(testPlanche.getDeletedAt()).isEqualTo(UPDATED_DELETED_AT);
    }

    @Test
    @Transactional
    public void updateNonExistingPlanche() throws Exception {
        int databaseSizeBeforeUpdate = plancheRepository.findAll().size();

        // Create the Planche
        PlancheDTO plancheDTO = plancheMapper.toDto(planche);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restPlancheMockMvc.perform(put("/api/planches")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(plancheDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Planche in the database
        List<Planche> plancheList = plancheRepository.findAll();
        assertThat(plancheList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deletePlanche() throws Exception {
        // Initialize the database
        plancheRepository.saveAndFlush(planche);

        int databaseSizeBeforeDelete = plancheRepository.findAll().size();

        // Delete the planche
        restPlancheMockMvc.perform(delete("/api/planches/{id}", planche.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Planche> plancheList = plancheRepository.findAll();
        assertThat(plancheList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Planche.class);
        Planche planche1 = new Planche();
        planche1.setId(1L);
        Planche planche2 = new Planche();
        planche2.setId(planche1.getId());
        assertThat(planche1).isEqualTo(planche2);
        planche2.setId(2L);
        assertThat(planche1).isNotEqualTo(planche2);
        planche1.setId(null);
        assertThat(planche1).isNotEqualTo(planche2);
    }

    @Test
    @Transactional
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(PlancheDTO.class);
        PlancheDTO plancheDTO1 = new PlancheDTO();
        plancheDTO1.setId(1L);
        PlancheDTO plancheDTO2 = new PlancheDTO();
        assertThat(plancheDTO1).isNotEqualTo(plancheDTO2);
        plancheDTO2.setId(plancheDTO1.getId());
        assertThat(plancheDTO1).isEqualTo(plancheDTO2);
        plancheDTO2.setId(2L);
        assertThat(plancheDTO1).isNotEqualTo(plancheDTO2);
        plancheDTO1.setId(null);
        assertThat(plancheDTO1).isNotEqualTo(plancheDTO2);
    }

    @Test
    @Transactional
    public void testEntityFromId() {
        assertThat(plancheMapper.fromId(42L).getId()).isEqualTo(42);
        assertThat(plancheMapper.fromId(null)).isNull();
    }
}
