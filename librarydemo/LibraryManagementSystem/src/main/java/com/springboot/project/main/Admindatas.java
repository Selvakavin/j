package com.springboot.project.main;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admindetails")
public class Admindatas {
	
	@Id
	private int adsno;
	private String adname;
	private String ademail;
	private String adgender;
	private String adpassword;
	private long adphone;
	private long adminid;
	
	
	
	
	
	public Admindatas() {
		super();
	}
	public Admindatas(String adname, String ademail, String adgender, String adpassword, long adphone, long adminid) {
		super();
		this.adname = adname;
		this.ademail = ademail;
		this.adgender = adgender;
		this.adpassword = adpassword;
		this.adphone = adphone;
		this.adminid=adminid;
	}	
	
	public long getAdminid() {
		return adminid;
	}
	public void setAdminid(long adminid) {
		this.adminid = adminid;
	}
	public int getAdsno() {
		return adsno;
	}
	public void setAdsno(int adsno) {
		this.adsno = adsno;
	}
	public String getAdname() {
		return adname;
	}
	public void setAdname(String adname) {
		this.adname = adname;
	}
	public String getAdemail() {
		return ademail;
	}
	public void setAdemail(String ademail) {
		this.ademail = ademail;
	}
	public String getAdgender() {
		return adgender;
	}
	public void setAdgender(String adgender) {
		this.adgender = adgender;
	}
	public String getAdpassword() {
		return adpassword;
	}
	public void setAdpassword(String adpassword) {
		this.adpassword = adpassword;
	}
	public long getAdphone() {
		return adphone;
	}
	public void setAdphone(long adphone) {
		this.adphone = adphone;
	}
	
	
	
}
