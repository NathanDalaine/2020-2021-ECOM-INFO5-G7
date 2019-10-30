package com.group6.app.service.dto;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.group6.app.domain.Voile} entity.
 */
public class VoileDTO implements Serializable {

    private Long id;

    private Float surface;

    private String marque;

    private String modele;

    private String numero;

    private String localisation;

    private String etat;

    private String libelle;

    private Boolean gree;

    private String createdAt;

    private String createdBy;

    private String updatedAt;

    private String updatedBy;

    private String deletedAt;

    private String deletedBy;


    private Long reservationId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Float getSurface() {
        return surface;
    }

    public void setSurface(Float surface) {
        this.surface = surface;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getModele() {
        return modele;
    }

    public void setModele(String modele) {
        this.modele = modele;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getLocalisation() {
        return localisation;
    }

    public void setLocalisation(String localisation) {
        this.localisation = localisation;
    }

    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public Boolean isGree() {
        return gree;
    }

    public void setGree(Boolean gree) {
        this.gree = gree;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public String getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt(String deletedAt) {
        this.deletedAt = deletedAt;
    }

    public String getDeletedBy() {
        return deletedBy;
    }

    public void setDeletedBy(String deletedBy) {
        this.deletedBy = deletedBy;
    }

    public Long getReservationId() {
        return reservationId;
    }

    public void setReservationId(Long reservationId) {
        this.reservationId = reservationId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        VoileDTO voileDTO = (VoileDTO) o;
        if (voileDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), voileDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "VoileDTO{" +
            "id=" + getId() +
            ", surface=" + getSurface() +
            ", marque='" + getMarque() + "'" +
            ", modele='" + getModele() + "'" +
            ", numero='" + getNumero() + "'" +
            ", localisation='" + getLocalisation() + "'" +
            ", etat='" + getEtat() + "'" +
            ", libelle='" + getLibelle() + "'" +
            ", gree='" + isGree() + "'" +
            ", createdAt='" + getCreatedAt() + "'" +
            ", createdBy='" + getCreatedBy() + "'" +
            ", updatedAt='" + getUpdatedAt() + "'" +
            ", updatedBy='" + getUpdatedBy() + "'" +
            ", deletedAt='" + getDeletedAt() + "'" +
            ", deletedBy='" + getDeletedBy() + "'" +
            ", reservation=" + getReservationId() +
            "}";
    }
}