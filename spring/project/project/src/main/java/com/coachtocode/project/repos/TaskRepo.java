package com.coachtocode.project.repos;

import com.coachtocode.project.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepo extends JpaRepository<Task, Integer> {
}
