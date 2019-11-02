package com.group6.app.service.mapper;

import com.group6.app.domain.*;
import com.group6.app.service.dto.HarnaisDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Harnais} and its DTO {@link HarnaisDTO}.
 */
@Mapper(componentModel = "spring", uses = {ReservationMapper.class})
public interface HarnaisMapper extends EntityMapper<HarnaisDTO, Harnais> {

    @Mapping(source = "reservation.id", target = "reservationId")
    HarnaisDTO toDto(Harnais harnais);

    @Mapping(source = "reservationId", target = "reservation")
    @Mapping(target = "reservations", ignore = true)
    @Mapping(target = "removeReservation", ignore = true)
    Harnais toEntity(HarnaisDTO harnaisDTO);

    default Harnais fromId(Long id) {
        if (id == null) {
            return null;
        }
        Harnais harnais = new Harnais();
        harnais.setId(id);
        return harnais;
    }
}
