package com.example.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.app.model.JobRequest;
import com.example.app.service.JobAnalysisService;

@RestController
@RequestMapping("/api/job")
@CrossOrigin(origins = "*")
public class JobAnalysisController {

    private final JobAnalysisService jobAnalysisService;

    @Autowired
    public JobAnalysisController(JobAnalysisService jobAnalysisService) {
        this.jobAnalysisService = jobAnalysisService;
    }

    @PostMapping("/analyze")
    public ResponseEntity<String> analyzeJobDescription(@RequestBody JobRequest jobRequest) {
        String response = jobAnalysisService.analyzeJobDescription(jobRequest);
        return ResponseEntity.ok(response);
    }
}
