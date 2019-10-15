package com.group6.app.service.mapper;

import com.group6.app.domain.*;
import com.group6.app.service.dto.CombinaisonDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Combinaison} and its DTO {@link CombinaisonDTO}.
 */
@Mapper(componentModel = "spring", uses = {ReservationMapper.class})
public interface CombinaisonMapper extends EntityMapper<CombinaisonDTO, Combinaison> {

    @Mapping(source = "reservation.id", target = "reservationId")
    CombinaisonDTO toDto(Combinaison combinaison);

    @Mapping(source = "reservationId", target = "reservation")
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
