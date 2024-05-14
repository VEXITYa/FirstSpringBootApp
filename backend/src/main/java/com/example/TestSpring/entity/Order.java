package com.example.TestSpring.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.Instant;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "Orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "ClientId", nullable = false)
    private Integer client;

    @Column(name = "CarId", nullable = false)
    private Integer car;

    @Column(name = "DateOfOrder", nullable = false)
    private Instant dateOfOrder;

    @Column(name = "WorkStart", nullable = false)
    private Instant workStart;

    @Column(name = "WorkEnd")
    private Instant workEnd;

    @Column(name = "Cost", nullable = false)
    private Integer cost;

    @OneToMany()
    @JoinColumn(name = "OrderId")
    private Set<OrderService> services = new LinkedHashSet<>();

    @OneToMany()
    @JoinColumn(name = "OrderId")
    private Set<OrderPart> parts = new LinkedHashSet<>();
}