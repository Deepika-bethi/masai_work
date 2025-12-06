const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function generateID() {
  return Date.now().toString();
}

function renderTasks(list = tasks) {
  taskList.innerHTML = "";
  list.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.style.textDecoration = task.completed ? "line-through" : "none";
    li.style.cursor = "pointer";

    li.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";

    delBtn.addEventListener("click", () => {
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      renderTasks();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  const newTask = {
    id: generateID(),
    text: text,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = "";
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = tasks.filter(t => t.text.toLowerCase().includes(query));
  renderTasks(filtered);
});

renderTasks();
