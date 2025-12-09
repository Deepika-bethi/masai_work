const auth = firebase.auth();
const db = firebase.firestore();

function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(err => {
            alert("Login Failed: " + err.message);
        });
}

function logoutUser() {
    auth.signOut().then(() => {
        window.location.href = "login.html";
    });
}

async function addActivity() {
    const user = auth.currentUser;
    if (!user) {
        alert("Please login first");
        return;
    }

    const date = document.getElementById("date").value;
    const name = document.getElementById("activityName").value;
    const category = document.getElementById("category").value;
    const minutes = parseInt(document.getElementById("minutes").value);

    if (!date || !name || !minutes) {
        alert("Fill all fields");
        return;
    }

    const dayRef = db.collection("users").doc(user.uid).collection("days").doc(date);
    const snapshot = await dayRef.get();

    let totalMinutes = 0;
    if (snapshot.exists) {
        const data = snapshot.data();
        totalMinutes = data.total || 0;
    }

    if (totalMinutes + minutes > 1440) {
        alert("Total minutes cannot exceed 1440 for a day.");
        return;
    }

    await dayRef.set({
        total: totalMinutes + minutes,
        activities: firebase.firestore.FieldValue.arrayUnion({
            name,
            category,
            minutes
        })
    }, { merge: true });

    alert("Activity added successfully!");
    window.location.href = "dashboard.html?date=" + date;
}

async function loadActivities() {
    const user = auth.currentUser;
    if (!user) return;

    const date = document.getElementById("date").value;
    if (!date) return;

    const dayRef = db.collection("users").doc(user.uid).collection("days").doc(date);
    const snapshot = await dayRef.get();

    const list = document.getElementById("activityList");
    list.innerHTML = "";

    if (!snapshot.exists) {
        list.innerHTML = "<p>No activities logged yet.</p>";
        return;
    }

    const data = snapshot.data();
    (data.activities || []).forEach(act => {
        const item = document.createElement("div");
        item.className = "activity-item";
        item.innerHTML = `<strong>${act.name}</strong> (${act.category}) - ${act.minutes} min`;
        list.appendChild(item);
    });

    document.getElementById("remaining").innerText =
        "Remaining: " + (1440 - data.total) + " minutes";
}

auth.onAuthStateChanged(user => {
    const path = window.location.pathname;
    if (!user && !path.includes("login.html")) {
        window.location.href = "login.html";
    }
});
