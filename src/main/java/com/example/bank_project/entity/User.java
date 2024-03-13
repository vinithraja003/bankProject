package com.example.bank_project.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_table")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userid;
	@Column
	private String username;
	@Column
	private String useraccno;
	@Column
	private String useremail;
	@Column
	private String usernumber;
	@Column
	private String useraddress;
	@Column
	private String usergender;
	@Column
	private String useracctype;
	@Column
	private String userbalance;
	

	
	


	public User(int userid, String username, String useraccno, String useremail, String usernumber, String useraddress,
			String usergender, String useracctype, String userbalance) {
		super();
		this.userid = userid;
		this.username = username;
		this.useraccno = useraccno;
		this.useremail = useremail;
		this.usernumber = usernumber;
		this.useraddress = useraddress;
		this.usergender = usergender;
		this.useracctype = useracctype;
		this.userbalance = userbalance;
		
	}


	public User() {}
	
	
	public int getUserid() {
		return userid;
	}


	public void setUserid(int userid) {
		this.userid = userid;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getUseraccno() {
		return useraccno;
	}


	public void setUseraccno(String useraccno) {
		this.useraccno = useraccno;
	}


	public String getUseremail() {
		return useremail;
	}


	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}


	public String getUsernumber() {
		return usernumber;
	}


	public void setUsernumber(String usernumber) {
		this.usernumber = usernumber;
	}


	public String getUseraddress() {
		return useraddress;
	}


	public void setUseraddress(String useraddress) {
		this.useraddress = useraddress;
	}


	public String getUsergender() {
		return usergender;
	}


	public void setUsergender(String usergender) {
		this.usergender = usergender;
	}


	public String getUseracctype() {
		return useracctype;
	}


	public void setUseracctype(String useracctype) {
		this.useracctype = useracctype;
	}
	
	public String getUserbalance() {
		return userbalance;
	}


	public void setUserbalance(String userbalance) {
		this.userbalance = userbalance;
	}


	

	


	@Override
	public String toString() {
		return "User [userid=" + userid + ", username=" + username + ", useraccno=" + useraccno + ", useremail="
				+ useremail + ", usernumber=" + usernumber + ", useraddress=" + useraddress + ", usergender="
				+ usergender + ", useracctype=" + useracctype + ", userbalance=" + userbalance + "]";
	}


	

	


	


	

	
	
	
	
	
}
