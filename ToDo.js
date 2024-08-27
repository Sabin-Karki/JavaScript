// Load tasks when the page loads
window.onload = function() {
    loadTasks();
};

function addList() {
    const listElement = document.getElementsByClassName("list")[0];
    const inputElement = document.getElementsByClassName("put")[0];
    const inputValue = inputElement.value.trim();

    if (inputValue === "") {
        alert("Please enter a task.");
    } else {
        // Create new task item
        const newItem = createTaskElement(inputValue);
        listElement.appendChild(newItem);
     

        // Save to localStorage
        saveTasks();

        // Clear input
        inputElement.value = "";
    }
}

function createTaskElement(taskText) {
    const newItem = document.createElement("li");
    
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    newItem.appendChild(taskSpan);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTask);
    newItem.appendChild(deleteButton);

    newItem.addEventListener("click", () => {
        newItem.querySelector('span').style.textDecoration = "line-through"; 
        saveTasks();
    });

    return newItem;
}

function deleteTask(event) {
    const listElement = document.getElementsByClassName("list")[0];
    const targetElement = event.target;
   
    if (targetElement.tagName === "BUTTON") {
        listElement.removeChild(targetElement.parentNode);
        
        // Save updated list to localStorage
        saveTasks();
    }
}

function saveTasks() {
    const listElement = document.getElementsByClassName("list")[0];
    const tasks = Array.from(listElement.getElementsByTagName("li")).map(li => ({
        text: li.querySelector("span").textContent,
        completed: li.querySelector("span").style.textDecoration === "line-through"
    }));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const listElement = document.getElementsByClassName("list")[0];
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        const newItem = createTaskElement(task.text);
        if (task.completed) {
            newItem.querySelector('span').style.textDecoration = "line-through";
        }
        listElement.appendChild(newItem);
    });
}
