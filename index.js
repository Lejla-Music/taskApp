"use strict";
var _a;
(_a = document.getElementById('addTaskButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        listItem.addEventListener('click', function () {
            listItem.classList.toggle('completed');
        });
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});
