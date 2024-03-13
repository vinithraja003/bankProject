package com.example.bank_project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bank")
public class Bank {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;
	@Column
	private String f_name;
	@Column
	private String f_accNo;
	@Column
	private String t_name;
	@Column
	private String t_accNo;
	@Column
	private String type;
	@Column
	private String amount;
	@Column
	private String date;
	
	public Bank() {}

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public String getF_name() {
		return f_name;
	}

	public void setF_name(String f_name) {
		this.f_name = f_name;
	}

	public String getF_accNo() {
		return f_accNo;
	}

	public void setF_accNo(String f_accNo) {
		this.f_accNo = f_accNo;
	}

	public String getT_name() {
		return t_name;
	}

	public void setT_name(String t_name) {
		this.t_name = t_name;
	}

	public String getT_accNo() {
		return t_accNo;
	}

	public void setT_accNo(String t_accNo) {
		this.t_accNo = t_accNo;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Bank(int no, String f_name, String f_accNo, String t_name, String t_accNo, String type, String amount,
			String date) {
		super();
		this.no = no;
		this.f_name = f_name;
		this.f_accNo = f_accNo;
		this.t_name = t_name;
		this.t_accNo = t_accNo;
		this.type = type;
		this.amount = amount;
		this.date = date;
	}

	@Override
	public String toString() {
		return "Bank [no=" + no + ", f_name=" + f_name + ", f_accNo=" + f_accNo + ", t_name=" + t_name + ", t_accNo="
				+ t_accNo + ", type=" + type + ", amount=" + amount + ", date=" + date + "]";
	}
	
	
	
	
	

}
