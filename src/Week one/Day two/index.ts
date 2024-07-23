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

/* 3. void
The void type is used to represent the absence of a value, 
typically used as the return type of functions that do not return a value.
*/

function logMessage(message: string): void {
  console.log(message);
}

/* 4. null and undefined
The null and undefined types represent the absence of a value. 
In strict mode, you have to explicitly allow these types in your type annotations.
*/

let value2: null = null;
let anotherValue: undefined = undefined;

/* 5. never
The never type represents values that never occur. 
It is used as a return type for functions that always throw an error or never return.
*/

function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

/* 6. object
The object type represents non-primitive types, i.e.,
 anything that is not number, string, boolean, symbol, null, or undefined.

 */
let obj: object = { name: "Alice" };
obj = [1, 2, 3]; // This is allowed because arrays are also objects.

/* 7. Symbol
The symbol type represents unique and immutable values that can be used as object keys.

*/

let sym1 = Symbol("key1");
let sym2 = Symbol("key2");

let obj1 = {
  [sym1]: "value1",
  [sym2]: "value2",
};

console.log(obj1[sym1]); // "value1"
