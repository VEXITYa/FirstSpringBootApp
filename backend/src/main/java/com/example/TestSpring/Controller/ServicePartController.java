package com.example.TestSpring.Controller;

import com.example.TestSpring.Entity.ServicePart;
import com.example.TestSpring.Repository.ServicePartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/servicepart")
public class ServicePartController {

    private final ServicePartRepository servicePartRepository;

    @GetMapping
    public List<ServicePart> getServiceParts() {
        return servicePartRepository.findAll();
    }

    @GetMapping("/{id}")
    public ServicePart getServicePart(@PathVariable Integer id) {
        return servicePartRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createServicePart(@RequestBody ServicePart ServicePart) throws URISyntaxException {
        ServicePart savedServicePart = servicePartRepository.save(ServicePart);
        return ResponseEntity.created(new URI("/ServiceParts/" + savedServicePart.getId())).body(savedServicePart);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateServicePart(@PathVariable Integer id, @RequestBody ServicePart ServicePart) {
        ServicePart currentServicePart = servicePartRepository.findById(id).orElseThrow(RuntimeException::new);
        currentServicePart.setService(ServicePart.getService());
        currentServicePart.setPart(ServicePart.getPart());
        currentServicePart = servicePartRepository.save(ServicePart);

        return ResponseEntity.ok(currentServicePart);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteServicePart(@PathVariable Integer id) {
        servicePartRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
