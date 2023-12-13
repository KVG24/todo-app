import { currentProject } from "./projects";

const tasks = document.querySelector('.tasks');

class Task {
    constructor(title, description, date, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.id = Math.random().toString().split(".").join("");
    }

    render() {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.setAttribute('id', this.id);

        const taskTitle = document.createElement('h3');
        taskTitle.setAttribute('id', 'task-title');

        const taskDesc = document.createElement('p');
        taskDesc.setAttribute('id', 'description');

        const taskDateContainer = document.createElement('p');
        taskDateContainer.setAttribute('id', 'due');
        const taskDateValue = document.createElement('span');
        taskDateValue.setAttribute('id', 'task-date');
        taskDateContainer.appendChild(taskDateValue);

        const taskPriority = document.createElement('p');
        taskPriority.setAttribute('id', 'priority-text');
        const taskPriorityValue = document.createElement('span');
        taskPriorityValue.setAttribute('id', 'priority');
        taskPriority.appendChild(taskPriorityValue);

        const taskBtnContainer = document.createElement('div');
        taskBtnContainer.classList.add('buttons');

        const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');
        completeBtn.textContent = 'Complete';
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        taskBtnContainer.appendChild(completeBtn);
        taskBtnContainer.appendChild(editBtn);
        taskBtnContainer.appendChild(deleteBtn);
        
        completeBtn.addEventListener('click', () => {
            if (taskDiv.classList.value.includes('complete')) {
                taskDiv.classList.remove('complete')
            } else {
                taskDiv.classList.add('complete');
            }
        });

        editBtn.addEventListener('click', () => {
            this.edit()
        })

        deleteBtn.addEventListener('click', () => {
            this.delete()
        })

        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDesc);
        taskDiv.appendChild(taskDateContainer);
        taskDiv.appendChild(taskPriority);
        taskDiv.appendChild(taskBtnContainer);
        tasks.appendChild(taskDiv);

    }

    delete() {
        currentProject.tasks = currentProject.tasks.filter((item) => item.id !== this.id);
        currentProject.renderTasks();
    }

    edit() {
        
    }
}


