// js object methods

// Object.assign(target, source)

const abc = { a: "1", b: "2" };
const xyz = { c: "4" };
console.log(Object.assign(abc, xyz));
console.log("");

// object.create
const newABC = Object.create(abc);
newABC.a = "hello";
newABC.b = "sir";
newABC.d = "yo";
console.log(newABC);
console.log("");

// Object.keys
console.log(Object.keys(abc)); // return array of the keys of object
console.log("");

// object.values
console.log(Object.values(abc)); // return array of the value of object
console.log("");

// object.entries
const arr = Object.entries(abc); // make array of key and value
console.log(arr);
console.log("");

// object.forentries
console.log(Object.fromEntries(arr)); // convert arr into object

// preventExtentation
abc.e = "g";
Object.preventExtensions(abc); // it prevent to add new data to the object

abc.d = "g";
console.log("prevnt Extensions ", abc);
console.log("");

// Object.isExtensible()
console.log(Object.isExtensible(abc)); // check wheather we can add in the object
console.log("");

// Object.seal()
console.log(abc);
Object.seal(abc); // can not add or delete in object but can change it
abc.f = "f";
abc.a = "a";
delete abc.a;
console.log(abc);
console.log("");

//  Object.isSealed()
console.log(Object.isSealed(abc));
console.log("");

// Object.freeze()

Object.freeze(abc); // it do not allow add, delete and change in the object
abc.g = "G";
delete abc.a;
abc.a = "1";
console.log(abc);

// Object.isFrozen()

console.log(Object.isFrozen(abc));
console.log(Object.isSealed(abc));
console.log("");

// defineproperty

Object.defineProperty(xyz, "name", {
  // it add signle value
  value: "abc",
  enumerable: true,
});
console.log(xyz); // The name property is there, but hidden from enumeration if it is false.
console.log("");

// Object.defineProperties()

Object.defineProperties(
  xyz,{
    address : {
        value: "Delhi",
        enumerable: true
    },
    mob:{
        value: 6769090909,
        enumerable: true
    }
  }
);

console.log(xyz);
