package com.example.TestSpring.Repository;

import com.example.TestSpring.Entity.OrderService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderServiceRepository extends JpaRepository<OrderService, Integer> {
}
