package com.example.TestSpring.Repository;

import com.example.TestSpring.Entity.Part;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartRepository extends JpaRepository<Part, Integer> {
}
