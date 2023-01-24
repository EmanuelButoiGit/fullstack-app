package com.emanuel.springbootlibrary.dao;

import com.emanuel.springbootlibrary.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
