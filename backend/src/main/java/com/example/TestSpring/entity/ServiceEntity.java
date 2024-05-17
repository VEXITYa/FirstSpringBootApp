package com.example.TestSpring.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "Services")
public class ServiceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "Name", nullable = false, length = 50)
    private String name;

    @Column(name = "price", nullable = false)
    private Integer price;

}