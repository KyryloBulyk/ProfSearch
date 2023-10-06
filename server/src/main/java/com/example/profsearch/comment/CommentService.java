package com.example.profsearch.comment;

import com.example.profsearch.teacher.Teacher;
import com.example.profsearch.teacher.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentService {

    //----------------------------------
    //Connecting Repository to Service
    //----------------------------------

    @Autowired
    private CommentRepository commentRepository;


    //----------------------------------
    //Connecting with Service
    //----------------------------------

    @Autowired
    private TeacherRepository teacherRepository;

    //----------------------------------
    //Search for a comment by Id
    //----------------------------------

    public Optional<Comment> findById(Long id) {
        return commentRepository.findById(id);
    }


    //----------------------------------
    //Storing comments for the teacher
    //----------------------------------

    public Comment saveCommentForTeacher(Long teacherId, Comment comment) {
        Optional<Teacher> teacherOpt = teacherRepository.findById(teacherId);
        if (teacherOpt.isPresent()) {
            Teacher teacher = teacherOpt.get();
            comment.setTeacher(teacher);
            return commentRepository.save(comment);
        }
        throw new RuntimeException("Teacher not found for id " + teacherId);
    }

    //----------------------------------
    //Deleting Comment by Id
    //----------------------------------

    public void deleteComment(Long commentId) {
        if (commentRepository.existsById(commentId)) {
            commentRepository.deleteById(commentId);
        } else {
            throw new RuntimeException("Comment with ID " + commentId + " not found.");
        }
    }


    //----------------------------------
    //Updating Comment by Id
    //----------------------------------

    public Comment updateComment(Long id, Comment updatedComment) {
        Optional<Comment> optionalComment = commentRepository.findById(id);
        if(optionalComment.isPresent()) {
            Comment newComment = optionalComment.get();
            newComment.setCommentText(updatedComment.getCommentText());
            newComment.setAuthor(updatedComment.getAuthor());
            newComment.setDate(updatedComment.getDate());

            if (updatedComment.getTeacher() != null) {
                newComment.setTeacher(updatedComment.getTeacher());
            }

            return commentRepository.save(newComment);
        } else {
            throw new RuntimeException("Comment not found for id " + id);
        }
    }
}
