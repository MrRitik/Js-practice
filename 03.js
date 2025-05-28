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

// promises

let p = new Promise((resolve, reject) => {
  let sucess = false;
  setTimeout(() => {
    if (sucess) {
      resolve("promises full filled");
    } else {
      reject("promises is not full filled");
    }
  }, 1000);
});

p.then((res) => {
  console.log(res);
}).catch((err) => console.log(err));

// promises chaning

new Promise((resolve, reject) => {
  resolve(1);
})
  .then((result) => {
    console.log("Step 1:", result);
    return result * 2;
  })
  .then((result) => {
    console.log("Step 2:", result);
    return result * 3;
  })
  .then((result) => {
    console.log("Step 3:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
// promises all

const p1 = new Promise((resolve, reject) => {
  resolve("p1 is resolved");
});
const p2 = new Promise((resolve, reject) => {
  resolve("p2 is resolved");
});
const p3 = new Promise((resolve, reject) => {
  resolve("p3 is resolved");
});

// Promise.all([p1,p2,p3]).then(mes => console.log(mes))

// Promise.race([p1, p2, p3]).then((message) => console.log(message));

// async await

let newP = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("New Promises is resolved after 2 sec");
  }, 2000);
});

async function handlePromises() {
  console.log("this console will be printed");
  const data = await newP;
  console.log("this console will print after the promis is resolved"); // it suspend the newP until it resolved
  console.log(data);
}

handlePromises();

// put , patch, get , post
// GET

fetch("https://api.example.com/data")
  .then((res) => res.json)
  .then((data) => console.log(data).catch((err) => console.log(err)));

// POST
fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Ritik", age: 23 }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// or
fetch("https://api.example.com/upload", {
  method: "POST",
  body: formData, // no need to set Content-Type
})
  .then((res) => res.json)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// PUT
// update or replace entirely

fetch("https://api.example.com/data", {
  method: "PUT",
  headers: {
    "Content-Type": "json/application",
  },
  body: JSON.stringify({ name: "Sahil", age: 24 }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// PATCH
// Used to modify part of a resource
fetch("https://api.example.com/data", {
  method: "PATCH",
  headers: {
    "Content-Type": "json/application",
  },
  body: JSON.stringify({ age: 24 }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// DELETE

fetch("https://example.com/data/1", {
  method: "DELETE",
})
  .then((res) => {
    if (res.ok) {
      console.log("Data is Deleted");
    } else {
      console.log("Delete failed");
    }
  })
  .catch((err) => console.log(err));

  
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
