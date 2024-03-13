package com.example.bank_project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bank_project.dao.UserDAO;
import com.example.bank_project.entity.User;

@Service
public class UserService {
	
@Autowired(required=true)
	private UserDAO usdao;


//save User
public User addUser(User user) {
	
	return usdao.save(user);
}


//Find all user details
public List<User> findAll() {
		List<User> alluser=usdao.findAll();
		return alluser;
}


//Get User Id
public User getuser(int userid) {
	
	return usdao.findById(userid).get();
}




//Account Search
public List<User> findByUseraccno(String useraccno) {

	List<User> user=usdao.findByUseraccno(useraccno);
	
	System.out.println(user);
	return user;
}
//Update User

public String updateUser(User user) {
	  
	     usdao.save(user);
	return "add amount "+user.getUseraccno() ;
}








}
