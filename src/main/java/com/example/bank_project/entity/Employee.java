package com.example.bank_project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="emp_table")
public class Employee {
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int emp_id;
@Column
private String emp_name;
@Column
private String emp_mobilenumber;
@Column
private String emp_email;
@Column
private String emp_address;
@Column
private String emp_password;

public Employee() {}

@Override
public String toString() {
	return "Employee [emp_id=" + emp_id + ", emp_name=" + emp_name + ", emp_mobilenumber=" + emp_mobilenumber + ", emp_email="
			+ emp_email + ", emp_address=" + emp_address + ", emp_password=" + emp_password + "]";
}

public Employee(int emp_id, String emp_name, String emp_mobilenumber, String emp_email, String emp_address,
		String emp_password) {
	super();
	this.emp_id = emp_id;
	this.emp_name = emp_name;
	this.emp_mobilenumber = emp_mobilenumber;
	this.emp_email = emp_email;
	this.emp_address = emp_address;
	this.emp_password = emp_password;
}

	



public int getEmp_id() {
	return emp_id;
}
public void setEmp_id(int emp_id) {
	this.emp_id = emp_id;
}
public String getEmp_name() {
	return emp_name;
}
public void setEmp_name(String emp_name) {
	this.emp_name = emp_name;
}
public String getEmp_mobilenumber() {
	return emp_mobilenumber;
}
public void setEmp_number(String emp_mobilenumber) {
	this.emp_mobilenumber = emp_mobilenumber;
}
public String getEmp_email() {
	return emp_email;
}
public void setEmp_email(String emp_email) {
	this.emp_email = emp_email;
}
public String getEmp_address() {
	return emp_address;
}
public void setEmp_address(String emp_address) {
	this.emp_address = emp_address;
}
public String getEmp_password() {
	return emp_password;
}
public void setEmp_password(String emp_password) {
	this.emp_password = emp_password;
}


}
