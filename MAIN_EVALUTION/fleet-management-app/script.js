let fleetData = []; // Store all vehicles

function addFleet() {
    const regNo = document.getElementById("regNo").value.trim();
    const category = document.getElementById("category").value;
    const driverName = document.getElementById("driverName").value.trim();
    const isAvailable = document.getElementById("isAvailable").value;

    // Validation
    if(!regNo || !category || !driverName) {
        alert("All fields are required!");
        return;
    }

    // Add vehicle
    const vehicle = { regNo, category, driverName, isAvailable };
    fleetData.push(vehicle);

    // Clear form
    document.getElementById("regNo").value = "";
    document.getElementById("category").value = "";
    document.getElementById("driverName").value = "";
    document.getElementById("isAvailable").value = "Available";

    renderFleet();
}

// Render fleet cards
function renderFleet(filteredData) {
    const dataToRender = filteredData || fleetData;
    const container = document.getElementById("fleetCards");
    container.innerHTML = ""; // Clear old cards

    dataToRender.forEach((vehicle, index) => {
        const card = document.createElement("div");
        card.className = "fleet-card";
        card.innerHTML = `
            <p><strong>Reg No:</strong> ${vehicle.regNo}</p>
            <p><strong>Category:</strong> ${vehicle.category}</p>
            <p><strong>Driver:</strong> ${vehicle.driverName}</p>
            <p><strong>Availability:</strong> ${vehicle.isAvailable}</p>
            <button onclick="updateDriver(${index})">Update Driver</button>
            <button onclick="toggleAvailability(${index})">Change Availability</button>
            <button onclick="deleteVehicle(${index})">Delete Vehicle</button>
        `;
        container.appendChild(card);
    });
}

// Card Actions
function updateDriver(index) {
    const newDriver = prompt("Enter new driver name").trim();
    if(newDriver) {
        fleetData[index].driverName = newDriver;
        renderFleet();
    } else {
        alert("Driver name cannot be empty.");
    }
}

function toggleAvailability(index) {
    fleetData[index].isAvailable = fleetData[index].isAvailable === "Available" ? "Unavailable" : "Available";
    renderFleet();
}

function deleteVehicle(index) {
    if(confirm("Are you sure you want to delete this vehicle?")) {
        fleetData.splice(index, 1);
        renderFleet();
    }
}

// Filters
document.getElementById("categoryFilter").addEventListener("change", applyFilter);
document.getElementById("availabilityFilter").addEventListener("change", applyFilter);
document.getElementById("clearFilter").addEventListener("click", () => {
    document.getElementById("categoryFilter").value = "All";
    document.getElementById("availabilityFilter").value = "All";
    renderFleet();
});

function applyFilter() {
    const category = document.getElementById("categoryFilter").value;
    const availability = document.getElementById("availabilityFilter").value;

    const filtered = fleetData.filter(vehicle => {
        return (category === "All" || vehicle.category === category) &&
               (availability === "All" || vehicle.isAvailable === availability);
    });

    renderFleet(filtered);
}
