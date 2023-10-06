package com.example.profsearch.teacher;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TeacherService {

    //----------------------------------
    //Connecting Repository to Service
    //----------------------------------
    @Autowired
    private TeacherRepository teacherRepository;


    //----------------------------------
    //Method for finding all teachers
    //----------------------------------

    public List<Teacher> findAll() {
        return teacherRepository.findAll();
    }


    //----------------------------------
    //Method for finding a teacher by Id
    //----------------------------------
    public Optional<Teacher> findById(Long id) {
        return teacherRepository.findById(id);
    }


    //----------------------------------
    //Method for storing a teacher in the Database
    //----------------------------------
    public Teacher save(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    //----------------------------------
    //Method for teachers from the Database
    //----------------------------------
    public void delete(Teacher teacher) {
        teacherRepository.delete(teacher);
    }
}
