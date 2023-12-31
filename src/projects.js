class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.id = Math.random().toString().split(".").join("");
  }
}

let projects = [];
let currentProject;

export { projects, Project, currentProject };
