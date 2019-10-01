package com.ecom.app.domain;
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

    @OneToOne
    @JoinColumn(unique = true)
    private Voile voile;

    @OneToOne
    @JoinColumn(unique = true)
    private UserProfile user;

    @OneToOne
    @JoinColumn(unique = true)
    private Combinaison combinaison;

    @OneToOne
    @JoinColumn(unique = true)
    private Harnais harnais;

    @OneToOne
    @JoinColumn(unique = true)
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

    public UserProfile getUser() {
        return user;
    }

    public Reservation user(UserProfile userProfile) {
        this.user = userProfile;
        return this;
    }

    public void setUser(UserProfile userProfile) {
        this.user = userProfile;
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
            "}";
    }
}
