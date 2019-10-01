package com.ecom.app.repository;
import com.ecom.app.domain.Planche;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Planche entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PlancheRepository extends JpaRepository<Planche, Long> {

}
