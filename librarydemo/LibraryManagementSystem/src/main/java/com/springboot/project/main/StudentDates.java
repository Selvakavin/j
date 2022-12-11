package com.springboot.project.main;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="studentdates")
public class StudentDates {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int sno;
	private int studentId;
	private String buydate;
	private String enddate;
	private String serialnum;	
	
	
	public StudentDates() {
		super();
	}

	public StudentDates(int sno, int studentId, String buydate, String enddate,String serialnum) {
		super();
		this.sno = sno;
		this.studentId = studentId;
		this.buydate = buydate;
		this.enddate = enddate;
		this.serialnum=serialnum;
	}
	
	

	public String getSerialnum() {
		return serialnum;
	}

	public void setSerialnum(String serialnum) {
		this.serialnum = serialnum;
	}

	public int getSno() {
		return sno;
	}
	
	public void setSno(int sno) {
		this.sno = sno;
	}
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getBuydate() {
		return buydate;
	}
	public void setBuydate(String buydate) {
		this.buydate = buydate;
	}
	public String getEnddate() {
		return enddate;
	}
	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}
	
	
}
