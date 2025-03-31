package com.example.app.model;

public class JobRequest {
    private String jobDescription;

    public JobRequest() {
    }

    public JobRequest(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }
}
