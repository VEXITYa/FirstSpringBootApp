package com.example.TestSpring.repository;

import com.example.TestSpring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Integer> {
}
