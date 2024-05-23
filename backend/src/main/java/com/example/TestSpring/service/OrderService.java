package com.example.TestSpring.service;

import com.example.TestSpring.entity.Order;
import com.example.TestSpring.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;


@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");

    public ResponseEntity<List<Order>> getOrders() {

        return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Order> getOrder(Integer id) {
        var response = orderRepository.findById(id);
        if(response.isPresent()){
            return new ResponseEntity<>(response.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Order> createOrder(Order order) throws URISyntaxException {
        Order savedOrder = orderRepository.save(order);
        return ResponseEntity.created(new URI("/orders/" + savedOrder.getId())).body(savedOrder);
    }

    public ResponseEntity<Order> updateOrder(Integer id, Order order) {
        Order currentOrder = orderRepository.findById(id).orElseThrow(RuntimeException::new);
        currentOrder.setClientId(order.getClientId());
        currentOrder.setCarId(order.getCarId());
        currentOrder.setDateOfOrder(order.getDateOfOrder());
        currentOrder.setWorkStart(order.getWorkStart());
        currentOrder.setWorkEnd(order.getWorkEnd());
        currentOrder.setCost(order.getCost());
        currentOrder = orderRepository.save(order);

        return ResponseEntity.ok(currentOrder);
    }

    public ResponseEntity<Object> deleteOrder(Integer id) {
        orderRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}