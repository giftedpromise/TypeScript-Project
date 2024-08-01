/*
Practice Questions
Question 1: Array Operations
Create an array of numbers from 1 to 5.
Add the number 6 to the end of the array.
Remove the first number from the array.
Print the modified array.

 */

//Create an array of numbers from 1 to 5.

let newNumbers: number[] = [1, 2, 3, 4, 5];
console.log(newNumbers);

//Add the number 6 to the end of the array.
console.log(newNumbers.push(6));

//Remove the first number from the array.
console.log(newNumbers.shift());

//Print the modified array.
console.log(newNumbers);

/* 
Question 2: Tuple Manipulation
Create a tuple that represents a product with a name (string), price (number), and availability (boolean).
Update the availability of the product.
Print each element of the tuple separately.*/

//Create a tuple that represents a product with a name (string), price (number), and availability (boolean).
let shoe: [string, number, boolean] = ["Adidas", 300, true];

//Update the availability of the product.
shoe[2] = false;

//Print each element of the tuple separately.

console.log(shoe[0]);

console.log(shoe[1]);

console.log(shoe[2]);

/* Question 3: Combining Arrays and Tuples
Create an array of tuples, where each tuple represents a student with a name (string) and grade (number).
Add a new student tuple to the array.
Filter students who have a grade greater than or equal to 75.
Print the filtered list of students.

*/

//Create an array of tuples, where each tuple represents a student with a name (string) and grade (number).
let students: [string, number][] = [
  ["Alice", 85],
  ["Bob", 70],
  ["Charlie", 95],
];

//Add a new student tuple to the array.
console.log(students.push(["David", 75]));

//Filter students who have a grade greater than or equal to 75.
let topStudents = students.filter(([name, grade]) => grade >= 70);
console.log(topStudents);
