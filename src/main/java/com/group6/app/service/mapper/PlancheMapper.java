package com.group6.app.service.mapper;

import com.group6.app.domain.*;
import com.group6.app.service.dto.PlancheDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Planche} and its DTO {@link PlancheDTO}.
 */
@Mapper(componentModel = "spring", uses = {ReservationMapper.class})
public interface PlancheMapper extends EntityMapper<PlancheDTO, Planche> {

    @Mapping(source = "reservation.id", target = "reservationId")
    PlancheDTO toDto(Planche planche);

    @Mapping(source = "reservationId", target = "reservation")
    @Mapping(target = "reservations", ignore = true)
    @Mapping(target = "removeReservation", ignore = true)
    Planche toEntity(PlancheDTO plancheDTO);

    default Planche fromId(Long id) {
        if (id == null) {
            return null;
        }
        Planche planche = new Planche();
        planche.setId(id);
        return planche;
    }
}
