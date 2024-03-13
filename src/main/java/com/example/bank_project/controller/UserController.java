package com.example.bank_project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.bank_project.entity.User;
import com.example.bank_project.service.UserService;


@Controller
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	
	 @GetMapping("/userReg")
	   public String user() {
	      return "userReg";
	 }
	 @GetMapping("/userhome")
	   public String userhome() {
	      return "userhome";
	 }
	 @GetMapping("/userDetails")
	   public String userdetails() {
	      return "userDetails";
	 }
	 @GetMapping("/deposit")
	   public String credit() {
	      return "deposit";
	 }
	 @GetMapping("/withdrawal")
	   public String withdrawal() {
	      return "withdrawal";
	 }
	 @GetMapping("/transaction")
	   public String transaction() {
	      return "transaction";
	 }
	 
	 
	 
//Add User:
	 @PostMapping("/adduser")
	 @ResponseBody
	 public User addUser(@RequestBody User user) {
		 
		 return userService.addUser(user);
	 }
	 
//Get All User Data:
	 @GetMapping("/alluser")
	 @ResponseBody
	 public List<User>findAll(){
		return userService.findAll();
		 
	 }
//Get one user:
	 @GetMapping("/alluser/{userid}")
	 @ResponseBody
	 public User getUser(@PathVariable int userid) {
		return userService.getuser(userid);
	 } 
	
	
//account number check ->String type
	 @GetMapping("/all/useraccno")
	 @ResponseBody
	 public  ResponseEntity<List<User>> getusersByUseraccno(@RequestParam String useraccno) {
		 return new ResponseEntity<List<User>>(userService.findByUseraccno(useraccno), HttpStatus.OK);
	 }


//update	 
	 @GetMapping("/add")
	 @ResponseBody
		public String updateUser(@RequestBody User user) {
			return userService.updateUser(user);
			}
	 
}
