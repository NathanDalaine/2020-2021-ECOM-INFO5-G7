package com.group6.app.service.mapper;

import com.group6.app.domain.*;
import com.group6.app.service.dto.VoileDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Voile} and its DTO {@link VoileDTO}.
 */
@Mapper(componentModel = "spring", uses = {ReservationMapper.class})
public interface VoileMapper extends EntityMapper<VoileDTO, Voile> {

    @Mapping(source = "reservation.id", target = "reservationId")
    VoileDTO toDto(Voile voile);

    @Mapping(source = "reservationId", target = "reservation")
    Voile toEntity(VoileDTO voileDTO);

    default Voile fromId(Long id) {
        if (id == null) {
            return null;
        }
        Voile voile = new Voile();
        voile.setId(id);
        return voile;
    }
}