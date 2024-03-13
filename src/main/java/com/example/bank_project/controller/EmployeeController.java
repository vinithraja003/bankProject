package com.example.bank_project.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.bank_project.entity.Employee;
import com.example.bank_project.service.EmployeeService;




@Controller
//@RequestMapping("/bank")
public class EmployeeController {
	
	
	
	@Autowired
	private EmployeeService employeeService;
	
	
	@GetMapping("/")
	   public String home() {
	      return "home";
	 }
	
	 @GetMapping("/register")
	   public String register() {
	      return "register";
	 }
	 
	 @GetMapping("/login")
	   public String login() {
	      return "login";
	 }
	 @GetMapping("/emphome")
	   public String emphome() {
	      return "emphome";
	 }
	
	 
	 
	 
	 
	 
	 
	 
	 
//add employee
		@PostMapping("/addemp")
		@ResponseBody
		public Employee addEmployee(@RequestBody Employee employee) {
                System.out.println(employee);
             
			return employeeService.addEmployee(employee);
			}
		
		@PostMapping("/emplogin")
		@ResponseBody
		public Employee loginEmployee(@RequestBody Employee loginemp) {
                System.out.println(loginemp);
             
		//	return employeeService.loginEmployee(employee);
                return loginemp;
			}
		
		


}
