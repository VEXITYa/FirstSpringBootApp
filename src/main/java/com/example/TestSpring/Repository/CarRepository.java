package com.example.TestSpring.Repository;

import com.example.TestSpring.Entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Integer> {
}
