package com.ecom.app.service.mapper;

import com.ecom.app.domain.*;
import com.ecom.app.service.dto.PlancheDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Planche} and its DTO {@link PlancheDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface PlancheMapper extends EntityMapper<PlancheDTO, Planche> {



    default Planche fromId(Long id) {
        if (id == null) {
            return null;
        }
        Planche planche = new Planche();
        planche.setId(id);
        return planche;
    }
}
