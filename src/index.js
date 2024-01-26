import { Project, Task } from "./classes.js";
import { renderProjects, projects, currentProject } from "./functions.js";

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
    console.log(projects);
    renderProjects();
  });
}

if (closeProjectFormBtn) {
  closeProjectFormBtn.addEventListener("click", () => {
    addProjectModal.style.display = "none";
  });
}

