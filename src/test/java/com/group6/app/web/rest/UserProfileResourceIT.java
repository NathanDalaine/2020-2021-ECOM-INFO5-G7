package com.group6.app.web.rest;

import com.group6.app.EcomgucvoileApp;
import com.group6.app.domain.UserProfile;
import com.group6.app.repository.UserProfileRepository;
import com.group6.app.service.UserProfileService;
import com.group6.app.service.dto.UserProfileDTO;
import com.group6.app.service.mapper.UserProfileMapper;
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

import com.group6.app.domain.enumeration.TypeAbonnement;
import com.group6.app.domain.enumeration.Taille;
import com.group6.app.domain.enumeration.Taille;
import com.group6.app.domain.enumeration.Niveau;
/**
 * Integration tests for the {@link UserProfileResource} REST controller.
 */
@SpringBootTest(classes = EcomgucvoileApp.class)
public class UserProfileResourceIT {

    private static final Instant DEFAULT_DATE_ECHEANCE = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_DATE_ECHEANCE = Instant.now().truncatedTo(ChronoUnit.MILLIS);
    private static final Instant SMALLER_DATE_ECHEANCE = Instant.ofEpochMilli(-1L);

    private static final Instant DEFAULT_DATE_NAISSANCE = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_DATE_NAISSANCE = Instant.now().truncatedTo(ChronoUnit.MILLIS);
    private static final Instant SMALLER_DATE_NAISSANCE = Instant.ofEpochMilli(-1L);

    private static final Instant DEFAULT_DATE_ADHESION = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_DATE_ADHESION = Instant.now().truncatedTo(ChronoUnit.MILLIS);
    private static final Instant SMALLER_DATE_ADHESION = Instant.ofEpochMilli(-1L);

    private static final String DEFAULT_ADRESSE = "AAAAAAAAAA";
    private static final String UPDATED_ADRESSE = "BBBBBBBBBB";

    private static final String DEFAULT_TELEPHONE = "AAAAAAAAAA";
    private static final String UPDATED_TELEPHONE = "BBBBBBBBBB";

    private static final TypeAbonnement DEFAULT_TYPE_ABONNEMENT = TypeAbonnement.JOURNALIER;
    private static final TypeAbonnement UPDATED_TYPE_ABONNEMENT = TypeAbonnement.ETUDIANT;

    private static final Boolean DEFAULT_MATERIEL_TECHNIQUE_AUTORISE = false;
    private static final Boolean UPDATED_MATERIEL_TECHNIQUE_AUTORISE = true;

    private static final String DEFAULT_REMARQUE = "AAAAAAAAAA";
    private static final String UPDATED_REMARQUE = "BBBBBBBBBB";

    private static final Taille DEFAULT_TAILLE_HARNAIS = Taille.S;
    private static final Taille UPDATED_TAILLE_HARNAIS = Taille.M;

    private static final Taille DEFAULT_TAILLE_COMBINAISON = Taille.S;
    private static final Taille UPDATED_TAILLE_COMBINAISON = Taille.M;

    private static final Niveau DEFAULT_NIVEAU = Niveau.DEBUTANT;
    private static final Niveau UPDATED_NIVEAU = Niveau.DEBUTANTPLUS;

    @Autowired
    private UserProfileRepository userProfileRepository;

    @Autowired
    private UserProfileMapper userProfileMapper;

    @Autowired
    private UserProfileService userProfileService;

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

    private MockMvc restUserProfileMockMvc;

    private UserProfile userProfile;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final UserProfileResource userProfileResource = new UserProfileResource(userProfileService);
        this.restUserProfileMockMvc = MockMvcBuilders.standaloneSetup(userProfileResource)
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
    public static UserProfile createEntity(EntityManager em) {
        UserProfile userProfile = new UserProfile()
            .dateEcheance(DEFAULT_DATE_ECHEANCE)
            .dateNaissance(DEFAULT_DATE_NAISSANCE)
            .dateAdhesion(DEFAULT_DATE_ADHESION)
            .adresse(DEFAULT_ADRESSE)
            .telephone(DEFAULT_TELEPHONE)
            .typeAbonnement(DEFAULT_TYPE_ABONNEMENT)
            .materielTechniqueAutorise(DEFAULT_MATERIEL_TECHNIQUE_AUTORISE)
            .remarque(DEFAULT_REMARQUE)
            .tailleHarnais(DEFAULT_TAILLE_HARNAIS)
            .tailleCombinaison(DEFAULT_TAILLE_COMBINAISON)
            .niveau(DEFAULT_NIVEAU);
        return userProfile;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static UserProfile createUpdatedEntity(EntityManager em) {
        UserProfile userProfile = new UserProfile()
            .dateEcheance(UPDATED_DATE_ECHEANCE)
            .dateNaissance(UPDATED_DATE_NAISSANCE)
            .dateAdhesion(UPDATED_DATE_ADHESION)
            .adresse(UPDATED_ADRESSE)
            .telephone(UPDATED_TELEPHONE)
            .typeAbonnement(UPDATED_TYPE_ABONNEMENT)
            .materielTechniqueAutorise(UPDATED_MATERIEL_TECHNIQUE_AUTORISE)
            .remarque(UPDATED_REMARQUE)
            .tailleHarnais(UPDATED_TAILLE_HARNAIS)
            .tailleCombinaison(UPDATED_TAILLE_COMBINAISON)
            .niveau(UPDATED_NIVEAU);
        return userProfile;
    }

    @BeforeEach
    public void initTest() {
        userProfile = createEntity(em);
    }

    @Test
    @Transactional
    public void createUserProfile() throws Exception {
        int databaseSizeBeforeCreate = userProfileRepository.findAll().size();

        // Create the UserProfile
        UserProfileDTO userProfileDTO = userProfileMapper.toDto(userProfile);
        restUserProfileMockMvc.perform(post("/api/user-profiles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(userProfileDTO)))
            .andExpect(status().isCreated());

        // Validate the UserProfile in the database
        List<UserProfile> userProfileList = userProfileRepository.findAll();
        assertThat(userProfileList).hasSize(databaseSizeBeforeCreate + 1);
        UserProfile testUserProfile = userProfileList.get(userProfileList.size() - 1);
        assertThat(testUserProfile.getDateEcheance()).isEqualTo(DEFAULT_DATE_ECHEANCE);
        assertThat(testUserProfile.getDateNaissance()).isEqualTo(DEFAULT_DATE_NAISSANCE);
        assertThat(testUserProfile.getDateAdhesion()).isEqualTo(DEFAULT_DATE_ADHESION);
        assertThat(testUserProfile.getAdresse()).isEqualTo(DEFAULT_ADRESSE);
        assertThat(testUserProfile.getTelephone()).isEqualTo(DEFAULT_TELEPHONE);
        assertThat(testUserProfile.getTypeAbonnement()).isEqualTo(DEFAULT_TYPE_ABONNEMENT);
        assertThat(testUserProfile.isMaterielTechniqueAutorise()).isEqualTo(DEFAULT_MATERIEL_TECHNIQUE_AUTORISE);
        assertThat(testUserProfile.getRemarque()).isEqualTo(DEFAULT_REMARQUE);
        assertThat(testUserProfile.getTailleHarnais()).isEqualTo(DEFAULT_TAILLE_HARNAIS);
        assertThat(testUserProfile.getTailleCombinaison()).isEqualTo(DEFAULT_TAILLE_COMBINAISON);
        assertThat(testUserProfile.getNiveau()).isEqualTo(DEFAULT_NIVEAU);
    }

    @Test
    @Transactional
    public void createUserProfileWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = userProfileRepository.findAll().size();

        // Create the UserProfile with an existing ID
        userProfile.setId(1L);
        UserProfileDTO userProfileDTO = userProfileMapper.toDto(userProfile);

        // An entity with an existing ID cannot be created, so this API call must fail
        restUserProfileMockMvc.perform(post("/api/user-profiles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(userProfileDTO)))
            .andExpect(status().isBadRequest());

        // Validate the UserProfile in the database
        List<UserProfile> userProfileList = userProfileRepository.findAll();
        assertThat(userProfileList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllUserProfiles() throws Exception {
        // Initialize the database
        userProfileRepository.saveAndFlush(userProfile);

        // Get all the userProfileList
        restUserProfileMockMvc.perform(get("/api/user-profiles?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(userProfile.getId().intValue())))
            .andExpect(jsonPath("$.[*].dateEcheance").value(hasItem(DEFAULT_DATE_ECHEANCE.toString())))
            .andExpect(jsonPath("$.[*].dateNaissance").value(hasItem(DEFAULT_DATE_NAISSANCE.toString())))
            .andExpect(jsonPath("$.[*].dateAdhesion").value(hasItem(DEFAULT_DATE_ADHESION.toString())))
            .andExpect(jsonPath("$.[*].adresse").value(hasItem(DEFAULT_ADRESSE.toString())))
            .andExpect(jsonPath("$.[*].telephone").value(hasItem(DEFAULT_TELEPHONE.toString())))
            .andExpect(jsonPath("$.[*].typeAbonnement").value(hasItem(DEFAULT_TYPE_ABONNEMENT.toString())))
            .andExpect(jsonPath("$.[*].materielTechniqueAutorise").value(hasItem(DEFAULT_MATERIEL_TECHNIQUE_AUTORISE.booleanValue())))
            .andExpect(jsonPath("$.[*].remarque").value(hasItem(DEFAULT_REMARQUE.toString())))
            .andExpect(jsonPath("$.[*].tailleHarnais").value(hasItem(DEFAULT_TAILLE_HARNAIS.toString())))
            .andExpect(jsonPath("$.[*].tailleCombinaison").value(hasItem(DEFAULT_TAILLE_COMBINAISON.toString())))
            .andExpect(jsonPath("$.[*].niveau").value(hasItem(DEFAULT_NIVEAU.toString())));
    }
    
    @Test
    @Transactional
    public void getUserProfile() throws Exception {
        // Initialize the database
        userProfileRepository.saveAndFlush(userProfile);

        // Get the userProfile
        restUserProfileMockMvc.perform(get("/api/user-profiles/{id}", userProfile.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(userProfile.getId().intValue()))
            .andExpect(jsonPath("$.dateEcheance").value(DEFAULT_DATE_ECHEANCE.toString()))
            .andExpect(jsonPath("$.dateNaissance").value(DEFAULT_DATE_NAISSANCE.toString()))
            .andExpect(jsonPath("$.dateAdhesion").value(DEFAULT_DATE_ADHESION.toString()))
            .andExpect(jsonPath("$.adresse").value(DEFAULT_ADRESSE.toString()))
            .andExpect(jsonPath("$.telephone").value(DEFAULT_TELEPHONE.toString()))
            .andExpect(jsonPath("$.typeAbonnement").value(DEFAULT_TYPE_ABONNEMENT.toString()))
            .andExpect(jsonPath("$.materielTechniqueAutorise").value(DEFAULT_MATERIEL_TECHNIQUE_AUTORISE.booleanValue()))
            .andExpect(jsonPath("$.remarque").value(DEFAULT_REMARQUE.toString()))
            .andExpect(jsonPath("$.tailleHarnais").value(DEFAULT_TAILLE_HARNAIS.toString()))
            .andExpect(jsonPath("$.tailleCombinaison").value(DEFAULT_TAILLE_COMBINAISON.toString()))
            .andExpect(jsonPath("$.niveau").value(DEFAULT_NIVEAU.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingUserProfile() throws Exception {
        // Get the userProfile
        restUserProfileMockMvc.perform(get("/api/user-profiles/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateUserProfile() throws Exception {
        // Initialize the database
        userProfileRepository.saveAndFlush(userProfile);

        int databaseSizeBeforeUpdate = userProfileRepository.findAll().size();

        // Update the userProfile
        UserProfile updatedUserProfile = userProfileRepository.findById(userProfile.getId()).get();
        // Disconnect from session so that the updates on updatedUserProfile are not directly saved in db
        em.detach(updatedUserProfile);
        updatedUserProfile
            .dateEcheance(UPDATED_DATE_ECHEANCE)
            .dateNaissance(UPDATED_DATE_NAISSANCE)
            .dateAdhesion(UPDATED_DATE_ADHESION)
            .adresse(UPDATED_ADRESSE)
            .telephone(UPDATED_TELEPHONE)
            .typeAbonnement(UPDATED_TYPE_ABONNEMENT)
            .materielTechniqueAutorise(UPDATED_MATERIEL_TECHNIQUE_AUTORISE)
            .remarque(UPDATED_REMARQUE)
            .tailleHarnais(UPDATED_TAILLE_HARNAIS)
            .tailleCombinaison(UPDATED_TAILLE_COMBINAISON)
            .niveau(UPDATED_NIVEAU);
        UserProfileDTO userProfileDTO = userProfileMapper.toDto(updatedUserProfile);

        restUserProfileMockMvc.perform(put("/api/user-profiles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(userProfileDTO)))
            .andExpect(status().isOk());

        // Validate the UserProfile in the database
        List<UserProfile> userProfileList = userProfileRepository.findAll();
        assertThat(userProfileList).hasSize(databaseSizeBeforeUpdate);
        UserProfile testUserProfile = userProfileList.get(userProfileList.size() - 1);
        assertThat(testUserProfile.getDateEcheance()).isEqualTo(UPDATED_DATE_ECHEANCE);
        assertThat(testUserProfile.getDateNaissance()).isEqualTo(UPDATED_DATE_NAISSANCE);
        assertThat(testUserProfile.getDateAdhesion()).isEqualTo(UPDATED_DATE_ADHESION);
        assertThat(testUserProfile.getAdresse()).isEqualTo(UPDATED_ADRESSE);
        assertThat(testUserProfile.getTelephone()).isEqualTo(UPDATED_TELEPHONE);
        assertThat(testUserProfile.getTypeAbonnement()).isEqualTo(UPDATED_TYPE_ABONNEMENT);
        assertThat(testUserProfile.isMaterielTechniqueAutorise()).isEqualTo(UPDATED_MATERIEL_TECHNIQUE_AUTORISE);
        assertThat(testUserProfile.getRemarque()).isEqualTo(UPDATED_REMARQUE);
        assertThat(testUserProfile.getTailleHarnais()).isEqualTo(UPDATED_TAILLE_HARNAIS);
        assertThat(testUserProfile.getTailleCombinaison()).isEqualTo(UPDATED_TAILLE_COMBINAISON);
        assertThat(testUserProfile.getNiveau()).isEqualTo(UPDATED_NIVEAU);
    }

    @Test
    @Transactional
    public void updateNonExistingUserProfile() throws Exception {
        int databaseSizeBeforeUpdate = userProfileRepository.findAll().size();

        // Create the UserProfile
        UserProfileDTO userProfileDTO = userProfileMapper.toDto(userProfile);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restUserProfileMockMvc.perform(put("/api/user-profiles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(userProfileDTO)))
            .andExpect(status().isBadRequest());

        // Validate the UserProfile in the database
        List<UserProfile> userProfileList = userProfileRepository.findAll();
        assertThat(userProfileList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteUserProfile() throws Exception {
        // Initialize the database
        userProfileRepository.saveAndFlush(userProfile);

        int databaseSizeBeforeDelete = userProfileRepository.findAll().size();

        // Delete the userProfile
        restUserProfileMockMvc.perform(delete("/api/user-profiles/{id}", userProfile.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<UserProfile> userProfileList = userProfileRepository.findAll();
        assertThat(userProfileList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(UserProfile.class);
        UserProfile userProfile1 = new UserProfile();
        userProfile1.setId(1L);
        UserProfile userProfile2 = new UserProfile();
        userProfile2.setId(userProfile1.getId());
        assertThat(userProfile1).isEqualTo(userProfile2);
        userProfile2.setId(2L);
        assertThat(userProfile1).isNotEqualTo(userProfile2);
        userProfile1.setId(null);
        assertThat(userProfile1).isNotEqualTo(userProfile2);
    }

    @Test
    @Transactional
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(UserProfileDTO.class);
        UserProfileDTO userProfileDTO1 = new UserProfileDTO();
        userProfileDTO1.setId(1L);
        UserProfileDTO userProfileDTO2 = new UserProfileDTO();
        assertThat(userProfileDTO1).isNotEqualTo(userProfileDTO2);
        userProfileDTO2.setId(userProfileDTO1.getId());
        assertThat(userProfileDTO1).isEqualTo(userProfileDTO2);
        userProfileDTO2.setId(2L);
        assertThat(userProfileDTO1).isNotEqualTo(userProfileDTO2);
        userProfileDTO1.setId(null);
        assertThat(userProfileDTO1).isNotEqualTo(userProfileDTO2);
    }

    @Test
    @Transactional
    public void testEntityFromId() {
        assertThat(userProfileMapper.fromId(42L).getId()).isEqualTo(42);
        assertThat(userProfileMapper.fromId(null)).isNull();
    }
}
