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

arr.forEach(num => { // it does not return array like map and filter
    console.log(num);
})

const double = arr.forEach(num => {
    num = num * 2
})
console.log(double); // undifend

// Map()
const double2 = arr.map(num => num * 2) // it return array after the modification
console.log(double2);


