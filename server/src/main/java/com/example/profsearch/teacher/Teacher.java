package com.example.profsearch.teacher;

import com.example.profsearch.comment.Comment;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "teachers")
public class Teacher {
    @Id
    @Column(name = "teacherid")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "photourl")
    private String photoUrl;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "title")
    private String title;

    @Column(name = "location")
    private String location;

    @Column(name = "department")
    private String department;

    @Column(name = "contactemail")
    private String contactEmail;

    @Column(name = "linkedinurl")
    private String linkedinUrl;

    @Column(name = "instagramurl")
    private String instagramUrl;

    @Column(name = "description", length = 1000)
    private String description;

    @OneToMany(mappedBy = "teacher", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Set<Comment> comments;

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "id=" + id +
                ", photoUrl='" + photoUrl + '\'' +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", title='" + title + '\'' +
                ", location='" + location + '\'' +
                ", department='" + department + '\'' +
                ", contactEmail='" + contactEmail + '\'' +
                ", linkedinUrl='" + linkedinUrl + '\'' +
                ", instagramUrl='" + instagramUrl + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
