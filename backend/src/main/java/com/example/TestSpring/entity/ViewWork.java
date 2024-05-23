package com.example.TestSpring.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Immutable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import java.time.LocalDate;

/**
 * Mapping for DB view
 */
@Getter
@Setter
@Entity
@Immutable
public class ViewWork {
    @EmbeddedId
    private ViewWorkId id;

    @Column(name = "DateStart", nullable = false)
    private LocalDate dateStart;

    @Column(name = "DateEnd")
    private LocalDate dateEnd;

    @Column(name = "price", nullable = false)
    private Integer price;

}