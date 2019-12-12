package com.group6.app.repository;
import com.group6.app.domain.Voile;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data  repository for the Voile entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VoileRepository extends JpaRepository<Voile, Long> {
    List<Voile> findByEtatNot(String etat);
}
