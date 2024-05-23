package com.example.TestSpring.repository;

import com.example.TestSpring.entity.Car;
import com.example.TestSpring.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClientRepository extends JpaRepository<Client, Integer> {

    @Procedure(name = "GetClientCars")
    List<Object> getClientCars(@Param("clientPhoneNumber") String clientPhoneNumber);
}
