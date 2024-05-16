package com.example.TestSpring.repository;

import com.example.TestSpring.entity.Part;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartRepository extends JpaRepository<Part, Integer> {
}
