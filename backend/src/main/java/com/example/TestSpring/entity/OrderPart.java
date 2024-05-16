package com.example.TestSpring.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class OrderPart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "OrderId", nullable = false)
    private Integer orderId;

    @Column(name = "PartId", nullable = false)
    private Integer partId;

    @Column(name = "\"count\"", nullable = false)
    private Integer count;

}