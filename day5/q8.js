if (true) {
  let x = 10;
  var y = 20;
}

console.log(y);
console.log(x);
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile.user.details.email);
console.log(profile.user.details.phone?.number);  
const order = {
  id: 101,
  customer: {
    name: "John"
  }
};

console.log(order.customer.address?.city);
