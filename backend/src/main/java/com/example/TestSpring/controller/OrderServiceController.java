package com.example.TestSpring.controller;

import com.example.TestSpring.entity.OrderService;
import com.example.TestSpring.service.OrderServiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/orderService")
public class OrderServiceController {
    private final OrderServiceService orderServiceService;

    @GetMapping
    public ResponseEntity<List<OrderService>> getOrderService() {

        return orderServiceService.getOrderService();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderService> getOrderService(@PathVariable Integer id) {
        return orderServiceService.getOrderService(id);
    }

    @PostMapping
    public ResponseEntity<OrderService> createOrderService(@RequestBody OrderService orderService) throws URISyntaxException {
        return orderServiceService.createOrderService(orderService);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrderService> updateOrderService(@PathVariable Integer id, @RequestBody OrderService orderService) {
        return orderServiceService.updateOrderService(id, orderService);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteOrderService(@PathVariable Integer id) {
        return orderServiceService.deleteOrderService(id);
    }

}
