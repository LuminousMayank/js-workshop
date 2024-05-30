document.getElementById("main").innerHTML = "TO-DO LIST ✅";

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        if (this.checked) {
            listItem.style.textDecoration = 'line-through';
            listItem.style.textDecorationColor = '#069536';
            listItem.style.textDecorationThickness = '3px';
        } else {
            listItem.style.textDecoration = 'none';
        }
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        editTask(listItem, taskText);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Task';
    deleteButton.onclick = function() {
        listItem.remove();
    };

    listItem.textContent = taskText;
    listItem.appendChild(checkbox);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = '';
}

function editTask(listItem, oldText) {
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = oldText;

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.onclick = function() {
        if (editInput.value === '') {
            alert('Please enter a task.');
            return;
        }

        listItem.textContent = editInput.value;

        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.onclick = function() {
            if (this.checked) {
                listItem.style.textDecoration = 'line-through';
                listItem.style.textDecorationColor = '#069536';
                listItem.style.textDecorationThickness = '3px';
            } else {
                listItem.style.textDecoration = 'none';
            }
        };

        const newEditButton = document.createElement('button');
        newEditButton.textContent = 'Edit';
        newEditButton.onclick = function() {
            editTask(listItem, editInput.value);
        };

        const newDeleteButton = document.createElement('button');
        newDeleteButton.textContent = 'Delete Task';
        newDeleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(newCheckbox);
        listItem.appendChild(newEditButton);
        listItem.appendChild(newDeleteButton);
    };

    while (listItem.firstChild) {
        listItem.removeChild(listItem.firstChild);
    }
    listItem.appendChild(editInput);
    listItem.appendChild(saveButton);
}

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
