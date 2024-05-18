package com.example.TestSpring.controller;

import com.example.TestSpring.entity.Competence;
import com.example.TestSpring.service.CompetenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/competence")
public class CompetenceController {
    private final CompetenceService competenceService;

    @GetMapping
    public ResponseEntity<List<Competence>> getCompetence() {

        return competenceService.getCompetence();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Competence> getCompetence(@PathVariable Integer id) {
        return competenceService.getCompetence(id);
    }

    @PostMapping
    public ResponseEntity<Competence> createCompetence(@RequestBody Competence competence) throws URISyntaxException {
        return competenceService.createCompetence(competence);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Competence> updateCompetence(@PathVariable Integer id, @RequestBody Competence competence) {
        return competenceService.updateCompetence(id, competence);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteCompetence(@PathVariable Integer id) {
        return competenceService.deleteCompetence(id);
    }

}
