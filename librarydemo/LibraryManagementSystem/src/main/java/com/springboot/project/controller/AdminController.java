package com.springboot.project.controller;

import java.util.ArrayList; 
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.springboot.project.main.Admindatas;
import com.springboot.project.main.BooksManagement;
import com.springboot.project.main.LibrarySystem;

@Controller
@RequestMapping("/libraryadmin")
public class AdminController {
	 
	private long adminid;
	@Autowired
	private JdbcTemplate jdbctemplate; 
	
	@RequestMapping(value="/adminlogin" , method=RequestMethod.GET)
	public String loginad()
	{
		return "adminlogin"; 
	}
	
	@RequestMapping(value="/adminlogin" , method=RequestMethod.POST)
	public String loginpost(@RequestParam String email,@RequestParam long adminid, @RequestParam String pass ,Model model)
	{	
		this.adminid=adminid;
		List<Admindatas> lis = jdbctemplate.query("select * from admindetails",BeanPropertyRowMapper.newInstance(Admindatas.class));
		
		for(int i=0;i<lis.size();i++)
		{
			Admindatas y=lis.get(i);
			if(y.getAdemail().equals(email) && y.getAdpassword().equals(pass) && y.getAdminid()==adminid)
				return "redirect:home";
		}		
		return "adminlogin";
	}
	
	@RequestMapping(value="/adminregister" , method=RequestMethod.GET)
	public String adregisterget()
	{
		return "adminregister";
	}
	
	@RequestMapping(value="/adminregister" , method=RequestMethod.POST)
	public String adregisterpost(@RequestParam String name,@RequestParam String accesscode,@RequestParam String email,@RequestParam String gender,@RequestParam String password,@RequestParam long phone, Model model)
	{
		String AcessCode="Library123";
		if(!accesscode.equals(AcessCode))
			return "adminregister"; 
		List<Admindatas> lis = jdbctemplate.query("select * from admindetails",BeanPropertyRowMapper.newInstance(Admindatas.class));
		for(int i=0;i<lis.size();i++)
		{
			Admindatas y=lis.get(i);
			if(y.getAdemail().equals(email))
				return "adminregister"; 
		}
		Random random=new Random();
		int serial=random.nextInt(999);
		int adminidgenc=random.nextInt(999999);
		String sql="insert into admindetails (adsno,ademail,adgender,adname,adpassword,adphone,adminid) values(?,?,?,?,?,?,?)";
		jdbctemplate.update(sql,serial,email,gender,name,password,phone,adminidgenc);
		
		model.addAttribute("adminid", adminidgenc);
		return "adminiddisplay";
	}
	
	@RequestMapping(value="/userdetails", method=RequestMethod.GET)
	public String userdetails(Model model)
	{
		List<LibrarySystem> list=jdbctemplate.query("select * from librarydetails",BeanPropertyRowMapper.newInstance(LibrarySystem.class));
		model.addAttribute("details", list);
		model.addAttribute("adminid", adminid);
		return "userdetailsdisplay";
	}
	
	@RequestMapping(value="/home", method=RequestMethod.GET)
	public String homeget(Model model)
	{
		ArrayList<BooksManagement> li=(ArrayList<BooksManagement>) jdbctemplate.query("select * from booklists",BeanPropertyRowMapper.newInstance(BooksManagement.class));
		model.addAttribute("adminid",adminid);
		model.addAttribute("books",li);
		return "adminstructure";
	}
	
	@RequestMapping(value="/remove-book",method=RequestMethod.GET)
	public String removebook(Model model)
	{
		model.addAttribute("adminid",adminid);
		return "removebook";
	}
	
	@RequestMapping(value="/remove-book",method=RequestMethod.POST)
	public String removebookpost(@RequestParam String sn1,@RequestParam String sn2,@RequestParam String sn3, Model model)
	{
		ArrayList<BooksManagement> li=(ArrayList<BooksManagement>) jdbctemplate.query("select * from booklists",BeanPropertyRowMapper.newInstance(BooksManagement.class));
		for(int i=0;i<li.size();i++)
		{
			BooksManagement temp=li.get(i);
			if(temp.getSerialNum().equals(sn1))
			   jdbctemplate.execute("delete from booklists where serial_num="+"\""+sn1+"\""); 
			if(temp.getSerialNum().equals(sn2))
				jdbctemplate.execute("delete from booklists where serial_num="+"\""+sn2+"\"");
			if(temp.getSerialNum().equals(sn3))
				jdbctemplate.execute("delete from booklists where serial_num="+"\""+sn3+"\""); 
		}		
		return "redirect:home";
	}
	
	@RequestMapping(value="/add-book",method=RequestMethod.GET)
	public String addbook(Model model)
	{
		model.addAttribute("adminid",adminid);
		return "addbook";
	}
	
	@RequestMapping(value="/add-book",method=RequestMethod.POST)
	public String addbookpost(@RequestParam String serialno, @RequestParam String bookname, @RequestParam String edition,@RequestParam String author, @RequestParam int stock)
	{
		ArrayList<BooksManagement> lis=(ArrayList<BooksManagement>) jdbctemplate.query("select * from booklists",BeanPropertyRowMapper.newInstance(BooksManagement.class));
		
		for(int i=0;i<lis.size();i++)
		{
			BooksManagement t=lis.get(i);
		      if(t.getSerialNum().equals(serialno))
		    	  return "redirect:home";
		}
		
		String sql="insert into booklists (sno,book_name,author,edition,serial_num,stock) values (?,?,?,?,?,?)";		
		Random random=new Random();
		int sno=random.nextInt(999);
		jdbctemplate.update(sql,sno,bookname,author,edition,serialno,stock);
		
		return "redirect:home";
	}
}
