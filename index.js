"use strict";
// call stack

function fun1() {
  console.log("Hello by funcation 1");
}

function fun2() {
  fun1();
  console.log("hello by funcation 2");
}

fun2();

// hoisting

getname();
console.log(x);
console.log(getname);

var x = 10; // hoisting can be done using var only if we use let or const it show ReferenceError

function getname() {
  console.log("this is hoisting");
}

// scope
// Global Scope

let g1 = "hi";
var g2 = "how";
const g3 = "are you !";

console.log(g1, g2, g3);

// Function Scope

function scope1() {
  var s1 = "yo";
  let s2 = "what";
  const s3 = "up!";
  console.log(s1, s2, s3);
}

scope1();

// Block Scope

{
  var b1 = "good";
  let b2 = "And";
  const b3 = "you?";

  console.log(b1, b2, b3);
}
console.log(b1); //Variables declared with var do not have block scope only let and const have block scope.

// let var const
// var
var n = 10;
console.log("var value " + n);

var n = 5; //reassigning is allowed
console.log("var value " + n);

function varTest() {
  var v = 10;
  console.log("var value in funactional scope " + v);
}
varTest();
// console.log("var value outside funactional scope " + v); reference error

// let

let l = 10;
l = 20; // Value can be updated
// let l = 15; //can not redeclare
console.log("this is let value " +l);

//JS operators

//Arithmetic Operators

const sum = 2 + 2;
const diff = 4 - 2;
const multi = 2 * 4;
const divi = 4 / 2;

console.log(sum, diff, multi, divi);

//Assignment Operators

let y = 10;
y += 5;
console.log(y); //	Add and assign

let s = 10;
s -= 5;
console.log(s); //	Subtract and assign

let m = 10;
m *= 5;
console.log(m); //	Multiply and assign

let d = 10;
d /= 5;
console.log(d); //	Modulus and assign

var mo = 10;
mo %= 5;
console.log(mo); // Modulus and assign

var e = 10;
e **= 5;
console.log(e); // Exponentiate and assign

//Comparison Operators

let a = 10;
let b = "10";

console.log(a == b); // true
console.log(a === b); // false
console.log(a > 5); // true
console.log(a <= 10); // true
console.log(a != b); // false
console.log(a !== b); // true

//Logical Operators
// AND operator
console.log(5 > 0 && 10 > 0); // true (both conditions true)
console.log(5 > 0 && 10 < 0); // false (second condition false)

// OR operator
console.log(5 > 0 || 10 > 0); // true (first condition true)
console.log(5 < 0 || 10 > 0); // true (second condition true)

//JS loops

//for loop

for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}

// while Loop

let w = 0;
while (w < 5) {
  console.log("While loop:", w);
  w++;
}

// do...while Loop

let D = 0;
do {
  console.log("Do...while:", D);
  D++;
} while (D < 5);

// for-in Loop
// The for...in loop is used to iterate over the properties of an object.

const obj = { name: "Ritik", age: 24 };
for (let key in obj) {
  console.log(key, ":", obj[key]);
}

// for-of Loop
// The for...of loop is used to iterate over iterable objects like arrays, strings, or sets.

let ar = [1, 2, 3, 4, 5];
for (let v of ar) {
  console.log(v);
}

// Object Methods

let student = {
  firstName: "Ritik",
  lastName: "Singh",
  getName() {
    console.log(this.firstName + " " + this.lastName);
  },
};

student.getName();

const dog = {
  name: "tuffy",
};

dog.bark = function () {
  console.log("Woof! I am " + this.name);
  console.log(this); // output {name: "tuffy", bark: f}
};

dog.bark();

// array methods

let fruits = ["apple", "banana"];
fruits.push("orange");

console.log(fruits);
console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.join("|"));

fruits.pop();
console.log(fruits);

fruits.unshift("mango"); //Add to the beginning
console.log(fruits);

fruits.shift(); //Remove from the beginning
console.log(fruits);

// this keyword

// Global space

console.log(this); // window (global object)

// this inside funcation

function fun3() {
  console.log(this);
}

fun3(); // window but in use strict it is undifined
// substuation it will replace the value of this keyword to global object if it is undifened or null except in strict mode

// window.fun3(); // window

// this inside object

const person = {
  name: "Ritik",
  printName(last) {
    console.log("Hello my name is " + this.name + " " + last);
  },
};

person.printName("Rajput");

const person2 = {
  name: "Sahil",
};

person.printName.call(person2, "singh");

// this in arrow funcation

const obj1 = {
  name: "Ram",
  x: () => {
    console.log(this);
  },
};

obj1.x(); //  arrow functions don't have their own this, but instead, inherit it from the surrounding context.

const obj2 = {
  name: "Ram",
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj2.x(); // igt will display {name: "Ram",x:f} , enclosing lexcial context

// this in DOM
// this inside DOM reference to HTML element


