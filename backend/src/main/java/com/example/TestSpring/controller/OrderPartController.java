package com.example.TestSpring.controller;

import com.example.TestSpring.entity.OrderPart;
import com.example.TestSpring.service.OrderPartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/orderPart")
public class OrderPartController {
    private final OrderPartService orderPartService;

    @GetMapping
    public ResponseEntity<List<OrderPart>> getOrderPart() {

        return orderPartService.getOrderPart();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderPart> getOrderPart(@PathVariable Integer id) {
        return orderPartService.getOrderPart(id);
    }

    @PostMapping
    public ResponseEntity<OrderPart> createOrderPart(@RequestBody OrderPart orderPart) throws URISyntaxException {
        return orderPartService.createOrderPart(orderPart);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrderPart> updateOrderPart(@PathVariable Integer id, @RequestBody OrderPart orderPart) {
        return orderPartService.updateOrderPart(id, orderPart);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteOrderPart(@PathVariable Integer id) {
        return orderPartService.deleteOrderPart(id);
    }

}
