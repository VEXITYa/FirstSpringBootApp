package com.example.TestSpring.service;

import com.example.TestSpring.entity.Part;
import com.example.TestSpring.repository.PartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class PartService {

    private final PartRepository partRepository;

    public ResponseEntity<List<Part>> getParts() {

        return new ResponseEntity<>(partRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Part> getPart(Integer id) {
        var response = partRepository.findById(id);
        if(response.isPresent()){
            return new ResponseEntity<>(response.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Part> createPart(Part part) throws URISyntaxException {
        Part savedPart = partRepository.save(part);
        return ResponseEntity.created(new URI("/parts/" + savedPart.getId())).body(savedPart);
    }

    public ResponseEntity<Part> updatePart(Integer id, Part part) {
        Part currentPart = partRepository.findById(id).orElseThrow(RuntimeException::new);
        currentPart.setVendorCode(part.getVendorCode());
        currentPart.setName(part.getName());
        currentPart.setBrand(part.getBrand());
        currentPart.setCarBrand(part.getCarBrand());
        currentPart.setCount(part.getCount());
        currentPart.setPrice(part.getPrice());
        currentPart = partRepository.save(part);

        return ResponseEntity.ok(currentPart);
    }

    public ResponseEntity<Object> deletePart(Integer id) {
        partRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}