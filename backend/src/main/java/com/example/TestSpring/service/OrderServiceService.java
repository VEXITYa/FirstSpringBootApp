package com.example.TestSpring.service;

import com.example.TestSpring.entity.OrderService;
import com.example.TestSpring.repository.OrderServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class OrderServiceService {

    private final OrderServiceRepository orderServiceRepository;

    public ResponseEntity<List<OrderService>> getOrderService() {

        return new ResponseEntity<>(orderServiceRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<OrderService> getOrderService(Integer id) {
        var response = orderServiceRepository.findById(id);
        if(response.isPresent()){
            return new ResponseEntity<>(response.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<OrderService> createOrderService(OrderService orderService) throws URISyntaxException {
        OrderService savedOrderService = orderServiceRepository.save(orderService);
        return ResponseEntity.created(new URI("/orderService/" + savedOrderService.getId())).body(savedOrderService);
    }

    public ResponseEntity<OrderService> updateOrderService(Integer id, OrderService orderService) {
        OrderService currentOrderService = orderServiceRepository.findById(id).orElseThrow(RuntimeException::new);
        currentOrderService.setOrderId(orderService.getOrderId());
        currentOrderService.setServiceId(orderService.getServiceId());
        currentOrderService.setEmployeeId(orderService.getEmployeeId());
        currentOrderService.setDateStart(orderService.getDateStart());
        currentOrderService.setDateEnd(orderService.getDateEnd());
        currentOrderService = orderServiceRepository.save(orderService);

        return ResponseEntity.ok(currentOrderService);
    }

    public ResponseEntity<Object> deleteOrderService(Integer id) {
        orderServiceRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}