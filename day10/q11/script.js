
document.getElementById("title").textContent = "Welcome to the DOM World!
let paras = document.getElementsByTagName("p");
for (let p of paras) {
    p.style.color = "blue";
}

let box = document.querySelector(".container");
box.style.backgroundColor = "yellow";
