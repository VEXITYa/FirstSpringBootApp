package com.example.TestSpring.Repository;

import com.example.TestSpring.Entity.OrderPart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderPartRepository extends JpaRepository<OrderPart, Integer> {
}
