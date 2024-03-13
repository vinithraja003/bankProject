package com.example.bank_project.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.bank_project.entity.Bank;
import com.example.bank_project.service.BankService;



@Controller
public class BankController {
	
	@Autowired
	private BankService bankService;
	
	
//Add Data:
		 @PostMapping("/add_data")
		 @ResponseBody
		 public Bank add_data(@RequestBody Bank bank) {
			 
			 return bankService.add_data(bank);
			 
		 }	
//Get all Transaction data:
		 
		 @GetMapping("/alldata")
		 @ResponseBody
		 public List<Bank> findAll() {
			return  bankService.findAll();
			 
		 }
	

}
