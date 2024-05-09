package com.example.TestSpring.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class OrderPart {
    @EmbeddedId
    private OrderPartId id;

    @MapsId("orderId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "OrderId", nullable = false)
    private Order order;

    @MapsId("partId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "PartId", nullable = false)
    private Part part;

    @Column(name = "\"count\"", nullable = false)
    private Integer count;

}