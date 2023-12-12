const addProjectDiv = document.querySelector('.form-project-div');
const projectAddBtn = document.getElementById('add-project-btn');
const addProjectToPageBtn = document.getElementById('add-project-form-btn');
const closeProjectFormBtn = document.getElementById('close-project-form-btn');


projectAddBtn.addEventListener('click', () => {
    clearProjectInput();
    addProjectDiv.style.display = 'block';
});


addProjectToPageBtn.addEventListener('click', () => {
    addProject();
    addProjectToPage(projects[projects.length - 1]);
    clearProjectInput();
    addProjectDiv.style.display = 'none';
});


closeProjectFormBtn.addEventListener('click', () => {
    addProjectDiv.style.display = 'none';
});

const projectTitleInput = document.getElementById('form-project-title');
function clearProjectInput() {
    projectTitleInput.value = '';
}