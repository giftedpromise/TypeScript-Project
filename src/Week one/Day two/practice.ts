/* Practice Questions
Question 1: Basic Data Types
Create variables of type string, number, and boolean with the following values:

Name: "Charlie"
Age: 28
Is Employed: true

*/
let userName: string = "Charlie";
let userAge: number = 30;
let isEmployed: boolean = true;

console.log(
  `Hello, my name is ${userName}, I am ${userAge} years old and I am ${isEmployed}`
);

/* Question 2: Calculations with Numbers
Create two number variables a and b with values 10 and 20, 
respectively. Calculate and log the following:

Sum
Difference
Product

*/

let a: number = 10;
let b: number = 20;

let sum: number = a + b;
let difference: number = b - a;
let product: number = a * b;
let quotient: number = b / a;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);

/* Question 3: Boolean Logic
Create three boolean variables x, y, and z with values true, false, and true, respectively.
Log the result of the following logical operations:

x && y
x || y
!y
x && z

*/

let x: boolean = true;
let y: boolean = false;
let z: boolean = true;

console.log(`x && y: ${x && y}`);
console.log(`x || y: ${x || y}`);
console.log(`!y: ${!y}`);
console.log(`x && z: ${x && z}`);
