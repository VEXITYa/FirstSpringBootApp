package com.example.TestSpring.repository;

import com.example.TestSpring.entity.Competence;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompetenceRepository extends JpaRepository<Competence, Integer> {
}

