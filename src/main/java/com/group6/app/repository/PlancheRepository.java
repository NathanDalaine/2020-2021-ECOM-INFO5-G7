package com.group6.app.repository;
import com.group6.app.domain.Planche;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data  repository for the Planche entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PlancheRepository extends JpaRepository<Planche, Long> {
    List<Planche> findByEtatNot(String etat);
}
