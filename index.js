// call stack

function fun1() {
  console.log("Hello by funcation 1");
}

function fun2() {
    fun1()
    console.log("hello by funcation 2");
}

fun2()

// hoisting

getname()
console.log(x);
console.log(getname);

var x = 10 // hoisting can be done using var only if we use let or const it show ReferenceError

function getname () {
    console.log("this is hoisting")
}

//JS operators

//Arithmetic Operators

const sum = 2+2
const diff = 4-2
const multi = 2*4
const divi = 4/2

console.log(sum, diff, multi, divi);

//Assignment Operators 

let y = 10;
y += 5
console.log(y); //	Add and assign

let s = 10
s -= 5
console.log(s) //	Subtract and assign

let m = 10
m *= 5
console.log(m) //	Multiply and assign

let d = 10
d /= 5
console.log(d) //	Modulus and assign

var mo = 10
mo %= 5
console.log(mo); // Modulus and assign

var e = 10
e **= 5
console.log(e);  // Exponentiate and assign

//Comparison Operators

let a = 10;
let b = '10';

console.log(a == b);   // true
console.log(a === b);  // false
console.log(a > 5);    // true
console.log(a <= 10);  // true
console.log(a != b);   // false
console.log(a !== b);   // true

//Logical Operators
// AND operator
console.log(5 > 0 && 10 > 0);  // true (both conditions true)
console.log(5 > 0 && 10 < 0);  // false (second condition false)

// OR operator
console.log(5 > 0 || 10 > 0);  // true (first condition true)
console.log(5 < 0 || 10 > 0);  // true (second condition true)