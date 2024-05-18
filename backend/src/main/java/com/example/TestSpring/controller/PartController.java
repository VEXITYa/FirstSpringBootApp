package com.example.TestSpring.controller;

import com.example.TestSpring.entity.Part;
import com.example.TestSpring.service.PartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/parts")
public class PartController {
    private final PartService partService;

    @GetMapping
    public ResponseEntity<List<Part>> getParts() {

        return partService.getParts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Part> getPart(@PathVariable Integer id) {
        return partService.getPart(id);
    }

    @PostMapping
    public ResponseEntity<Part> createPart(@RequestBody Part part) throws URISyntaxException {
        return partService.createPart(part);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Part> updatePart(@PathVariable Integer id, @RequestBody Part part) {
        return partService.updatePart(id, part);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePart(@PathVariable Integer id) {
        return partService.deletePart(id);
    }

}
