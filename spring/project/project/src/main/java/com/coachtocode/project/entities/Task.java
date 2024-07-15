package com.coachtocode.project.entities;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
public class Task {

    //Task is set up to hold the values of tasks that will be created on the To Do List app. A task will hold a title, description, due date, due time and a completion status.
    //All parameters (except a unique id) can be updated. The idea is that the user adds a task to their to do list (which sets a default status of "Not started" and can then progress that task to "In Progress" and "Completed". Task status will be set by a fixed drop-down so that this field remains consistent.
    //dueTime is a field that users can either enter a set time into or they can tick "All day" which will set the dueTime as 00:00
    //fields
    @Id
    @GeneratedValue (strategy= GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    private LocalDate dueDate;
    private LocalTime dueTime;
    private String status;

    //everything constructor - constructs a task object using the listed fields
    public Task(String status, LocalTime dueTime, LocalDate dueDate, String description, String title, Integer id) {
        this.status = status;
        this.dueTime = dueTime;
        this.dueDate = dueDate;
        this.description = description;
        this.title = title;
        this.id = id;
    }

    //empty constructor - required for JPA. JPA basically creates an empty instance before assigning values to the corresponding fields
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
