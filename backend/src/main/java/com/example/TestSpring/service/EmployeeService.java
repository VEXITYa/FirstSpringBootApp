package com.example.TestSpring.service;

import com.example.TestSpring.entity.Employee;
import com.example.TestSpring.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public ResponseEntity<List<Employee>> getEmployee() {

        return new ResponseEntity<>(employeeRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Employee> getEmployee(Integer id) {
        var response = employeeRepository.findById(id);
        if(response.isPresent()){
            return new ResponseEntity<>(response.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Employee> createEmployee(Employee employee) throws URISyntaxException {
        Employee savedEmployee = employeeRepository.save(employee);
        return ResponseEntity.created(new URI("/employee/" + savedEmployee.getId())).body(savedEmployee);
    }

    public ResponseEntity<Employee> updateEmployee(Integer id, Employee employee) {
        Employee currentEmployee = employeeRepository.findById(id).orElseThrow(RuntimeException::new);
        currentEmployee.setName(employee.getName());
        currentEmployee.setPhoneNumber(employee.getPhoneNumber());
        currentEmployee.setBirthday(employee.getBirthday());
        currentEmployee.setJobTitle(employee.getJobTitle());
        currentEmployee.setExperience(employee.getExperience());
        currentEmployee = employeeRepository.save(employee);

        return ResponseEntity.ok(currentEmployee);
    }

    public ResponseEntity<Object> deleteEmployee(Integer id) {
        employeeRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}