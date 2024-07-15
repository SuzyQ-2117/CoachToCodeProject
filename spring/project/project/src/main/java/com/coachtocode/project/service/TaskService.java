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
        List<Task> found = this.repo.findAll();
        List<TaskDTO> allTasks = new ArrayList<>();
        for (Task task : found) {
            allTasks.add(new TaskDTO(task));
        }
        return allTasks;
    }

    //get task by id (READ)
    public TaskDTO getTaskById(Integer id) {
        if(!this.repo.existsById(id))
            return null;
        Task found = this.repo.findById(id).get();
        return new TaskDTO(found);
    }

    //amend a task (UPDATE)
    public Task updateTask(Integer id,
                           String title,
                           String description,
                           LocalDate dueDate,
                           LocalTime dueTime){
        Task toUpdate = this.repo.findById(id).get();
        if(title != null) toUpdate.setTitle(title);
        if(description != null) toUpdate.setDescription(description);
        if(dueDate != null) toUpdate.setDueDate(dueDate);
        if(dueTime != null) toUpdate.setDueTime(dueTime);
        return this.repo.save(toUpdate);
    }

    //remove a task (DELETE)
    public Task removeTask(Integer id) {
        Task found = this.repo.findById(id).get();
        this.repo.deleteById(id);
        return found;
    }
}
