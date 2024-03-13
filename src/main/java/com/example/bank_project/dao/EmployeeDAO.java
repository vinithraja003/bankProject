package com.example.bank_project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.bank_project.entity.Employee;



@Repository
public interface EmployeeDAO extends JpaRepository<Employee,Integer>{
	


}
