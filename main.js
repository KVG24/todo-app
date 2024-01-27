/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.id = Math.random().toString().split(".").join("");
  }
}

class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.id = Math.random().toString().split(".").join("");
  }
}



/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
let projects = [];
let currentProject;
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

    completeBtn.addEventListener("click", () => {
      if (taskDiv.classList.value.includes("complete")) {
        taskDiv.classList.remove("complete");
        taskTitle.style.textDecoration = "none";
      } else {
        taskDiv.classList.add("complete");
        taskTitle.style.textDecoration = "line-through";
      }
    });

    editBtn.addEventListener("click", () => {
      const taskEditModal = document.querySelector(".task-edit-modal");
      taskEditModal.style.display = "flex";
      const closeTaskEditModalBtn = document.getElementById(
        "close-edit-modal-btn"
      );
      closeTaskEditModalBtn.addEventListener("click", () => {
        taskEditModal.style.display = "none";
      });
      const editTaskBtn = document.getElementById("edit-task-btn");
      editTaskBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const taskTitle = document.getElementById("task-title-edit");
        const taskDesc = document.getElementById("task-desc-edit");
        const taskDate = document.getElementById("task-date-edit");
        const taskPriority = document.getElementById("task-priority-edit");
        task.title = taskTitle.value;
        task.description = taskDesc.value;
        task.date = taskDate.value;
        task.priority = taskPriority.value;
        taskEditModal.style.display = "none";
        renderTasks();
      });
    });

    deleteBtn.addEventListener("click", () => {
      currentProject.tasks = currentProject.tasks.filter(
        (item) => item.id !== task.id
      );
      renderTasks();
    });

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDesc);
    taskDiv.appendChild(taskDateContainer);
    taskDiv.appendChild(taskPriority);
    taskDiv.appendChild(taskBtnContainer);
    tasksContainer.appendChild(taskDiv);
  });
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
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");



// Project interactions

const addProjectBtn = document.querySelector(".add-project-btn");
const addProjectModal = document.querySelector(".add-project-modal");
const addProjectFormBtn = document.getElementById("add-project-form-btn");
const closeProjectFormBtn = document.getElementById("close-project-form-btn");

addProjectBtn.addEventListener("click", () => {
  addProjectModal.style.display = "flex";
});

if (addProjectFormBtn) {
  addProjectFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addProjectModal.style.display = "none";
    const title = document.getElementById("form-project-title");
    const newProject = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project(title.value);
    _functions_js__WEBPACK_IMPORTED_MODULE_1__.projects.push(newProject);
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
    _functions_js__WEBPACK_IMPORTED_MODULE_1__.currentProject = newProject;
    title.value = "";
  });
}

if (closeProjectFormBtn) {
  closeProjectFormBtn.addEventListener("click", () => {
    addProjectModal.style.display = "none";
  });
}

// Task interactions

const addtaskBtn = document.getElementById("add-task");
const addTaskToProjectBtn = document.getElementById("add-task-btn");
const addTaskModal = document.querySelector(".task-add-modal");
const closeTaskModal = document.getElementById("close-modal-btn");

addtaskBtn.addEventListener("click", () => {
  addTaskModal.style.display = "flex";
});

addTaskToProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTaskModal.style.display = "none";
  const taskTitle = document.getElementById("task-title-input");
  const taskDesc = document.getElementById("task-desc-input");
  const taskDate = document.getElementById("task-date-input");
  const taskPriority = document.getElementById("task-priority-input");
  const task = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Task(
    taskTitle.value,
    taskDesc.value,
    taskDate.value,
    taskPriority.value
  );
  _functions_js__WEBPACK_IMPORTED_MODULE_1__.currentProject.tasks.push(task);
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();
  taskTitle.value = "";
  taskDesc.value = "";
  taskDate.value = "";
  taskPriority.value = "";
});

closeTaskModal.addEventListener("click", () => {
  addTaskModal.style.display = "none";
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWlFOzs7Ozs7O1VDN0lqRTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042QztBQU1yQjs7QUFFeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBTztBQUNsQyxJQUFJLG1EQUFRO0FBQ1osSUFBSSw2REFBYztBQUNsQixJQUFJLHlEQUFjO0FBQ2xCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBYztBQUNoQixFQUFFLDBEQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcbiAgfVxufVxuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcbiAgfVxufVxuXG5leHBvcnQgeyBQcm9qZWN0LCBUYXNrIH07IiwibGV0IHByb2plY3RzID0gW107XG5sZXQgY3VycmVudFByb2plY3Q7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICBwcm9qZWN0c0NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0LmlkKTtcbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgICAgbGV0IHByb2plY3RDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgICAgIHByb2plY3RDbGFzcy5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5jbGFzc0xpc3QudmFsdWUgPSBcInByb2plY3RcIikpO1xuICAgICAgaWYgKCFwcm9qZWN0RGl2LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImFjdGl2ZVwiKSkge1xuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcHJvamVjdERpdlRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgIHByb2plY3REaXZUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdFwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHByb2plY3QuaWQpO1xuICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXZUaXRsZSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICB0YXNrc0NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgY3VycmVudFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tEZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgdGFza0RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrRGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZVwiKTtcbiAgICB0YXNrRGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiRHVlOiBcIjtcbiAgICBjb25zdCB0YXNrRGF0ZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFza0RhdGVWYWx1ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZGF0ZVwiKTtcbiAgICBpZiAoIXRhc2suZGF0ZSkge1xuICAgICAgdGFza0RhdGVWYWx1ZS50ZXh0Q29udGVudCA9IFwiTm8gZGVhZGxpbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza0RhdGVWYWx1ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcbiAgICB9XG4gICAgdGFza0RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGVWYWx1ZSk7XG5cbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eS10ZXh0XCIpO1xuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFza1ByaW9yaXR5VmFsdWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTtcbiAgICB0YXNrUHJpb3JpdHlWYWx1ZS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eVZhbHVlKTtcblxuICAgIGNvbnN0IHRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG5cbiAgICBjb25zdCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29tcGxldGVCdG4uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLWJ0blwiKTtcbiAgICBjb21wbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVcIjtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ0blwiKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAgIHRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdG4pO1xuICAgIHRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgdGFza0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICh0YXNrRGl2LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImNvbXBsZXRlXCIpKSB7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlXCIpO1xuICAgICAgICB0YXNrVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuICAgICAgICB0YXNrVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza0VkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1lZGl0LW1vZGFsXCIpO1xuICAgICAgdGFza0VkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBjb25zdCBjbG9zZVRhc2tFZGl0TW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgXCJjbG9zZS1lZGl0LW1vZGFsLWJ0blwiXG4gICAgICApO1xuICAgICAgY2xvc2VUYXNrRWRpdE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2tFZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10YXNrLWJ0blwiKTtcbiAgICAgIGVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS1lZGl0XCIpO1xuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjLWVkaXRcIik7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGUtZWRpdFwiKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LWVkaXRcIik7XG4gICAgICAgIHRhc2sudGl0bGUgPSB0YXNrVGl0bGUudmFsdWU7XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzYy52YWx1ZTtcbiAgICAgICAgdGFzay5kYXRlID0gdGFza0RhdGUudmFsdWU7XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkudmFsdWU7XG4gICAgICAgIHRhc2tFZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByZW5kZXJUYXNrcygpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzID0gY3VycmVudFByb2plY3QudGFza3MuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCAhPT0gdGFzay5pZFxuICAgICAgKTtcbiAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgfSk7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZUNvbnRhaW5lcik7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0J0bkNvbnRhaW5lcik7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBwcm9qZWN0cywgY3VycmVudFByb2plY3QsIHJlbmRlclByb2plY3RzLCByZW5kZXJUYXNrcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0LCBUYXNrIH0gZnJvbSBcIi4vY2xhc3Nlcy5qc1wiO1xuaW1wb3J0IHtcbiAgcmVuZGVyUHJvamVjdHMsXG4gIHJlbmRlclRhc2tzLFxuICBwcm9qZWN0cyxcbiAgY3VycmVudFByb2plY3QsXG59IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xuXG4vLyBQcm9qZWN0IGludGVyYWN0aW9uc1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idG5cIik7XG5jb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW1vZGFsXCIpO1xuY29uc3QgYWRkUHJvamVjdEZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWZvcm0tYnRuXCIpO1xuY29uc3QgY2xvc2VQcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtcHJvamVjdC1mb3JtLWJ0blwiKTtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSk7XG5cbmlmIChhZGRQcm9qZWN0Rm9ybUJ0bikge1xuICBhZGRQcm9qZWN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1wcm9qZWN0LXRpdGxlXCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZS52YWx1ZSk7XG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gIH0pO1xufVxuXG5pZiAoY2xvc2VQcm9qZWN0Rm9ybUJ0bikge1xuICBjbG9zZVByb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG59XG5cbi8vIFRhc2sgaW50ZXJhY3Rpb25zXG5cbmNvbnN0IGFkZHRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrXCIpO1xuY29uc3QgYWRkVGFza1RvUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnRuXCIpO1xuY29uc3QgYWRkVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWFkZC1tb2RhbFwiKTtcbmNvbnN0IGNsb3NlVGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tb2RhbC1idG5cIik7XG5cbmFkZHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pO1xuXG5hZGRUYXNrVG9Qcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGFkZFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS1pbnB1dFwiKTtcbiAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzYy1pbnB1dFwiKTtcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGF0ZS1pbnB1dFwiKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LWlucHV0XCIpO1xuICBjb25zdCB0YXNrID0gbmV3IFRhc2soXG4gICAgdGFza1RpdGxlLnZhbHVlLFxuICAgIHRhc2tEZXNjLnZhbHVlLFxuICAgIHRhc2tEYXRlLnZhbHVlLFxuICAgIHRhc2tQcmlvcml0eS52YWx1ZVxuICApO1xuICBjdXJyZW50UHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICByZW5kZXJUYXNrcygpO1xuICB0YXNrVGl0bGUudmFsdWUgPSBcIlwiO1xuICB0YXNrRGVzYy52YWx1ZSA9IFwiXCI7XG4gIHRhc2tEYXRlLnZhbHVlID0gXCJcIjtcbiAgdGFza1ByaW9yaXR5LnZhbHVlID0gXCJcIjtcbn0pO1xuXG5jbG9zZVRhc2tNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhZGRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=