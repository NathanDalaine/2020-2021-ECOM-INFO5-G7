package com.ecom.app.repository;
import com.ecom.app.domain.Voile;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Voile entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VoileRepository extends JpaRepository<Voile, Long> {

}
