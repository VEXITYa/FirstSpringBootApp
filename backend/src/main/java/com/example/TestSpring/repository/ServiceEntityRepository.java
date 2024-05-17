package com.example.TestSpring.repository;

import com.example.TestSpring.entity.ServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceEntityRepository extends JpaRepository<ServiceEntity, Integer> {
}
