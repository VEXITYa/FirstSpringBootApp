package com.example.TestSpring.controller;

import com.example.TestSpring.entity.OrderPart;
import com.example.TestSpring.repository.OrderPartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/orderpart")
public class OrderPartController {

    private final OrderPartRepository orderPartRepository;

    @GetMapping
    public List<OrderPart> getOrderParts() {
        return orderPartRepository.findAll();
    }

    @GetMapping("/{id}")
    public OrderPart getOrderPart(@PathVariable Integer id) {
        return orderPartRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createOrderPart(@RequestBody OrderPart OrderPart) throws URISyntaxException {
        OrderPart savedOrderPart = orderPartRepository.save(OrderPart);
        return ResponseEntity.created(new URI("/orderpart/" + savedOrderPart.getId())).body(savedOrderPart);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateOrderPart(@PathVariable Integer id, @RequestBody OrderPart OrderPart) {
        OrderPart currentOrderPart = orderPartRepository.findById(id).orElseThrow(RuntimeException::new);
        currentOrderPart.setOrder(OrderPart.getOrder());
        currentOrderPart.setPart(OrderPart.getPart());
        currentOrderPart.setCount(OrderPart.getCount());
        currentOrderPart = orderPartRepository.save(OrderPart);

        return ResponseEntity.ok(currentOrderPart);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteOrderPart(@PathVariable Integer id) {
        orderPartRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
