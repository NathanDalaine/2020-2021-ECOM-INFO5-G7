package com.group6.app.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

import com.group6.app.domain.enumeration.Taille;

/**
 * A Harnais.
 */
@Entity
@Table(name = "harnais")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Harnais implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "taille")
    private Taille taille;

    @Column(name = "etat")
    private String etat;

    @Column(name = "created_at")
    private String createdAt;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_at")
    private String updatedAt;

    @Column(name = "updated_by")
    private String updatedBy;

    @Column(name = "deleted_at")
    private String deletedAt;

    @Column(name = "deleted_by")
    private String deletedBy;

    @ManyToOne
    @JsonIgnoreProperties("harnais")
    private Reservation reservation;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Taille getTaille() {
        return taille;
    }

    public Harnais taille(Taille taille) {
        this.taille = taille;
        return this;
    }

    public void setTaille(Taille taille) {
        this.taille = taille;
    }

    public String getEtat() {
        return etat;
    }

    public Harnais etat(String etat) {
        this.etat = etat;
        return this;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public Harnais createdAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public Harnais createdBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public Harnais updatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public Harnais updatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public String getDeletedAt() {
        return deletedAt;
    }

    public Harnais deletedAt(String deletedAt) {
        this.deletedAt = deletedAt;
        return this;
    }

    public void setDeletedAt(String deletedAt) {
        this.deletedAt = deletedAt;
    }

    public String getDeletedBy() {
        return deletedBy;
    }

    public Harnais deletedBy(String deletedBy) {
        this.deletedBy = deletedBy;
        return this;
    }

    public void setDeletedBy(String deletedBy) {
        this.deletedBy = deletedBy;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public Harnais reservation(Reservation reservation) {
        this.reservation = reservation;
        return this;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Harnais)) {
            return false;
        }
        return id != null && id.equals(((Harnais) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Harnais{" +
            "id=" + getId() +
            ", taille='" + getTaille() + "'" +
            ", etat='" + getEtat() + "'" +
            ", createdAt='" + getCreatedAt() + "'" +
            ", createdBy='" + getCreatedBy() + "'" +
            ", updatedAt='" + getUpdatedAt() + "'" +
            ", updatedBy='" + getUpdatedBy() + "'" +
            ", deletedAt='" + getDeletedAt() + "'" +
            ", deletedBy='" + getDeletedBy() + "'" +
            "}";
    }
}
