"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length); //2
console.log(fuites[2]); //undefined

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruites[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

//c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// /**
//  * Calls a defined callback function on each element of an array, and returns an array that contains the results.
//  * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
//  * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
//  */

//d. Addition, deletion, copy
//push: add an item to the end
fruits.push("strawberry", "peach");

//pop: remove an item from the end
fruits.pop(); //['apple','banana','strawberry']
fruits.pop(); //['apple','banana']

//unshift: add an item to the beginning
fruits.unshift("strawberry", "lemon"); //['strawberry','lemon','apple','banana']

//shift: remove an item from the beginning
fruits.shift(); //['lemon','apple','banana']
fruits.shift(); //['apple','banana']

//note! shift, unshift are slower than pop, push
//bc move the original data

//splice: remove an item by index position
fruits.push("strawberry", "peach", "lemon"); //['apple','banana','strawberry', 'peach','lemon']
// splice(start: number, deleteCount?: number): string[]
// The zero-based location in the array from which to start removing elements.
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
fruits.splice(1, 1); //['apple','strawberry', 'peach','lemon']
fruits.splice(1, 1, "greenapple", "watermelon"); //['apple','greenapple','watermelon','strawberry', 'peach','lemon']

//combine two arrays
const fruits2 = ["pear", "coconut"];
const newFruits = fruits.concat(fruits2);

//5. Searching
//indexOf: find the index
console.log(fruits.indexOf("apple")); //0
console.log(fruits.indexOf("watermelon")); //2

//includes
console.log(fruits.includes("watermelon")); //true
console.log(fruits.includes("peanut")); //false
console.log(fruits.indexOf("peanut"));

//lastIndexOf
console.clear();
fruits.push("apple");
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.lastindexOf("apple"));

const array = new Array();
array.push("1", "2", "apple", 3, 4);
console.log(array);
console.log(typeof array.toString());


// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  //     array=new Array();
  //     students.forEach((student) => array.push(student))
  //   console.log(array)

  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  //     array=new Array();
  //     students.forEach((student) => array.push(student.score))
  //   console.log(array)
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);
  const result2 = students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
