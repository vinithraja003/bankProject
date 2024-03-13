package com.example.bank_project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bank_project.dao.BankDAO;
import com.example.bank_project.entity.Bank;

@Service
public class BankService {
  
	
	@Autowired(required=true)
	private BankDAO bankdao;
	
	
//Add Data:
	public Bank add_data(Bank bank) {
		// TODO Auto-generated method stub
		return bankdao.save(bank);
	}


	public List<Bank> findAll() {
	    
		List<Bank> alldata=bankdao.findAll();
		return alldata;
	}

	
	
	
	
	
}
