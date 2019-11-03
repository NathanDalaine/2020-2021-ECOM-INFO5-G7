package com.group6.app.service.dto;
import java.time.Instant;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.group6.app.domain.Reservation} entity.
 */
public class ReservationDTO implements Serializable {

    private Long id;

    private Instant dateReservation;

    private Instant dateRendu;

    private String remarques;

    private String createdBy;

    private String updatedBy;

    private String deletedBy;

    private Instant createdAt;

    private Instant updatedAt;

    private Instant deletedAt;


    private Long voileId;

    private Long userProfileId;

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

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public String getDeletedBy() {
        return deletedBy;
    }

    public void setDeletedBy(String deletedBy) {
        this.deletedBy = deletedBy;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Instant getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt(Instant deletedAt) {
        this.deletedAt = deletedAt;
    }

    public Long getVoileId() {
        return voileId;
    }

    public void setVoileId(Long voileId) {
        this.voileId = voileId;
    }

    public Long getUserProfileId() {
        return userProfileId;
    }

    public void setUserProfileId(Long userProfileId) {
        this.userProfileId = userProfileId;
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
            ", createdBy='" + getCreatedBy() + "'" +
            ", updatedBy='" + getUpdatedBy() + "'" +
            ", deletedBy='" + getDeletedBy() + "'" +
            ", createdAt='" + getCreatedAt() + "'" +
            ", updatedAt='" + getUpdatedAt() + "'" +
            ", deletedAt='" + getDeletedAt() + "'" +
            ", voile=" + getVoileId() +
            ", userProfile=" + getUserProfileId() +
            ", combinaison=" + getCombinaisonId() +
            ", harnais=" + getHarnaisId() +
            ", planche=" + getPlancheId() +
            "}";
    }
}
