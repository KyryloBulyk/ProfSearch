package com.example.profsearch.teacher;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {
    public List<Teacher> getTeachers() {
        return List.of(new Teacher(1L, "John", "jihn_op@gmail.com"));
    }

    public void addTeacher(Teacher teacher) {
        System.out.println(teacher);
    }
}
