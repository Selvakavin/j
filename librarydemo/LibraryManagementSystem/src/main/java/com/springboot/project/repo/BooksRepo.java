package com.springboot.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.springboot.project.main.BooksManagement;
import com.springboot.project.main.LibrarySystem;


@EnableJpaRepositories
public interface BooksRepo extends JpaRepository<BooksManagement, Integer>{
	
}
