package com.example.TestSpring.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.Hibernate;
import org.hibernate.annotations.Nationalized;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@Embeddable
public class ViewWorkId implements Serializable {
    private static final long serialVersionUID = 856788635453409240L;
    @Nationalized
    @Column(name = "Service", nullable = false, length = 50)
    private String service;

    @Nationalized
    @Column(name = "Employee", nullable = false, length = 50)
    private String employee;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ViewWorkId entity = (ViewWorkId) o;
        return Objects.equals(this.service, entity.service) &&
                Objects.equals(this.employee, entity.employee);
    }

    @Override
    public int hashCode() {
        return Objects.hash(service, employee);
    }

}