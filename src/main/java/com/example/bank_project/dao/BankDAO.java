package com.example.bank_project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bank_project.entity.Bank;


@Repository
public interface BankDAO extends JpaRepository<Bank,Integer> {

}
