package com.example.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.app.model.EmailRequest;
import com.example.app.service.EmailGeneratorService;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins="*")
public class EmailController {

    private final EmailGeneratorService emailGeneratorService;

    @Autowired
    public EmailController(EmailGeneratorService emailGeneratorService) {
        this.emailGeneratorService = emailGeneratorService;
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        String response = emailGeneratorService.generateEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }
}
