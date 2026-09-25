const STORAGE_KEY = 'aurex_tasks_data';
let tasks = [];
let currentFilter = 'all';

const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskPrioritySelect = document.getElementById('task-priority');
const taskEditIdInput = document.getElementById('task-edit-id');
const submitBtn = document.getElementById('submit-btn');
const submitText = document.getElementById('submit-text');
const titleError = document.getElementById('title-error');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const taskCounter = document.getElementById('task-counter');
const filterButtons = document.querySelectorAll('.filter-btn');

document.addEventListener('DOMContentLoaded', () => {
    loadTasksFromStorage();
    setupEventListeners();
    renderTasks();
});

function setupEventListeners() {
    taskForm.addEventListener('submit', handleFormSubmit);

    taskTitleInput.addEventListener('input', () => {
        if (taskTitleInput.value.trim().length > 0) {
            clearValidationError();
        }
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentFilter = e.currentTarget.getAttribute('data-filter');
            renderTasks();
        });
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const titleValue = taskTitleInput.value.trim();
    const priorityValue = taskPrioritySelect.value;
    const editId = taskEditIdInput.value;

    if (!titleValue) {
        showValidationError('Task description cannot be left empty.');
        return;
    }

    if (titleValue.length < 3) {
        showValidationError('Task description must be at least 3 characters long.');
        return;
    }

    if (editId) {
        tasks = tasks.map(task => {
            if (task.id === editId) {
                return {
                    ...task,
                    title: titleValue,
                    priority: priorityValue,
                    updatedAt: new Date().toISOString()
                };
            }
            return task;
        });
        resetFormState();
    } else {
        const newTask = {
            id: 'task_' + Date.now(),
            title: titleValue,
            priority: priorityValue,
            completed: false,
            createdAt: new Date().toISOString()
        };
        tasks.unshift(newTask);
    }

    saveTasksToStorage();
    renderTasks();
    taskTitleInput.value = '';
    taskPrioritySelect.value = 'medium';
    clearValidationError();
}

function renderTasks() {
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'pending') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
        return true;
    });

    if (filteredTasks.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.setAttribute('data-id', task.id);

        li.innerHTML = `
            <div class="task-left">
                <input 
                    type="checkbox" 
                    class="task-checkbox" 
                    ${task.completed ? 'checked' : ''} 
                    aria-label="Mark task as complete"
                >
                <span class="task-text">${escapeHTML(task.title)}</span>
                <span class="priority-badge priority-${task.priority}">${task.priority}</span>
            </div>
            <div class="task-actions">
                <button type="button" class="action-btn edit-btn" aria-label="Edit task">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button type="button" class="action-btn delete-btn" aria-label="Delete task">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;

        const checkbox = li.querySelector('.task-checkbox');
        checkbox.addEventListener('change', () => toggleTaskCompletion(task.id));

        const editBtn = li.querySelector('.edit-btn');
        editBtn.addEventListener('click', () => initiateEditTask(task.id));

        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        taskList.appendChild(li);
    });

    updateTaskCounter();
}

function toggleTaskCompletion(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveTasksToStorage();
    renderTasks();
}

function initiateEditTask(taskId) {
    const taskToEdit = tasks.find(t => t.id === taskId);
    if (!taskToEdit) return;

    taskEditIdInput.value = taskToEdit.id;
    taskTitleInput.value = taskToEdit.title;
    taskPrioritySelect.value = taskToEdit.priority;

    submitText.textContent = 'Save Changes';
    submitBtn.classList.add('btn-edit-mode');
    taskTitleInput.focus();
    clearValidationError();
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);

    if (taskEditIdInput.value === taskId) {
        resetFormState();
    }

    saveTasksToStorage();
    renderTasks();
}

function resetFormState() {
    taskEditIdInput.value = '';
    taskTitleInput.value = '';
    taskPrioritySelect.value = 'medium';
    submitText.textContent = 'Add Task';
    submitBtn.classList.remove('btn-edit-mode');
    clearValidationError();
}

function updateTaskCounter() {
    const pendingCount = tasks.filter(t => !t.completed).length;
    taskCounter.textContent = `${pendingCount} ${pendingCount === 1 ? 'task' : 'tasks'} remaining`;
}

function showValidationError(message) {
    titleError.textContent = message;
    taskTitleInput.classList.add('invalid');
    taskTitleInput.focus();
}

function clearValidationError() {
    titleError.textContent = '';
    taskTitleInput.classList.remove('invalid');
}

function saveTasksToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error('Failed to save to localStorage:', error);
    }
}

function loadTasksFromStorage() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        tasks = stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Failed to parse tasks from localStorage:', error);
        tasks = [];
    }
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}