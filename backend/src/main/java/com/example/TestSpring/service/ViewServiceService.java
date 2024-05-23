package com.example.TestSpring.service;

import com.example.TestSpring.entity.ViewService;
import com.example.TestSpring.repository.CarRepository;
import com.example.TestSpring.repository.ViewServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ViewServiceService {

    private final ViewServiceRepository viewServiceRepository;

    public ResponseEntity<List<ViewService>> getViewServices() {
        return new ResponseEntity<>(viewServiceRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<HttpStatus> updateServicePrice(String name, Integer price) {
        viewServiceRepository.updateServicePrice(name, price);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ResponseEntity<Void> deleteServiceByName(String name) {
        viewServiceRepository.deleteServiceByName(name);
        return ResponseEntity.ok().build();
    }
}
