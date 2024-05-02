package com.example.TestSpring.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Employee {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "Name", nullable = false, length = 50)
    private String name;

    @Nationalized
    @Column(name = "PhoneNumber", nullable = false, length = 20)
    private String phoneNumber;

    @Column(name = "Birthday", nullable = false)
    private LocalDate birthday;

    @Nationalized
    @Column(name = "JobTitle", nullable = false, length = 50)
    private String jobTitle;

    @Column(name = "Experience", nullable = false)
    private LocalDate experience;

}