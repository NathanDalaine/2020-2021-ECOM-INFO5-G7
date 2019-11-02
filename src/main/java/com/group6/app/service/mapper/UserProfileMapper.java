package com.group6.app.service.mapper;

import com.group6.app.domain.*;
import com.group6.app.service.dto.UserProfileDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link UserProfile} and its DTO {@link UserProfileDTO}.
 */
@Mapper(componentModel = "spring", uses = {ReservationMapper.class})
public interface UserProfileMapper extends EntityMapper<UserProfileDTO, UserProfile> {

    @Mapping(source = "reservation.id", target = "reservationId")
    UserProfileDTO toDto(UserProfile userProfile);

    @Mapping(source = "reservationId", target = "reservation")
    @Mapping(target = "reservations", ignore = true)
    @Mapping(target = "removeReservation", ignore = true)
    UserProfile toEntity(UserProfileDTO userProfileDTO);

    default UserProfile fromId(Long id) {
        if (id == null) {
            return null;
        }
        UserProfile userProfile = new UserProfile();
        userProfile.setId(id);
        return userProfile;
    }
}
