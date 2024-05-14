package com.example.TestSpring.controller;

import com.example.TestSpring.entity.Competence;
import com.example.TestSpring.repository.CompetenceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/competence")
public class CompetenceController {

    private final CompetenceRepository competenceRepository;

    @GetMapping
    public List<Competence> getCompetences() {
        return competenceRepository.findAll();
    }

    @GetMapping("/{id}")
    public Competence getCompetence(@PathVariable Integer id) {
        return competenceRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createCompetence(@RequestBody Competence Competence) throws URISyntaxException {
        Competence savedCompetence = competenceRepository.save(Competence);
        return ResponseEntity.created(new URI("/competence/" + savedCompetence.getId())).body(savedCompetence);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateCompetence(@PathVariable Integer id, @RequestBody Competence Competence) {
        Competence currentCompetence = competenceRepository.findById(id).orElseThrow(RuntimeException::new);
        currentCompetence.setService(Competence.getService());
        currentCompetence.setEmployee(Competence.getEmployee());
        currentCompetence = competenceRepository.save(Competence);

        return ResponseEntity.ok(currentCompetence);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCompetence(@PathVariable Integer id) {
        competenceRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
