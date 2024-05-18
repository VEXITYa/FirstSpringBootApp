package com.example.TestSpring.controller;

import com.example.TestSpring.entity.Order;
import com.example.TestSpring.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;

    @GetMapping
    public ResponseEntity<List<Order>> getOrders() {

        return orderService.getOrders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrder(@PathVariable Integer id) {
        return orderService.getOrder(id);
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) throws URISyntaxException {
        return orderService.createOrder(order);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Integer id, @RequestBody Order order) {
        return orderService.updateOrder(id, order);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteOrder(@PathVariable Integer id) {
        return orderService.deleteOrder(id);
    }

}
