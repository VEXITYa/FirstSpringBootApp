package com.example.TestSpring.controller;

import com.example.TestSpring.entity.OrderService;
import com.example.TestSpring.repository.OrderServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/orderservice")
public class OrderServiceController {

    private final OrderServiceRepository orderServiceRepository;

    @GetMapping
    public List<OrderService> getOrderServices() {
        return orderServiceRepository.findAll();
    }

    @GetMapping("/{id}")
    public OrderService getOrderService(@PathVariable Integer id) {
        return orderServiceRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createOrderService(@RequestBody OrderService OrderService) throws URISyntaxException {
        OrderService savedOrderService = orderServiceRepository.save(OrderService);
        return ResponseEntity.created(new URI("/orderservice/" + savedOrderService.getId())).body(savedOrderService);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateOrderService(@PathVariable Integer id, @RequestBody OrderService OrderService) {
        OrderService currentOrderService = orderServiceRepository.findById(id).orElseThrow(RuntimeException::new);
        currentOrderService.setOrderId(OrderService.getOrderId());
        currentOrderService.setServiceId(OrderService.getServiceId());
        currentOrderService.setEmployeeId(OrderService.getEmployeeId());
        currentOrderService.setDateStart(OrderService.getDateStart());
        currentOrderService.setDateEnd(OrderService.getDateEnd());
        currentOrderService = orderServiceRepository.save(OrderService);

        return ResponseEntity.ok(currentOrderService);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteOrderService(@PathVariable Integer id) {
        orderServiceRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
