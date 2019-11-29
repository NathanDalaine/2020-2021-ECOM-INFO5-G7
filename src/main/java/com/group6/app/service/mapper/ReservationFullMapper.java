package com.group6.app.service.mapper;

import com.group6.app.domain.Reservation;
import com.group6.app.service.dto.ReservationFullDTO;
import org.mapstruct.Mapper;

/**
 * Mapper for the entity {@link Reservation} and its DTO {@link ReservationFullDTO}.
 */
@Mapper(componentModel = "spring", uses = {VoileMapper.class, UserProfileMapper.class, CombinaisonMapper.class, HarnaisMapper.class, PlancheMapper.class})
public interface ReservationFullMapper extends EntityMapper<ReservationFullDTO, Reservation> {

    ReservationFullDTO toDto(Reservation reservation);

    Reservation toEntity(ReservationFullDTO reservationDTO);

    default Reservation fromId(Long id) {
        if (id == null) {
            return null;
        }
        Reservation reservation = new Reservation();
        reservation.setId(id);
        return reservation;
    }
}
