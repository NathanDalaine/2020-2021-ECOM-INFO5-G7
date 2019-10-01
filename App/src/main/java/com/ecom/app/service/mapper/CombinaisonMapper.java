package com.ecom.app.service.mapper;

import com.ecom.app.domain.*;
import com.ecom.app.service.dto.CombinaisonDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Combinaison} and its DTO {@link CombinaisonDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CombinaisonMapper extends EntityMapper<CombinaisonDTO, Combinaison> {



    default Combinaison fromId(Long id) {
        if (id == null) {
            return null;
        }
        Combinaison combinaison = new Combinaison();
        combinaison.setId(id);
        return combinaison;
    }
}
