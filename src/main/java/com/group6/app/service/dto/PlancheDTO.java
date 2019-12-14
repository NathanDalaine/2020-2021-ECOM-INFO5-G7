package com.group6.app.service.dto;
import java.io.Serializable;
import java.util.Objects;
import java.util.Set;

import com.group6.app.domain.enumeration.Niveau;

/**
 * A DTO for the {@link com.group6.app.domain.Planche} entity.
 */
public class PlancheDTO implements Serializable {

    private Long id;

    private String marque;

    private String modele;

    private String numero;

    private String localisation;

    private String etat;

    private String libelle;

    private Integer volume;

    private String createdAt;

    private String createdBy;

    private String updatedAt;

    private String updatedBy;

    private String deletedAt;

    private String deletedBy;


    private Long reservationId;

    private Instant deletedAt;

    private Niveau niveaurequis;

    private Set<ReservationDTO> reservations;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Integer getVolume() {
        return volume;
    }

    public void setVolume(Integer volume) {
        this.volume = volume;
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

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Instant getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt(Instant deletedAt) {
        this.deletedAt = deletedAt;
    }

    public Niveau getNiveaurequis() {
        return niveaurequis;
    }

    public void setNiveaurequis(Niveau niveaurequis) {
        this.niveaurequis = niveaurequis;
    }

    public Set<ReservationDTO> getReservations(){ return reservations;}

    public void setReservations(Set<ReservationDTO> reservations) { this.reservations = reservations;}

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        PlancheDTO plancheDTO = (PlancheDTO) o;
        if (plancheDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), plancheDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "PlancheDTO{" +
            "id=" + getId() +
            ", marque='" + getMarque() + "'" +
            ", modele='" + getModele() + "'" +
            ", numero='" + getNumero() + "'" +
            ", localisation='" + getLocalisation() + "'" +
            ", etat='" + getEtat() + "'" +
            ", libelle='" + getLibelle() + "'" +
            ", volume=" + getVolume() +
            ", createdAt='" + getCreatedAt() + "'" +
            ", createdBy='" + getCreatedBy() + "'" +
            ", updatedAt='" + getUpdatedAt() + "'" +
            ", updatedBy='" + getUpdatedBy() + "'" +
            ", deletedAt='" + getDeletedAt() + "'" +
            ", deletedBy='" + getDeletedBy() + "'" +
            ", createdAt='" + getCreatedAt() + "'" +
            ", updatedAt='" + getUpdatedAt() + "'" +
            ", deletedAt='" + getDeletedAt() + "'" +
            ", niveaurequis='" + getNiveaurequis() + "'" +
            "}";
    }
}
