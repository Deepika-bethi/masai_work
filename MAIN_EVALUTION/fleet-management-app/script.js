// Login function
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email === "admin@gmail.com" && pass === "admin1234") {
        alert("Login Success");
        window.location.href = "admin.html";
    } else {
        alert("Wrong email or password");
    }
}

// Fleet Data
let data = [];

// Add Fleet
function addFleet() {
    let reg = document.getElementById("reg").value;
    let category = document.getElementById("category").value;
    let driver = document.getElementById("driver").value;
    let available = document.getElementById("available").value;

    if (!reg || !driver) {
        alert("Fields cannot be empty");
        return;
    }

    let obj = {
        reg, category, driver, available
    };

    data.push(obj);
    render(data);

    document.getElementById("reg").value = "";
    document.getElementById("driver").value = "";
}

// Render Cards
function render(arr) {
    let display = document.getElementById("display");
    display.innerHTML = "";

    arr.forEach((el, i) => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="https://cdn-icons-png.flaticon.com/512/743/743131.png" width="80" />
            <h3>${el.reg}</h3>
            <p>Category: ${el.category}</p>
            <p>Driver: ${el.driver}</p>
            <p>Status: <b>${el.available}</b></p>
            <button onclick="updateDriver(${i})">Update Driver</button>
            <button onclick="changeStatus(${i})">Change Availability</button>
            <button onclick="deleteFleet(${i})">Delete</button>
        `;
        display.append(card);
    });
}

// Update Driver
function updateDriver(i) {
    let newName = prompt("Enter new driver name:");
    if (!newName || newName.trim() === "") {
        alert("Driver name cannot be empty");
        return;
    }
    data[i].driver = newName;
    render(data);
}

// Change Availability
function changeStatus(i) {
    data[i].available = data[i].available === "Available" ? "Unavailable" : "Available";
    render(data);
}

// Delete Fleet
function deleteFleet(i) {
    if (confirm("Are you sure you want to delete?")) {
        data.splice(i, 1);
        render(data);
    }
}

// Filtering
function applyFilters() {
    let cat = document.getElementById("categoryFilter").value;
    let avail = document.getElementById("availabilityFilter").value;

    let filtered = data.filter(el =>
        (cat === "All" || el.category === cat) &&
        (avail === "All" || el.available === avail)
    );

    render(filtered);
}

function clearFilters() {
    document.getElementById("categoryFilter").value = "All";
    document.getElementById("availabilityFilter").value = "All";
    render(data);
}
