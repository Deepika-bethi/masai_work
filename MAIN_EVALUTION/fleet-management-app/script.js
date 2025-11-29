const regNoInput = document.getElementById('regNo');
const categoryInput = document.getElementById('category');
const driverInput = document.getElementById('driverName');
const availabilityInput = document.getElementById('availability');
const addFleetBtn = document.getElementById('addFleet');
const fleetCardsContainer = document.getElementById('fleetCards');

let fleets = [];

addFleetBtn.addEventListener('click', () => {
    const regNo = regNoInput.value.trim();
    const category = categoryInput.value;
    const driver = driverInput.value.trim();
    const availability = availabilityInput.value;

    if (!regNo || !category || !driver) {
        alert("Please fill all fields.");
        return;
    }

    fleets.push({ regNo, category, driver, availability });
    renderFleets();
    clearForm();
});

function clearForm() {
    regNoInput.value = '';
    categoryInput.value = '';
    driverInput.value = '';
    availabilityInput.value = 'Available';
}

function renderFleets(filteredFleets = fleets) {
    fleetCardsContainer.innerHTML = '';

    filteredFleets.forEach((fleet, index) => {
        const card = document.createElement('div');
        card.classList.add('fleet-card');

        card.innerHTML = `
            <img src="https://via.placeholder.com/250x150?text=Vehicle" alt="Vehicle">
            <p><strong>Reg No:</strong> ${fleet.regNo}</p>
            <p><strong>Category:</strong> ${fleet.category}</p>
            <p><strong>Driver:</strong> ${fleet.driver}</p>
            <p><strong>Availability:</strong> <span class="availability">${fleet.availability}</span></p>
            <button class="update-driver">Update Driver</button>
            <button class="toggle-availability">Change Availability</button>
            <button class="delete-fleet">Delete Vehicle</button>
        `;

        card.querySelector('.update-driver').addEventListener('click', () => {
            const newDriver = prompt("Enter new driver name:", fleet.driver);
            if (newDriver && newDriver.trim() !== '') {
                fleet.driver = newDriver.trim();
                renderFleets();
            } else {
                alert("Driver name cannot be empty.");
            }
        });

        card.querySelector('.toggle-availability').addEventListener('click', () => {
            fleet.availability = fleet.availability === 'Available' ? 'Unavailable' : 'Available';
            renderFleets();
        });

        card.querySelector('.delete-fleet').addEventListener('click', () => {
            if (confirm("Are you sure you want to delete this vehicle?")) {
                fleets.splice(index, 1);
                renderFleets();
            }
        });

        fleetCardsContainer.appendChild(card);
    });
}

const categoryFilter = document.getElementById('categoryFilter');
const availabilityFilter = document.getElementById('availabilityFilter');
const clearFilterBtn = document.getElementById('clearFilter');

if (categoryFilter && availabilityFilter) {
    categoryFilter.addEventListener('change', applyFilters);
    availabilityFilter.addEventListener('change', applyFilters);
    clearFilterBtn.addEventListener('click', () => {
        categoryFilter.value = 'All';
        availabilityFilter.value = 'All';
        renderFleets();
    });
}

function applyFilters() {
    const category = categoryFilter.value;
    const availability = availabilityFilter.value;

    let filtered = fleets;
    if (category !== 'All') filtered = filtered.filter(f => f.category === category);
    if (availability !== 'All') filtered = filtered.filter(f => f.availability === availability);

    renderFleets(filtered);
}
