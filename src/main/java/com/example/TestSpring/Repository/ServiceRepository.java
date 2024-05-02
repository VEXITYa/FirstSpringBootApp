package com.example.TestSpring.Repository;

import com.example.TestSpring.Entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Integer> {
}
