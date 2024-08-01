/* Day 3: Arrays and Tuples in TypeScript
Arrays
Arrays in TypeScript can be defined using square brackets [] or the Array generic type.

*/

let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["Alice", "Bob", "Charlie"];

/* Array Methods: You can use various methods like push, pop, shift, unshift, map, filter, etc. */

numbers.push(6); // Adds 6 to the end of the array
let string1 = strings.shift(); // Removes and returns the first element of the array
console.log(numbers);
console.log(string1);

//Readonly
//The readonly keyword can prevent arrays from being changed.
const names: readonly string[] = ["Dylan"];

/* A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array: */

let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];

//Named Tuples
//Named tuples allow us to provide context for our values at each index.

const graph: [x: number, y: number] = [1, 2];

//Destructuring Tuples
//Since tuples are arrays we can also destructure them.
//const [x, y] = graph;

let person: [string, number] = ["Ike", 5];
let newName = person[0];
let newAge = person[0];

console.log(`My name is ${newName}, I am ${newAge} old.`);
