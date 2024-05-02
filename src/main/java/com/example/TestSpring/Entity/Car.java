package com.example.TestSpring.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
@Table(name = "Cars")
public class Car {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "VIN", nullable = false, length = 17)
    private String vin;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ClientId", nullable = false)
    private Client client;

    @Nationalized
    @Column(name = "Brand", nullable = false, length = 20)
    private String brand;

    @Nationalized
    @Column(name = "Model", nullable = false, length = 50)
    private String model;

    @Column(name = "\"Year\"")
    private Integer year;

}