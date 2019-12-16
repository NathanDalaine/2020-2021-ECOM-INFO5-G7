package com.group6.app.repository;
import com.group6.app.domain.Combinaison;
import com.group6.app.domain.Harnais;
import com.group6.app.domain.enumeration.Taille;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data  repository for the Combinaison entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CombinaisonRepository extends JpaRepository<Combinaison, Long> {

    List<Combinaison> findByTaille(Taille taille);
}
