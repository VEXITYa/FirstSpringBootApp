package com.example.TestSpring.controller;

import com.example.TestSpring.entity.Employee;
import com.example.TestSpring.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/employee")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable Integer id) {
        return employeeRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createEmployee(@RequestBody Employee Employee) throws URISyntaxException {
        Employee savedEmployee = employeeRepository.save(Employee);
        return ResponseEntity.created(new URI("/employee/" + savedEmployee.getId())).body(savedEmployee);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateEmployee(@PathVariable Integer id, @RequestBody Employee Employee) {
        Employee currentEmployee = employeeRepository.findById(id).orElseThrow(RuntimeException::new);
        currentEmployee.setName(Employee.getName());
        currentEmployee.setPhoneNumber(Employee.getPhoneNumber());
        currentEmployee.setBirthday(Employee.getBirthday());
        currentEmployee.setJobTitle(Employee.getJobTitle());
        currentEmployee.setExperience(Employee.getExperience());
        currentEmployee = employeeRepository.save(Employee);

        return ResponseEntity.ok(currentEmployee);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteEmployee(@PathVariable Integer id) {
        employeeRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
