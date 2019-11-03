package com.group6.app.service.mapper;

import com.group6.app.domain.*;
import com.group6.app.service.dto.ReservationDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Reservation} and its DTO {@link ReservationDTO}.
 */
@Mapper(componentModel = "spring", uses = {VoileMapper.class, UserProfileMapper.class, CombinaisonMapper.class, HarnaisMapper.class, PlancheMapper.class})
public interface ReservationMapper extends EntityMapper<ReservationDTO, Reservation> {

    @Mapping(source = "voile.id", target = "voileId")
    @Mapping(source = "userProfile.id", target = "userProfileId")
    @Mapping(source = "combinaison.id", target = "combinaisonId")
    @Mapping(source = "harnais.id", target = "harnaisId")
    @Mapping(source = "planche.id", target = "plancheId")
    ReservationDTO toDto(Reservation reservation);

    @Mapping(source = "voileId", target = "voile")
    @Mapping(source = "userProfileId", target = "userProfile")
    @Mapping(source = "combinaisonId", target = "combinaison")
    @Mapping(source = "harnaisId", target = "harnais")
    @Mapping(source = "plancheId", target = "planche")
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
