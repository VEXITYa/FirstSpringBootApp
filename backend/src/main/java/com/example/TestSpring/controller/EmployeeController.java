package com.example.TestSpring.controller;

import com.example.TestSpring.entity.Employee;
import com.example.TestSpring.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/employee")
public class EmployeeController {
    private final EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<List<Employee>> getEmployee() {

        return employeeService.getEmployee();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Integer id) {
        return employeeService.getEmployee(id);
    }

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) throws URISyntaxException {
        return employeeService.createEmployee(employee);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id, @RequestBody Employee employee) {
        return employeeService.updateEmployee(id, employee);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteEmployee(@PathVariable Integer id) {
        return employeeService.deleteEmployee(id);
    }

}
