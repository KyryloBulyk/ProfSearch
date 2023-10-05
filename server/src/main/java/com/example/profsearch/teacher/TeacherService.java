package com.example.profsearch.teacher;

import jakarta.persistence.CascadeType;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;

    public void addTeacher(Teacher teacher) {
        System.out.println(teacher);
    }

    public List<Teacher> findAll() {
        return teacherRepository.findAll();
    }

    public Optional<Teacher> findById(Long id) {
        return teacherRepository.findById(id);
    }

    public Teacher save(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    public void delete(Teacher teacher) {
        teacherRepository.delete(teacher);
    }

//    @OneToMany(mappedBy = "teacher", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<Comment> comments = new ArrayList<>();
}
