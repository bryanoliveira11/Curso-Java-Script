(() => {
    const taskForm = document.querySelector('#form-add-task');
    const taskBtn = document.querySelector('#id-btn-add-task');
    const taskInput = document.querySelector('#id-task');
    const taskListDiv = document.querySelector('.task-list');

    window.addEventListener('load', () => {
        for (let i = 0; i < localStorage.length; ++i) {
            updateTasks(localStorage.getItem(localStorage.key(i)))
        }
    });

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    taskBtn.addEventListener('click', addTask);

    taskListDiv.addEventListener('click', function (event) {
        if (event.target.classList.contains('task-delete')) {
            deleteTask(event);
        }
    });

    function addTask() {
        if (!validateTaskInput(taskInput.value)) {
            cleanInputField(taskInput);
            alert('Preencha o Campo !');
            return;
        }
        if (localStorage.getItem(taskInput.value)) {
            cleanInputField(taskInput);
            alert('Tarefa já Existe !');
            return;
        }
        localStorage.setItem(taskInput.value, taskInput.value)
        updateTasks(taskInput.value);
        cleanInputField(taskInput);
    }

    function deleteTask(event) {
        const taskDiv = event.target.parentElement;
        const taskValue = taskDiv.querySelector('span').textContent;
        taskDiv.remove();
        localStorage.removeItem(taskValue)
    }

    function updateTasks(taskValue) {
        const taskDiv = document.createElement('div');
        taskDiv.style.padding = '5px';
        taskDiv.innerHTML = `
            &#8226 
            <span>${localStorage.getItem(taskValue)}</span>
            <button class="task-delete"> Apagar </button>
            `;
        taskListDiv.appendChild(taskDiv);
    }

    function validateTaskInput(value) {
        return value.trim() !== "";
    }

    function cleanInputField(field) {
        field.value = "";
        field.focus();
    }
})();