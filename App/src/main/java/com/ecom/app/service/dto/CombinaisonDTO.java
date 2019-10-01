package com.ecom.app.service.dto;
import java.io.Serializable;
import java.util.Objects;
import com.ecom.app.domain.enumeration.Taille;

/**
 * A DTO for the {@link com.ecom.app.domain.Combinaison} entity.
 */
public class CombinaisonDTO implements Serializable {

    private Long id;

    private Taille taille;

    private Integer nombre;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Taille getTaille() {
        return taille;
    }

    public void setTaille(Taille taille) {
        this.taille = taille;
    }

    public Integer getNombre() {
        return nombre;
    }

    public void setNombre(Integer nombre) {
        this.nombre = nombre;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        CombinaisonDTO combinaisonDTO = (CombinaisonDTO) o;
        if (combinaisonDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), combinaisonDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "CombinaisonDTO{" +
            "id=" + getId() +
            ", taille='" + getTaille() + "'" +
            ", nombre=" + getNombre() +
            "}";
    }
}
