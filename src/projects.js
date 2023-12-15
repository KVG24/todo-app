const projectsContainer = document.querySelector('.projects');

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
        this.id = Math.random().toString().split(".").join("");
    }

    render() {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.setAttribute('id', this.id);
        
        const projectDivTitle = document.createElement('h3');
        projectDivTitle.classList.add('project-title');
        projectDivTitle.textContent = this.title;
        
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
        projects = projects.filter((item) => item.id !== this.id);
        Project.renderProjects();
    }

    renderTasks() {
        const tasks = document.querySelector('.tasks');
        tasks.innerHTML = '';
        this.tasks.forEach((item) => item.render());
    }

    static renderProjects() {
        projectsContainer.innerHTML = '';
        projects.forEach((item) => item.render());
    }

    static setCurrentProject(project) {
        currentProject = project;
    }
};

let projects = [new Project('Example')];
let currentProject = projects[0];

export { projects, Project, currentProject };