package com.example.TestSpring.Repository;

import com.example.TestSpring.Entity.ServicePart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicePartRepository extends JpaRepository<ServicePart, Integer> {
}
