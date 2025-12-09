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

async fu
