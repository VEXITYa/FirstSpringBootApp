package com.example.TestSpring.Entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@Embeddable
public class CompetenceId implements Serializable {
    private static final long serialVersionUID = -5230333954237437033L;
    @Column(name = "ServiceId", nullable = false)
    private Integer serviceId;

    @Column(name = "EmployeeId", nullable = false)
    private Integer employeeId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        CompetenceId entity = (CompetenceId) o;
        return Objects.equals(this.employeeId, entity.employeeId) &&
                Objects.equals(this.serviceId, entity.serviceId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(employeeId, serviceId);
    }

}