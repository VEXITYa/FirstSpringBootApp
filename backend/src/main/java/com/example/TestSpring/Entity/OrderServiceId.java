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
public class OrderServiceId implements Serializable {
    private static final long serialVersionUID = 7140310546351707406L;
    @Column(name = "OrderId", nullable = false)
    private Integer orderId;

    @Column(name = "ServiceId", nullable = false)
    private Integer serviceId;

    @Column(name = "EmployeeId", nullable = false)
    private Integer employeeId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        OrderServiceId entity = (OrderServiceId) o;
        return Objects.equals(this.orderId, entity.orderId) &&
                Objects.equals(this.employeeId, entity.employeeId) &&
                Objects.equals(this.serviceId, entity.serviceId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(orderId, employeeId, serviceId);
    }

}