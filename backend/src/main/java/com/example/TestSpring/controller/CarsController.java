package com.example.TestSpring.controller;

import com.example.TestSpring.entity.Car;
import com.example.TestSpring.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/cars")
public class CarsController {

    private final CarRepository carRepository;

    @GetMapping
    public List<Car> getCars() {
        return carRepository.findAll();
    }

    @GetMapping("/{id}")
    public Car getCar(@PathVariable Integer id) {
        return carRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createCar(@RequestBody Car Car) throws URISyntaxException {
        Car savedCar = carRepository.save(Car);
        return ResponseEntity.created(new URI("/cars/" + savedCar.getId())).body(savedCar);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateCar(@PathVariable Integer id, @RequestBody Car Car) {
        Car currentCar = carRepository.findById(id).orElseThrow(RuntimeException::new);
        currentCar.setVin(Car.getVin());
        currentCar.setClientId(Car.getClientId());
        currentCar.setBrand(Car.getBrand());
        currentCar.setModel(Car.getModel());
        currentCar.setYear(Car.getYear());
        currentCar = carRepository.save(Car);

        return ResponseEntity.ok(currentCar);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCar(@PathVariable Integer id) {
        carRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
