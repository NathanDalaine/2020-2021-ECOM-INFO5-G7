package com.group6.app.repository;
import com.group6.app.domain.Combinaison;
import com.group6.app.domain.Harnais;
import com.group6.app.domain.Reservation;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Reservation entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    Reservation findDistinctFirstByHarnaisAndDateRenduIsNull(Harnais harnais);
    Reservation findDistinctFirstByCombinaisonAndDateRenduIsNull(Combinaison combinaison);
}
