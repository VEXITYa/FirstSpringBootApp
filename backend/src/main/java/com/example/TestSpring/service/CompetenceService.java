package com.example.TestSpring.service;

import com.example.TestSpring.entity.Competence;
import com.example.TestSpring.repository.CompetenceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class CompetenceService {

    private final CompetenceRepository competenceRepository;

    public ResponseEntity<List<Competence>> getCompetence() {

        return new ResponseEntity<>(competenceRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Competence> getCompetence(Integer id) {
        var response = competenceRepository.findById(id);
        if(response.isPresent()){
            return new ResponseEntity<>(response.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Competence> createCompetence(Competence competence) throws URISyntaxException {
        Competence savedCompetence = competenceRepository.save(competence);
        return ResponseEntity.created(new URI("/competence/" + savedCompetence.getId())).body(savedCompetence);
    }

    public ResponseEntity<Competence> updateCompetence(Integer id, Competence competence) {
        Competence currentCompetence = competenceRepository.findById(id).orElseThrow(RuntimeException::new);
        currentCompetence.setServiceId(competence.getServiceId());
        currentCompetence.setEmployeeId(competence.getEmployeeId());
        currentCompetence = competenceRepository.save(competence);

        return ResponseEntity.ok(currentCompetence);
    }

    public ResponseEntity<Object> deleteCompetence(Integer id) {
        competenceRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}