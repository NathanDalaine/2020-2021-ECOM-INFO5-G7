package com.group6.app.service.dto;

import javax.validation.constraints.Size;

import static com.group6.app.web.rest.vm.ManagedUserVM.PASSWORD_MAX_LENGTH;
import static com.group6.app.web.rest.vm.ManagedUserVM.PASSWORD_MIN_LENGTH;

public class UserProfileVMDTO extends UserProfileDTO {
    @Size(min = PASSWORD_MIN_LENGTH, max = PASSWORD_MAX_LENGTH)
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
