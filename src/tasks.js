import { currentProject } from "./projects";

const tasksContainer = document.querySelector('.tasks');

export class Task {
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
        taskTitle.textContent = this.title;

        const taskDesc = document.createElement('p');
        taskDesc.setAttribute('id', 'description');
        taskDesc.textContent = this.description;

        const taskDateContainer = document.createElement('p');
        taskDateContainer.setAttribute('id', 'due');
        taskDateContainer.textContent = 'Due: '
        const taskDateValue = document.createElement('span');
        taskDateValue.setAttribute('id', 'task-date');
        if (!this.date) {
            taskDateValue.textContent = 'No deadline'
        } else {
            taskDateValue.textContent = this.date;
        }
        taskDateContainer.appendChild(taskDateValue);

        const taskPriority = document.createElement('p');
        taskPriority.setAttribute('id', 'priority-text');
        taskPriority.textContent = 'Priority: '
        const taskPriorityValue = document.createElement('span');
        taskPriorityValue.setAttribute('id', 'priority');
        taskPriorityValue.textContent = this.priority;
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
                taskTitle.style.textDecoration = 'none';
            } else {
                taskDiv.classList.add('complete');
                taskTitle.style.textDecoration = 'line-through';
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
        tasksContainer.appendChild(taskDiv);

    }

    delete() {
        currentProject.tasks = currentProject.tasks.filter((item) => item.id !== this.id);
        currentProject.renderTasks();
    }

    edit() {
        const taskEditModal = document.querySelector('.task-edit-modal');
        taskEditModal.style.display = 'flex';
        const editTaskBtn = document.getElementById('edit-task-btn');
        editTaskBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const taskTitle = document.getElementById('task-title-edit');
            const taskDesc = document.getElementById('task-desc-edit');
            const taskDate = document.getElementById('task-date-edit');
            const taskPriority = document.getElementById('task-priority-edit');

            this.title = taskTitle.value;
            this.description = taskDesc.value;
            this.date = taskDate.value;
            this.priority = taskPriority.value;
            taskEditModal.style.display = 'none';
            currentProject.renderTasks();
            
        });
        
        const closeEditModalBtn = document.getElementById('close-edit-modal-btn');
        closeEditModalBtn.addEventListener('click', () => {
            taskEditModal.style.display = 'none';
        });
    }
}


