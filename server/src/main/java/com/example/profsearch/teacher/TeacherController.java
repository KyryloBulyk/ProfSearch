package com.example.profsearch.teacher;

import com.example.profsearch.comment.Comment;
import com.example.profsearch.comment.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/teachers")
@CrossOrigin(origins = "http://localhost:5173")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    // Get all teachers
    @GetMapping
    public List<Teacher> getAllTeachers() {
        return teacherService.findAll();
    }

    // Get a teacher by id
    @GetMapping("/{id}")
    public ResponseEntity<Teacher> getTeacherById(@PathVariable Long id) {
        System.out.println("Fetching teacher with id " + id);
        Optional<Teacher> teacher = teacherService.findById(id);
        return teacher.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // Create a new teacher
    @PostMapping
    public ResponseEntity<Teacher> createTeacher(@RequestBody Teacher teacher) {
        Teacher savedTeacher = teacherService.save(teacher);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTeacher);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Teacher> updateTeacher(@PathVariable Long id, @RequestBody Teacher teacherDetails) {
        Optional<Teacher> optionalTeacher = teacherService.findById(id);
        if(optionalTeacher.isPresent()) {
            Teacher teacher = optionalTeacher.get();
            teacher.setName(teacherDetails.getName());
            teacher.setPhotoUrl(teacherDetails.getPhotoUrl());
            teacher.setSurname(teacherDetails.getSurname());
            teacher.setTitle(teacherDetails.getTitle());
            teacher.setLocation(teacherDetails.getLocation());
            teacher.setDepartment(teacherDetails.getDepartment());
            teacher.setContactEmail(teacherDetails.getContactEmail());
            teacher.setLinkedinUrl(teacherDetails.getLinkedinUrl());
            teacher.setInstagramUrl(teacherDetails.getInstagramUrl());
            teacher.setDescription(teacherDetails.getDescription());
            Teacher updatedTeacher = teacherService.save(teacher);
            return ResponseEntity.ok(updatedTeacher);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeacher(@PathVariable Long id) {
        Optional<Teacher> optionalTeacher = teacherService.findById(id);
        if (optionalTeacher.isPresent()) {
            teacherService.delete(optionalTeacher.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    //Comments
    @Autowired
    private CommentService commentService;

    @PostMapping("/{teacherId}/comments")
    public ResponseEntity<Comment> addCommentToTeacher(@PathVariable Long teacherId, @RequestBody Comment comment) {
        System.out.println("Received comment: " + comment);
        try {
            Comment savedComment = commentService.saveCommentForTeacher(teacherId, comment);
            System.out.println("Saved comment: " + savedComment);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedComment);
        } catch (RuntimeException e) {
            System.out.println("Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

}
