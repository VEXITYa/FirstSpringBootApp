package com.example.TestSpring.Repository;

import com.example.TestSpring.Entity.Competence;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompetenceRepository extends JpaRepository<Competence, Integer> {
}

