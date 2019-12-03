package com.group6.app.web.rest.errors;

import org.zalando.problem.AbstractThrowableProblem;
import org.zalando.problem.Status;

public class NoHarnessAvailableException extends AbstractThrowableProblem {
    public NoHarnessAvailableException(){
        super(ErrorConstants.NO_HARNESS_AVAILABLE,"There is no harness available", Status.BAD_REQUEST);
    }
}
