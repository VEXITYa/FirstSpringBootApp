package com.example.TestSpring.Controller;

import com.example.TestSpring.Entity.Part;
import com.example.TestSpring.Repository.PartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/parts")
public class PartController {

    private final PartRepository partRepository;

    @GetMapping
    public List<Part> getParts() {
        return partRepository.findAll();
    }

    @GetMapping("/{id}")
    public Part getPart(@PathVariable Integer id) {
        return partRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createPart(@RequestBody Part Part) throws URISyntaxException {
        Part savedPart = partRepository.save(Part);
        return ResponseEntity.created(new URI("/Parts/" + savedPart.getId())).body(savedPart);
    }

    @PutMapping("/{id}")
    public ResponseEntity updatePart(@PathVariable Integer id, @RequestBody Part Part) {
        Part currentPart = partRepository.findById(id).orElseThrow(RuntimeException::new);
        currentPart.setVendorCode(Part.getVendorCode());
        currentPart.setName(Part.getName());
        currentPart.setBrand(Part.getCarBrand());
        currentPart.setCount(Part.getCount());
        currentPart.setPrice(Part.getPrice());
        currentPart = partRepository.save(Part);

        return ResponseEntity.ok(currentPart);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletePart(@PathVariable Integer id) {
        partRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
