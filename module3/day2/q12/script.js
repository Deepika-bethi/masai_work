const container = document.getElementById("container");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function () {
  const para = document.createElement("p");
  para.textContent = "This is a new paragraph.";
  container.appendChild(para);
});

removeBtn.addEventListener("click", function () {
  const lastPara = container.lastElementChild;
  if (lastPara) {
    container.removeChild(lastPara);
  }
});
