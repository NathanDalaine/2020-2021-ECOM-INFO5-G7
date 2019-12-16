package com.group6.app.repository;
import com.group6.app.domain.Harnais;
import com.group6.app.domain.enumeration.Taille;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data  repository for the Harnais entity.
 */
@SuppressWarnings("unused")
@Repository
public interface HarnaisRepository extends JpaRepository<Harnais, Long> {
    List<Harnais> findByTaille(Taille taille);
}
