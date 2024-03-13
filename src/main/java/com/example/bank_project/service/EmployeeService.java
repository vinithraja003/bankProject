package com.example.bank_project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bank_project.dao.EmployeeDAO;
import com.example.bank_project.entity.Employee;


@Service

public class EmployeeService {
	
	@Autowired(required=true)
	
	private EmployeeDAO dao;
	
	public Employee addEmployee(Employee employee) {
		Employee e = dao.save(employee);
		return e;
	}
	

	
	

}
