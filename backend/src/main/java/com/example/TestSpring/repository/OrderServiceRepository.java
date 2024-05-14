package com.example.TestSpring.repository;

import com.example.TestSpring.entity.OrderService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderServiceRepository extends JpaRepository<OrderService, Integer> {
}
