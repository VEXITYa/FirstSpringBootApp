package com.example.TestSpring.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@Embeddable
public class OrderPartId implements Serializable {
    private static final long serialVersionUID = 4581940553440795895L;
    @Column(name = "OrderId", nullable = false)
    private Integer orderId;

    @Column(name = "PartId", nullable = false)
    private Integer partId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        OrderPartId entity = (OrderPartId) o;
        return Objects.equals(this.orderId, entity.orderId) &&
                Objects.equals(this.partId, entity.partId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(orderId, partId);
    }

}