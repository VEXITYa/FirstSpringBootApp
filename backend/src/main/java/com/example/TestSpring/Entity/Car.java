package com.example.TestSpring.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "Cars")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "VIN", nullable = false, length = 17)
    private String vin;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
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