document.getElementById('addTaskButton')?.addEventListener('click', addTask);

document.getElementById('deleteTaskButton')?.addEventListener('click', function() {
    const taskList = document.getElementById('taskList') as HTMLUListElement;
    const completedTasks = taskList.querySelectorAll('.completed');
    completedTasks.forEach(task => task.remove());
});

document.getElementById('taskInput')?.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList') as HTMLUListElement;
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