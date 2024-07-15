package com.coachtocode.project.rest;

import com.coachtocode.project.dtos.TaskDTO;
import com.coachtocode.project.entities.Task;
import com.coachtocode.project.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="task")
public class TaskController {

    private TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    //CREATE
    @PostMapping("/add")
    public Task addTask(@RequestBody Task task) {
        return this.service.addTask(task);
    }
    //READ
    @GetMapping("/all")
    public List<TaskDTO> getAllTasks() {
        return this.service.getAll();
    }

    @GetMapping("/{id}")
    public TaskDTO getTaskById(@PathVariable Integer id) {
        return this.service.getTaskById(id);
    }

    //UPDATE
    @PatchMapping("/update/{id}")
    public Task updateTask(@PathVariable int id,
                           @RequestParam(required = false) String title,
                           @RequestParam(required = false) String description,
                           @RequestParam(required = false) LocalDate dueDate,
                           @RequestParam(required = false) LocalTime dueTime,
                           @RequestParam (required = false) String status) {
        return this.service.updateTask(id, title, description, dueDate, dueTime, status);
    }

    //DELETE
    @DeleteMapping("/remove/{id}")
    public Task removeTask(@PathVariable int id) {
        return this.service.removeTask(id);
    }
}
