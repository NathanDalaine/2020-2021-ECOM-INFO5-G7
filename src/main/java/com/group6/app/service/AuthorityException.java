package com.group6.app.web.rest.errors;

import org.zalando.problem.AbstractThrowableProblem;
import org.zalando.problem.Status;

public class AuthorityException extends AbstractThrowableProblem {
    public AuthorityException() {
        super(ErrorConstants.INVALID_AUTHORITY_TYPE,"You don't have the access necessary",Status.BAD_REQUEST);
    }
}
