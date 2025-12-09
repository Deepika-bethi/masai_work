import { auth, db, doc, setDoc, getDoc, collection, getDocs } from "./firebase.js";

let datePicker = document.getElementById("datePicker");
let list = document.getElementById("list");
let analyseBtn = document.getElementById("analyseBtn");

let remaining = 1440;

document.getElementById("addBtn").onclick = async () => {
    let date = datePicker.value;
    let name = activityName.value;
    let cat = category.value;
    let dur = Number(duration.value);

    if (!date) return alert("Select a date");
    if (!name || !dur) return alert("Enter all details");

    let uid = auth.currentUser.uid;
    let dayRef = doc(db, "users", uid, "days", date);
    let data = (await getDoc(dayRef)).data() || { activities: [] };

    // Check total minutes
    let used = data.activities.reduce((t, a) => t + a.duration, 0);
    if (used + dur > 1440) return alert("Exceeds daily limit");

    data.activities.push({ name, category: cat, duration: dur });

    await setDoc(dayRef, data);

    loadList(data.activities);
};

function loadList(acts) {
    list.innerHTML = "";
    let used = acts.reduce((t, a) => t + a.duration, 0);
    document.getElementById("remaining").innerText = "Remaining Minutes: " + (1440 - used);

    analyseBtn.disabled = acts.length === 0;

    acts.forEach(a => {
        let li = document.createElement("li");
        li.innerText = `${a.name} - ${a.duration} mins`;
        list.appendChild(li);
    });
}
