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
let projects = [
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
    _functions_js__WEBPACK_IMPORTED_MODULE_1__.currentProject = undefined;
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

(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWlFOzs7Ozs7O1VDbEtqRTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042QztBQU1yQjs7QUFFeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBTztBQUNsQyxJQUFJLG1EQUFRO0FBQ1osSUFBSSw2REFBYztBQUNsQixJQUFJLHlEQUFjLEdBQUcsU0FBSTtBQUN6QjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQWM7QUFDaEIsRUFBRSwwREFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw2REFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcbiAgfVxufVxuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcbiAgfVxufVxuXG5leHBvcnQgeyBQcm9qZWN0LCBUYXNrIH07IiwibGV0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiSG9tZVwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNsZWFuIGhvbWVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRHVzdCBpcyBldmVyeXdoZXJlXCIsXG4gICAgICAgIGRhdGU6IFwiXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICAgICAgaWQ6IFwiMDQ2MjY0NzM3NzE5NDgyOTZcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlJlcGFpciB3aW5kb3dcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiS2lkcyBicm9rZSB0aGUgd2luZG93XCIsXG4gICAgICAgIGRhdGU6IFwiXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIlJlZ3VsYXJcIixcbiAgICAgICAgaWQ6IFwiMDM3MjEzMzYxODcwOTUzNzY1XCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgaWQ6IFwiMDE0MTQ5MDg0NjA5MTkxMTU0XCIsXG4gIH0sXG5dO1xubGV0IGN1cnJlbnRQcm9qZWN0O1xuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgcHJvamVjdHNDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdC5pZCk7XG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICAgIGxldCBwcm9qZWN0Q2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gICAgICBwcm9qZWN0Q2xhc3MuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uY2xhc3NMaXN0LnZhbHVlID0gXCJwcm9qZWN0XCIpKTtcbiAgICAgIGlmICghcHJvamVjdERpdi5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvamVjdERpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2plY3REaXZUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICBwcm9qZWN0RGl2VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIik7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBwcm9qZWN0LmlkKTtcbiAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgfSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2VGl0bGUpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcbiAgdGFza3NDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5pZCk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZVwiKTtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IHRhc2tEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0RhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVcIik7XG4gICAgdGFza0RhdGVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkR1ZTogXCI7XG4gICAgY29uc3QgdGFza0RhdGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRhc2tEYXRlVmFsdWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRhdGVcIik7XG4gICAgaWYgKCF0YXNrLmRhdGUpIHtcbiAgICAgIHRhc2tEYXRlVmFsdWUudGV4dENvbnRlbnQgPSBcIk5vIGRlYWRsaW5lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2tEYXRlVmFsdWUudGV4dENvbnRlbnQgPSB0YXNrLmRhdGU7XG4gICAgfVxuICAgIHRhc2tEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEYXRlVmFsdWUpO1xuXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHktdGV4dFwiKTtcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRhc2tQcmlvcml0eVZhbHVlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIik7XG4gICAgdGFza1ByaW9yaXR5VmFsdWUudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlWYWx1ZSk7XG5cbiAgICBjb25zdCB0YXNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuXG4gICAgY29uc3QgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZS1idG5cIik7XG4gICAgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlXCI7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1idG5cIik7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgICB0YXNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlQnRuKTtcbiAgICB0YXNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIHRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGFza0Rpdi5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoXCJjb21wbGV0ZVwiKSkge1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgdGFza1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgdGFza1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tFZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZWRpdC1tb2RhbFwiKTtcbiAgICAgIHRhc2tFZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgY29uc3QgY2xvc2VUYXNrRWRpdE1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIFwiY2xvc2UtZWRpdC1tb2RhbC1idG5cIlxuICAgICAgKTtcbiAgICAgIGNsb3NlVGFza0VkaXRNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrRWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdGFzay1idG5cIik7XG4gICAgICBlZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGUtZWRpdFwiKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzYy1lZGl0XCIpO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kYXRlLWVkaXRcIik7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS1lZGl0XCIpO1xuICAgICAgICB0YXNrLnRpdGxlID0gdGFza1RpdGxlLnZhbHVlO1xuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gdGFza0Rlc2MudmFsdWU7XG4gICAgICAgIHRhc2suZGF0ZSA9IHRhc2tEYXRlLnZhbHVlO1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5LnZhbHVlO1xuICAgICAgICB0YXNrRWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjdXJyZW50UHJvamVjdC50YXNrcyA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHRhc2suaWRcbiAgICAgICk7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgIH0pO1xuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0RhdGVDb250YWluZXIpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tCdG5Db250YWluZXIpO1xuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgcHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0LCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVGFza3MgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUHJvamVjdCwgVGFzayB9IGZyb20gXCIuL2NsYXNzZXMuanNcIjtcbmltcG9ydCB7XG4gIHJlbmRlclByb2plY3RzLFxuICByZW5kZXJUYXNrcyxcbiAgcHJvamVjdHMsXG4gIGN1cnJlbnRQcm9qZWN0LFxufSBmcm9tIFwiLi9mdW5jdGlvbnMuanNcIjtcblxuLy8gUHJvamVjdCBpbnRlcmFjdGlvbnNcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtYnRuXCIpO1xuY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1tb2RhbFwiKTtcbmNvbnN0IGFkZFByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1mb3JtLWJ0blwiKTtcbmNvbnN0IGNsb3NlUHJvamVjdEZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXByb2plY3QtZm9ybS1idG5cIik7XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pO1xuXG5pZiAoYWRkUHJvamVjdEZvcm1CdG4pIHtcbiAgYWRkUHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tcHJvamVjdC10aXRsZVwiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUudmFsdWUpO1xuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICBjdXJyZW50UHJvamVjdCA9IHRoaXM7XG4gICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICB9KTtcbn1cblxuaWYgKGNsb3NlUHJvamVjdEZvcm1CdG4pIHtcbiAgY2xvc2VQcm9qZWN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufVxuXG4vLyBUYXNrIGludGVyYWN0aW9uc1xuXG5jb25zdCBhZGR0YXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKTtcbmNvbnN0IGFkZFRhc2tUb1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ0blwiKTtcbmNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hZGQtbW9kYWxcIik7XG5jb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbW9kYWwtYnRuXCIpO1xuXG5hZGR0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59KTtcblxuYWRkVGFza1RvUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBhZGRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGUtaW5wdXRcIik7XG4gIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2MtaW5wdXRcIik7XG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGUtaW5wdXRcIik7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS1pbnB1dFwiKTtcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxuICAgIHRhc2tUaXRsZS52YWx1ZSxcbiAgICB0YXNrRGVzYy52YWx1ZSxcbiAgICB0YXNrRGF0ZS52YWx1ZSxcbiAgICB0YXNrUHJpb3JpdHkudmFsdWVcbiAgKTtcbiAgY3VycmVudFByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgcmVuZGVyVGFza3MoKTtcbiAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgdGFza0Rlc2MudmFsdWUgPSBcIlwiO1xuICB0YXNrRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9IFwiXCI7XG59KTtcblxuY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5yZW5kZXJQcm9qZWN0cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==