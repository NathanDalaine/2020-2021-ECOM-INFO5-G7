package com.ecom.app.service.mapper;

import com.ecom.app.domain.*;
import com.ecom.app.service.dto.VoileDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Voile} and its DTO {@link VoileDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface VoileMapper extends EntityMapper<VoileDTO, Voile> {



    default Voile fromId(Long id) {
        if (id == null) {
            return null;
        }
        Voile voile = new Voile();
        voile.setId(id);
        return voile;
    }
}
