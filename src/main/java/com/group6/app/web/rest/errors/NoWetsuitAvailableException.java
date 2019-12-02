package com.group6.app.web.rest.errors;

import org.zalando.problem.AbstractThrowableProblem;
import org.zalando.problem.Status;

public class NoWetsuitAvailableException extends AbstractThrowableProblem {
    public NoWetsuitAvailableException(){
        super(ErrorConstants.NO_WETSUIT_AVAILABLE,"There is no wetsuit available", Status.BAD_REQUEST);
    }
}
