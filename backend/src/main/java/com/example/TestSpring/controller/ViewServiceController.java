package com.example.TestSpring.controller;


import com.example.TestSpring.entity.Car;
import com.example.TestSpring.entity.ViewService;
import com.example.TestSpring.service.ViewServiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/viewService")
public class ViewServiceController {

    private final ViewServiceService viewServiceService;


    @GetMapping
    public ResponseEntity<List<ViewService>> getCars() {

        return viewServiceService.getViewServices();
    }
}
