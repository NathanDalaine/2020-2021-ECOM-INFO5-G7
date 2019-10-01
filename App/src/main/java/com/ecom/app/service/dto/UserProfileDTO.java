package com.ecom.app.service.dto;
import java.time.Instant;
import java.io.Serializable;
import java.util.Objects;
import com.ecom.app.domain.enumeration.Taille;
import com.ecom.app.domain.enumeration.TypeAbonnement;
import com.ecom.app.domain.enumeration.Niveau;

/**
 * A DTO for the {@link com.ecom.app.domain.UserProfile} entity.
 */
public class UserProfileDTO implements Serializable {

    private Long id;

    private String localisation;

    private Instant dateEcheance;

    private Instant dateNaissance;

    private Instant dateAdhesion;

    private Taille prefTaille;

    private String adresse;

    private String telephone;

    private TypeAbonnement typeAbonnement;

    private Niveau niveau;

    private Boolean materielTechniqueAutorise;

    private String remarque;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocalisation() {
        return localisation;
    }

    public void setLocalisation(String localisation) {
        this.localisation = localisation;
    }

    public Instant getDateEcheance() {
        return dateEcheance;
    }

    public void setDateEcheance(Instant dateEcheance) {
        this.dateEcheance = dateEcheance;
    }

    public Instant getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Instant dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public Instant getDateAdhesion() {
        return dateAdhesion;
    }

    public void setDateAdhesion(Instant dateAdhesion) {
        this.dateAdhesion = dateAdhesion;
    }

    public Taille getPrefTaille() {
        return prefTaille;
    }

    public void setPrefTaille(Taille prefTaille) {
        this.prefTaille = prefTaille;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public TypeAbonnement getTypeAbonnement() {
        return typeAbonnement;
    }

    public void setTypeAbonnement(TypeAbonnement typeAbonnement) {
        this.typeAbonnement = typeAbonnement;
    }

    public Niveau getNiveau() {
        return niveau;
    }

    public void setNiveau(Niveau niveau) {
        this.niveau = niveau;
    }

    public Boolean isMaterielTechniqueAutorise() {
        return materielTechniqueAutorise;
    }

    public void setMaterielTechniqueAutorise(Boolean materielTechniqueAutorise) {
        this.materielTechniqueAutorise = materielTechniqueAutorise;
    }

    public String getRemarque() {
        return remarque;
    }

    public void setRemarque(String remarque) {
        this.remarque = remarque;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        UserProfileDTO userProfileDTO = (UserProfileDTO) o;
        if (userProfileDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), userProfileDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "UserProfileDTO{" +
            "id=" + getId() +
            ", localisation='" + getLocalisation() + "'" +
            ", dateEcheance='" + getDateEcheance() + "'" +
            ", dateNaissance='" + getDateNaissance() + "'" +
            ", dateAdhesion='" + getDateAdhesion() + "'" +
            ", prefTaille='" + getPrefTaille() + "'" +
            ", adresse='" + getAdresse() + "'" +
            ", telephone='" + getTelephone() + "'" +
            ", typeAbonnement='" + getTypeAbonnement() + "'" +
            ", niveau='" + getNiveau() + "'" +
            ", materielTechniqueAutorise='" + isMaterielTechniqueAutorise() + "'" +
            ", remarque='" + getRemarque() + "'" +
            "}";
    }
}
