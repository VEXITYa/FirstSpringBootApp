package com.example.TestSpring.controller;


import com.example.TestSpring.entity.Car;
import com.example.TestSpring.entity.UpdateServiceRequest;
import com.example.TestSpring.entity.ViewService;
import com.example.TestSpring.service.ViewServiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/viewService")
public class ViewServiceController {

    private final ViewServiceService viewServiceService;


    @GetMapping
    public ResponseEntity<List<ViewService>> getCars() {

        return viewServiceService.getViewServices();
    }
    @PutMapping
    public ResponseEntity<HttpStatus> updateServicePrice(@RequestBody UpdateServiceRequest request) {
        return viewServiceService.updateServicePrice(request.getName(), request.getPrice());
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteServiceByName(@RequestBody String name) {
        return viewServiceService.deleteServiceByName(name);
    }
}
