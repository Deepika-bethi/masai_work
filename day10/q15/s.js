let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function () {
    let task = taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    completeBtn.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});
