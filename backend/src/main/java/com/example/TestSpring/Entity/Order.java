package com.example.TestSpring.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.OffsetDateTime;

@Getter
@Setter
@Entity
@Table(name = "Orders")
public class Order {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ClientId", nullable = false)
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "CarId", nullable = false)
    private Car car;

    @Column(name = "DateOfOrder")
    private OffsetDateTime dateOfOrder;

    @Column(name = "WorkStart")
    private OffsetDateTime workStart;

    @Column(name = "WorkEnd")
    private OffsetDateTime workEnd;

    @Column(name = "Cost", nullable = false)
    private Integer cost;

}