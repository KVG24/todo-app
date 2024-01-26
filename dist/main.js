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
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
function createDOMElement(elementName, element, className, id, text) {
  elementName = document.createElement(element);
  if (className) {
    elementName.classList.add(className);
  }
  if (id) {
    elementName.setAttribute("id", id);
  }
  if (text) {
    elementName.textContent = text;
  }
}

let projects = [];
let currentProject;
const projectsContainer = document.querySelector(".projects");

function renderProjects() {
  projectsContainer.replaceChildren();
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.setAttribute("id", project.id);

    const projectDivTitle = document.createElement("h3");
    projectDivTitle.classList.add("project-title");
    projectDivTitle.textContent = project.title;

    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.classList.add("delete-project");
    deleteProjectBtn.textContent = "Delete";
    deleteProjectBtn.addEventListener("click", () => {
      projects = projects.filter((item) => item.id !== project.id);
      renderProjects()
    });
    projectDiv.appendChild(projectDivTitle);
    projectDiv.appendChild(deleteProjectBtn);
    projectsContainer.appendChild(projectDiv);
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
    console.log(_functions_js__WEBPACK_IMPORTED_MODULE_1__.projects);
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
  });
}

if (closeProjectFormBtn) {
  closeProjectFormBtn.addEventListener("click", () => {
    addProjectModal.style.display = "none";
  });
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFb0Q7Ozs7Ozs7VUN6Q3BEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQzZCOztBQUUxRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFPO0FBQ2xDLElBQUksbURBQVE7QUFDWixnQkFBZ0IsbURBQVE7QUFDeEIsSUFBSSw2REFBYztBQUNsQixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwLW9kaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcbiAgfVxufVxuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcbiAgfVxufVxuXG5leHBvcnQgeyBQcm9qZWN0LCBUYXNrIH07IiwiZnVuY3Rpb24gY3JlYXRlRE9NRWxlbWVudChlbGVtZW50TmFtZSwgZWxlbWVudCwgY2xhc3NOYW1lLCBpZCwgdGV4dCkge1xuICBlbGVtZW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBlbGVtZW50TmFtZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cbiAgaWYgKGlkKSB7XG4gICAgZWxlbWVudE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICB9XG4gIGlmICh0ZXh0KSB7XG4gICAgZWxlbWVudE5hbWUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9XG59XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xubGV0IGN1cnJlbnRQcm9qZWN0O1xuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgcHJvamVjdHNDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdC5pZCk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcHJvamVjdERpdlRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgIHByb2plY3REaXZUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdFwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcHJvamVjdC5pZCk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpXG4gICAgfSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2VGl0bGUpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBwcm9qZWN0cywgY3VycmVudFByb2plY3QsIHJlbmRlclByb2plY3RzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByb2plY3QsIFRhc2sgfSBmcm9tIFwiLi9jbGFzc2VzLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgcHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWJ0blwiKTtcbmNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtbW9kYWxcIik7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtZm9ybS1idG5cIik7XG5jb25zdCBjbG9zZVByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1wcm9qZWN0LWZvcm0tYnRuXCIpO1xuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59KTtcblxuaWYgKGFkZFByb2plY3RGb3JtQnRuKSB7XG4gIGFkZFByb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXByb2plY3QtdGl0bGVcIik7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLnZhbHVlKTtcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICB9KTtcbn1cblxuaWYgKGNsb3NlUHJvamVjdEZvcm1CdG4pIHtcbiAgY2xvc2VQcm9qZWN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=