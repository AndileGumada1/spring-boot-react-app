package com.andilegumada.projectboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andilegumada.projectboard.domain.ProjectTask;
import com.andilegumada.projectboard.repository.ProjectTaskRepository;

@Service
public class ProjectTaskService {

	@Autowired
	private ProjectTaskRepository projectTaskRepository;
	
	public ProjectTask saveOrUpdateProjectTask(ProjectTask projectTask) {
		
		if (projectTask.getStatus()==null || projectTask.getStatus() == "") {
			projectTask.setStatus("TO_DO");
		}
		return projectTaskRepository.save(projectTask);
	}
	
	//method used to find all the ProjectTask
	public Iterable<ProjectTask> findAll(){
		return projectTaskRepository.findAll();
	}
	
	//method used to find a ProjectTask by id
	public ProjectTask findById(Long id) {
		return projectTaskRepository.getById(id);
	}
}
