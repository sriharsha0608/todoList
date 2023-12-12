function addTask() {
    var taskInput = document.getElementById("taskInput");
    var prioritySelect = document.getElementById("prioritySelect");
    var dateInput = document.getElementById("dateInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <span class="priority">${prioritySelect.value}</span>
        <span class="date">${formatDate(dateInput.value)}</span>
        <button onclick="markDone(this)">Done</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
    dateInput.value = "";
}

function markDone(button) {
    var listItem = button.parentElement;
    var taskSpan = listItem.querySelector('span');
    
    if (!listItem.classList.contains('completed')) {
        taskSpan.style.textDecoration = 'line-through';
        listItem.classList.add('completed');
    } else {
        taskSpan.style.textDecoration = 'none';
        listItem.classList.remove('completed');
    }
}

function deleteTask(button) {
    var listItem = button.parentElement;
    listItem.remove();
}
function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

function DarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
}
function LightMode() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
}
