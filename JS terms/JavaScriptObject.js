//Obejcts
//one of the JavaScript's data types
//a collection of related data and/or functionality
//Nearly all objects in JavaScript are instances of Object
//object = { key : value };

//1. Literals and properties

//How to make Object
// (1) Object literal syntax
const obj1 = {};
// (2) Object constructor syntax
const obj2 = new Object();

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const yilin = { name: "yilin", age: 21 };
print(yilin);

//bc Javascript is a dynamically typed language
//can add properties later
yilin.hasJob = false;
console.log(yilin.hasJob);

//2. Computed properties
//key should be always string
//use when key is determined during runtime
console.log(yilin.name);
console.log(yilin["name"]);
yilin["hasJob"] = true;
console.log(yilin.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

//3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("yilin", 21);

function makePerson(name, age) {
  return {
    name,
    age,
  };
}

//4. Constructor Function
const person5 = new Person("yoojun", 23);
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

//5. in operator: property existence check (key in object)
console.log("name" in yiln);
console.log(yilin.random); //undefined

//6. for..in vs for..of
//for (key in object)
for (key in ellie) {
  console.log(key);
}
// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

//7. Fun cloning
//copy ref and it points the same memory
//Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "yilin", age: "21" };
const user2 = user;
user2.name = "yilin kim";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);
