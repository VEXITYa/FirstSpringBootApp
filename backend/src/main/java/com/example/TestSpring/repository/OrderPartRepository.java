package com.example.TestSpring.repository;

import com.example.TestSpring.entity.OrderPart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderPartRepository extends JpaRepository<OrderPart, Integer> {
}
