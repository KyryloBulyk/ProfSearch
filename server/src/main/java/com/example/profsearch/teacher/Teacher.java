package com.example.profsearch.teacher;

import com.example.profsearch.comment.Comment;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "teachers")
public class Teacher {

    //----------------------------------
    // Create fields
    //----------------------------------

    @Id
    @Column(name = "teacherid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long teacherId;

    //Photo for the Teacher in URL form
    @Column(name = "photourl")
    private String photoUrl;

    //Name
    @Column(name = "name")
    private String name;

    //Surname
    @Column(name = "surname")
    private String surname;

    //Title
    @Column(name = "title")
    private String title;

    //Building
    @Column(name = "building")
    private String building;

    //Room
    @Column(name = "room")
    private String room;

    //Department
    @Column(name = "department")
    private String department;

    //Email
    @Column(name = "contactemail")
    private String contactEmail;

    //LinkedIn
    @Column(name = "linkedinurl")
    private String linkedinUrl;

    //Instagram
    @Column(name = "instagramurl")
    private String instagramUrl;

    //Description
    @Column(name = "description_ukraine", length = 1000)
    private String description_ukraine;

    //Description
    @Column(name = "decription_slovak", length = 1000)
    private String decription_slovak;

    //Connection between Tables "Teachers" and "Comments" in PostgresSQL
    @OneToMany(mappedBy = "teacher", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Set<Comment> comments;


    //----------------------------------
    //Setters and getters for fields
    //----------------------------------

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

    public Long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Long teacherId) {
        this.teacherId = teacherId;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public String getDescription_ukraine() {
        return description_ukraine;
    }

    public void setDescription_ukraine(String description_ukraine) {
        this.description_ukraine = description_ukraine;
    }

    public String getDecription_slovak() {
        return decription_slovak;
    }

    public void setDecription_slovak(String decription_slovak) {
        this.decription_slovak = decription_slovak;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getLinkedinUrl() {
        return linkedinUrl;
    }

    public void setLinkedinUrl(String linkedinUrl) {
        this.linkedinUrl = linkedinUrl;
    }

    public String getInstagramUrl() {
        return instagramUrl;
    }

    public void setInstagramUrl(String instagramUrl) {
        this.instagramUrl = instagramUrl;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "teacherId=" + teacherId +
                ", photoUrl='" + photoUrl + '\'' +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", title='" + title + '\'' +
                ", building='" + building + '\'' +
                ", room='" + room + '\'' +
                ", department='" + department + '\'' +
                ", contactEmail='" + contactEmail + '\'' +
                ", linkedinUrl='" + linkedinUrl + '\'' +
                ", instagramUrl='" + instagramUrl + '\'' +
                ", description_ukraine='" + description_ukraine + '\'' +
                ", decription_slovak='" + decription_slovak + '\'' +
                ", comments=" + comments +
                '}';
    }
}
