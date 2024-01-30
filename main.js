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
    this.complete = false;
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
/* harmony export */   populateLocalStorage: () => (/* binding */ populateLocalStorage),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
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

    editBtn.addEventListener("click", () => {
      const taskEditModal = document.querySelector(".task-edit-modal");
      taskEditModal.style.display = "flex";
      const closeTaskEditModalBtn = document.getElementById(
        "close-edit-modal-btn"
      );
      closeTaskEditModalBtn.addEventListener("click", () => {
        taskEditModal.style.display = "none";
      });
      const editTaskBtn = document.querySelector(".edit-task-btn");
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
        populateLocalStorage();
      });
    });

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
const firstProjectDiv = document.querySelector('.project');
firstProjectDiv.classList.add('active');




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
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.populateLocalStorage)();
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
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.populateLocalStorage)();
  taskTitle.value = "";
  taskDesc.value = "";
  taskDate.value = "";
  taskPriority.value = "";
});

closeTaskModal.addEventListener("click", () => {
  addTaskModal.style.display = "none";
});

(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOztBQUVELDZEQUFjO0FBQ2QsMERBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC1vZGluLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC1vZGluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC1vZGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpO1xuICB9XG59XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpO1xuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgeyBQcm9qZWN0LCBUYXNrIH07IiwibGV0IHByb2plY3RzO1xuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XG4gIHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJDbGVhbiBob21lXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiRHVzdCBpcyBldmVyeXdoZXJlXCIsXG4gICAgICAgICAgZGF0ZTogXCJcIixcbiAgICAgICAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gICAgICAgICAgaWQ6IFwiMDQ2MjY0NzM3NzE5NDgyOTZcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIlJlcGFpciB3aW5kb3dcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJLaWRzIGJyb2tlIHRoZSB3aW5kb3dcIixcbiAgICAgICAgICBkYXRlOiBcIlwiLFxuICAgICAgICAgIHByaW9yaXR5OiBcIlJlZ3VsYXJcIixcbiAgICAgICAgICBpZDogXCIwMzcyMTMzNjE4NzA5NTM3NjVcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBpZDogXCIwMTQxNDkwODQ2MDkxOTExNTRcIixcbiAgICB9LFxuICBdO1xufSBlbHNlIHtcbiAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xufVxuXG5sZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1swXTtcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gIHByb2plY3RzQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3QuaWQpO1xuICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgICBsZXQgcHJvamVjdENsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuICAgICAgcHJvamVjdENsYXNzLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLmNsYXNzTGlzdC52YWx1ZSA9IFwicHJvamVjdFwiKSk7XG4gICAgICBpZiAoIXByb2plY3REaXYuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3REaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0RGl2VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gICAgcHJvamVjdERpdlRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcHJvamVjdC5pZCk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgcG9wdWxhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXZUaXRsZSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICB0YXNrc0NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgY3VycmVudFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tEZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgdGFza0RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrRGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZVwiKTtcbiAgICB0YXNrRGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiRHVlOiBcIjtcbiAgICBjb25zdCB0YXNrRGF0ZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFza0RhdGVWYWx1ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZGF0ZVwiKTtcbiAgICBpZiAoIXRhc2suZGF0ZSkge1xuICAgICAgdGFza0RhdGVWYWx1ZS50ZXh0Q29udGVudCA9IFwiTm8gZGVhZGxpbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza0RhdGVWYWx1ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcbiAgICB9XG4gICAgdGFza0RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGVWYWx1ZSk7XG5cbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eS10ZXh0XCIpO1xuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFza1ByaW9yaXR5VmFsdWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTtcbiAgICB0YXNrUHJpb3JpdHlWYWx1ZS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eVZhbHVlKTtcblxuICAgIGNvbnN0IHRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG5cbiAgICBjb25zdCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29tcGxldGVCdG4uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLWJ0blwiKTtcbiAgICBjb21wbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVcIjtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ0blwiKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAgIHRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdG4pO1xuICAgIHRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgdGFza0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghdGFzay5jb21wbGV0ZSkge1xuICAgICAgICB0YXNrLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2suY29tcGxldGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgICBwb3B1bGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRhc2suY29tcGxldGUpIHtcbiAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuICAgICAgdGFza1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza0Rpdi5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVcIik7XG4gICAgICB0YXNrVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWVkaXQtbW9kYWxcIik7XG4gICAgICB0YXNrRWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGNvbnN0IGNsb3NlVGFza0VkaXRNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBcImNsb3NlLWVkaXQtbW9kYWwtYnRuXCJcbiAgICAgICk7XG4gICAgICBjbG9zZVRhc2tFZGl0TW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFza0VkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2stYnRuXCIpO1xuICAgICAgZWRpdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlLWVkaXRcIik7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2MtZWRpdFwiKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGF0ZS1lZGl0XCIpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHktZWRpdFwiKTtcbiAgICAgICAgdGFzay50aXRsZSA9IHRhc2tUaXRsZS52YWx1ZTtcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjLnZhbHVlO1xuICAgICAgICB0YXNrLmRhdGUgPSB0YXNrRGF0ZS52YWx1ZTtcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IHRhc2tQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgdGFza0VkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgICAgIHBvcHVsYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY3VycmVudFByb2plY3QudGFza3MgPSBjdXJyZW50UHJvamVjdC50YXNrcy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmlkICE9PSB0YXNrLmlkXG4gICAgICApO1xuICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICAgIHBvcHVsYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfSk7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZUNvbnRhaW5lcik7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0J0bkNvbnRhaW5lcik7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgcG9wdWxhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTG9jYWxTdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbi8vIFNldHRpbmcgdGhlIGZpcnN0IHByb2plY3QgYXMgYWN0aXZlXG5jb25zdCBmaXJzdFByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuZmlyc3RQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG5leHBvcnQge1xuICBwcm9qZWN0cyxcbiAgY3VycmVudFByb2plY3QsXG4gIHJlbmRlclByb2plY3RzLFxuICByZW5kZXJUYXNrcyxcbiAgcG9wdWxhdGVMb2NhbFN0b3JhZ2UsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0LCBUYXNrIH0gZnJvbSBcIi4vY2xhc3Nlcy5qc1wiO1xuaW1wb3J0IHtcbiAgcmVuZGVyUHJvamVjdHMsXG4gIHJlbmRlclRhc2tzLFxuICBwcm9qZWN0cyxcbiAgY3VycmVudFByb2plY3QsXG4gIHBvcHVsYXRlTG9jYWxTdG9yYWdlXG59IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xuXG4vLyBQcm9qZWN0IGludGVyYWN0aW9uc1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idG5cIik7XG5jb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW1vZGFsXCIpO1xuY29uc3QgYWRkUHJvamVjdEZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWZvcm0tYnRuXCIpO1xuY29uc3QgY2xvc2VQcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtcHJvamVjdC1mb3JtLWJ0blwiKTtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSk7XG5cbmlmIChhZGRQcm9qZWN0Rm9ybUJ0bikge1xuICBhZGRQcm9qZWN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1wcm9qZWN0LXRpdGxlXCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZS52YWx1ZSk7XG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHBvcHVsYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICB9KTtcbn1cblxuaWYgKGNsb3NlUHJvamVjdEZvcm1CdG4pIHtcbiAgY2xvc2VQcm9qZWN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufVxuXG4vLyBUYXNrIGludGVyYWN0aW9uc1xuXG5jb25zdCBhZGR0YXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKTtcbmNvbnN0IGFkZFRhc2tUb1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ0blwiKTtcbmNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hZGQtbW9kYWxcIik7XG5jb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbW9kYWwtYnRuXCIpO1xuXG5hZGR0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59KTtcblxuYWRkVGFza1RvUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBhZGRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGUtaW5wdXRcIik7XG4gIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2MtaW5wdXRcIik7XG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGUtaW5wdXRcIik7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS1pbnB1dFwiKTtcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxuICAgIHRhc2tUaXRsZS52YWx1ZSxcbiAgICB0YXNrRGVzYy52YWx1ZSxcbiAgICB0YXNrRGF0ZS52YWx1ZSxcbiAgICB0YXNrUHJpb3JpdHkudmFsdWVcbiAgKTtcbiAgY3VycmVudFByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgcmVuZGVyVGFza3MoKTtcbiAgcG9wdWxhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgdGFza0Rlc2MudmFsdWUgPSBcIlwiO1xuICB0YXNrRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9IFwiXCI7XG59KTtcblxuY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5yZW5kZXJQcm9qZWN0cygpO1xucmVuZGVyVGFza3MoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==