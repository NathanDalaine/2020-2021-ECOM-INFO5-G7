package com.group6.app.repository;
import com.group6.app.domain.Authority;
import com.group6.app.domain.UserProfile;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data  repository for the UserProfile entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
   UserProfile findByUserLogin(String login);
   List<UserProfile> findByUserAuthoritiesNameEquals(String authority);
}
