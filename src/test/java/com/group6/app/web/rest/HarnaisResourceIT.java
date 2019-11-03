package com.group6.app.web.rest;

import com.group6.app.EcomgucvoileApp;
import com.group6.app.domain.Harnais;
import com.group6.app.repository.HarnaisRepository;
import com.group6.app.service.HarnaisService;
import com.group6.app.service.dto.HarnaisDTO;
import com.group6.app.service.mapper.HarnaisMapper;
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

import com.group6.app.domain.enumeration.Taille;
/**
 * Integration tests for the {@link HarnaisResource} REST controller.
 */
@SpringBootTest(classes = EcomgucvoileApp.class)
public class HarnaisResourceIT {

    private static final Taille DEFAULT_TAILLE = Taille.S;
    private static final Taille UPDATED_TAILLE = Taille.M;

    private static final String DEFAULT_ETAT = "AAAAAAAAAA";
    private static final String UPDATED_ETAT = "BBBBBBBBBB";

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
    private HarnaisRepository harnaisRepository;

    @Autowired
    private HarnaisMapper harnaisMapper;

    @Autowired
    private HarnaisService harnaisService;

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

    private MockMvc restHarnaisMockMvc;

    private Harnais harnais;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final HarnaisResource harnaisResource = new HarnaisResource(harnaisService);
        this.restHarnaisMockMvc = MockMvcBuilders.standaloneSetup(harnaisResource)
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
    public static Harnais createEntity(EntityManager em) {
        Harnais harnais = new Harnais()
            .taille(DEFAULT_TAILLE)
            .etat(DEFAULT_ETAT)
            .createdBy(DEFAULT_CREATED_BY)
            .updatedBy(DEFAULT_UPDATED_BY)
            .deletedBy(DEFAULT_DELETED_BY)
            .createdAt(DEFAULT_CREATED_AT)
            .updatedAt(DEFAULT_UPDATED_AT)
            .deletedAt(DEFAULT_DELETED_AT);
        return harnais;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Harnais createUpdatedEntity(EntityManager em) {
        Harnais harnais = new Harnais()
            .taille(UPDATED_TAILLE)
            .etat(UPDATED_ETAT)
            .createdBy(UPDATED_CREATED_BY)
            .updatedBy(UPDATED_UPDATED_BY)
            .deletedBy(UPDATED_DELETED_BY)
            .createdAt(UPDATED_CREATED_AT)
            .updatedAt(UPDATED_UPDATED_AT)
            .deletedAt(UPDATED_DELETED_AT);
        return harnais;
    }

    @BeforeEach
    public void initTest() {
        harnais = createEntity(em);
    }

    @Test
    @Transactional
    public void createHarnais() throws Exception {
        int databaseSizeBeforeCreate = harnaisRepository.findAll().size();

        // Create the Harnais
        HarnaisDTO harnaisDTO = harnaisMapper.toDto(harnais);
        restHarnaisMockMvc.perform(post("/api/harnais")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(harnaisDTO)))
            .andExpect(status().isCreated());

        // Validate the Harnais in the database
        List<Harnais> harnaisList = harnaisRepository.findAll();
        assertThat(harnaisList).hasSize(databaseSizeBeforeCreate + 1);
        Harnais testHarnais = harnaisList.get(harnaisList.size() - 1);
        assertThat(testHarnais.getTaille()).isEqualTo(DEFAULT_TAILLE);
        assertThat(testHarnais.getEtat()).isEqualTo(DEFAULT_ETAT);
        assertThat(testHarnais.getCreatedBy()).isEqualTo(DEFAULT_CREATED_BY);
        assertThat(testHarnais.getUpdatedBy()).isEqualTo(DEFAULT_UPDATED_BY);
        assertThat(testHarnais.getDeletedBy()).isEqualTo(DEFAULT_DELETED_BY);
        assertThat(testHarnais.getCreatedAt()).isEqualTo(DEFAULT_CREATED_AT);
        assertThat(testHarnais.getUpdatedAt()).isEqualTo(DEFAULT_UPDATED_AT);
        assertThat(testHarnais.getDeletedAt()).isEqualTo(DEFAULT_DELETED_AT);
    }

    @Test
    @Transactional
    public void createHarnaisWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = harnaisRepository.findAll().size();

        // Create the Harnais with an existing ID
        harnais.setId(1L);
        HarnaisDTO harnaisDTO = harnaisMapper.toDto(harnais);

        // An entity with an existing ID cannot be created, so this API call must fail
        restHarnaisMockMvc.perform(post("/api/harnais")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(harnaisDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Harnais in the database
        List<Harnais> harnaisList = harnaisRepository.findAll();
        assertThat(harnaisList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllHarnais() throws Exception {
        // Initialize the database
        harnaisRepository.saveAndFlush(harnais);

        // Get all the harnaisList
        restHarnaisMockMvc.perform(get("/api/harnais?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(harnais.getId().intValue())))
            .andExpect(jsonPath("$.[*].taille").value(hasItem(DEFAULT_TAILLE.toString())))
            .andExpect(jsonPath("$.[*].etat").value(hasItem(DEFAULT_ETAT.toString())))
            .andExpect(jsonPath("$.[*].createdBy").value(hasItem(DEFAULT_CREATED_BY.toString())))
            .andExpect(jsonPath("$.[*].updatedBy").value(hasItem(DEFAULT_UPDATED_BY.toString())))
            .andExpect(jsonPath("$.[*].deletedBy").value(hasItem(DEFAULT_DELETED_BY.toString())))
            .andExpect(jsonPath("$.[*].createdAt").value(hasItem(DEFAULT_CREATED_AT.toString())))
            .andExpect(jsonPath("$.[*].updatedAt").value(hasItem(DEFAULT_UPDATED_AT.toString())))
            .andExpect(jsonPath("$.[*].deletedAt").value(hasItem(DEFAULT_DELETED_AT.toString())));
    }
    
    @Test
    @Transactional
    public void getHarnais() throws Exception {
        // Initialize the database
        harnaisRepository.saveAndFlush(harnais);

        // Get the harnais
        restHarnaisMockMvc.perform(get("/api/harnais/{id}", harnais.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(harnais.getId().intValue()))
            .andExpect(jsonPath("$.taille").value(DEFAULT_TAILLE.toString()))
            .andExpect(jsonPath("$.etat").value(DEFAULT_ETAT.toString()))
            .andExpect(jsonPath("$.createdBy").value(DEFAULT_CREATED_BY.toString()))
            .andExpect(jsonPath("$.updatedBy").value(DEFAULT_UPDATED_BY.toString()))
            .andExpect(jsonPath("$.deletedBy").value(DEFAULT_DELETED_BY.toString()))
            .andExpect(jsonPath("$.createdAt").value(DEFAULT_CREATED_AT.toString()))
            .andExpect(jsonPath("$.updatedAt").value(DEFAULT_UPDATED_AT.toString()))
            .andExpect(jsonPath("$.deletedAt").value(DEFAULT_DELETED_AT.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingHarnais() throws Exception {
        // Get the harnais
        restHarnaisMockMvc.perform(get("/api/harnais/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateHarnais() throws Exception {
        // Initialize the database
        harnaisRepository.saveAndFlush(harnais);

        int databaseSizeBeforeUpdate = harnaisRepository.findAll().size();

        // Update the harnais
        Harnais updatedHarnais = harnaisRepository.findById(harnais.getId()).get();
        // Disconnect from session so that the updates on updatedHarnais are not directly saved in db
        em.detach(updatedHarnais);
        updatedHarnais
            .taille(UPDATED_TAILLE)
            .etat(UPDATED_ETAT)
            .createdBy(UPDATED_CREATED_BY)
            .updatedBy(UPDATED_UPDATED_BY)
            .deletedBy(UPDATED_DELETED_BY)
            .createdAt(UPDATED_CREATED_AT)
            .updatedAt(UPDATED_UPDATED_AT)
            .deletedAt(UPDATED_DELETED_AT);
        HarnaisDTO harnaisDTO = harnaisMapper.toDto(updatedHarnais);

        restHarnaisMockMvc.perform(put("/api/harnais")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(harnaisDTO)))
            .andExpect(status().isOk());

        // Validate the Harnais in the database
        List<Harnais> harnaisList = harnaisRepository.findAll();
        assertThat(harnaisList).hasSize(databaseSizeBeforeUpdate);
        Harnais testHarnais = harnaisList.get(harnaisList.size() - 1);
        assertThat(testHarnais.getTaille()).isEqualTo(UPDATED_TAILLE);
        assertThat(testHarnais.getEtat()).isEqualTo(UPDATED_ETAT);
        assertThat(testHarnais.getCreatedBy()).isEqualTo(UPDATED_CREATED_BY);
        assertThat(testHarnais.getUpdatedBy()).isEqualTo(UPDATED_UPDATED_BY);
        assertThat(testHarnais.getDeletedBy()).isEqualTo(UPDATED_DELETED_BY);
        assertThat(testHarnais.getCreatedAt()).isEqualTo(UPDATED_CREATED_AT);
        assertThat(testHarnais.getUpdatedAt()).isEqualTo(UPDATED_UPDATED_AT);
        assertThat(testHarnais.getDeletedAt()).isEqualTo(UPDATED_DELETED_AT);
    }

    @Test
    @Transactional
    public void updateNonExistingHarnais() throws Exception {
        int databaseSizeBeforeUpdate = harnaisRepository.findAll().size();

        // Create the Harnais
        HarnaisDTO harnaisDTO = harnaisMapper.toDto(harnais);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restHarnaisMockMvc.perform(put("/api/harnais")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(harnaisDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Harnais in the database
        List<Harnais> harnaisList = harnaisRepository.findAll();
        assertThat(harnaisList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteHarnais() throws Exception {
        // Initialize the database
        harnaisRepository.saveAndFlush(harnais);

        int databaseSizeBeforeDelete = harnaisRepository.findAll().size();

        // Delete the harnais
        restHarnaisMockMvc.perform(delete("/api/harnais/{id}", harnais.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Harnais> harnaisList = harnaisRepository.findAll();
        assertThat(harnaisList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Harnais.class);
        Harnais harnais1 = new Harnais();
        harnais1.setId(1L);
        Harnais harnais2 = new Harnais();
        harnais2.setId(harnais1.getId());
        assertThat(harnais1).isEqualTo(harnais2);
        harnais2.setId(2L);
        assertThat(harnais1).isNotEqualTo(harnais2);
        harnais1.setId(null);
        assertThat(harnais1).isNotEqualTo(harnais2);
    }

    @Test
    @Transactional
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(HarnaisDTO.class);
        HarnaisDTO harnaisDTO1 = new HarnaisDTO();
        harnaisDTO1.setId(1L);
        HarnaisDTO harnaisDTO2 = new HarnaisDTO();
        assertThat(harnaisDTO1).isNotEqualTo(harnaisDTO2);
        harnaisDTO2.setId(harnaisDTO1.getId());
        assertThat(harnaisDTO1).isEqualTo(harnaisDTO2);
        harnaisDTO2.setId(2L);
        assertThat(harnaisDTO1).isNotEqualTo(harnaisDTO2);
        harnaisDTO1.setId(null);
        assertThat(harnaisDTO1).isNotEqualTo(harnaisDTO2);
    }

    @Test
    @Transactional
    public void testEntityFromId() {
        assertThat(harnaisMapper.fromId(42L).getId()).isEqualTo(42);
        assertThat(harnaisMapper.fromId(null)).isNull();
    }
}
