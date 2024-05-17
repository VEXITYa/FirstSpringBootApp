package com.example.TestSpring.service;

import com.example.TestSpring.entity.OrderPart;
import com.example.TestSpring.repository.OrderPartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class OrderPartService {

    private final OrderPartRepository orderPartRepository;

    public ResponseEntity<List<OrderPart>> getOrderPart() {

        return new ResponseEntity<>(orderPartRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<OrderPart> getOrderPart(Integer id) {
        var response = orderPartRepository.findById(id);
        if(response.isPresent()){
            return new ResponseEntity<>(response.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<OrderPart> createOrderPart(OrderPart orderPart) throws URISyntaxException {
        OrderPart savedOrderPart = orderPartRepository.save(orderPart);
        return ResponseEntity.created(new URI("/orderPart/" + savedOrderPart.getId())).body(savedOrderPart);
    }

    public ResponseEntity<OrderPart> updateOrderPart(Integer id, OrderPart orderPart) {
        OrderPart currentOrderPart = orderPartRepository.findById(id).orElseThrow(RuntimeException::new);
        currentOrderPart.setOrderId(orderPart.getOrderId());
        currentOrderPart.setPartId(orderPart.getPartId());
        currentOrderPart.setCount(orderPart.getCount());
        currentOrderPart = orderPartRepository.save(orderPart);

        return ResponseEntity.ok(currentOrderPart);
    }

    public ResponseEntity<Object> deleteOrderPart(Integer id) {
        orderPartRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}