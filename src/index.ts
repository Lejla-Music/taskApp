document.getElementById('addTaskButton')?.addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList') as HTMLUListElement;
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});