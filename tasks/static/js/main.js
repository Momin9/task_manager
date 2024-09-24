const apiUrl = '/api/tasks/';

// Fetch and display all tasks
function fetchTasks() {
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(tasks => {
        const tasksList = document.getElementById('tasksList');
        tasksList.innerHTML = '';
        tasks.forEach(task => {
            tasksList.innerHTML += `
                <li id="task-${task.id}">
                    <div>
                        <strong>${task.title}</strong>
                        <p>${task.description}</p>
                    </div>
                    <div>
                        <button onclick="editTask('${task.id}', '${task.title}', '${task.description}')">Edit</button>
                        <button onclick="deleteTask('${task.id}')">Delete</button>
                    </div>
                </li>
            `;
        });
    });
}

// Add a new task
function addTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;

    if (!title) {
        alert('Task title is required.');
        return;
    }

    const data = {
        title: title,
        description: description,
        is_completed: false
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(task => {
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        fetchTasks();  // Refresh task list
    });
}

// Delete a task
function deleteTask(taskId) {
    fetch(`${apiUrl}${taskId}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 204) {
            document.getElementById(`task-${taskId}`).remove();  // Remove task from the list
        }
    });
}

// Edit a task
function editTask(taskId, title, description) {
    document.getElementById('taskTitle').value = title;
    document.getElementById('taskDescription').value = description;
    document.getElementById('taskFormTitle').innerText = 'Update Task';
    document.getElementById('taskSubmitBtn').innerText = 'Update Task';
    document.getElementById('taskSubmitBtn').setAttribute('onclick', `updateTask('${taskId}')`);
}

// Update a task
function updateTask(taskId) {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;

    if (!title) {
        alert('Task title is required.');
        return;
    }

    const data = {
        title: title,
        description: description,
        is_completed: false
    };

    fetch(`${apiUrl}${taskId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(task => {
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskFormTitle').innerText = 'Add New Task';
        document.getElementById('taskSubmitBtn').innerText = 'Add Task';
        document.getElementById('taskSubmitBtn').setAttribute('onclick', `addTask()`);
        fetchTasks();  // Refresh task list
    });
}

// Initialize the task list when the page loads
document.addEventListener('DOMContentLoaded', function() {
    fetchTasks();
});
