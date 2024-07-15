package com.coachtocode.project.entities;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
public class Task {

    //fields
    @Id
    @GeneratedValue (strategy= GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    private LocalDate dueDate;
    private LocalTime dueTime;
    private String status;

    //everything constructor
    public Task(String status, LocalTime dueTime, LocalDate dueDate, String description, String title, Integer id) {
        this.status = status;
        this.dueTime = dueTime;
        this.dueDate = dueDate;
        this.description = description;
        this.title = title;
        this.id = id;
    }

    //empty constructor
    public Task() {
    }

    //getters and setters for the task
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public LocalTime getDueTime() {
        return dueTime;
    }

    public void setDueTime(LocalTime dueTime) {
        this.dueTime = dueTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    //toString for the task
    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", dueDate=" + dueDate +
                ", dueTime=" + dueTime +
                ", status='" + status + '\'' +
                '}';
    }
}
