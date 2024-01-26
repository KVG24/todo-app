function createDOMElement(elementName, element, className, id, text) {
  elementName = document.createElement(element);
  if (className) {
    elementName.classList.add(className);
  }
  if (id) {
    elementName.setAttribute("id", id);
  }
  if (text) {
    elementName.textContent = text;
  }
}

let projects = [];
let currentProject;
const projectsContainer = document.querySelector(".projects");

function renderProjects() {
  projectsContainer.replaceChildren();
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.setAttribute("id", project.id);

    const projectDivTitle = document.createElement("h3");
    projectDivTitle.classList.add("project-title");
    projectDivTitle.textContent = project.title;

    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.classList.add("delete-project");
    deleteProjectBtn.textContent = "Delete";
    deleteProjectBtn.addEventListener("click", () => {
      projects = projects.filter((item) => item.id !== project.id);
      renderProjects()
    });
    projectDiv.appendChild(projectDivTitle);
    projectDiv.appendChild(deleteProjectBtn);
    projectsContainer.appendChild(projectDiv);
  });
}

export { projects, currentProject, renderProjects };
