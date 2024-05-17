package com.example.TestSpring.controller;

import com.example.TestSpring.entity.Car;
import com.example.TestSpring.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/cars")
public class CarController {
    private final CarService carService;

    @GetMapping
    public ResponseEntity<List<Car>> getCars() {

        return carService.getCars();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getCar(@PathVariable Integer id) {
        return carService.getCar(id);
    }

    @Secured("ROLE_ADMIN")
    @PostMapping
    public ResponseEntity<Car> createCar(@RequestBody Car car) throws URISyntaxException {
        return carService.createCar(car);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Integer id, @RequestBody Car car) {
        return carService.updateCar(id, car);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteCar(@PathVariable Integer id) {
        return carService.deleteCar(id);
    }

}
