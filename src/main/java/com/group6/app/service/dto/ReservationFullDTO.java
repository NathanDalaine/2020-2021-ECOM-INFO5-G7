package com.group6.app.service.dto;

import com.group6.app.domain.*;

import java.io.Serializable;
import java.time.Instant;

public class ReservationFullDTO implements Serializable {
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

    private VoileDTO voile;

    private UserProfileDTO userProfile;

    private CombinaisonDTO combinaison;

    private HarnaisDTO harnais;

    private PlancheDTO planche;

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

    public VoileDTO getVoile() {
        return voile;
    }

    public void setVoile(VoileDTO voile) {
        this.voile = voile;
    }

    public UserProfileDTO getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfileDTO userProfile) {
        this.userProfile = userProfile;
    }

    public CombinaisonDTO getCombinaison() {
        return combinaison;
    }

    public void setCombinaison(CombinaisonDTO combinaison) {
        this.combinaison = combinaison;
    }

    public HarnaisDTO getHarnais() {
        return harnais;
    }

    public void setHarnais(Harnais harnaisDTO) {
        this.harnais = harnais;
    }

    public PlancheDTO getPlanche() {
        return planche;
    }

    public void setPlanche(PlancheDTO planche) {
        this.planche = planche;
    }
}
