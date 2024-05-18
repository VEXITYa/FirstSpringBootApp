package com.example.TestSpring.controller;

import com.example.TestSpring.entity.ServicePart;
import com.example.TestSpring.service.ServicePartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/servicePart")
public class ServicePartController {
    private final ServicePartService servicePartService;

    @GetMapping
    public ResponseEntity<List<ServicePart>> getServicePart() {

        return servicePartService.getServicePart();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServicePart> getServicePart(@PathVariable Integer id) {
        return servicePartService.getServicePart(id);
    }

    @PostMapping
    public ResponseEntity<ServicePart> createServicePart(@RequestBody ServicePart servicePart) throws URISyntaxException {
        return servicePartService.createServicePart(servicePart);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServicePart> updateServicePart(@PathVariable Integer id, @RequestBody ServicePart servicePart) {
        return servicePartService.updateServicePart(id, servicePart);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteServicePart(@PathVariable Integer id) {
        return servicePartService.deleteServicePart(id);
    }

}
