package com.group6.app.web.rest.errors;

import java.net.URI;

public final class ErrorConstants {

    public static final String ERR_CONCURRENCY_FAILURE = "error.concurrencyFailure";
    public static final String ERR_VALIDATION = "error.validation";
    public static final String PROBLEM_BASE_URL = "https://www.jhipster.tech/problem";
    public static final URI DEFAULT_TYPE = URI.create(PROBLEM_BASE_URL + "/problem-with-message");
    public static final URI CONSTRAINT_VIOLATION_TYPE = URI.create(PROBLEM_BASE_URL + "/constraint-violation");
    public static final URI ENTITY_NOT_FOUND_TYPE = URI.create(PROBLEM_BASE_URL + "/entity-not-found");
    public static final URI INVALID_PASSWORD_TYPE = URI.create(PROBLEM_BASE_URL + "/invalid-password");
    public static final URI EMAIL_ALREADY_USED_TYPE = URI.create(PROBLEM_BASE_URL + "/email-already-used");
    public static final URI LOGIN_ALREADY_USED_TYPE = URI.create(PROBLEM_BASE_URL + "/login-already-used");
    public static final URI EMAIL_NOT_FOUND_TYPE = URI.create(PROBLEM_BASE_URL + "/email-not-found");
    public static final URI INVALID_AUTHORITY_TYPE = URI.create(PROBLEM_BASE_URL + "/invalid-authority");
    public static final URI NO_HARNESS_AVAILABLE = URI.create(PROBLEM_BASE_URL + "/no-harness-available");
    public static final URI NO_WETSUIT_AVAILABLE = URI.create(PROBLEM_BASE_URL + "/no-wetsuit-available");
    public static final URI DUE_DATE_PASSED = URI.create(PROBLEM_BASE_URL + "/due-date-passed");
    public static final URI ALREADY_RESERVED = URI.create(PROBLEM_BASE_URL + "/already-reserved");

    private ErrorConstants() {
    }
}
