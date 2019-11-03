package com.group6.app.service.mapper;

import com.group6.app.domain.*;
import com.group6.app.service.dto.VoileDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Voile} and its DTO {@link VoileDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface VoileMapper extends EntityMapper<VoileDTO, Voile> {


    @Mapping(target = "reservations", ignore = true)
    @Mapping(target = "removeReservation", ignore = true)
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
