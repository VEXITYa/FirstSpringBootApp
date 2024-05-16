package com.example.TestSpring.repository;

import com.example.TestSpring.entity.ServicePart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicePartRepository extends JpaRepository<ServicePart, Integer> {
}
