package com.example.TestSpring.controller;

import com.example.TestSpring.entity.Service;
import com.example.TestSpring.repository.ServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/services")
public class ServiceController {

    private final ServiceRepository serviceRepository;

    @GetMapping
    public List<Service> getServices() {
        return serviceRepository.findAll();
    }

    @GetMapping("/{id}")
    public Service getService(@PathVariable Integer id) {
        return serviceRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createService(@RequestBody Service Service) throws URISyntaxException {
        Service savedService = serviceRepository.save(Service);
        return ResponseEntity.created(new URI("/services/" + savedService.getId())).body(savedService);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateService(@PathVariable Integer id, @RequestBody Service Service) {
        Service currentService = serviceRepository.findById(id).orElseThrow(RuntimeException::new);
        currentService.setName(Service.getName());
        currentService.setPrice(Service.getPrice());
        currentService = serviceRepository.save(Service);

        return ResponseEntity.ok(currentService);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteService(@PathVariable Integer id) {
        serviceRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
