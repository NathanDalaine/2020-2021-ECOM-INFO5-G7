package com.group6.app.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

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

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_by")
    private String updatedBy;

    @Column(name = "deleted_by")
    private String deletedBy;

    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "updated_at")
    private Instant updatedAt;

    @Column(name = "deleted_at")
    private Instant deletedAt;

    @OneToMany(mappedBy = "reservation")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Voile> voiles = new HashSet<>();

    @OneToMany(mappedBy = "reservation")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<UserProfile> users = new HashSet<>();

    @OneToMany(mappedBy = "reservation")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Combinaison> combinaisons = new HashSet<>();

    @OneToMany(mappedBy = "reservation")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Harnais> harnais = new HashSet<>();

    @OneToMany(mappedBy = "reservation")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Planche> planches = new HashSet<>();

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

    public Set<Voile> getVoiles() {
        return voiles;
    }

    public Reservation voiles(Set<Voile> voiles) {
        this.voiles = voiles;
        return this;
    }

    public Reservation addVoile(Voile voile) {
        this.voiles.add(voile);
        voile.setReservation(this);
        return this;
    }

    public Reservation removeVoile(Voile voile) {
        this.voiles.remove(voile);
        voile.setReservation(null);
        return this;
    }

    public void setVoiles(Set<Voile> voiles) {
        this.voiles = voiles;
    }

    public Set<UserProfile> getUsers() {
        return users;
    }

    public Reservation users(Set<UserProfile> userProfiles) {
        this.users = userProfiles;
        return this;
    }

    public Reservation addUser(UserProfile userProfile) {
        this.users.add(userProfile);
        userProfile.setReservation(this);
        return this;
    }

    public Reservation removeUser(UserProfile userProfile) {
        this.users.remove(userProfile);
        userProfile.setReservation(null);
        return this;
    }

    public void setUsers(Set<UserProfile> userProfiles) {
        this.users = userProfiles;
    }

    public Set<Combinaison> getCombinaisons() {
        return combinaisons;
    }

    public Reservation combinaisons(Set<Combinaison> combinaisons) {
        this.combinaisons = combinaisons;
        return this;
    }

    public Reservation addCombinaison(Combinaison combinaison) {
        this.combinaisons.add(combinaison);
        combinaison.setReservation(this);
        return this;
    }

    public Reservation removeCombinaison(Combinaison combinaison) {
        this.combinaisons.remove(combinaison);
        combinaison.setReservation(null);
        return this;
    }

    public void setCombinaisons(Set<Combinaison> combinaisons) {
        this.combinaisons = combinaisons;
    }

    public Set<Harnais> getHarnais() {
        return harnais;
    }

    public Reservation harnais(Set<Harnais> harnais) {
        this.harnais = harnais;
        return this;
    }

    public Reservation addHarnais(Harnais harnais) {
        this.harnais.add(harnais);
        harnais.setReservation(this);
        return this;
    }

    public Reservation removeHarnais(Harnais harnais) {
        this.harnais.remove(harnais);
        harnais.setReservation(null);
        return this;
    }

    public void setHarnais(Set<Harnais> harnais) {
        this.harnais = harnais;
    }

    public Set<Planche> getPlanches() {
        return planches;
    }

    public Reservation planches(Set<Planche> planches) {
        this.planches = planches;
        return this;
    }

    public Reservation addPlanche(Planche planche) {
        this.planches.add(planche);
        planche.setReservation(this);
        return this;
    }

    public Reservation removePlanche(Planche planche) {
        this.planches.remove(planche);
        planche.setReservation(null);
        return this;
    }

    public void setPlanches(Set<Planche> planches) {
        this.planches = planches;
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
