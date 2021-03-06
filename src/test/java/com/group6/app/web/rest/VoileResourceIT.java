package com.group6.app.web.rest;

import com.group6.app.EcomgucvoileApp;
import com.group6.app.domain.Voile;
import com.group6.app.repository.VoileRepository;
import com.group6.app.service.VoileService;
import com.group6.app.service.dto.VoileDTO;
import com.group6.app.service.mapper.VoileMapper;
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

import com.group6.app.domain.enumeration.Niveau;
/**
 * Integration tests for the {@link VoileResource} REST controller.
 */
@SpringBootTest(classes = EcomgucvoileApp.class)
public class VoileResourceIT {

    private static final Float DEFAULT_SURFACE = 1F;
    private static final Float UPDATED_SURFACE = 2F;
    private static final Float SMALLER_SURFACE = 1F - 1F;

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

    private static final Boolean DEFAULT_GREE = false;
    private static final Boolean UPDATED_GREE = true;

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

    private static final Niveau DEFAULT_NIVEAUREQUIS = Niveau.DEBUTANT;
    private static final Niveau UPDATED_NIVEAUREQUIS = Niveau.DEBUTANTPLUS;

    @Autowired
    private VoileRepository voileRepository;

    @Autowired
    private VoileMapper voileMapper;

    @Autowired
    private VoileService voileService;

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

    private MockMvc restVoileMockMvc;

    private Voile voile;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final VoileResource voileResource = new VoileResource(voileService);
        this.restVoileMockMvc = MockMvcBuilders.standaloneSetup(voileResource)
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
    public static Voile createEntity(EntityManager em) {
        Voile voile = new Voile()
            .surface(DEFAULT_SURFACE)
            .marque(DEFAULT_MARQUE)
            .modele(DEFAULT_MODELE)
            .numero(DEFAULT_NUMERO)
            .localisation(DEFAULT_LOCALISATION)
            .etat(DEFAULT_ETAT)
            .libelle(DEFAULT_LIBELLE)
            .gree(DEFAULT_GREE)
            .createdBy(DEFAULT_CREATED_BY)
            .updatedBy(DEFAULT_UPDATED_BY)
            .deletedBy(DEFAULT_DELETED_BY)
            .createdAt(DEFAULT_CREATED_AT)
            .updatedAt(DEFAULT_UPDATED_AT)
            .deletedAt(DEFAULT_DELETED_AT)
            .niveaurequis(DEFAULT_NIVEAUREQUIS);
        return voile;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Voile createUpdatedEntity(EntityManager em) {
        Voile voile = new Voile()
            .surface(UPDATED_SURFACE)
            .marque(UPDATED_MARQUE)
            .modele(UPDATED_MODELE)
            .numero(UPDATED_NUMERO)
            .localisation(UPDATED_LOCALISATION)
            .etat(UPDATED_ETAT)
            .libelle(UPDATED_LIBELLE)
            .gree(UPDATED_GREE)
            .createdBy(UPDATED_CREATED_BY)
            .updatedBy(UPDATED_UPDATED_BY)
            .deletedBy(UPDATED_DELETED_BY)
            .createdAt(UPDATED_CREATED_AT)
            .updatedAt(UPDATED_UPDATED_AT)
            .deletedAt(UPDATED_DELETED_AT)
            .niveaurequis(UPDATED_NIVEAUREQUIS);
        return voile;
    }

    @BeforeEach
    public void initTest() {
        voile = createEntity(em);
    }

    @Test
    @Transactional
    public void createVoile() throws Exception {
        int databaseSizeBeforeCreate = voileRepository.findAll().size();

        // Create the Voile
        VoileDTO voileDTO = voileMapper.toDto(voile);
        restVoileMockMvc.perform(post("/api/voiles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(voileDTO)))
            .andExpect(status().isCreated());

        // Validate the Voile in the database
        List<Voile> voileList = voileRepository.findAll();
        assertThat(voileList).hasSize(databaseSizeBeforeCreate + 1);
        Voile testVoile = voileList.get(voileList.size() - 1);
        assertThat(testVoile.getSurface()).isEqualTo(DEFAULT_SURFACE);
        assertThat(testVoile.getMarque()).isEqualTo(DEFAULT_MARQUE);
        assertThat(testVoile.getModele()).isEqualTo(DEFAULT_MODELE);
        assertThat(testVoile.getNumero()).isEqualTo(DEFAULT_NUMERO);
        assertThat(testVoile.getLocalisation()).isEqualTo(DEFAULT_LOCALISATION);
        assertThat(testVoile.getEtat()).isEqualTo(DEFAULT_ETAT);
        assertThat(testVoile.getLibelle()).isEqualTo(DEFAULT_LIBELLE);
        assertThat(testVoile.isGree()).isEqualTo(DEFAULT_GREE);
        assertThat(testVoile.getCreatedBy()).isEqualTo(DEFAULT_CREATED_BY);
        assertThat(testVoile.getUpdatedBy()).isEqualTo(DEFAULT_UPDATED_BY);
        assertThat(testVoile.getDeletedBy()).isEqualTo(DEFAULT_DELETED_BY);
        assertThat(testVoile.getCreatedAt()).isEqualTo(DEFAULT_CREATED_AT);
        assertThat(testVoile.getUpdatedAt()).isEqualTo(DEFAULT_UPDATED_AT);
        assertThat(testVoile.getDeletedAt()).isEqualTo(DEFAULT_DELETED_AT);
        assertThat(testVoile.getNiveaurequis()).isEqualTo(DEFAULT_NIVEAUREQUIS);
    }

    @Test
    @Transactional
    public void createVoileWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = voileRepository.findAll().size();

        // Create the Voile with an existing ID
        voile.setId(1L);
        VoileDTO voileDTO = voileMapper.toDto(voile);

        // An entity with an existing ID cannot be created, so this API call must fail
        restVoileMockMvc.perform(post("/api/voiles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(voileDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Voile in the database
        List<Voile> voileList = voileRepository.findAll();
        assertThat(voileList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllVoiles() throws Exception {
        // Initialize the database
        voileRepository.saveAndFlush(voile);

        // Get all the voileList
        restVoileMockMvc.perform(get("/api/voiles?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(voile.getId().intValue())))
            .andExpect(jsonPath("$.[*].surface").value(hasItem(DEFAULT_SURFACE.doubleValue())))
            .andExpect(jsonPath("$.[*].marque").value(hasItem(DEFAULT_MARQUE.toString())))
            .andExpect(jsonPath("$.[*].modele").value(hasItem(DEFAULT_MODELE.toString())))
            .andExpect(jsonPath("$.[*].numero").value(hasItem(DEFAULT_NUMERO.toString())))
            .andExpect(jsonPath("$.[*].localisation").value(hasItem(DEFAULT_LOCALISATION.toString())))
            .andExpect(jsonPath("$.[*].etat").value(hasItem(DEFAULT_ETAT.toString())))
            .andExpect(jsonPath("$.[*].libelle").value(hasItem(DEFAULT_LIBELLE.toString())))
            .andExpect(jsonPath("$.[*].gree").value(hasItem(DEFAULT_GREE.booleanValue())))
            .andExpect(jsonPath("$.[*].createdBy").value(hasItem(DEFAULT_CREATED_BY.toString())))
            .andExpect(jsonPath("$.[*].updatedBy").value(hasItem(DEFAULT_UPDATED_BY.toString())))
            .andExpect(jsonPath("$.[*].deletedBy").value(hasItem(DEFAULT_DELETED_BY.toString())))
            .andExpect(jsonPath("$.[*].createdAt").value(hasItem(DEFAULT_CREATED_AT.toString())))
            .andExpect(jsonPath("$.[*].updatedAt").value(hasItem(DEFAULT_UPDATED_AT.toString())))
            .andExpect(jsonPath("$.[*].deletedAt").value(hasItem(DEFAULT_DELETED_AT.toString())))
            .andExpect(jsonPath("$.[*].niveaurequis").value(hasItem(DEFAULT_NIVEAUREQUIS.toString())));
    }
    
    @Test
    @Transactional
    public void getVoile() throws Exception {
        // Initialize the database
        voileRepository.saveAndFlush(voile);

        // Get the voile
        restVoileMockMvc.perform(get("/api/voiles/{id}", voile.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(voile.getId().intValue()))
            .andExpect(jsonPath("$.surface").value(DEFAULT_SURFACE.doubleValue()))
            .andExpect(jsonPath("$.marque").value(DEFAULT_MARQUE.toString()))
            .andExpect(jsonPath("$.modele").value(DEFAULT_MODELE.toString()))
            .andExpect(jsonPath("$.numero").value(DEFAULT_NUMERO.toString()))
            .andExpect(jsonPath("$.localisation").value(DEFAULT_LOCALISATION.toString()))
            .andExpect(jsonPath("$.etat").value(DEFAULT_ETAT.toString()))
            .andExpect(jsonPath("$.libelle").value(DEFAULT_LIBELLE.toString()))
            .andExpect(jsonPath("$.gree").value(DEFAULT_GREE.booleanValue()))
            .andExpect(jsonPath("$.createdBy").value(DEFAULT_CREATED_BY.toString()))
            .andExpect(jsonPath("$.updatedBy").value(DEFAULT_UPDATED_BY.toString()))
            .andExpect(jsonPath("$.deletedBy").value(DEFAULT_DELETED_BY.toString()))
            .andExpect(jsonPath("$.createdAt").value(DEFAULT_CREATED_AT.toString()))
            .andExpect(jsonPath("$.updatedAt").value(DEFAULT_UPDATED_AT.toString()))
            .andExpect(jsonPath("$.deletedAt").value(DEFAULT_DELETED_AT.toString()))
            .andExpect(jsonPath("$.niveaurequis").value(DEFAULT_NIVEAUREQUIS.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingVoile() throws Exception {
        // Get the voile
        restVoileMockMvc.perform(get("/api/voiles/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateVoile() throws Exception {
        // Initialize the database
        voileRepository.saveAndFlush(voile);

        int databaseSizeBeforeUpdate = voileRepository.findAll().size();

        // Update the voile
        Voile updatedVoile = voileRepository.findById(voile.getId()).get();
        // Disconnect from session so that the updates on updatedVoile are not directly saved in db
        em.detach(updatedVoile);
        updatedVoile
            .surface(UPDATED_SURFACE)
            .marque(UPDATED_MARQUE)
            .modele(UPDATED_MODELE)
            .numero(UPDATED_NUMERO)
            .localisation(UPDATED_LOCALISATION)
            .etat(UPDATED_ETAT)
            .libelle(UPDATED_LIBELLE)
            .gree(UPDATED_GREE)
            .createdBy(UPDATED_CREATED_BY)
            .updatedBy(UPDATED_UPDATED_BY)
            .deletedBy(UPDATED_DELETED_BY)
            .createdAt(UPDATED_CREATED_AT)
            .updatedAt(UPDATED_UPDATED_AT)
            .deletedAt(UPDATED_DELETED_AT)
            .niveaurequis(UPDATED_NIVEAUREQUIS);
        VoileDTO voileDTO = voileMapper.toDto(updatedVoile);

        restVoileMockMvc.perform(put("/api/voiles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(voileDTO)))
            .andExpect(status().isOk());

        // Validate the Voile in the database
        List<Voile> voileList = voileRepository.findAll();
        assertThat(voileList).hasSize(databaseSizeBeforeUpdate);
        Voile testVoile = voileList.get(voileList.size() - 1);
        assertThat(testVoile.getSurface()).isEqualTo(UPDATED_SURFACE);
        assertThat(testVoile.getMarque()).isEqualTo(UPDATED_MARQUE);
        assertThat(testVoile.getModele()).isEqualTo(UPDATED_MODELE);
        assertThat(testVoile.getNumero()).isEqualTo(UPDATED_NUMERO);
        assertThat(testVoile.getLocalisation()).isEqualTo(UPDATED_LOCALISATION);
        assertThat(testVoile.getEtat()).isEqualTo(UPDATED_ETAT);
        assertThat(testVoile.getLibelle()).isEqualTo(UPDATED_LIBELLE);
        assertThat(testVoile.isGree()).isEqualTo(UPDATED_GREE);
        assertThat(testVoile.getCreatedBy()).isEqualTo(UPDATED_CREATED_BY);
        assertThat(testVoile.getUpdatedBy()).isEqualTo(UPDATED_UPDATED_BY);
        assertThat(testVoile.getDeletedBy()).isEqualTo(UPDATED_DELETED_BY);
        assertThat(testVoile.getCreatedAt()).isEqualTo(UPDATED_CREATED_AT);
        assertThat(testVoile.getUpdatedAt()).isEqualTo(UPDATED_UPDATED_AT);
        assertThat(testVoile.getDeletedAt()).isEqualTo(UPDATED_DELETED_AT);
        assertThat(testVoile.getNiveaurequis()).isEqualTo(UPDATED_NIVEAUREQUIS);
    }

    @Test
    @Transactional
    public void updateNonExistingVoile() throws Exception {
        int databaseSizeBeforeUpdate = voileRepository.findAll().size();

        // Create the Voile
        VoileDTO voileDTO = voileMapper.toDto(voile);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restVoileMockMvc.perform(put("/api/voiles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(voileDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Voile in the database
        List<Voile> voileList = voileRepository.findAll();
        assertThat(voileList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteVoile() throws Exception {
        // Initialize the database
        voileRepository.saveAndFlush(voile);

        int databaseSizeBeforeDelete = voileRepository.findAll().size();

        // Delete the voile
        restVoileMockMvc.perform(delete("/api/voiles/{id}", voile.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Voile> voileList = voileRepository.findAll();
        assertThat(voileList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Voile.class);
        Voile voile1 = new Voile();
        voile1.setId(1L);
        Voile voile2 = new Voile();
        voile2.setId(voile1.getId());
        assertThat(voile1).isEqualTo(voile2);
        voile2.setId(2L);
        assertThat(voile1).isNotEqualTo(voile2);
        voile1.setId(null);
        assertThat(voile1).isNotEqualTo(voile2);
    }

    @Test
    @Transactional
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(VoileDTO.class);
        VoileDTO voileDTO1 = new VoileDTO();
        voileDTO1.setId(1L);
        VoileDTO voileDTO2 = new VoileDTO();
        assertThat(voileDTO1).isNotEqualTo(voileDTO2);
        voileDTO2.setId(voileDTO1.getId());
        assertThat(voileDTO1).isEqualTo(voileDTO2);
        voileDTO2.setId(2L);
        assertThat(voileDTO1).isNotEqualTo(voileDTO2);
        voileDTO1.setId(null);
        assertThat(voileDTO1).isNotEqualTo(voileDTO2);
    }

    @Test
    @Transactional
    public void testEntityFromId() {
        assertThat(voileMapper.fromId(42L).getId()).isEqualTo(42);
        assertThat(voileMapper.fromId(null)).isNull();
    }
}
