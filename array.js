// Array method

// array from()
// used to create a new array instance from string, set , argument

console.log(Array.from("Ritik")); // [ 'R', 'i', 't', 'i', 'k' ]

const set = new Set(["foo", "bar", "baz", "foo"]); // Set { 'foo', 'bar', 'baz' } it store only unique value
console.log(Array.from(set)); // [ 'foo', 'bar', 'baz' ]

function myFunc() {
  const args = Array.from(arguments);
  console.log(args); // [ 'a', 'b', 'c' ]
}
myFunc("a", "b", "c");

// isArray method
console.log(Array.isArray([1, 3, 5])); // true
console.log(Array.isArray("[]")); // false
console.log(Array.isArray(new Array("a", "b", "c", "d"))); // true

// Array.of
console.log(Array.of("foo", 2, "bar", true)); // it create Array regardless of number or type of the arguments

// Array.at()

const arr = [5, 12, 8, 130, 44];
let index = 3;
console.log(`the value of ${index} is ${arr.at(index)}`);

index = -4;
console.log(`the value of ${index} is ${arr.at(index)}`);

// Array.concat()

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);

const num1 = [1, [2, 3], 4];
const num2 = ["a", "b", ["c", ["d"]]];
const num = num1.concat(num2);
console.log(num); // [ 1, [ 2, 3 ], 4, 'a', 'b', [ 'c', [ 'd' ] ] ]

// Array.prototype.copyWithin()
//  copies part of this array to another location in the same array and returns this array without modifying its length.
let word = ["x", "r", "r", "a", "y"];
console.log(word.copyWithin(0, 3, 4)); // [ 'a', 'r', 'r', 'a', 'y' ]

//Array.prototype.entries()
// It returns an iterator, not an array.
const iterator = array1.entries();
console.log(iterator.next().value); // [ 0, 'a' ]
console.log(iterator.next().value);

for (const [index, value] of array1.entries()) {
  console.log(index, value);
}

// Array.prototype.every()
// checks if every element in the array satisfies a test provided

// const nums = [2, 4, 6, 8];
const nums = [2, 4, 6, 8, 11];
const allEven = nums.every((num) => num % 2 === 0);
console.log(allEven); // false

// Array.prototype.fill() it return static value.
const arra = [1, 2, 3, 4, 5];
arra.fill(9, 1, 4); // fill with 9 from index 1 to 3 
console.log("fill "+arra); // fill 1,9,9,9,5

// Array.prototype.filter()
console.log(nums.filter((num) => num > 2));

// Array.prototype.find()
// this method returns the first element in the array that satisfies a provided testing function. If no element satisfies the condition, it returns undefined.
console.log(nums.find((num) => num > 70)); // undefined
console.log(nums.find((num) => num > 7)); // 8

// Array.prototype.findLast()
console.log(nums.findLast((num) => num > 4));

// Array.prototype.findIndex()
// returns the index of the first element in an array that satisfies a provided testing function If no element matches, it returns -1.
console.log(nums.findIndex((num) => num == 6));

// Array.prototype.findLastIndex()
console.log(nums.findLastIndex((num) => num < 4));

// Array.prototype.flat()
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat(3)); // arrgument is depth

// Array.prototype.flatMap()
// It maps each element of an array to a new value, then flattens the result by one level.
const arr3 = [1, 2, 3, 4];
const result = arr3.flatMap((x) => [x, x * 2]); // if use map [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ] ]
console.log(result);

// Array.prototype.forEach()
word.forEach(
  (num, index) =>
    console.log("forEach loop index " + index + " and value " + num) // it does not return array
);

// Array.prototype.includes()
const pets = ["cat", "dog", "bat", "dog", "mouse"];

console.log(pets.includes("cat")); // true

// Array.prototype.indexOf()
console.log(pets.indexOf("dog"));

// Array.prototype.join()
console.log(pets.join(" | ")); //  returns a new string by concatenating all of the elements in this array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join());

// Array.prototype.keys()
const i = pets.keys(); // change into Array Iterator
for (const key of i) {
  console.log(key);
}

// Array.prototype.lastIndexOf()
console.log(pets.lastIndexOf("dog"));

// Array.prototype.map()
console.log(arr3.map((x) => x * 3)); // it return an array

// Array.prototype.pop()
// removes the last element from an array and returns that element
console.log(pets.pop());

// Array.prototype.push()
//  adds the specified elements to the end of an array and returns the new length of the array
console.log(pets.length); // before

console.log(pets.push("snake")); // after

// Array.prototype.reverse()
console.log(pets.reverse());

// Array.prototype.shift()
// removes the first element from an array and returns that removed element
console.log(pets.shift());

// Array.prototype.unshift()
// adds the specified elements to the beginning of an array and returns the new length of the array.
console.log(pets.unshift("mouse", "rabbit"));
console.log(pets);

// Array.prototype.slice()
console.log(pets.slice(1, 3)); // it return array

// Array.prototype.some()
// whether at least one element in the array passes the test implemented by the provided function
const array = [1, 2, 3, 5, 7];
const even = (num) => num % 2 === 0;
console.log(array.some(even)); // true

// Array.prototype.sort()
console.log(pets.sort()); // it change the original array but toSorted it return a array without modification

// Array.prototype.splice()
// array.splice(start, deleteCount, item1, item2, ...)
// it change the original array but toSpliced() does not chnage the original it give a new array

const arr4 = ["a", "b", "c", "d"];
const remove = arr4.splice(1, 2);
console.log(arr4);
console.log(remove);

arr4.splice(1, 0, "r", "k");
console.log(arr4);

arr4.splice(1, 2, "b", "c");
console.log(arr4);

// Array.prototype.toLocaleString()
const Array1 = [1, "a", new Date("27 May 2025 20:15:00 UTC")];
const localeString = Array1.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);

// Array.prototype.toReversed()
// Returns a shallow copy of the array with the elements in reverse order.
//Does not modify the original array (unlike .reverse()).

const items = [1, 2, 3];
const reversedItems = items.toReversed();
console.log(reversedItems);

// Array.prototype.toString()
console.log(matrix.toString());

// Array.prototype.with()
// arrayInstance.with(index, value)
console.log([1, 2, 3, 4, 5].with(1, 99)); // it replace index 1 with 99 value

// Array.prototype.reduce()
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, []);

console.log(count);

const person = [
  { name: "Ritik", age: "24" },
  { name: "Raj", age: 32 },
  { name: "Sahil", age: 24 },
  { name: "sonu", age: "28" },
];

const output = person.reduce((acc, curr) => {
  acc[curr.age] = (acc[curr.age] || 0) + 1;
  return acc;
}, {});

console.log(output);

const flat = arr2.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // it flat the array with 1 depth only [ 0, 1, 2, [ 3, [ 4, 5 ] ] ]

const deepFlat = (arr) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(deepFlat(curr));
    } else {
      return acc.concat(curr);
    }
  }, []);
};

console.log(deepFlat(arr2));

// Remove Duplicates
const arr5 = [1, 2, 3, 2, 1];

const unique = arr5.reduce((acc, curr) => {
  if (!acc.includes(curr)) acc.push(curr);
  return acc;
}, []);

console.log(unique);

// Find Maximum or Minimum
const number = [10, 20, 99, 3, 61];

const max = number.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
});

console.log(max);

// Array.prototype.filter()

// remove falsy value
const mixed = [0, "hello", "", null, 42, undefined, "world"];

const truthy = mixed.filter((element) => !Boolean(element));
console.log(truthy);