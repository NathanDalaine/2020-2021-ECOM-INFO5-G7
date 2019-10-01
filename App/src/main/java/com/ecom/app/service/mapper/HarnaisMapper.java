package com.ecom.app.service.mapper;

import com.ecom.app.domain.*;
import com.ecom.app.service.dto.HarnaisDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Harnais} and its DTO {@link HarnaisDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface HarnaisMapper extends EntityMapper<HarnaisDTO, Harnais> {



    default Harnais fromId(Long id) {
        if (id == null) {
            return null;
        }
        Harnais harnais = new Harnais();
        harnais.setId(id);
        return harnais;
    }
}
