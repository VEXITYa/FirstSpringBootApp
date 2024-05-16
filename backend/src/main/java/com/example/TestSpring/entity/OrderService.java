package com.example.TestSpring.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Entity
public class OrderService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "OrderId", nullable = false)
    private Integer orderId;

    @Column(name = "ServiceId", nullable = false)
    private Integer serviceId;

    @Column(name = "EmployeeId", nullable = false)
    private Integer employeeId;

    @Column(name = "DateStart", nullable = false)
    private LocalDate dateStart;

    @Column(name = "DateEnd")
    private LocalDate dateEnd;

}