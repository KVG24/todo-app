/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
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
            }
        })
        console.log(projects);
    }

    delete() {
        projects = projects.filter((item) => item.id !== this.id);
        Project.renderProjects();
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    renderTasks() {
        const tasksContainer = document.querySelector('.tasks');
        tasksContainer.replaceChildren();
        this.tasks.forEach(task => task.render());
    }

    static renderProjects() {
        projectsContainer.replaceChildren();
        projects.forEach(item => item.render());
    }

    static setCurrentProject(project) {
        currentProject = project;
    }
};

let projects = [];
let currentProject;



/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


const tasksContainer = document.querySelector('.tasks');

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
        _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject.tasks = _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject.tasks.filter((item) => item.id !== this.id);
        _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject.renderTasks();
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
            _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject.renderTasks();
            
        });
        
        const closeEditModalBtn = document.getElementById('close-edit-modal-btn');
        closeEditModalBtn.addEventListener('click', () => {
            taskEditModal.style.display = 'none';
        });
    }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



// Projects manipulation

const addProjectModal = document.querySelector('.add-project-modal');
const addProjectBtn = document.getElementById('add-project-btn');
const addProjectToPageBtn = document.getElementById('add-project-form-btn');
const closeProjectFormBtn = document.getElementById('close-project-form-btn');


addProjectBtn.addEventListener('click', () => {
    addProjectModal.style.display = 'flex';
});

addProjectToPageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const projectTitle = document.getElementById('form-project-title')
    const project = new _projects__WEBPACK_IMPORTED_MODULE_0__.Project(projectTitle.value)
    _projects__WEBPACK_IMPORTED_MODULE_0__.projects.push(project);
    projectTitle.value = '';
    _projects__WEBPACK_IMPORTED_MODULE_0__.Project.renderProjects();
    _projects__WEBPACK_IMPORTED_MODULE_0__.Project.setCurrentProject(project);
    addProjectModal.style.display = 'none';
    localStorage.setItem('projects', JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projects));
});

closeProjectFormBtn.addEventListener('click', () => {
    addProjectModal.style.display = 'none';
});

// Tasks manipulation

const addTaskBtn = document.getElementById('add-task');
const addTaskModal = document.querySelector('.task-add-modal');
const addTaskBtnForm = document.getElementById('add-task-btn');
const closeTaskModalBtn = document.getElementById('close-modal-btn');

addTaskBtn.addEventListener('click', () => {
    addTaskModal.style.display = 'flex';
});

addTaskBtnForm.addEventListener('click', (e) => {
    e.preventDefault();
    addTaskModal.style.display = 'none';
    
    const taskTitle = document.getElementById('task-title-input');
    const taskDesc = document.getElementById('task-desc-input');
    const taskDate = document.getElementById('task-date-input');
    const taskPriority = document.getElementById('task-priority-input');

    const task = new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task(taskTitle.value, taskDesc.value, taskDate.value, taskPriority.value);
    _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject.tasks.push(task);
    task.render();
    localStorage.setItem('projects', JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projects));
});

closeTaskModalBtn.addEventListener('click', () => {
    addTaskModal.style.display = 'none';
});

_projects__WEBPACK_IMPORTED_MODULE_0__.Project.renderProjects();













})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFNEM7O0FBRTVDOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVEscURBQWMsU0FBUyxxREFBYztBQUM3QyxRQUFRLHFEQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFjO0FBQzFCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7OztVQ3hIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044RDtBQUNoQzs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBTztBQUMvQixJQUFJLCtDQUFRO0FBQ1o7QUFDQSxJQUFJLDhDQUFPO0FBQ1gsSUFBSSw4Q0FBTztBQUNYO0FBQ0Esb0RBQW9ELCtDQUFRO0FBQzVELENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsd0NBQUk7QUFDekIsSUFBSSxxREFBYztBQUNsQjtBQUNBLG9EQUFvRCwrQ0FBUTtBQUM1RCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVELDhDQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC1vZGluLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0RGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBwcm9qZWN0RGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qZWN0RGl2VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2VGl0bGUpO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuXG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHRoaXM7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVGFza3MoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHByb2plY3RDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0Q2xhc3MuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uY2xhc3NMaXN0LnZhbHVlID0gJ3Byb2plY3QnKSk7XG5cbiAgICAgICAgICAgIGlmKCFwcm9qZWN0RGl2LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSB0aGlzLmlkKTtcbiAgICAgICAgUHJvamVjdC5yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cblxuICAgIHJlbmRlclRhc2tzKCkge1xuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5yZW5kZXIoKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlclByb2plY3RzKCkge1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChpdGVtID0+IGl0ZW0ucmVuZGVyKCkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG59O1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcbmxldCBjdXJyZW50UHJvamVjdDtcblxuZXhwb3J0IHsgcHJvamVjdHMsIFByb2plY3QsIGN1cnJlbnRQcm9qZWN0IH07IiwiaW1wb3J0IHsgY3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZCk7XG5cbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZScpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCB0YXNrRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0RhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdkdWUnKTtcbiAgICAgICAgdGFza0RhdGVDb250YWluZXIudGV4dENvbnRlbnQgPSAnRHVlOiAnXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRhc2tEYXRlVmFsdWUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRhdGUnKTtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGUpIHtcbiAgICAgICAgICAgIHRhc2tEYXRlVmFsdWUudGV4dENvbnRlbnQgPSAnTm8gZGVhZGxpbmUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrRGF0ZVZhbHVlLnRleHRDb250ZW50ID0gdGhpcy5kYXRlO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEYXRlVmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktdGV4dCcpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICdcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRhc2tQcmlvcml0eVZhbHVlLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgICAgICAgdGFza1ByaW9yaXR5VmFsdWUudGV4dENvbnRlbnQgPSB0aGlzLnByaW9yaXR5O1xuICAgICAgICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5VmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XG5cbiAgICAgICAgY29uc3QgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29tcGxldGVCdG4uY2xhc3NMaXN0LmFkZCgnY29tcGxldGUtYnRuJyk7XG4gICAgICAgIGNvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnRuJyk7XG4gICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgICAgICB0YXNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlQnRuKTtcbiAgICAgICAgdGFza0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgdGFza0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICBcbiAgICAgICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFza0Rpdi5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2NvbXBsZXRlJykpIHtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJylcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0RhdGVDb250YWluZXIpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0J0bkNvbnRhaW5lcik7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrcyA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gdGhpcy5pZCk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnJlbmRlclRhc2tzKCk7XG4gICAgfVxuXG4gICAgZWRpdCgpIHtcbiAgICAgICAgY29uc3QgdGFza0VkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtbW9kYWwnKTtcbiAgICAgICAgdGFza0VkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRhc2stYnRuJyk7XG4gICAgICAgIGVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlLWVkaXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzYy1lZGl0Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUtZWRpdCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stcHJpb3JpdHktZWRpdCcpO1xuXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGFza1RpdGxlLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gdGFza0RhdGUudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5LnZhbHVlO1xuICAgICAgICAgICAgdGFza0VkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QucmVuZGVyVGFza3MoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNsb3NlRWRpdE1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLWVkaXQtbW9kYWwtYnRuJyk7XG4gICAgICAgIGNsb3NlRWRpdE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFza0VkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0LCBjdXJyZW50UHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza3NcIlxuXG4vLyBQcm9qZWN0cyBtYW5pcHVsYXRpb25cblxuY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuY29uc3QgYWRkUHJvamVjdFRvUGFnZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1mb3JtLWJ0bicpO1xuY29uc3QgY2xvc2VQcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1wcm9qZWN0LWZvcm0tYnRuJyk7XG5cblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn0pO1xuXG5hZGRQcm9qZWN0VG9QYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcHJvamVjdC10aXRsZScpXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZS52YWx1ZSlcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHByb2plY3RUaXRsZS52YWx1ZSA9ICcnO1xuICAgIFByb2plY3QucmVuZGVyUHJvamVjdHMoKTtcbiAgICBQcm9qZWN0LnNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59KTtcblxuY2xvc2VQcm9qZWN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG4vLyBUYXNrcyBtYW5pcHVsYXRpb25cblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpO1xuY29uc3QgYWRkVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYWRkLW1vZGFsJyk7XG5jb25zdCBhZGRUYXNrQnRuRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idG4nKTtcbmNvbnN0IGNsb3NlVGFza01vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLW1vZGFsLWJ0bicpO1xuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufSk7XG5cbmFkZFRhc2tCdG5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUtaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2MtaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUtaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wcmlvcml0eS1pbnB1dCcpO1xuXG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tUaXRsZS52YWx1ZSwgdGFza0Rlc2MudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUpO1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gICAgdGFzay5yZW5kZXIoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufSk7XG5cbmNsb3NlVGFza01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cblByb2plY3QucmVuZGVyUHJvamVjdHMoKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==