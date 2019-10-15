package com.group6.app.web.rest;

import com.group6.app.EcomgucvoileApp;
import com.group6.app.domain.Combinaison;
import com.group6.app.repository.CombinaisonRepository;
import com.group6.app.service.CombinaisonService;
import com.group6.app.service.dto.CombinaisonDTO;
import com.group6.app.service.mapper.CombinaisonMapper;
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
import java.util.List;

import static com.group6.app.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.group6.app.domain.enumeration.Taille;
/**
 * Integration tests for the {@link CombinaisonResource} REST controller.
 */
@SpringBootTest(classes = EcomgucvoileApp.class)
public class CombinaisonResourceIT {

    private static final Taille DEFAULT_TAILLE = Taille.S;
    private static final Taille UPDATED_TAILLE = Taille.M;

    private static final String DEFAULT_ETAT = "AAAAAAAAAA";
    private static final String UPDATED_ETAT = "BBBBBBBBBB";

    private static final String DEFAULT_CREATED_AT = "AAAAAAAAAA";
    private static final String UPDATED_CREATED_AT = "BBBBBBBBBB";

    private static final String DEFAULT_CREATED_BY = "AAAAAAAAAA";
    private static final String UPDATED_CREATED_BY = "BBBBBBBBBB";

    private static final String DEFAULT_UPDATED_AT = "AAAAAAAAAA";
    private static final String UPDATED_UPDATED_AT = "BBBBBBBBBB";

    private static final String DEFAULT_UPDATED_BY = "AAAAAAAAAA";
    private static final String UPDATED_UPDATED_BY = "BBBBBBBBBB";

    private static final String DEFAULT_DELETED_AT = "AAAAAAAAAA";
    private static final String UPDATED_DELETED_AT = "BBBBBBBBBB";

    private static final String DEFAULT_DELETED_BY = "AAAAAAAAAA";
    private static final String UPDATED_DELETED_BY = "BBBBBBBBBB";

    @Autowired
    private CombinaisonRepository combinaisonRepository;

    @Autowired
    private CombinaisonMapper combinaisonMapper;

    @Autowired
    private CombinaisonService combinaisonService;

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

    private MockMvc restCombinaisonMockMvc;

    private Combinaison combinaison;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final CombinaisonResource combinaisonResource = new CombinaisonResource(combinaisonService);
        this.restCombinaisonMockMvc = MockMvcBuilders.standaloneSetup(combinaisonResource)
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
    public static Combinaison createEntity(EntityManager em) {
        Combinaison combinaison = new Combinaison()
            .taille(DEFAULT_TAILLE)
            .etat(DEFAULT_ETAT)
            .createdAt(DEFAULT_CREATED_AT)
            .createdBy(DEFAULT_CREATED_BY)
            .updatedAt(DEFAULT_UPDATED_AT)
            .updatedBy(DEFAULT_UPDATED_BY)
            .deletedAt(DEFAULT_DELETED_AT)
            .deletedBy(DEFAULT_DELETED_BY);
        return combinaison;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Combinaison createUpdatedEntity(EntityManager em) {
        Combinaison combinaison = new Combinaison()
            .taille(UPDATED_TAILLE)
            .etat(UPDATED_ETAT)
            .createdAt(UPDATED_CREATED_AT)
            .createdBy(UPDATED_CREATED_BY)
            .updatedAt(UPDATED_UPDATED_AT)
            .updatedBy(UPDATED_UPDATED_BY)
            .deletedAt(UPDATED_DELETED_AT)
            .deletedBy(UPDATED_DELETED_BY);
        return combinaison;
    }

    @BeforeEach
    public void initTest() {
        combinaison = createEntity(em);
    }

    @Test
    @Transactional
    public void createCombinaison() throws Exception {
        int databaseSizeBeforeCreate = combinaisonRepository.findAll().size();

        // Create the Combinaison
        CombinaisonDTO combinaisonDTO = combinaisonMapper.toDto(combinaison);
        restCombinaisonMockMvc.perform(post("/api/combinaisons")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(combinaisonDTO)))
            .andExpect(status().isCreated());

        // Validate the Combinaison in the database
        List<Combinaison> combinaisonList = combinaisonRepository.findAll();
        assertThat(combinaisonList).hasSize(databaseSizeBeforeCreate + 1);
        Combinaison testCombinaison = combinaisonList.get(combinaisonList.size() - 1);
        assertThat(testCombinaison.getTaille()).isEqualTo(DEFAULT_TAILLE);
        assertThat(testCombinaison.getEtat()).isEqualTo(DEFAULT_ETAT);
        assertThat(testCombinaison.getCreatedAt()).isEqualTo(DEFAULT_CREATED_AT);
        assertThat(testCombinaison.getCreatedBy()).isEqualTo(DEFAULT_CREATED_BY);
        assertThat(testCombinaison.getUpdatedAt()).isEqualTo(DEFAULT_UPDATED_AT);
        assertThat(testCombinaison.getUpdatedBy()).isEqualTo(DEFAULT_UPDATED_BY);
        assertThat(testCombinaison.getDeletedAt()).isEqualTo(DEFAULT_DELETED_AT);
        assertThat(testCombinaison.getDeletedBy()).isEqualTo(DEFAULT_DELETED_BY);
    }

    @Test
    @Transactional
    public void createCombinaisonWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = combinaisonRepository.findAll().size();

        // Create the Combinaison with an existing ID
        combinaison.setId(1L);
        CombinaisonDTO combinaisonDTO = combinaisonMapper.toDto(combinaison);

        // An entity with an existing ID cannot be created, so this API call must fail
        restCombinaisonMockMvc.perform(post("/api/combinaisons")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(combinaisonDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Combinaison in the database
        List<Combinaison> combinaisonList = combinaisonRepository.findAll();
        assertThat(combinaisonList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllCombinaisons() throws Exception {
        // Initialize the database
        combinaisonRepository.saveAndFlush(combinaison);

        // Get all the combinaisonList
        restCombinaisonMockMvc.perform(get("/api/combinaisons?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(combinaison.getId().intValue())))
            .andExpect(jsonPath("$.[*].taille").value(hasItem(DEFAULT_TAILLE.toString())))
            .andExpect(jsonPath("$.[*].etat").value(hasItem(DEFAULT_ETAT.toString())))
            .andExpect(jsonPath("$.[*].createdAt").value(hasItem(DEFAULT_CREATED_AT.toString())))
            .andExpect(jsonPath("$.[*].createdBy").value(hasItem(DEFAULT_CREATED_BY.toString())))
            .andExpect(jsonPath("$.[*].updatedAt").value(hasItem(DEFAULT_UPDATED_AT.toString())))
            .andExpect(jsonPath("$.[*].updatedBy").value(hasItem(DEFAULT_UPDATED_BY.toString())))
            .andExpect(jsonPath("$.[*].deletedAt").value(hasItem(DEFAULT_DELETED_AT.toString())))
            .andExpect(jsonPath("$.[*].deletedBy").value(hasItem(DEFAULT_DELETED_BY.toString())));
    }
    
    @Test
    @Transactional
    public void getCombinaison() throws Exception {
        // Initialize the database
        combinaisonRepository.saveAndFlush(combinaison);

        // Get the combinaison
        restCombinaisonMockMvc.perform(get("/api/combinaisons/{id}", combinaison.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(combinaison.getId().intValue()))
            .andExpect(jsonPath("$.taille").value(DEFAULT_TAILLE.toString()))
            .andExpect(jsonPath("$.etat").value(DEFAULT_ETAT.toString()))
            .andExpect(jsonPath("$.createdAt").value(DEFAULT_CREATED_AT.toString()))
            .andExpect(jsonPath("$.createdBy").value(DEFAULT_CREATED_BY.toString()))
            .andExpect(jsonPath("$.updatedAt").value(DEFAULT_UPDATED_AT.toString()))
            .andExpect(jsonPath("$.updatedBy").value(DEFAULT_UPDATED_BY.toString()))
            .andExpect(jsonPath("$.deletedAt").value(DEFAULT_DELETED_AT.toString()))
            .andExpect(jsonPath("$.deletedBy").value(DEFAULT_DELETED_BY.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingCombinaison() throws Exception {
        // Get the combinaison
        restCombinaisonMockMvc.perform(get("/api/combinaisons/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateCombinaison() throws Exception {
        // Initialize the database
        combinaisonRepository.saveAndFlush(combinaison);

        int databaseSizeBeforeUpdate = combinaisonRepository.findAll().size();

        // Update the combinaison
        Combinaison updatedCombinaison = combinaisonRepository.findById(combinaison.getId()).get();
        // Disconnect from session so that the updates on updatedCombinaison are not directly saved in db
        em.detach(updatedCombinaison);
        updatedCombinaison
            .taille(UPDATED_TAILLE)
            .etat(UPDATED_ETAT)
            .createdAt(UPDATED_CREATED_AT)
            .createdBy(UPDATED_CREATED_BY)
            .updatedAt(UPDATED_UPDATED_AT)
            .updatedBy(UPDATED_UPDATED_BY)
            .deletedAt(UPDATED_DELETED_AT)
            .deletedBy(UPDATED_DELETED_BY);
        CombinaisonDTO combinaisonDTO = combinaisonMapper.toDto(updatedCombinaison);

        restCombinaisonMockMvc.perform(put("/api/combinaisons")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(combinaisonDTO)))
            .andExpect(status().isOk());

        // Validate the Combinaison in the database
        List<Combinaison> combinaisonList = combinaisonRepository.findAll();
        assertThat(combinaisonList).hasSize(databaseSizeBeforeUpdate);
        Combinaison testCombinaison = combinaisonList.get(combinaisonList.size() - 1);
        assertThat(testCombinaison.getTaille()).isEqualTo(UPDATED_TAILLE);
        assertThat(testCombinaison.getEtat()).isEqualTo(UPDATED_ETAT);
        assertThat(testCombinaison.getCreatedAt()).isEqualTo(UPDATED_CREATED_AT);
        assertThat(testCombinaison.getCreatedBy()).isEqualTo(UPDATED_CREATED_BY);
        assertThat(testCombinaison.getUpdatedAt()).isEqualTo(UPDATED_UPDATED_AT);
        assertThat(testCombinaison.getUpdatedBy()).isEqualTo(UPDATED_UPDATED_BY);
        assertThat(testCombinaison.getDeletedAt()).isEqualTo(UPDATED_DELETED_AT);
        assertThat(testCombinaison.getDeletedBy()).isEqualTo(UPDATED_DELETED_BY);
    }

    @Test
    @Transactional
    public void updateNonExistingCombinaison() throws Exception {
        int databaseSizeBeforeUpdate = combinaisonRepository.findAll().size();

        // Create the Combinaison
        CombinaisonDTO combinaisonDTO = combinaisonMapper.toDto(combinaison);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCombinaisonMockMvc.perform(put("/api/combinaisons")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(combinaisonDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Combinaison in the database
        List<Combinaison> combinaisonList = combinaisonRepository.findAll();
        assertThat(combinaisonList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteCombinaison() throws Exception {
        // Initialize the database
        combinaisonRepository.saveAndFlush(combinaison);

        int databaseSizeBeforeDelete = combinaisonRepository.findAll().size();

        // Delete the combinaison
        restCombinaisonMockMvc.perform(delete("/api/combinaisons/{id}", combinaison.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Combinaison> combinaisonList = combinaisonRepository.findAll();
        assertThat(combinaisonList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Combinaison.class);
        Combinaison combinaison1 = new Combinaison();
        combinaison1.setId(1L);
        Combinaison combinaison2 = new Combinaison();
        combinaison2.setId(combinaison1.getId());
        assertThat(combinaison1).isEqualTo(combinaison2);
        combinaison2.setId(2L);
        assertThat(combinaison1).isNotEqualTo(combinaison2);
        combinaison1.setId(null);
        assertThat(combinaison1).isNotEqualTo(combinaison2);
    }

    @Test
    @Transactional
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(CombinaisonDTO.class);
        CombinaisonDTO combinaisonDTO1 = new CombinaisonDTO();
        combinaisonDTO1.setId(1L);
        CombinaisonDTO combinaisonDTO2 = new CombinaisonDTO();
        assertThat(combinaisonDTO1).isNotEqualTo(combinaisonDTO2);
        combinaisonDTO2.setId(combinaisonDTO1.getId());
        assertThat(combinaisonDTO1).isEqualTo(combinaisonDTO2);
        combinaisonDTO2.setId(2L);
        assertThat(combinaisonDTO1).isNotEqualTo(combinaisonDTO2);
        combinaisonDTO1.setId(null);
        assertThat(combinaisonDTO1).isNotEqualTo(combinaisonDTO2);
    }

    @Test
    @Transactional
    public void testEntityFromId() {
        assertThat(combinaisonMapper.fromId(42L).getId()).isEqualTo(42);
        assertThat(combinaisonMapper.fromId(null)).isNull();
    }
}
