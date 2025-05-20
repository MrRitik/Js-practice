// js operator

// Arithmetic Operators

console.log(1 + 2); // add
console.log("yo" + 2); // concatenate
console.log("");

console.log(3 - 2); // sub
console.log("3" - 2); // coerced to number
console.log("hello" - 2); // can't be converted to a number
console.log("");

console.log(3 * 3); // multiplaction
console.log(Infinity * -3); // multiplaction output -infinity
console.log("3" * 3); // convert into number
console.log("hi" * 3); // can't be converted to number
console.log("");

console.log(5 / 2); // 2.5
console.log("5" / 2); // convert to number output 2.5
console.log(Infinity / 2); // infinity
console.log("hi" / 2); // NaN
console.log(5 / Infinity); // 0
console.log("");

console.log(5 % 2);
console.log("5" % 2);
console.log("hi" % 2);
console.log("");

console.log("5" ** 2);
console.log("hi" ** 2);
console.log("");

// Assignment Operators

let a = 5;
let b = 2;

console.log((a -= b));
console.log((a += b));
console.log((a *= b));
console.log((a /= b));
console.log("");

// Comparison Operators

console.log(10 > 5);
console.log("10" >= 10);
console.log("10" === 10);
console.log("");

// Ternary Operator
// condition ? trueExpression : falseExpression
const age = 3;

console.log(age >= 18 ? "adult" : "kid");
console.log(age == 18 ? "age 18" : age < 18 ? "under 18" : "above 18");

// Comma Operator

//  its operands from left to right sequentially and returns the value of the rightmost operand.
let x = (1, 2, 3, 4);
console.log(x);
console.log("");

// Nullish Coalescing operator
// it return right side value if left side is null or undifined otherwise return leftside
const foo = undefined ?? 4;
console.log(foo);

// Chaining Operator

const obj = {
  name: "Ritik",
  last: "Singh",
  address: {
    city: "Delhi",
  },
};

console.log(obj.name);
console.log(obj.address.city);
console.log(obj.address.phone);
console.log(obj.detail?.phone);
console.log("");

// JS statements
// Control Statements

// if
const num = 5;
if (num > 0) {
  console.log("greater than five");
}

// if else

if (num > 0) {
  console.log("num is positive");
} else console.log("num is negitive");

// switch

switch (num) {
  case 0:
    {
      console.log("num value is 0");
    }
    break;
  case 1:
    {
      console.log("num value is 1");
    }
    break;
  case 2:
    {
      console.log("num value is 2");
    }
    break;
  default: {
    console.log("num value more than 2");
  }
}

// while Loop
let i = 0;
while (i < 3) {
  console.log("hi");
  i++;
}

// do while loop

do {
  console.log("do while loop");
} while (i > 3); // the loop will run atleast one time

// for loop

let arr = [1, 2, 3, 4];
for (let i = 1; i <= arr.length; i++) {
  console.log(i);
}

for (let i = arr.length; i >= 1; i--) {
  console.log("reverse loop :" + i);
}

// for-in Loop

let person = {
  name: "Ritik",
  age: "24",
  city: "Delhi",
};

for (let key in person) {
    console.log(key, person[key]);
}

// for in with arr
for (let key in arr) {
  console.log(key, arr[key]);
}

// for of loop

for (let a of arr) {
  console.log("for of :", a);
}

const str = "Ritik";
for (let a of str) {
  console.log(a);
}

