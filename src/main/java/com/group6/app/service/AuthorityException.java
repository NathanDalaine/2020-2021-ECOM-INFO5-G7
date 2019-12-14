package com.group6.app.service;

public class AuthorityException extends RuntimeException {
    public AuthorityException() {
        super("You don't have the access necessary");
    }
}
