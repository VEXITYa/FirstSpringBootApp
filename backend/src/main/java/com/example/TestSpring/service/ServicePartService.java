package com.example.TestSpring.service;

import com.example.TestSpring.entity.ServicePart;
import com.example.TestSpring.repository.ServicePartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class ServicePartService {

    private final ServicePartRepository servicePartRepository;

    public ResponseEntity<List<ServicePart>> getServicePart() {

        return new ResponseEntity<>(servicePartRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<ServicePart> getServicePart(Integer id) {
        var response = servicePartRepository.findById(id);
        if(response.isPresent()){
            return new ResponseEntity<>(response.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<ServicePart> createServicePart(ServicePart servicePart) throws URISyntaxException {
        ServicePart savedService = servicePartRepository.save(servicePart);
        return ResponseEntity.created(new URI("/services/" + savedService.getId())).body(savedService);
    }

    public ResponseEntity<ServicePart> updateServicePart(Integer id, ServicePart servicePart) {
        ServicePart currentService = servicePartRepository.findById(id).orElseThrow(RuntimeException::new);
        currentService.setServiceId(servicePart.getServiceId());
        currentService.setPartId(servicePart.getPartId());
        currentService = servicePartRepository.save(servicePart);

        return ResponseEntity.ok(currentService);
    }

    public ResponseEntity<Object> deleteServicePart(Integer id) {
        servicePartRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}