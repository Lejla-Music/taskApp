document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.scattered-images img');
    const positions = [];

    images.forEach(img => {
        let x, y, isOverlapping;

        do {
            x = Math.random() * (window.innerWidth - img.width);
            y = Math.random() * (window.innerHeight - img.height);
            isOverlapping = positions.some(pos => {
                return !(x + img.width < pos.x || x > pos.x + pos.width || y + img.height < pos.y || y > pos.y + pos.height);
            });
        } while (isOverlapping);

        positions.push({ x, y, width: img.width, height: img.height });
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
    });
});

document.getElementById('addTaskButton')?.addEventListener('click', addTask);

document.getElementById('deleteTaskButton')?.addEventListener('click', function() {
    const taskList = document.getElementById('taskList');
    const completedTasks = taskList.querySelectorAll('.completed');
    completedTasks.forEach(task => task.remove());
});

document.getElementById('taskInput')?.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');

        const checkIcon = document.createElement('i');
        checkIcon.className = 'far fa-square';

        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');
            checkIcon.classList.toggle('fa-square');
            checkIcon.classList.toggle('fa-check-square');
        });

        const taskTextNode = document.createTextNode(taskText);

        listItem.appendChild(checkIcon);
        listItem.appendChild(taskTextNode);

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}