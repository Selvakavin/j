package com.springboot.project.controller;

import java.time.LocalDate;  
import java.time.LocalTime;
import java.util.ArrayList; 
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.springboot.project.main.BooksManagement;
import com.springboot.project.main.LibrarySystem;
import com.springboot.project.main.StudentDates;
import com.springboot.project.repo.LibraryRepo;

@Controller
@RequestMapping("/project")
public class LibraryManagementController implements CommandLineRunner{
	
			
	private long id;
	@RequestMapping(value="home" , method=RequestMethod.GET)
	public String homedirect(Model model)
	{
		ArrayList<BooksManagement> li=(ArrayList<BooksManagement>) jdbcTemplate.query("select * from booklists",BeanPropertyRowMapper.newInstance(BooksManagement.class));
		model.addAttribute("books", li);
		model.addAttribute("userid",id);
		return "structure";
	}
	
	@Autowired
    private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private LibraryRepo objrepo;
		
	@RequestMapping("/start")
	public String initialpage()
	{ 		
		return "Initialpage";
	}
	
	@RequestMapping(value="/Login", method=RequestMethod.GET)
	public String loging()
	{
		return "Initialpage";
	}
	
	@RequestMapping(value="/about-us" , method=RequestMethod.GET)
	public String about()
	{
		return "AboutUs";
	}
	
	@RequestMapping(value="/Login" ,method=RequestMethod.POST)
	public String Login(@RequestParam String email, @RequestParam int studentid, @RequestParam String pass, Model model)
	{
		List<LibrarySystem> list=jdbcTemplate.query("select * from librarydetails",BeanPropertyRowMapper.newInstance(LibrarySystem.class));
		
		for(int i=0;i<list.size();i++)
		{
			LibrarySystem t=list.get(i);
			this.id=studentid;
			if(t.getStudentId()==studentid  && t.getEmail().equals(email) && t.getPassword().equals(pass))
			{
				ArrayList<BooksManagement> li=(ArrayList<BooksManagement>) jdbcTemplate.query("select * from booklists",BeanPropertyRowMapper.newInstance(BooksManagement.class));
				model.addAttribute("books", li);
				model.addAttribute("userid",id);
				
				return "structure";	
			}
		}
		return "Initialpage";
	}
	
	@RequestMapping(value="/Register" ,method=RequestMethod.GET)
	public String Registerget()
	{
		return "register";
	}
	
	@RequestMapping(value="/Register" ,method=RequestMethod.POST)
	public String Registerpost(@RequestParam String name ,@RequestParam String dept,@RequestParam String email, @RequestParam String gender ,@RequestParam long phone, @RequestParam String password, Model model)
	{
		
		List<LibrarySystem> list=jdbcTemplate.query("select email from librarydetails",BeanPropertyRowMapper.newInstance(LibrarySystem.class));
		for(int i=0;i<list.size();i++)
		{
			LibrarySystem libraryobj=list.get(i);
		if(email.equals(libraryobj.getEmail()))
			return "register";
		}
		
		String sql="INSERT INTO librarydetails (student_id,department ,name,email,password,gender,phone) VALUES (?,?,?,?,?,?,?)";		
		Random random=new Random();
		int studentidgeneration=random.nextInt(9999999);
		
		LibrarySystem obj=new LibrarySystem(studentidgeneration,name,email,password,dept,gender,phone);
		//objrepo.save(obj);
		int result=jdbcTemplate.update(sql,studentidgeneration, dept,name,email,password,gender,phone);  
		
		model.addAttribute("studid",studentidgeneration);
		
		String body="Hey...!   "+name+"\n\n"+"A library management system is used to maintain library records."
		+ " It tracks the records of the number of books in the library, how many books are issued, "
		+ "or how many books have been returned or renewed or late fine charges, etc. \n \n"+
		"your id is "+studentidgeneration;
		String sub="Welcome to the Library Management System";
		
		sendSimpleMail(email,body,sub);
		
		return "iddisplay";
	}
	
	@RequestMapping(value="/settings" , method=RequestMethod.GET)
	public String myprofiles(Model model)
	{
		model.addAttribute("userid",id);
List<LibrarySystem> list=jdbcTemplate.query("select * from librarydetails",BeanPropertyRowMapper.newInstance(LibrarySystem.class));
		
		for(int i=0;i<list.size();i++)
		{
			LibrarySystem t=list.get(i);
			if(t.getStudentId()==id)
			{
				model.addAttribute("books", t);
				return "settings";
			}
		}	   
		return "settings";
	}
	
	@RequestMapping(value="/Buy", method=RequestMethod.GET)
	public String buybook(Model model)
	{
		model.addAttribute("userid",id);
		return "BuyBook";
	}
	
	@RequestMapping(value="/Buy", method=RequestMethod.POST)
	public String buyabook(@RequestParam String sn1,@RequestParam String sn2,@RequestParam String sn3)
	{
		ArrayList<BooksManagement> li=(ArrayList<BooksManagement>) jdbcTemplate.query("select * from booklists",BeanPropertyRowMapper.newInstance(BooksManagement.class));
		
		for(int i=0;i<li.size();i++)
		{
			BooksManagement r=li.get(i);
			String s=r.getSerialNum();
			if(s.equals(sn1))
			{
				int stock=r.getStock()-1;
				if(stock<0)
					continue;
				Random random=new Random();
				int key=random.nextInt(99);
				String sqp="insert into studentdates (sno,buydate, enddate,student_id,serialnum) values (?,?,?,?,?)";
				jdbcTemplate.update(sqp,key,LocalDate.now()+"  "+LocalTime.now(),"",id,s);
				String st="update booklists set stock="+stock+" where serial_num="+"\""+s+"\"";
				jdbcTemplate.execute(st);			
			}
			if(s.equals(sn2))
			{
				int stock=r.getStock()-1;
				if(stock<0)
					continue;
				Random random=new Random();
				int key=random.nextInt(999);
				String sqp="insert into studentdates (sno,buydate, enddate,student_id,serialnum) values (?,?,?,?,?)";
				jdbcTemplate.update(sqp,key,LocalDate.now()+"  "+LocalTime.now(),"",id,s);
				String st="update booklists set stock="+stock+" where serial_num="+"\""+s+"\""; 
				jdbcTemplate.execute(st); 
			}
			if(s.equals(sn3))
			{
				int stock=r.getStock()-1;
				if(stock<0)
					continue;
				Random random=new Random();
				int key=random.nextInt(999);
				String sqp="insert into studentdates (sno,buydate, enddate,student_id,serialnum) values (?,?,?,?,?)";
				jdbcTemplate.update(sqp,key,LocalDate.now()+"  "+LocalTime.now(),"",id,s); 
				String st="update booklists set stock="+stock+" where serial_num="+"\""+s+"\""; 
				jdbcTemplate.execute(st);
			}
		}
		
		return "redirect:home";
	}
	
	@RequestMapping(value="/Return" ,method=RequestMethod.GET)
	public String returnget(Model model)
	{
		model.addAttribute("userid", id);
		return "Return";
	}
	
	@RequestMapping(value="/Return" ,method=RequestMethod.POST)
	public String returnpost(@RequestParam String sn1,@RequestParam String sn2,@RequestParam String sn3)
	{
ArrayList<BooksManagement> li=(ArrayList<BooksManagement>) jdbcTemplate.query("select * from booklists",BeanPropertyRowMapper.newInstance(BooksManagement.class));
		
		for(int i=0;i<li.size();i++)
		{
			BooksManagement r=li.get(i);
			String s=r.getSerialNum();
			if(s.equals(sn1))
			{
				int stock=r.getStock()+1;
				if(stock<0)
					continue;
				Random random=new Random();
				int key=random.nextInt(99);				
				String sqp="insert into studentdates (sno,buydate, enddate,student_id,serialnum) values (?,?,?,?,?)";
				jdbcTemplate.update(sqp,key,"",LocalDate.now()+"  "+LocalTime.now(),id,s);
				String st="update booklists set stock="+stock+" where serial_num="+"\""+s+"\"";
				jdbcTemplate.execute(st);			
			}
			if(s.equals(sn2))
			{
				int stock=r.getStock()+1;
				if(stock<0)
					continue;
				Random random=new Random();
				int key=random.nextInt(999);
				String sqp="insert into studentdates (sno,buydate, enddate,student_id,serialnum) values (?,?,?,?,?)";
				jdbcTemplate.update(sqp,key,"",LocalDate.now()+"  "+LocalTime.now(),id,s);
				String st="update booklists set stock="+stock+" where serial_num="+"\""+s+"\""; 
				jdbcTemplate.execute(st);
			}
			if(s.equals(sn3))
			{
				int stock=r.getStock()+1;
				if(stock<0)
					continue;
				Random random=new Random();
				int key=random.nextInt(999);
				String sqp="insert into studentdates (sno,buydate, enddate,student_id,serialnum) values (?,?,?,?,?)";
				jdbcTemplate.update(sqp,key,"",LocalDate.now()+"  "+LocalTime.now(),id,s);
				String st="update booklists set stock="+stock+" where serial_num="+"\""+s+"\""; 
				jdbcTemplate.execute(st); 
			}
		}
		return "redirect:home";
	}
	
	@RequestMapping(value="/history" ,method=RequestMethod.GET)
	public String historyget(Model model)
	{
		ArrayList<StudentDates> li=(ArrayList<StudentDates>) jdbcTemplate.query("select * from studentdates where student_id= "+id,BeanPropertyRowMapper.newInstance(StudentDates.class));
		model.addAttribute("historydetails", li);
		model.addAttribute("studentid", id);

		return "history";
	}	
	@RequestMapping(value="/help",method=RequestMethod.GET)
	public String help()
	{
		return "help";
	}
	
	@Autowired
	private JavaMailSender mailsender;
	
	public void sendSimpleMail(String tomail,String body, String sub)
	{
		SimpleMailMessage message=new SimpleMailMessage(); 
		
		message.setFrom("kavinsellamuthu004@gmail.com");
		message.setTo(tomail);
		message.setText(body);
		message.setSubject(sub);
		
		mailsender.send(message);
	}
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		//System.out.println(jdbcTemplate.query("select username from librarydetails where reg=123",BeanPropertyRowMapper.newInstance(LibrarySystem.class)).get(0).getName());
		
		//LibrarySystem o=new LibrarySystem(125,"sk","sk@gmail","kavinsl","ece","male",938383);
		
		//obj.save(o);
		
//		
//		String sql="INSERT INTO librarydetails (student_id,department ,name,email,password,gender,phone) VALUES (?,?,?,?,?,?,?)";
//		
//		int result=jdbcTemplate.update(sql,5,"ece","raja","raja@gmail","kaviraj","male",999999); 
//		
//			if(result>0)
//			System.out.println("new row has been inserted");
//			ArrayList<LibrarySystem> l=(ArrayList<LibrarySystem>) jdbcTemplate.query("select * from librarydetails",BeanPropertyRowMapper.newInstance(LibrarySystem.class));
//			for(int i=0;i<l.size();i++)
//			{
//				LibrarySystem t=l.get(i);		
//				System.out.println(t.getStudentId()+"  "+t.getName()+" "+t.getDepartment()+" "+t.getEmail()+" "+t.getPhone());
//			}
//		String s="insert into booklists (sno,book_name,author,edition,serial_num,stock) values (?,?,?,?,?,?)";
	//	int r=jdbcTemplate.update(s,2,"java","james","2098","abc123",7);
//		if(r>0)
//			System.out.println("new now has been inserted");
//		ArrayList<BooksManagement> li=(ArrayList<BooksManagement>) jdbcTemplate.query("select * from booklists",BeanPropertyRowMapper.newInstance(BooksManagement.class));
//		for(int i=0;i<li.size();i++)
//		{
//			BooksManagement y=li.get(i);
//			System.out.println(y.getBookName()+"  "+y.getAuthor()+" "+y.getSerialNum());
//		}
//		
//		String sqp="insert into studentdates (sno,buydate, enddate,student_id) values (?,?,?,?)";
//		int r=jdbcTemplate.update(sqp,1,"30-90","34.67",908);
//		jdbcTemplate.execute("alter table studentdates add column serinalnum varchar(30)");
	}	
}