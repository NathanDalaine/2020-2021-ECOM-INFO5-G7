package com.ecom.app.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

import com.ecom.app.domain.enumeration.Taille;

/**
 * A Combinaison.
 */
@Entity
@Table(name = "combinaison")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Combinaison implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "taille")
    private Taille taille;

    @Column(name = "nombre")
    private Integer nombre;

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

    public Combinaison taille(Taille taille) {
        this.taille = taille;
        return this;
    }

    public void setTaille(Taille taille) {
        this.taille = taille;
    }

    public Integer getNombre() {
        return nombre;
    }

    public Combinaison nombre(Integer nombre) {
        this.nombre = nombre;
        return this;
    }

    public void setNombre(Integer nombre) {
        this.nombre = nombre;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Combinaison)) {
            return false;
        }
        return id != null && id.equals(((Combinaison) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Combinaison{" +
            "id=" + getId() +
            ", taille='" + getTaille() + "'" +
            ", nombre=" + getNombre() +
            "}";
    }
}
