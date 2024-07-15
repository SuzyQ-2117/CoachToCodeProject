package com.coachtocode.project.service;

import com.coachtocode.project.dtos.TaskDTO;
import com.coachtocode.project.entities.Task;
import com.coachtocode.project.repos.TaskRepo;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {
    private TaskRepo repo;

    public TaskService(TaskRepo repo) {
        this.repo = repo;
    }

    //add a new task (CREATE)
    public Task addTask(Task task) {
        Task created = this.repo.save(task);
        return created;
    }

    //get all tasks (READ)
    public List<TaskDTO> getAll() {
        //gets all tasks from the repo and adds them into a list called found
        List<Task> found = this.repo.findAll();
        //initialises an empty list called allTasks that takes in TaskDTO objects
        List<TaskDTO> allTasks = new ArrayList<>();
        //iterates over each task in the "found" list
        for (Task task : found) {
            //adds each task to the TaskDTO list "allTasks" - each DTO object will have the same values as the equivalent task object (they're not the same objects - they just have matching values)
            allTasks.add(new TaskDTO(task));
        }
        //returns the list of TaskDTO objects called allTasks
        return allTasks;
    }

    //get task by id (READ)
    public TaskDTO getTaskById(Integer id) {
        //checks if a Task exists with the given id - returns null if no matches are found
        if(!this.repo.existsById(id))
            return null;
        //if a Task does exist with the given id, the method retrieves the task from the repo
        Task found = this.repo.findById(id).get();
        //and converts the Task to a TaskDTO before returning the TaskDTO object
        return new TaskDTO(found);
    }

    //amend a task (UPDATE)
    public Task updateTask(Integer id,
                           String title,
                           String description,
                           LocalDate dueDate,
                           LocalTime dueTime,
                           String status){
        // Retrieve the Task entity with the given ID from the repository.
        // The findById method returns an Optional, and calling .get() retrieves the Task entity.
        Task toUpdate = this.repo.findById(id).get();
        // Update the Task entity fields only if the new values are provided (i.e., not null).
        // This ensures that only non-null fields are updated, leaving other fields unchanged.
        if(title != null) toUpdate.setTitle(title);
        if(description != null) toUpdate.setDescription(description);
        if(dueDate != null) toUpdate.setDueDate(dueDate);
        if(dueTime != null) toUpdate.setDueTime(dueTime);
        if(status != null) toUpdate.setStatus(status);
        // Save the updated Task entity back to the repository.
        // The save method persists the changes to the database and returns the updated Task entity.
        return this.repo.save(toUpdate);
    }

    //remove a task (DELETE)
    public Task removeTask(Integer id) {
        Task found = this.repo.findById(id).get();
        this.repo.deleteById(id);
        return found;
    }
}
