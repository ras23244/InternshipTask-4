let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks(filtered = tasks) {

    const list = document.getElementById("taskList");
    list.innerHTML = "";

    filtered.forEach((task, index) => {

        const li = document.createElement("li");

        if (task.completed)
            li.classList.add("completed");

        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>

            <div class="actions">

                <button onclick="editTask(${index})">Edit</button>

                <button onclick="deleteTask(${index})">Delete</button>

            </div>
        `;

        list.appendChild(li);

    });

}

function addTask() {

    const input = document.getElementById("taskInput");

    const text = input.value.trim();

    if (text === "") {
        alert("Enter a task");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    saveTasks();

    displayTasks();

    input.value = "";

}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();

}

function editTask(index) {

    const updated = prompt("Edit Task", tasks[index].text);

    if (updated !== null && updated.trim() !== "") {

        tasks[index].text = updated.trim();

        saveTasks();

        displayTasks();

    }

}

function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

    displayTasks();

}

function searchTasks() {

    const value = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filtered = tasks.filter(task =>

        task.text.toLowerCase().includes(value)

    );

    displayTasks(filtered);

}

function filterTasks() {

    const option = document.getElementById("filter").value;

    let filtered = [];

    if (option === "completed") {

        filtered = tasks.filter(task => task.completed);

    }

    else if (option === "pending") {

        filtered = tasks.filter(task => !task.completed);

    }

    else {

        filtered = tasks;

    }

    displayTasks(filtered);

}

displayTasks();