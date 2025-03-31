package com.example.app.controller;

import com.example.app.model.ProjectRequest;
import com.example.app.service.ProjectIdeaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    private final ProjectIdeaService projectIdeaService;

    @Autowired
    public ProjectController(ProjectIdeaService projectIdeaService) {
        this.projectIdeaService = projectIdeaService;
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateProjectIdeas(@RequestBody ProjectRequest projectIdeaRequest) {
        String response = projectIdeaService.generateProjectIdeas(projectIdeaRequest);
        return ResponseEntity.ok(response);
    }
}
