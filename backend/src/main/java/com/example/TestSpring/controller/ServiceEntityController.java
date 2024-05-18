package com.example.TestSpring.controller;

import com.example.TestSpring.entity.ServiceEntity;
import com.example.TestSpring.service.ServiceEntityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/service")
public class ServiceEntityController {
    private final ServiceEntityService serviceService;

    @GetMapping
    public ResponseEntity<List<ServiceEntity>> getServiceEntity() {

        return serviceService.getService();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceEntity> getServiceEntity(@PathVariable Integer id) {
        return serviceService.getService(id);
    }

    @PostMapping
    public ResponseEntity<ServiceEntity> createServiceEntity(@RequestBody ServiceEntity service) throws URISyntaxException {
        return serviceService.createService(service);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServiceEntity> updateServiceEntity(@PathVariable Integer id, @RequestBody ServiceEntity service) {
        return serviceService.updateService(id, service);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteServiceEntity(@PathVariable Integer id) {
        return serviceService.deleteService(id);
    }

}
