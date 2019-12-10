package com.group6.app.web.rest.errors;

import org.zalando.problem.AbstractThrowableProblem;
import org.zalando.problem.Status;

public class AlreadyReservedExeception extends AbstractThrowableProblem {
    public AlreadyReservedExeception(){
        super(ErrorConstants.ALREADY_RESERVED,"You still have a reservation in progress", Status.BAD_REQUEST);
    }
}
