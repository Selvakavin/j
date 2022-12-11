package com.springboot.project.main;

import javax.persistence.Entity;  
import javax.persistence.Id;
import javax.persistence.Table;


 
@Entity
@Table(name="librarydetails")
public class LibrarySystem{
	
	@Id
	private int StudentId;
	private String name;
	private String email;
	private String password;
	private String department;
	private String gender;
	private long phone;	
		
	
	public LibrarySystem() {
		super();
	}


	public LibrarySystem(int studentId, String name, String email, String password, String department, String gender,
			long phone) {
		super();
		StudentId = studentId;
		this.name = name;
		this.email = email;
		this.password = password;
		this.department = department;
		this.gender = gender;
		this.phone = phone;
	}
	
	
	public int getStudentId() {
		return StudentId;
	}
	public void setStudentId(int studentId) {
		StudentId = studentId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
}