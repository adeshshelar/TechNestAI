package com.example.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.app.model.CodeRequest;
import com.example.app.service.CodeGeneratorService;

@RestController
@RequestMapping("/api/code")
@CrossOrigin(origins = "*")
public class CodeController {

    private final CodeGeneratorService codeGeneratorService;

    @Autowired
    public CodeController(CodeGeneratorService codeGeneratorService) {
        this.codeGeneratorService = codeGeneratorService;
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateCode(@RequestBody CodeRequest codeRequest) {
        String response = codeGeneratorService.generateCode(codeRequest);
        return ResponseEntity.ok(response);
    }
}
