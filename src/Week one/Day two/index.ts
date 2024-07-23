/* 
Day 2: Basic Types (String, Number, Boolean) with Practice Questions , special types
Goals:
Understand and use basic types in TypeScript: string, number, and boolean.
Write a TypeScript program demonstrating these types.
Practice using these types with a few exercises.

TypeScript supports some simple types (primitives) you may know.

TypeScript Simple Types
There are three main primitives in JavaScript and TypeScript.

boolean - true or false values
number - whole numbers and floating point values
string - text values like "TypeScript Rocks"
There are also 2 less common primitives used in later versions of Javascript and TypeScript.

bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
symbol are used to create a globally unique identifier.
Type Assignment
When creating a variable, there are two main ways TypeScript assigns a type:

Explicit
Implicit

Explicit Type
Explicit - writing out the type:

let firstName: string ="John";

Implicit Type
Implicit - TypeScript will "guess" the type, based on the assigned value:

let firstName = "Dylan";

*/
//String type example
let firstName: string = "John";

let personName: string = "John Doe";
console.log(personName);

//number type example
let age: number = 25;
let height: number = 1.8;
console.log(`Age: ${age}, Height: ${height}`);

//Boolean Type example
let isStudent: boolean = true;

console.log(`Student: ${isStudent}`);
/* TypeScript Special Types

1. Type: any
any is a type that disables type checking and effectively allows all types to be used.

The example below does not use any and will throw an error:

*/
//example
let value: any = 300;
value = "string";
value = true;

/*
2. unknown
The unknown type is similar to any, but it is safer because you cannot perform any 
operations on an unknown type without first narrowing its type.

*/

//example

let value1: unknown = 30;
value1 = "string";

if (value1 === "string") {
  // TypeScript knows that `value` is a string in this block.
  console.log(value1.toUpperCase());
}
