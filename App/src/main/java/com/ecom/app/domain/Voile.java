package com.ecom.app.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Voile.
 */
@Entity
@Table(name = "voile")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Voile implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "surface")
    private Float surface;

    @Column(name = "marque")
    private String marque;

    @Column(name = "modele")
    private String modele;

    @Column(name = "numero")
    private String numero;

    @Column(name = "localisation")
    private String localisation;

    @Column(name = "etat")
    private String etat;

    @Column(name = "libelle")
    private String libelle;

    @Column(name = "gree")
    private Boolean gree;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Float getSurface() {
        return surface;
    }

    public Voile surface(Float surface) {
        this.surface = surface;
        return this;
    }

    public void setSurface(Float surface) {
        this.surface = surface;
    }

    public String getMarque() {
        return marque;
    }

    public Voile marque(String marque) {
        this.marque = marque;
        return this;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getModele() {
        return modele;
    }

    public Voile modele(String modele) {
        this.modele = modele;
        return this;
    }

    public void setModele(String modele) {
        this.modele = modele;
    }

    public String getNumero() {
        return numero;
    }

    public Voile numero(String numero) {
        this.numero = numero;
        return this;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getLocalisation() {
        return localisation;
    }

    public Voile localisation(String localisation) {
        this.localisation = localisation;
        return this;
    }

    public void setLocalisation(String localisation) {
        this.localisation = localisation;
    }

    public String getEtat() {
        return etat;
    }

    public Voile etat(String etat) {
        this.etat = etat;
        return this;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getLibelle() {
        return libelle;
    }

    public Voile libelle(String libelle) {
        this.libelle = libelle;
        return this;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public Boolean isGree() {
        return gree;
    }

    public Voile gree(Boolean gree) {
        this.gree = gree;
        return this;
    }

    public void setGree(Boolean gree) {
        this.gree = gree;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Voile)) {
            return false;
        }
        return id != null && id.equals(((Voile) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Voile{" +
            "id=" + getId() +
            ", surface=" + getSurface() +
            ", marque='" + getMarque() + "'" +
            ", modele='" + getModele() + "'" +
            ", numero='" + getNumero() + "'" +
            ", localisation='" + getLocalisation() + "'" +
            ", etat='" + getEtat() + "'" +
            ", libelle='" + getLibelle() + "'" +
            ", gree='" + isGree() + "'" +
            "}";
    }
}
