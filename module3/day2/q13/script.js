const notesArea = document.getElementById("notes");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");

window.addEventListener("load", function () {
  const savedNotes = localStorage.getItem("mynotes");
  if (savedNotes) {
    notesArea.value = savedNotes;
  }
});

saveBtn.addEventListener("click", function () {
  const text = notesArea.value.trim();
  if (text === "") {
    alert("Cannot save empty notes!");
    return;
  }
  localStorage.setItem("mynotes", text);
  alert("Notes saved successfully!");
});

loadBtn.addEventListener("click", function () {
  const savedNotes = localStorage.getItem("mynotes");
  if (savedNotes) {
    notesArea.value = savedNotes;
  } else {
    alert("No notes found in storage.");
  }
});

clearBtn.addEventListener("click", function () {
  localStorage.removeItem("mynotes");
  notesArea.value = "";
  alert("Notes cleared!");
});
