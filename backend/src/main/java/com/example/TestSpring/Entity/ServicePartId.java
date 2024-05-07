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
public class ServicePartId implements Serializable {
    private static final long serialVersionUID = 4786368088618455194L;
    @Column(name = "ServiceId", nullable = false)
    private Integer serviceId;

    @Column(name = "PartId", nullable = false)
    private Integer partId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ServicePartId entity = (ServicePartId) o;
        return Objects.equals(this.partId, entity.partId) &&
                Objects.equals(this.serviceId, entity.serviceId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(partId, serviceId);
    }

}