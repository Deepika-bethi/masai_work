// (a)
const isEven = n => n % 2 === 0;

// (b)
const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";

// (c)
const greet = name => `Hello, ${name ? name : "Guest"}`;

console.log(isEven(4));
console.log(result);
console.log(greet("John"));
console.log(greet());
