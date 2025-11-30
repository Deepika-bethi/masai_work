let ul = document.querySelector("#list");
let btn = document.querySelector("#addBtn");

btn.addEventListener("click", function () {
    let count = ul.children.length + 1; // sequence number
    let li = document.createElement("li");
    li.textContent = "New Item " + count;

    if (count % 2 !== 0) {
        li.style.fontWeight = "bold";
        li.style.color = "blue";
    } else {
        li.style.fontStyle = "italic";
        li.style.color = "red";
    }

    ul.appendChild(li);
});
