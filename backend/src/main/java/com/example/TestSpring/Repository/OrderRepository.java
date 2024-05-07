package com.example.TestSpring.Repository;

import com.example.TestSpring.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Integer> {
}
