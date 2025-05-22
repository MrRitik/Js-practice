// Array method

// push
let arr = [1, 2, 3];
let arr1 = [4, 5];
arr.push("5");
console.log(arr); // add element to last palce
console.log(arr.length); // get the length
console.log(arr.toString()); // convert it into string
console.log(arr.join(" | ")); // it separator and join
console.log(arr.concat(arr1)); // concat two array
console.log("");

// pop
arr.pop(arr);
console.log(arr); // remove element from last palce
console.log("");

// shift
arr.shift(arr);
console.log(arr); // remove element from first place
console.log("");

// unshift
arr.unshift(4);
console.log(arr); // add element to first place
console.log("");

// filter
console.log(arr.filter((num) => num > 1));
console.log("");

// reverse()
console.log(arr.reverse());
console.log("");

// reduce(callback, initialValue)
console.log(arr.reduce((first, next) => first + next)); // this method add all the value of the array
console.log("");

// forEach

arr.forEach((num) => {
  // it does not return array like map and filter
  console.log(num);
});

const double = arr.forEach((num) => {
  num = num * 2;
});
console.log(double); // undifend

// Map()
const double2 = arr.map((num) => num * 2); // it return array after the modification
console.log(double2);

// destructuring

const color = ["red", "green", "yellow"];
// const [first,second,third] = color
const [, , third] = color;

// console.log(first);
// console.log(second);
console.log(third); // skiped item

const user = {
  name: "Ritik",
  age: "24",
  city: "Delhi",
};

const { name, city } = user; // object destructrue
console.log(name);
console.log(city);

const { name: username } = user; // Renaming varibale
console.log(username);

const greet = ({ name, city }) => {
  console.log(`My name is ${name} from ${city} `);
};

greet({ name: "Ritik", city: "Dilhi" });

// error handling

try {
  // Code that might throw an error
  let result = 10 / 0;
  console.log(result);

  nonExistentFunction(); // ❌ Will cause an error
} catch (error) {
  console.log("An error occur", error);
  // Code that handles the error
} finally {
  // (Optional) Code that runs no matter what
  console.log("this will run regardless");
  console.log("");
}

// JSON parse/stringify

const jsonString = JSON.stringify(user); // covert js object into JSON
console.log(jsonString);

const newUser = JSON.parse(jsonString); // convert JSON into JS object
console.log(newUser);

// Currying

// Currying is a technique where a function, instead of taking all arguments at once, takes them one at a time, returning a new function for each argument until all are provided.

function add(a, b) {
  return a + b;
}

console.log(add(4, 8));

function add1(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add1(2)(12));
console.log("");

//  clouser

function x() {
  let a = 6;
  function y() {
    console.log(a);
  }
  a = 10;
  return y; // it return the function along with its environment
}
var z = x();
console.log(z);
z();

function a() {
  let x = 100;
  function b() {
    let y = 8;
    function c() {
      console.log(x, y);
    }
    c();
  }
  b();
}
a();

// JSON & APIs
async function fetchUsers() {
  try {
    const response = await fetch(
      "https://fake-json-api.mock.beeceptor.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Display all user names
    data.forEach((user) => {
      console.log("Name:", user.name);
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
}

fetchUsers();
  



