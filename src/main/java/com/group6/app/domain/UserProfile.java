package com.group6.app.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

import com.group6.app.domain.enumeration.TypeAbonnement;

import com.group6.app.domain.enumeration.Taille;

import com.group6.app.domain.enumeration.Niveau;

/**
 * A UserProfile.
 */
@Entity
@Table(name = "user_profile")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class UserProfile implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;


    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @OneToOne(cascade = CascadeType.ALL)
    private User user;

    @Column(name = "date_echeance")
    private Instant dateEcheance;

    @Column(name = "date_naissance")
    private Instant dateNaissance;

    @Column(name = "date_adhesion")
    private Instant dateAdhesion;

    @Column(name = "adresse")
    private String adresse;

    @Column(name = "telephone")
    private String telephone;

    @Enumerated(EnumType.STRING)
    @Column(name = "type_abonnement")
    private TypeAbonnement typeAbonnement;

    @Column(name = "materiel_technique_autorise")
    private Boolean materielTechniqueAutorise;

    @Column(name = "remarque")
    private String remarque;

    @Enumerated(EnumType.STRING)
    @Column(name = "taille_harnais")
    private Taille tailleHarnais;

    @Enumerated(EnumType.STRING)
    @Column(name = "taille_combinaison")
    private Taille tailleCombinaison;

    @Enumerated(EnumType.STRING)
    @Column(name = "niveau")
    private Niveau niveau;

    @OneToMany(mappedBy = "userProfile",fetch = FetchType.EAGER)
    private Set<Reservation> reservations = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser(){
        return this.user;
    }

    public void setUser(User user){
        this.user = user;
    }

    public Instant getDateEcheance() {
        return dateEcheance;
    }

    public UserProfile dateEcheance(Instant dateEcheance) {
        this.dateEcheance = dateEcheance;
        return this;
    }

    public void setDateEcheance(Instant dateEcheance) {
        this.dateEcheance = dateEcheance;
    }

    public Instant getDateNaissance() {
        return dateNaissance;
    }

    public UserProfile dateNaissance(Instant dateNaissance) {
        this.dateNaissance = dateNaissance;
        return this;
    }

    public void setDateNaissance(Instant dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public Instant getDateAdhesion() {
        return dateAdhesion;
    }

    public UserProfile dateAdhesion(Instant dateAdhesion) {
        this.dateAdhesion = dateAdhesion;
        return this;
    }

    public void setDateAdhesion(Instant dateAdhesion) {
        this.dateAdhesion = dateAdhesion;
    }

    public String getAdresse() {
        return adresse;
    }

    public UserProfile adresse(String adresse) {
        this.adresse = adresse;
        return this;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getTelephone() {
        return telephone;
    }

    public UserProfile telephone(String telephone) {
        this.telephone = telephone;
        return this;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public TypeAbonnement getTypeAbonnement() {
        return typeAbonnement;
    }

    public UserProfile typeAbonnement(TypeAbonnement typeAbonnement) {
        this.typeAbonnement = typeAbonnement;
        return this;
    }

    public void setTypeAbonnement(TypeAbonnement typeAbonnement) {
        this.typeAbonnement = typeAbonnement;
    }

    public Boolean isMaterielTechniqueAutorise() {
        return materielTechniqueAutorise;
    }

    public UserProfile materielTechniqueAutorise(Boolean materielTechniqueAutorise) {
        this.materielTechniqueAutorise = materielTechniqueAutorise;
        return this;
    }

    public void setMaterielTechniqueAutorise(Boolean materielTechniqueAutorise) {
        this.materielTechniqueAutorise = materielTechniqueAutorise;
    }

    public String getRemarque() {
        return remarque;
    }

    public UserProfile remarque(String remarque) {
        this.remarque = remarque;
        return this;
    }

    public void setRemarque(String remarque) {
        this.remarque = remarque;
    }

    public Taille getTailleHarnais() {
        return tailleHarnais;
    }

    public UserProfile tailleHarnais(Taille tailleHarnais) {
        this.tailleHarnais = tailleHarnais;
        return this;
    }

    public void setTailleHarnais(Taille tailleHarnais) {
        this.tailleHarnais = tailleHarnais;
    }

    public Taille getTailleCombinaison() {
        return tailleCombinaison;
    }

    public UserProfile tailleCombinaison(Taille tailleCombinaison) {
        this.tailleCombinaison = tailleCombinaison;
        return this;
    }

    public void setTailleCombinaison(Taille tailleCombinaison) {
        this.tailleCombinaison = tailleCombinaison;
    }

    public Niveau getNiveau() {
        return niveau;
    }

    public UserProfile niveau(Niveau niveau) {
        this.niveau = niveau;
        return this;
    }

    public void setNiveau(Niveau niveau) {
        this.niveau = niveau;
    }

    public Set<Reservation> getReservations() {
        return reservations;
    }

    public UserProfile reservations(Set<Reservation> reservations) {
        this.reservations = reservations;
        return this;
    }

    public UserProfile addReservation(Reservation reservation) {
        this.reservations.add(reservation);
        reservation.setUserProfile(this);
        return this;
    }

    public UserProfile removeReservation(Reservation reservation) {
        this.reservations.remove(reservation);
        reservation.setUserProfile(null);
        return this;
    }

    public void setReservations(Set<Reservation> reservations) {
        this.reservations = reservations;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof UserProfile)) {
            return false;
        }
        return id != null && id.equals(((UserProfile) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "UserProfile{" +
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
