package com.group6.app.service.mapper;

import com.group6.app.domain.*;
import com.group6.app.service.dto.CombinaisonDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Combinaison} and its DTO {@link CombinaisonDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CombinaisonMapper extends EntityMapper<CombinaisonDTO, Combinaison> {


    @Mapping(target = "reservations", ignore = true)
    @Mapping(target = "removeReservation", ignore = true)
    Combinaison toEntity(CombinaisonDTO combinaisonDTO);

    default Combinaison fromId(Long id) {
        if (id == null) {
            return null;
        }
        Combinaison combinaison = new Combinaison();
        combinaison.setId(id);
        return combinaison;
    }
}
