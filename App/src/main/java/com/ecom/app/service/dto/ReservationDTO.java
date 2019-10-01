package com.ecom.app.service.dto;
import java.time.Instant;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.ecom.app.domain.Reservation} entity.
 */
public class ReservationDTO implements Serializable {

    private Long id;

    private Instant dateReservation;

    private Instant dateRendu;

    private String remarques;


    private Long voileId;

    private Long userId;

    private Long combinaisonId;

    private Long harnaisId;

    private Long plancheId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getDateReservation() {
        return dateReservation;
    }

    public void setDateReservation(Instant dateReservation) {
        this.dateReservation = dateReservation;
    }

    public Instant getDateRendu() {
        return dateRendu;
    }

    public void setDateRendu(Instant dateRendu) {
        this.dateRendu = dateRendu;
    }

    public String getRemarques() {
        return remarques;
    }

    public void setRemarques(String remarques) {
        this.remarques = remarques;
    }

    public Long getVoileId() {
        return voileId;
    }

    public void setVoileId(Long voileId) {
        this.voileId = voileId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userProfileId) {
        this.userId = userProfileId;
    }

    public Long getCombinaisonId() {
        return combinaisonId;
    }

    public void setCombinaisonId(Long combinaisonId) {
        this.combinaisonId = combinaisonId;
    }

    public Long getHarnaisId() {
        return harnaisId;
    }

    public void setHarnaisId(Long harnaisId) {
        this.harnaisId = harnaisId;
    }

    public Long getPlancheId() {
        return plancheId;
    }

    public void setPlancheId(Long plancheId) {
        this.plancheId = plancheId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ReservationDTO reservationDTO = (ReservationDTO) o;
        if (reservationDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), reservationDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ReservationDTO{" +
            "id=" + getId() +
            ", dateReservation='" + getDateReservation() + "'" +
            ", dateRendu='" + getDateRendu() + "'" +
            ", remarques='" + getRemarques() + "'" +
            ", voile=" + getVoileId() +
            ", user=" + getUserId() +
            ", combinaison=" + getCombinaisonId() +
            ", harnais=" + getHarnaisId() +
            ", planche=" + getPlancheId() +
            "}";
    }
}
