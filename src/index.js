import { Project, Task } from './classes.js';

let projects = [];
let currentProject;

const addProjectBtn = document.querySelector('.add-project-btn');
const addProjectModal = document.querySelector('.add-project-modal');
const addProjectFormBtn = document.getElementById('add-project-form-btn');
const closeProjectFormBtn = document.getElementById('close-project-form-btn');

addProjectBtn.addEventListener('click', () => {
  addProjectModal.style.display = 'flex'; 
});

if (addProjectFormBtn) { 
  addProjectFormBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addProjectModal.style.display = 'none';
  const title = document.getElementById('form-project-title').value;
  const newProject = new Project(title);
  projects.push(newProject);
  currentProject = newProject;
  console.log(projects);
  })
};

if (closeProjectFormBtn) {
  closeProjectFormBtn.addEventListener('click', () => {addProjectModal.style.display = 'none'});
};