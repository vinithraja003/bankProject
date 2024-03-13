package com.example.bank_project.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.bank_project.entity.User;

@Repository
public interface UserDAO extends JpaRepository<User,Integer> {

	

	List<User> findByUseraccno(String useraccno);

}
