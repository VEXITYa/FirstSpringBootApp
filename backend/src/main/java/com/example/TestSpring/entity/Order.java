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


    @JsonIgnore
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ClientId", nullable = false)
    private Client client;

    @JsonIgnore
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "CarId", nullable = false)
    private Car car;

    @Column(name = "DateOfOrder", nullable = false)
    private Instant dateOfOrder;

    @Column(name = "WorkStart", nullable = false)
    private Instant workStart;

    @Column(name = "WorkEnd")
    private Instant workEnd;

    @Column(name = "Cost", nullable = false)
    private Integer cost;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToMany()
    private Set<Service> services = new LinkedHashSet<>();

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToMany()
    private Set<Part> parts = new LinkedHashSet<>();
}