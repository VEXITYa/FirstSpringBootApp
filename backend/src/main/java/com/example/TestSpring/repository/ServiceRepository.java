package com.example.TestSpring.repository;

import com.example.TestSpring.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Integer> {
}
