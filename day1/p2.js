function signup(userName) {
    let users = ["ram", "sita", "john"];
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

function login(userName, password) {
    let users = ["ram", "sita", "john"];

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    }

    if (password === "Emp@123") {
        return "Login Successful...";
    } else {
        return "Wrong Password....";
    }
}

console.log(signup("ram"));
console.log(signup("deepika"));
console.log(login("ram", "Emp@123"));
console.log(login("ram", "wrong"));
console.log(login("deepika", "Emp@123"));
