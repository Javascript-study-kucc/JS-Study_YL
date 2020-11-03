"use strict";

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

//3. Looping over an array
//print all fruits
console.clear();
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

//c. forEach
console.clear();
fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push("strawberry", "orange");
console.log(fruits);

//pop: remove an item from the end
const popped = fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift("strawberry", "lemon");
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

//note! shift, unshift are slower than pop, push
//bc have to move the whole data

//splice: remove an item by index position
fruits.push("strawberry", "orange", "lemon");
console.log(fruits);
fruits.splice(1, 1, "apple", "watermelon");
//erase one thing from index 1, and insert apple and watermelon
console.log(fruits);

//combine two arrays
const fruits2 = ["quince", "coconut"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("watermelon"));

//includes
console.log(fruits.includes("watermelon"));
console.log(fruits.includes("peanut"));
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

// Q1. make a string out of an array
{
  // const fruits = ['apple', 'banana', 'orange'];
  // console.log(fruits.toString())
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join("|");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "apple, mango, banana, cherry";
  const result = fruits.split(",");
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}

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
