package com.group6.app.service.dto;
import java.time.Instant;
import java.io.Serializable;
import java.util.Objects;

import com.group6.app.domain.User;
import com.group6.app.domain.enumeration.TypeAbonnement;
import com.group6.app.domain.enumeration.Niveau;
import com.group6.app.domain.enumeration.Taille;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

/**
 * A DTO for the {@link com.group6.app.domain.UserProfile} entity.
 */
public class UserProfileDTO implements Serializable {
    private Long id;
    private String authoritie;
    private Instant dateEcheance;

    private Instant dateNaissance;

    private Instant dateAdhesion;

    private String adresse;

    private String telephone;

    private TypeAbonnement typeAbonnement;

    private Boolean materielTechniqueAutorise;

    private String remarque;

    private Taille tailleHarnais;

    private Taille tailleCombinaison;

    private Niveau niveau;

    private UserDTO user;

    public void setUser(UserDTO user){
        this.user = user;
    }

    public UserDTO getUser(){
        return user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getDateEcheance() {
        return dateEcheance;
    }

    public void setDateEcheance(Instant dateEcheance) {
        this.dateEcheance = dateEcheance;
    }

    public String getAuthoritie(){
        return authoritie;
    }

    public void setAuthoritie(String authoritie) {
        this.authoritie = authoritie;
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

    public Taille getTailleHarnais() {
        return tailleHarnais;
    }

    public void setTailleHarnais(Taille tailleHarnais) {
        this.tailleHarnais = tailleHarnais;
    }

    public Taille getTailleCombinaison() {
        return tailleCombinaison;
    }

    public void setTailleCombinaison(Taille tailleCombinaison) {
        this.tailleCombinaison = tailleCombinaison;
    }

    public Niveau getNiveau() {
        return niveau;
    }

    public void setNiveau(Niveau niveau) {
        this.niveau = niveau;
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
            ", dateEcheance='" + getDateEcheance() + "'" +
            ", dateNaissance='" + getDateNaissance() + "'" +
            ", dateAdhesion='" + getDateAdhesion() + "'" +
            ", adresse='" + getAdresse() + "'" +
            ", telephone='" + getTelephone() + "'" +
            ", typeAbonnement='" + getTypeAbonnement() + "'" +
            ", materielTechniqueAutorise='" + isMaterielTechniqueAutorise() + "'" +
            ", remarque='" + getRemarque() + "'" +
            ", tailleHarnais='" + getTailleHarnais() + "'" +
            ", tailleCombinaison='" + getTailleCombinaison() + "'" +
            ", niveau='" + getNiveau() + "'" +
            "}";
    }
}
