package com.example.profsearch.teacher;


public class Teacher {
    private Long id;

    private String name;
    private String email;

    public Teacher() {
    }

    public Teacher(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }


    public Teacher(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
