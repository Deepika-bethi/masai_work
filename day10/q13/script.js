let colorInput = document.querySelector("#colorInput");
let textInput = document.querySelector("#textInput");
let bgBtn = document.querySelector("#bgBtn");
let textBtn = document.querySelector("#textBtn");
let box = document.querySelector("#box");

bgBtn.addEventListener("click", function () {
    let color = colorInput.value.trim();
    let test = document.createElement("div");
    test.style.backgroundColor = color;

    if (test.style.backgroundColor === "") {
        alert("Invalid color name!");
    } else {
        box.style.backgroundColor = color;
    }
});

textBtn.addEventListener("click", function () {
    let text = textInput.value.trim();

    if (text === "") {
        alert("Please enter some text!");
    } else {
        box.textContent = text;
    }
});
