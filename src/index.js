class Task {
    constructor(title, description, date, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }
}

class Project {
    constructor(title) {
        this.title = title;
    }
}

let projects = [];

const addProjectDiv = document.querySelector('.form-project-div');
const projectAddBtn = document.getElementById('add-project-btn');

projectAddBtn.addEventListener('click', () => {
    clearProjectInput();
    addProjectDiv.style.display = 'block';
})

const addProjectToPageBtn = document.getElementById('add-project-form-btn');
addProjectToPageBtn.addEventListener('click', () => {
    addProject();
    addProjectToPage(projects[projects.length - 1]);
    clearProjectInput();
    addProjectDiv.style.display = 'none';
})

const closeProjectFormBtn = document.getElementById('close-project-form-btn');
closeProjectFormBtn.addEventListener('click', () => {
    addProjectDiv.style.display = 'none';
})

const projectTitleInput = document.getElementById('form-project-title');

function addProject() {
    if (projectTitleInput.value) {
        const projectTitle = projectTitleInput.value;
        const project = new Project(projectTitle);
        projects.push(project);
    }
};

const projectsContainer = document.querySelector('.projects');

function addProjectToPage(project) {
    const projectIndex = projects.indexOf(project);

    const projectDiv = document.createElement('div');
    const projectDivTitle = document.createElement('h3');
    const deleteProjectBtn = document.createElement('button');
    projectDiv.classList.add('project');
    projectDivTitle.classList.add('project-title');
    deleteProjectBtn.classList.add('delete-project');
    deleteProjectBtn.textContent = 'Delete';
    projectDiv.setAttribute('data-index', projectIndex);

    if (project.title) {
        projectDivTitle.textContent = project.title
    }

    projectDiv.appendChild(projectDivTitle);
    projectDiv.appendChild(deleteProjectBtn);

    projectsContainer.appendChild(projectDiv);

    deleteProjectBtn.addEventListener('click', () => {
        projectsContainer.removeChild(projectDiv);
        const index = projectDiv.getAttribute('data-index');
        projects.splice(index, 1);
    })

    project.title = '';
}

function clearProjectInput() {
    projectTitleInput.value = '';
}