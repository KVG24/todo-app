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

        this.title = '';
        this.description = '';
        this.date = '';
    }

    delete() {
        _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject.tasks = _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject.tasks.filter((item) => item.id !== this.id);
        _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject.renderTasks();
    }

    edit() {
        const taskEditModal = document.querySelector('.task-edit-modal');
        taskEditModal.style.display = 'flex';
        const editTaskBtn = document.getElementById('edit-task-btn');
        editTaskBtn.addEventListener('click', () => {
            const title = document.getElementById('task-title-edit');
            const desc = document.getElementById('task-desc-edit');
            const date = document.getElementById('task-date-edit');
            const priority = document.getElementById('task-title-edit');

            this.title = title;
            this.description = desc;
            this.date = date;
            this.priority = priority;
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

const addProjectForm = document.querySelector('.add-project-form-div');
const addProjectBtn = document.getElementById('add-project-btn');
const addProjectToPageBtn = document.getElementById('add-project-form-btn');
const closeProjectFormBtn = document.getElementById('close-project-form-btn');


addProjectBtn.addEventListener('click', () => {
    addProjectForm.style.display = 'block';
});


addProjectToPageBtn.addEventListener('click', () => {
    const projectTitle = document.getElementById('form-project-title')
    const project = new _projects__WEBPACK_IMPORTED_MODULE_0__.Project(projectTitle.value)
    _projects__WEBPACK_IMPORTED_MODULE_0__.projects.push(project);
    projectTitle.value = '';
    _projects__WEBPACK_IMPORTED_MODULE_0__.Project.renderProjects();
    _projects__WEBPACK_IMPORTED_MODULE_0__.Project.setCurrentProject(project);
    addProjectForm.style.display = 'none';
});

closeProjectFormBtn.addEventListener('click', () => {
    addProjectForm.style.display = 'none';
});

// Tasks manipulation

const addTaskBtn = document.getElementById('add-task');
const addTaskModal = document.querySelector('.task-add-modal');
const addTaskBtnForm = document.getElementById('add-task-btn');
const closeTaskModalBtn = document.getElementById('close-modal-btn');

addTaskBtn.addEventListener('click', () => {
    addTaskModal.style.display = 'flex';
});

addTaskBtnForm.addEventListener('click', () => {
    addTaskModal.style.display = 'none';
    
    const taskTitle = document.getElementById('task-title-input');
    const taskDesc = document.getElementById('task-desc-input');
    const taskDate = document.getElementById('task-date-input');
    const taskPriority = document.getElementById('task-priority-input');

    const task = new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task(taskTitle.value, taskDesc.value, taskDate.value, taskPriority.value);
    _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject.tasks.push('task');
    task.render();
});

closeTaskModalBtn.addEventListener('click', () => {
    addTaskModal.style.display = 'none';
});

_projects__WEBPACK_IMPORTED_MODULE_0__.Project.renderProjects();










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRTRDOztBQUU1Qzs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFEQUFjLFNBQVMscURBQWM7QUFDN0MsUUFBUSxxREFBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQWM7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7O1VDMUhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhEO0FBQ2hDOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQSx3QkFBd0IsOENBQU87QUFDL0IsSUFBSSwrQ0FBUTtBQUNaO0FBQ0EsSUFBSSw4Q0FBTztBQUNYLElBQUksOENBQU87QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHdDQUFJO0FBQ3pCLElBQUkscURBQWM7QUFDbEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVELDhDQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC1vZGluLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0RGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBwcm9qZWN0RGl2VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qZWN0RGl2VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2VGl0bGUpO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuXG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHRoaXM7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVGFza3MoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHByb2plY3RDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0Q2xhc3MuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uY2xhc3NMaXN0LnZhbHVlID0gJ3Byb2plY3QnKSk7XG5cbiAgICAgICAgICAgIGlmKCFwcm9qZWN0RGl2LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gdGhpcy5pZCk7XG4gICAgICAgIFByb2plY3QucmVuZGVyUHJvamVjdHMoKTtcbiAgICB9XG5cbiAgICByZW5kZXJUYXNrcygpIHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICAgICAgdGFza3MuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMudGFza3MuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5yZW5kZXIoKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlclByb2plY3RzKCkge1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5yZW5kZXIoKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbn07XG5cbmxldCBwcm9qZWN0cyA9IFtuZXcgUHJvamVjdCgnRXhhbXBsZScpXTtcbmxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzWzBdO1xuXG5leHBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCwgY3VycmVudFByb2plY3QgfTsiLCJpbXBvcnQgeyBjdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpLmpvaW4oXCJcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkKTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG5cbiAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tEZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZScpO1xuICAgICAgICB0YXNrRGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdEdWU6ICdcbiAgICAgICAgY29uc3QgdGFza0RhdGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGFza0RhdGVWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGF0ZScpO1xuICAgICAgICBpZiAoIXRoaXMuZGF0ZSkge1xuICAgICAgICAgICAgdGFza0RhdGVWYWx1ZS50ZXh0Q29udGVudCA9ICdObyBkZWFkbGluZSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tEYXRlVmFsdWUudGV4dENvbnRlbnQgPSB0aGlzLmRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdGFza0RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGVWYWx1ZSk7XG5cbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS10ZXh0Jyk7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJ1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGFza1ByaW9yaXR5VmFsdWUuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICAgICAgICB0YXNrUHJpb3JpdHlWYWx1ZS50ZXh0Q29udGVudCA9IHRoaXMucHJpb3JpdHk7XG4gICAgICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlWYWx1ZSk7XG5cbiAgICAgICAgY29uc3QgdGFza0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcblxuICAgICAgICBjb25zdCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb21wbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZS1idG4nKTtcbiAgICAgICAgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbiAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgICAgIHRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdG4pO1xuICAgICAgICB0YXNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgICB0YXNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIFxuICAgICAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrRGl2LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnY29tcGxldGUnKSkge1xuICAgICAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKVxuICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lZGl0KClcbiAgICAgICAgfSlcblxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZUNvbnRhaW5lcik7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrQnRuQ29udGFpbmVyKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICAgICAgdGhpcy50aXRsZSA9ICcnO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuZGF0ZSA9ICcnO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgY3VycmVudFByb2plY3QudGFza3MgPSBjdXJyZW50UHJvamVjdC50YXNrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHRoaXMuaWQpO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5yZW5kZXJUYXNrcygpO1xuICAgIH1cblxuICAgIGVkaXQoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tFZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LW1vZGFsJyk7XG4gICAgICAgIHRhc2tFZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLWJ0bicpO1xuICAgICAgICBlZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUtZWRpdCcpO1xuICAgICAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2MtZWRpdCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUtZWRpdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZS1lZGl0Jyk7XG5cbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIHRhc2tFZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LnJlbmRlclRhc2tzKCk7XG4gICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNsb3NlRWRpdE1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLWVkaXQtbW9kYWwtYnRuJyk7XG4gICAgICAgIGNsb3NlRWRpdE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFza0VkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0LCBjdXJyZW50UHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza3NcIlxuXG4vLyBQcm9qZWN0cyBtYW5pcHVsYXRpb25cblxuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybS1kaXYnKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnRuJyk7XG5jb25zdCBhZGRQcm9qZWN0VG9QYWdlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWZvcm0tYnRuJyk7XG5jb25zdCBjbG9zZVByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXByb2plY3QtZm9ybS1idG4nKTtcblxuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSk7XG5cblxuYWRkUHJvamVjdFRvUGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wcm9qZWN0LXRpdGxlJylcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdFRpdGxlLnZhbHVlKVxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgcHJvamVjdFRpdGxlLnZhbHVlID0gJyc7XG4gICAgUHJvamVjdC5yZW5kZXJQcm9qZWN0cygpO1xuICAgIFByb2plY3Quc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgYWRkUHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5jbG9zZVByb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuLy8gVGFza3MgbWFuaXB1bGF0aW9uXG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2snKTtcbmNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFkZC1tb2RhbCcpO1xuY29uc3QgYWRkVGFza0J0bkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnRuJyk7XG5jb25zdCBjbG9zZVRhc2tNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1tb2RhbC1idG4nKTtcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn0pO1xuXG5hZGRUYXNrQnRuRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZS1pbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzYy1pbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGF0ZS1pbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXByaW9yaXR5LWlucHV0Jyk7XG5cbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrRGVzYy52YWx1ZSwgdGFza0RhdGUudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSk7XG4gICAgY3VycmVudFByb2plY3QudGFza3MucHVzaCgndGFzaycpO1xuICAgIHRhc2sucmVuZGVyKCk7XG59KTtcblxuY2xvc2VUYXNrTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuUHJvamVjdC5yZW5kZXJQcm9qZWN0cygpO1xuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9