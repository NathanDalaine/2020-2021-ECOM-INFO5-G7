package com.group6.app.web.rest.errors;

import org.zalando.problem.AbstractThrowableProblem;
import org.zalando.problem.Status;

public class DueDatePassedException extends AbstractThrowableProblem {
    public DueDatePassedException(){
        super(ErrorConstants.DUE_DATE_PASSED,"Due date has passed", Status.BAD_REQUEST);
    }
}
