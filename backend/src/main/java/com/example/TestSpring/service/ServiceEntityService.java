package com.example.TestSpring.service;

import com.example.TestSpring.entity.ServiceEntity;
import com.example.TestSpring.repository.ServiceEntityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class ServiceEntityService {

    private final ServiceEntityRepository serviceEntityRepository;

    public ResponseEntity<List<ServiceEntity>> getService() {

        return new ResponseEntity<>(serviceEntityRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<ServiceEntity> getService(Integer id) {
        var response = serviceEntityRepository.findById(id);
        if(response.isPresent()){
            return new ResponseEntity<>(response.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<ServiceEntity> createService(ServiceEntity serviceEntity) throws URISyntaxException {
        ServiceEntity savedService = serviceEntityRepository.save(serviceEntity);
        return ResponseEntity.created(new URI("/services/" + savedService.getId())).body(savedService);
    }

    public ResponseEntity<ServiceEntity> updateService(Integer id, ServiceEntity serviceEntity) {
        ServiceEntity currentService = serviceEntityRepository.findById(id).orElseThrow(RuntimeException::new);
        currentService.setName(serviceEntity.getName());
        currentService.setPrice(serviceEntity.getPrice());
        currentService = serviceEntityRepository.save(serviceEntity);

        return ResponseEntity.ok(currentService);
    }

    public ResponseEntity<Object> deleteService(Integer id) {
        serviceEntityRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}