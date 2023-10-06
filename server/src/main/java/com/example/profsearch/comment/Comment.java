package com.example.profsearch.comment;

import com.example.profsearch.teacher.Teacher;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "commentid")
    private Long id;

    @ManyToOne
    @JoinColumn(name="teacherid", referencedColumnName = "teacherid")
    @JsonBackReference
    private Teacher teacher;

    @Column(name = "commenttext")
    private String commentText;

    @Column(name = "date")
    private Date date;

    @Column(name = "author")
    private String author;

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Long getCommentId() {
        return id;
    }

    public void setCommentId(Long id) {
        this.id = id;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", teacher=" + teacher +
                ", commentText='" + commentText + '\'' +
                ", date=" + date +
                '}';
    }
}