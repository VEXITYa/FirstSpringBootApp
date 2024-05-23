package com.example.TestSpring.repository;

import com.example.TestSpring.entity.ViewService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ViewServiceRepository extends JpaRepository<ViewService, String> {
    @Transactional
    @Modifying
    @Query("UPDATE ViewService v SET v.price = ?2 WHERE v.name = ?1")
    int updateServicePrice(String name, Integer price);

    @Transactional
    @Modifying
    @Query("DELETE FROM ViewService v WHERE v.name = ?1")
    int deleteServiceByName(String name);
}
