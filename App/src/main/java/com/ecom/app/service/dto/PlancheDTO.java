package com.ecom.app.service.dto;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.ecom.app.domain.Planche} entity.
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
            "}";
    }
}
