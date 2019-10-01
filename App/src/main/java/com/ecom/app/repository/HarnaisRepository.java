package com.ecom.app.repository;
import com.ecom.app.domain.Harnais;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Harnais entity.
 */
@SuppressWarnings("unused")
@Repository
public interface HarnaisRepository extends JpaRepository<Harnais, Long> {

}
