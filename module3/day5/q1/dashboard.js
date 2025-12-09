import { auth, db, doc, getDoc } from "./firebase.js";

document.getElementById("loadBtn").onclick = async () => {
    let date = document.getElementById("dashDate").value;
    if (!date) return alert("Select date");

    let uid = auth.currentUser.uid;
    let dayRef = doc(db, "users", uid, "days", date);

    let data = (await getDoc(dayRef)).data();

    if (!data) {
        document.getElementById("noData").classList.remove("hidden");
        return;
    }

    document.getElementById("noData").classList.add("hidden");

    let cats = {};
    data.activities.forEach(a => {
        cats[a.category] = (cats[a.category] || 0) + a.duration;
    });

    new Chart(document.getElementById("pieChart"), {
        type: "pie",
        data: {
            labels: Object.keys(cats),
            datasets: [{
                data: Object.values(cats)
            }]
        }
    });
};
