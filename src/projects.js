const projectsContainer = document.querySelector('.projects');

let projects = [new Project('Home')];
let currentProject = projects[0];

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
        this.id = Math.random().toString().split(".").join("");
    }

    render() {
        // Create project element
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.setAttribute('id', this.id);
        
        // Create project title
        const projectDivTitle = document.createElement('h3');
        projectDivTitle.classList.add('project-title');
        projectDivTitle.textContent = this.title;
        
        // Create project DELETE button
        const deleteProjectBtn = document.createElement('button');
        deleteProjectBtn.classList.add('delete-project');
        deleteProjectBtn.textContent = 'Delete';
        deleteProjectBtn.addEventListener('click', () => {
            this.delete();
        });
        
        projectDiv.appendChild(projectDivTitle);
        projectDiv.appendChild(deleteProjectBtn);

        projectsContainer.appendChild(projectDiv);

        projectDiv.addEventListener('click', () => {
            currentProject = this;
            currentProject.active = false;
            this.renderTasks();
            
            let projectClass = document.querySelectorAll('.project');
            projectClass.forEach((item) => (item.classList.value = 'project'));

            if(!projectDiv.classList.value.includes('active')) {
                projectDiv.classList.add('active')
            } else return
        })
    }

    delete() {
        projects.filter((item) => item.id !== this.id);
        Project.renderProjects();
    }

    renderTasks() {
        const tasks = document.querySelector('.tasks');
        tasks.innerHTML = '';
        this.tasks.forEach((item) => item.render());
    }

    renderProjects() {
        projectsContainer.innerHTML = '';
        projects.forEach((item) => item.render());
    }

    setCurrentProject(project) {
        currentProject = project
    }
};

export { projects, Project, currentProject }