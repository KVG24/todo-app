class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.id = Math.random().toString().split(".").join("");
  }
}

let projects = [];
let currentProject;

class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.id = Math.random().toString().split(".").join("");
  }
}

export { Project, Task, projects, currentProject };