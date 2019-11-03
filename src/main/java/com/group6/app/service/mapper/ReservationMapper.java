package com.group6.app.service.mapper;

import com.group6.app.domain.*;
import com.group6.app.service.dto.ReservationDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Reservation} and its DTO {@link ReservationDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ReservationMapper extends EntityMapper<ReservationDTO, Reservation> {


    @Mapping(target = "voiles", ignore = true)
    @Mapping(target = "removeVoile", ignore = true)
    @Mapping(target = "users", ignore = true)
    @Mapping(target = "removeUser", ignore = true)
    @Mapping(target = "combinaisons", ignore = true)
    @Mapping(target = "removeCombinaison", ignore = true)
    @Mapping(target = "harnais", ignore = true)
    @Mapping(target = "removeHarnais", ignore = true)
    @Mapping(target = "planches", ignore = true)
    @Mapping(target = "removePlanche", ignore = true)
    Reservation toEntity(ReservationDTO reservationDTO);

    default Reservation fromId(Long id) {
        if (id == null) {
            return null;
        }
        Reservation reservation = new Reservation();
        reservation.setId(id);
        return reservation;
    }
}
