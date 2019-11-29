package com.group6.app.repository;
import com.group6.app.domain.Harnais;
import com.group6.app.domain.enumeration.Taille;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Harnais entity.
 */
@SuppressWarnings("unused")
@Repository
public interface HarnaisRepository extends JpaRepository<Harnais, Long> {
    Harnais findDistinctFirstByTailleAndReservationsIsNull(Taille taille);
}
