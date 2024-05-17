package com.example.TestSpring.service;

import com.example.TestSpring.entity.Car;
import com.example.TestSpring.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepository carRepository;

    public ResponseEntity<List<Car>> getCars() {

        return new ResponseEntity<>(carRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Car> getCar(Integer id) {
        var response = carRepository.findById(id);
        if(response.isPresent()){
            return new ResponseEntity<>(response.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Car> createCar(Car car) throws URISyntaxException {
        Car savedCar = carRepository.save(car);
        return ResponseEntity.created(new URI("/cars/" + savedCar.getId())).body(savedCar);
    }

    public ResponseEntity<Car> updateCar(Integer id, Car car) {
        Car currentCar = carRepository.findById(id).orElseThrow(RuntimeException::new);
        currentCar.setVin(car.getVin());
        currentCar.setClientId(car.getClientId());
        currentCar.setBrand(car.getBrand());
        currentCar.setModel(car.getModel());
        currentCar.setYear(car.getYear());
        currentCar = carRepository.save(car);

        return ResponseEntity.ok(currentCar);
    }

    public ResponseEntity<Object> deleteCar(Integer id) {
        carRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}