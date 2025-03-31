package com.example.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.app.model.QuestionRequest;
import com.example.app.service.QuestionGeneratorService;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins="*")
public class QuestionController {

    private final QuestionGeneratorService questionService;

    @Autowired
    public QuestionController(QuestionGeneratorService questionService) {
        this.questionService = questionService;
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateQuestions(@RequestBody QuestionRequest request) {
        String response = questionService.generateInterviewQuestions(request);
        return ResponseEntity.ok(response);
    }
}
