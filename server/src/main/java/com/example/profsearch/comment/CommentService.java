package com.example.profsearch.comment;

import com.example.profsearch.teacher.Teacher;
import com.example.profsearch.teacher.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    public Comment saveCommentForTeacher(Long teacherId, Comment comment) {
        Optional<Teacher> teacherOpt = teacherRepository.findById(teacherId);
        if (teacherOpt.isPresent()) {
            Teacher teacher = teacherOpt.get();
            comment.setTeacher(teacher);
            return commentRepository.save(comment);
        }
        throw new RuntimeException("Teacher not found for id " + teacherId);
    }

}
