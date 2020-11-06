//Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = ["🍎", "🥝", "🍌", "🍒"];
  const result = fruits.split(",");
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// splice: change the original array itself
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}

// Q4. make new array without the first two elements
// slice: not change the original array
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); //from index 2 to 4
  console.log(result);
  console.log(array);
}

// Q5. find a student with the score 90
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

{
  const array = students.find(function (student, index) {
    return student.score === 90;
  });
}

// Q6. make an array of enrolled students
{
  const result = students.filter(function (student) {
    return student.enrolled;
    console.log(result);
  });
}

//Q7. make an array containing only the students' scores
//result should be:[45,80,90,66,88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

//Q8. check if there is a stuent with the scre lwer than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result = students.every((student) => student.score < 50);
  console.log(result2);
}

//Q9. compute students' average score
//reduce: accumulate all the values in array from starting value
//reduceRight
{
  //return value is orderly delivered to prev
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

//Q10. make a string containing all the scores
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result); //only scores higher than 50
}

//Bonus! do Q10 sorted in ascending order
//map: new array returned -> can mix operations
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
