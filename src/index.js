import { Project, currentProject, projects } from "./projects"
import { Task } from "./tasks"

// Projects manipulation

const addProjectModal = document.querySelector('.add-project-modal');
const addProjectBtn = document.getElementById('add-project-btn');
const addProjectToPageBtn = document.getElementById('add-project-form-btn');
const closeProjectFormBtn = document.getElementById('close-project-form-btn');


addProjectBtn.addEventListener('click', () => {
    addProjectModal.style.display = 'flex';
});

addProjectToPageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const projectTitle = document.getElementById('form-project-title')
    const project = new Project(projectTitle.value)
    projects.push(project);
    projectTitle.value = '';
    Project.renderProjects();
    Project.setCurrentProject(project);
    addProjectModal.style.display = 'none';
});

closeProjectFormBtn.addEventListener('click', () => {
    addProjectModal.style.display = 'none';
});

// Tasks manipulation

const addTaskBtn = document.getElementById('add-task');
const addTaskModal = document.querySelector('.task-add-modal');
const addTaskBtnForm = document.getElementById('add-task-btn');
const closeTaskModalBtn = document.getElementById('close-modal-btn');

addTaskBtn.addEventListener('click', () => {
    addTaskModal.style.display = 'flex';
});

addTaskBtnForm.addEventListener('click', () => {
    addTaskModal.style.display = 'none';
    
    const taskTitle = document.getElementById('task-title-input');
    const taskDesc = document.getElementById('task-desc-input');
    const taskDate = document.getElementById('task-date-input');
    const taskPriority = document.getElementById('task-priority-input');

    const task = new Task(taskTitle.value, taskDesc.value, taskDate.value, taskPriority.value);
    currentProject.tasks.push(task);
    task.render();
});

closeTaskModalBtn.addEventListener('click', () => {
    addTaskModal.style.display = 'none';
});

Project.renderProjects();











