const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

document.addEventListener('DOMContentLoaded', () => {
    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', handleTaskListClick);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function addTask(e) {
        e.preventDefault();

        const li = document.createElement('li');
        li.className = 'task-item';

        li.style.backgroundColor = getRandomColor(); 

        const taskText = document.createElement('span');
        taskText.className = 'task-item-text';
        taskText.textContent = taskInput.value;
        li.appendChild(taskText);

        const updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        updateBtn.className = 'update-btn';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        deleteBtn.className = 'delete-btn';

        li.appendChild(updateBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    function handleTaskListClick(e) {
        if (e.target.className === 'delete-btn') {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        } else if (e.target.className === 'update-btn') {
            const li = e.target.parentElement;
            const taskText = li.querySelector('.task-item-text');
            const updatedTask = prompt('Update the task:', taskText.textContent);
            if (updatedTask !== null && updatedTask.trim() !== '') {
                taskText.textContent = updatedTask;
                li.style.backgroundColor = getRandomColor();
            }
        }
    }
});
