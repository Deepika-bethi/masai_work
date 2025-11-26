let age = 20;

function displayAge() {
    console.log("Current Age:", age);
}

function changeAge() {
    age = 25;
    console.log("Age updated inside function:", age);
}

displayAge();
changeAge();
displayAge();
