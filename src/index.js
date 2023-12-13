import { Project, currentProject, projects } from "./projects"
import { Task } from "./tasks"

// Projects manipulation

const addProjectDiv = document.querySelector('.form-project-div');
const projectAddBtn = document.getElementById('add-project-btn');
const addProjectToPageBtn = document.getElementById('add-project-form-btn');
const closeProjectFormBtn = document.getElementById('close-project-form-btn');


projectAddBtn.addEventListener('click', () => {
    clearProjectInput();
    addProjectDiv.style.display = 'block';
});


addProjectToPageBtn.addEventListener('click', () => {
    const projectTitle = document.getElementById('form-project-title')
    const project = new Project(projectTitle.value)
    projects.push(project);
    projectTitle.value = '';
    Project.renderProjects();
    Project.setCurrentProject(project);
    let projectsContainer = document.querySelectorAll('.project');
    projectsContainer[projectsContainer.length - 1].classList.add('active');
    clearProjectInput();
    addProjectDiv.style.display = 'none';
});


closeProjectFormBtn.addEventListener('click', () => {
    addProjectDiv.style.display = 'none';
});

const projectTitleInput = document.getElementById('form-project-title');
function clearProjectInput() {
    projectTitleInput.value = '';
}

// Tasks manipulation

const addTaskBtn = document.getElementById('add-task');
const addTaskModal = document.querySelector('.task-add-modal');
const addTaskBtnForm = document.getElementById('add-task-btn');

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
    currentProject.tasks.push('task');
    task.render();
});

Project.renderProjects();









