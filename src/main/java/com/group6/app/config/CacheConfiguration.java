package com.group6.app.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import org.hibernate.cache.jcache.ConfigSettings;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.boot.autoconfigure.orm.jpa.HibernatePropertiesCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache = jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public HibernatePropertiesCustomizer hibernatePropertiesCustomizer(javax.cache.CacheManager cacheManager) {
        return hibernateProperties -> hibernateProperties.put(ConfigSettings.CACHE_MANAGER, cacheManager);
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            createCache(cm, com.group6.app.repository.UserRepository.USERS_BY_LOGIN_CACHE);
            createCache(cm, com.group6.app.repository.UserRepository.USERS_BY_EMAIL_CACHE);
            createCache(cm, com.group6.app.domain.User.class.getName());
            createCache(cm, com.group6.app.domain.Authority.class.getName());
            createCache(cm, com.group6.app.domain.User.class.getName() + ".authorities");
            createCache(cm, com.group6.app.domain.Combinaison.class.getName());
            createCache(cm, com.group6.app.domain.Harnais.class.getName());
            createCache(cm, com.group6.app.domain.Planche.class.getName());
            createCache(cm, com.group6.app.domain.Voile.class.getName());
            createCache(cm, com.group6.app.domain.Reservation.class.getName());
            createCache(cm, com.group6.app.domain.Reservation.class.getName() + ".voiles");
            createCache(cm, com.group6.app.domain.Reservation.class.getName() + ".users");
            createCache(cm, com.group6.app.domain.Reservation.class.getName() + ".combinaisons");
            createCache(cm, com.group6.app.domain.Reservation.class.getName() + ".harnais");
            createCache(cm, com.group6.app.domain.Reservation.class.getName() + ".planches");
            createCache(cm, com.group6.app.domain.UserProfile.class.getName());
            createCache(cm, com.group6.app.domain.Voile.class.getName() + ".reservations");
            createCache(cm, com.group6.app.domain.UserProfile.class.getName() + ".reservations");
            createCache(cm, com.group6.app.domain.Planche.class.getName() + ".reservations");
            createCache(cm, com.group6.app.domain.Harnais.class.getName() + ".reservations");
            createCache(cm, com.group6.app.domain.Combinaison.class.getName() + ".reservations");
            // jhipster-needle-ehcache-add-entry
        };
    }

    private void createCache(javax.cache.CacheManager cm, String cacheName) {
        javax.cache.Cache<Object, Object> cache = cm.getCache(cacheName);
        if (cache != null) {
            cm.destroyCache(cacheName);
        }
        cm.createCache(cacheName, jcacheConfiguration);
    }
}
