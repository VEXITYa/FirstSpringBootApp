package com.example.TestSpring.Entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "Parts")
public class Part {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "VendorCode", nullable = false, length = 50)
    private String vendorCode;

    @Nationalized
    @Column(name = "Name", nullable = false, length = 200)
    private String name;

    @Nationalized
    @Column(name = "Brand", nullable = false, length = 50)
    private String brand;

    @Nationalized
    @Column(name = "CarBrand", nullable = false, length = 50)
    private String carBrand;

    @Column(name = "\"count\"", nullable = false)
    private Integer count;

    @Column(name = "price", nullable = false)
    private Integer price;

}