package com.example.app.model;

public class CodeRequest {
    private String question;
    private String language;

    // Default Constructor
    public CodeRequest() {
    }

    public CodeRequest(String question, String language) {
        this.question = question;
        this.language = language;
    }

   
    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getLanguage() {  // Corrected method name
        return language;
    }

    public void setLanguage(String language) {  // Corrected method name
        this.language = language;
    }
}
