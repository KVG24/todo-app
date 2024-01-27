import { Project, Task } from "./classes.js";
import { renderProjects, projects, currentProject } from "./functions.js";

// Project interactions

const addProjectBtn = document.querySelector(".add-project-btn");
const addProjectModal = document.querySelector(".add-project-modal");
const addProjectFormBtn = document.getElementById("add-project-form-btn");
const closeProjectFormBtn = document.getElementById("close-project-form-btn");

addProjectBtn.addEventListener("click", () => {
  addProjectModal.style.display = "flex";
});

if (addProjectFormBtn) {
  addProjectFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addProjectModal.style.display = "none";
    const title = document.getElementById("form-project-title");
    const newProject = new Project(title.value);
    projects.push(newProject);
    renderProjects();
  });
}

if (closeProjectFormBtn) {
  closeProjectFormBtn.addEventListener("click", () => {
    addProjectModal.style.display = "none";
  });
}

// Task interactions

const addtaskBtn = document.getElementById("add-task");
const addTaskToProjectBtn = document.getElementById("add-task-btn");
const addTaskModal = document.querySelector(".task-add-modal");
const closeTaskModal = document.getElementById("close-modal-btn");

addtaskBtn.addEventListener("click", () => {
  addTaskModal.style.display = "flex";
});

addTaskToProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTaskModal.style.display = "none";
});

closeTaskModal.addEventListener("click", () => {
  addTaskModal.style.display = "none";
});
