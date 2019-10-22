package com.group6.app.repository;
import com.group6.app.domain.Combinaison;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Combinaison entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CombinaisonRepository extends JpaRepository<Combinaison, Long> {

}
