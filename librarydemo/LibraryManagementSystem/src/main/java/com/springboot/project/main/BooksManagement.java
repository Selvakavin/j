package com.springboot.project.main;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="booklists")
public class BooksManagement {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)  
	private int sno;
	private String BookName;
	private String Author;
	private String Edition;
	private String SerialNum;
	private int stock;
	
	
	public BooksManagement() {
		super();
	}
	public BooksManagement(String bookName, String author, String edition, String serialNum, int stock) {
		super();
		BookName = bookName;
		Author = author;
		Edition = edition;
		SerialNum = serialNum;
		this.stock = stock;
	}
	
	
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	public String getBookName() {
		return BookName;
	}
	public void setBookName(String bookName) {
		BookName = bookName;
	}
	public String getAuthor() {
		return Author;
	}
	public void setAuthor(String author) {
		Author = author;
	}
	public String getEdition() {
		return Edition;
	}
	public void setEdition(String edition) {
		Edition = edition;
	}
	public String getSerialNum() {
		return SerialNum;
	}
	public void setSerialNum(String serialNum) {
		SerialNum = serialNum;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	
}
