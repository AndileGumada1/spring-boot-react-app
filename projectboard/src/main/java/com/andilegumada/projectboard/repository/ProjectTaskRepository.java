package com.andilegumada.projectboard.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.andilegumada.projectboard.domain.ProjectTask;

@Repository
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {
	ProjectTask getById(Long id);
}
