console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `Line 1
Line 2
Line 3`;
console.log(multiLine);

const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);

const square = n => n * n;

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();

const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();

const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };

const aObj = { x: 1 };
const bObj = { y: 2 };
const mergedObj = { ...aObj, ...bObj };

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(1, 5, 9, 3));

const arr = [10, 20, 30];
const [a, b] = arr;

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;

const info = {};
console.log(info.user?.details?.email);

for (var i = 0; i < 3; i++) {}
console.log(i);

let speed;
speed = kmph > 60 ? "Fast" : "Normal";

const age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

const num = -5;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

const nums = [1, 2, 3];
const added = [...nums, 4, 5];

const arrA = ["x", "y"];
const arrB = ["z"];
const combined = [...arrA, ...arrB];

const printNames = (...n) => n;

const user1 = { id: 101, status: "active" };
const { id, status } = user1;

const role = "admin";
const user2 = { id, role };

const name = "Leo";
const age2 = 30;
const person = {
  name,
  age2,
  greet() {
    return "Hello!";
  }
};

console.log(`Today's date is ${new Date().toDateString()}`);

const NAME = "Sam";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

const add = (x, y) => x + y;

const isAdult = age => age >= 18;

const double = n => n * 2;

const arrClone = [...nums];

const newArr = [100, ...nums];

const objM1 = { a: 1, b: 2 };
const objM2 = { b: 99, c: 3 };
const mergedOverride = { ...objM1, ...objM2 };

const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(user3.address?.city);
console.log(user3.job?.title);

const sample = { a: { b: 10 } };
console.log(sample.a?.c?.d);
