package com.example.app.model;

public class ProjectRequest {
    private String domain;
    private String technology;
    private String userLevel;

    // Constructors
    public ProjectRequest() {}

    public ProjectRequest(String domain, String technology, String userLevel) {
        this.domain = domain;
        this.technology = technology;
        this.userLevel = userLevel;
    }

    // Getters and Setters
    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getTechnology() {
        return technology;
    }

    public void setTechnology(String technology) {
        this.technology = technology;
    }

    public String getUserLevel() {
        return userLevel;
    }

    public void setUserLevel(String userLevel) {
        this.userLevel = userLevel;
    }
}
