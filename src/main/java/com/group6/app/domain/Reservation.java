package com.group6.app.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Reservation.
 */
@Entity
@Table(name = "reservation")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Reservation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "date_reservation")
    private Instant dateReservation;

    @Column(name = "date_rendu")
    private Instant dateRendu;

    @Column(name = "remarques")
    private String remarques;

    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_by")
    private String updatedBy;

    @Column(name = "deleted_by")
    private String deletedBy;

    @Column(name = "updated_at")
    private Instant updatedAt;

    @Column(name = "deleted_at")
    private Instant deletedAt;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonIgnoreProperties("reservations")
    private Voile voile;

    @ManyToOne
    @JsonIgnoreProperties("reservations")
    private UserProfile userProfile;

    @ManyToOne
    @JsonIgnoreProperties("reservations")
    private Combinaison combinaison;

    @ManyToOne
    @JsonIgnoreProperties("reservations")
    private Harnais harnais;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonIgnoreProperties("reservations")
    private Planche planche;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getDateReservation() {
        return dateReservation;
    }

    public Reservation dateReservation(Instant dateReservation) {
        this.dateReservation = dateReservation;
        return this;
    }

    public void setDateReservation(Instant dateReservation) {
        this.dateReservation = dateReservation;
    }

    public Instant getDateRendu() {
        return dateRendu;
    }

    public Reservation dateRendu(Instant dateRendu) {
        this.dateRendu = dateRendu;
        return this;
    }

    public void setDateRendu(Instant dateRendu) {
        this.dateRendu = dateRendu;
    }

    public String getRemarques() {
        return remarques;
    }

    public Reservation remarques(String remarques) {
        this.remarques = remarques;
        return this;
    }

    public void setRemarques(String remarques) {
        this.remarques = remarques;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Reservation createdAt(Instant createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public Reservation createdBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public Reservation updatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public String getDeletedBy() {
        return deletedBy;
    }

    public Reservation deletedBy(String deletedBy) {
        this.deletedBy = deletedBy;
        return this;
    }

    public void setDeletedBy(String deletedBy) {
        this.deletedBy = deletedBy;
    }


    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public Reservation updatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Instant getDeletedAt() {
        return deletedAt;
    }

    public Reservation deletedAt(Instant deletedAt) {
        this.deletedAt = deletedAt;
        return this;
    }

    public void setDeletedAt(Instant deletedAt) {
        this.deletedAt = deletedAt;
    }

    public Voile getVoile() {
        return voile;
    }

    public Reservation voile(Voile voile) {
        this.voile = voile;
        return this;
    }

    public void setVoile(Voile voile) {
        this.voile = voile;
    }

    public UserProfile getUserProfile() {
        return userProfile;
    }

    public Reservation userProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
        return this;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    public Combinaison getCombinaison() {
        return combinaison;
    }

    public Reservation combinaison(Combinaison combinaison) {
        this.combinaison = combinaison;
        return this;
    }

    public void setCombinaison(Combinaison combinaison) {
        this.combinaison = combinaison;
    }

    public Harnais getHarnais() {
        return harnais;
    }

    public Reservation harnais(Harnais harnais) {
        this.harnais = harnais;
        return this;
    }

    public void setHarnais(Harnais harnais) {
        this.harnais = harnais;
    }

    public Planche getPlanche() {
        return planche;
    }

    public Reservation planche(Planche planche) {
        this.planche = planche;
        return this;
    }

    public void setPlanche(Planche planche) {
        this.planche = planche;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Reservation)) {
            return false;
        }
        return id != null && id.equals(((Reservation) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Reservation{" +
            "id=" + getId() +
            ", dateReservation='" + getDateReservation() + "'" +
            ", dateRendu='" + getDateRendu() + "'" +
            ", remarques='" + getRemarques() + "'" +
            ", createdBy='" + getCreatedBy() + "'" +
            ", updatedBy='" + getUpdatedBy() + "'" +
            ", deletedBy='" + getDeletedBy() + "'" +
            ", createdAt='" + getCreatedAt() + "'" +
            ", updatedAt='" + getUpdatedAt() + "'" +
            ", deletedAt='" + getDeletedAt() + "'" +
            "}";
    }
}
