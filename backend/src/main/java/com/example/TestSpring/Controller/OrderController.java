package com.example.TestSpring.Controller;

import com.example.TestSpring.Entity.Order;
import com.example.TestSpring.Repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/orders")
public class OrderController {

    private final OrderRepository orderRepository;

    @GetMapping
    public List<Order> getOrders() {
        return orderRepository.findAll();
    }

    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Integer id) {
        return orderRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createOrder(@RequestBody Order Order) throws URISyntaxException {
        Order savedOrder = orderRepository.save(Order);
        return ResponseEntity.created(new URI("/Orders/" + savedOrder.getId())).body(savedOrder);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateOrder(@PathVariable Integer id, @RequestBody Order Order) {
        Order currentOrder = orderRepository.findById(id).orElseThrow(RuntimeException::new);
        currentOrder.setClient(Order.getClient());
        currentOrder.setCar(Order.getCar());
        currentOrder.setDateOfOrder(Order.getDateOfOrder());
        currentOrder.setWorkStart(Order.getWorkStart());
        currentOrder.setWorkEnd(Order.getWorkEnd());
        currentOrder.setCost(Order.getCost());
        currentOrder = orderRepository.save(Order);

        return ResponseEntity.ok(currentOrder);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteOrder(@PathVariable Integer id) {
        orderRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
