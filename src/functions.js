let projects;
if (!localStorage.getItem("projects")) {
    projects = [
        {
            title: "Home",
            tasks: [
                {
                    title: "Clean home",
                    description: "Dust is everywhere",
                    date: "",
                    priority: "High",
                    id: "04626473771948296",
                },
                {
                    title: "Repair window",
                    description: "Kids broke the window",
                    date: "",
                    priority: "Regular",
                    id: "037213361870953765",
                },
            ],
            id: "014149084609191154",
        },
    ];
} else {
    projects = JSON.parse(localStorage.getItem("projects"));
}

let currentProject = projects[0];
const projectsContainer = document.querySelector(".projects");
const tasksContainer = document.querySelector(".tasks");

function renderProjects() {
    projectsContainer.replaceChildren();
    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.setAttribute("id", project.id);
        projectDiv.addEventListener("click", () => {
            currentProject = project;
            renderTasks();
            let projectClass = document.querySelectorAll(".project");
            projectClass.forEach((item) => (item.classList.value = "project"));
            if (!projectDiv.classList.value.includes("active")) {
                projectDiv.classList.add("active");
            }
        });

        const projectDivTitle = document.createElement("h3");
        projectDivTitle.classList.add("project-title");
        projectDivTitle.textContent = project.title;

        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.classList.add("delete-project");
        deleteProjectBtn.textContent = "X";
        deleteProjectBtn.addEventListener("click", () => {
            projects = projects.filter((item) => item.id !== project.id);
            renderProjects();
            populateLocalStorage();
        });
        projectDiv.appendChild(projectDivTitle);
        projectDiv.appendChild(deleteProjectBtn);
        projectsContainer.appendChild(projectDiv);
    });
}

function renderTasks() {
    tasksContainer.replaceChildren();
    currentProject.tasks.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.setAttribute("id", task.id);

        const taskTitle = document.createElement("h3");
        taskTitle.setAttribute("id", "task-title");
        taskTitle.textContent = task.title;

        const taskDesc = document.createElement("p");
        taskDesc.setAttribute("id", "description");
        taskDesc.textContent = task.description;

        const taskDateContainer = document.createElement("p");
        taskDateContainer.setAttribute("id", "due");
        taskDateContainer.textContent = "Due: ";
        const taskDateValue = document.createElement("span");
        taskDateValue.setAttribute("id", "task-date");
        if (!task.date) {
            taskDateValue.textContent = "No deadline";
        } else {
            taskDateValue.textContent = task.date;
        }
        taskDateContainer.appendChild(taskDateValue);

        const taskPriority = document.createElement("p");
        taskPriority.setAttribute("id", "priority-text");
        taskPriority.textContent = "Priority: ";
        const taskPriorityValue = document.createElement("span");
        taskPriorityValue.setAttribute("id", "priority");
        taskPriorityValue.textContent = task.priority;
        taskPriority.appendChild(taskPriorityValue);

        const taskBtnContainer = document.createElement("div");
        taskBtnContainer.classList.add("buttons");

        const completeBtn = document.createElement("button");
        completeBtn.classList.add("complete-btn");
        completeBtn.textContent = "Complete";
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";

        taskBtnContainer.appendChild(completeBtn);
        taskBtnContainer.appendChild(editBtn);
        taskBtnContainer.appendChild(deleteBtn);

        // Task Complete button event listener
        completeBtn.addEventListener("click", () => {
            if (!task.complete) {
                task.complete = true;
            } else {
                task.complete = false;
            }
            renderTasks();
            populateLocalStorage();
        });

        if (task.complete) {
            taskDiv.classList.add("complete");
            taskTitle.style.textDecoration = "line-through";
        } else {
            taskDiv.classList.remove("complete");
            taskTitle.style.textDecoration = "none";
        }

        // Task Edit button event listener
        editBtn.addEventListener("click", () => {
            const taskEditModal = document.querySelector(".task-edit-modal");
            taskEditModal.style.display = "flex";

            // Pre-fill modal with current task data
            const taskTitle = document.getElementById("task-title-edit");
            const taskDesc = document.getElementById("task-desc-edit");
            const taskDate = document.getElementById("task-date-edit");
            const taskPriority = document.getElementById("task-priority-edit");

            taskTitle.value = task.title;
            taskDesc.value = task.description;
            taskDate.value = task.date;
            taskPriority.value = task.priority;

            // Remove existing listeners on "Edit Task" button
            const editTaskBtn = document.querySelector(".edit-task-btn");
            const newEditTaskBtn = editTaskBtn.cloneNode(true); // Clone button to clear listeners
            editTaskBtn.replaceWith(newEditTaskBtn);

            // Add a new listener for the current task
            newEditTaskBtn.addEventListener("click", function (e) {
                e.preventDefault();

                // Update task details
                task.title = taskTitle.value;
                task.description = taskDesc.value;
                task.date = taskDate.value;
                task.priority = taskPriority.value;

                // Close modal and re-render tasks
                taskEditModal.style.display = "none";
                renderTasks();
                populateLocalStorage();
            });

            // Close modal button listener
            const closeTaskEditModalBtn = document.getElementById(
                "close-edit-modal-btn"
            );
            closeTaskEditModalBtn.addEventListener("click", () => {
                taskEditModal.style.display = "none";
            });
        });

        // Task Delete button event listener
        deleteBtn.addEventListener("click", () => {
            currentProject.tasks = currentProject.tasks.filter(
                (item) => item.id !== task.id
            );
            renderTasks();
            populateLocalStorage();
        });

        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDesc);
        taskDiv.appendChild(taskDateContainer);
        taskDiv.appendChild(taskPriority);
        taskDiv.appendChild(taskBtnContainer);
        tasksContainer.appendChild(taskDiv);
        populateLocalStorage();
    });
}

function populateLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

// Setting the first project as active
const firstProjectDiv = document.querySelector(".project");
if (firstProjectDiv) {
    firstProjectDiv.classList.add("active");
}

export {
    projects,
    currentProject,
    renderProjects,
    renderTasks,
    populateLocalStorage,
};
