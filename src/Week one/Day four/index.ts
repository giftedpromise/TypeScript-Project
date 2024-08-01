/* Day 4: Enums in TypeScript
What are Enums?
Enums (short for enumerations) are a feature in TypeScript that allows you to define a set of named constants.
 Enums help organize and group related values and make your code more readable and maintainable.

Types of Enums
1. Numeric Enums

Numeric enums are the most common type. By default, enums start with 0 and increment by 1 for each subsequent member, but you can assign custom values if needed.

Example:

*/
enum Direction {
  up = 1,
  down,
  left,
  right,
}

let move: Direction = Direction.up;
console.log(move);

//Custom Values:

enum Status {
  Pending = "PENDING",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
}

let taskStatus: Status = Status.InProgress;
console.log(taskStatus);

/* 
String Enums

String enums allow you to define string-based values for enum members.
 Each member has to be initialized with a string value.

Example:
*/

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let favouriteColour: Color = Color.Green;
console.log(favouriteColour);

/* Heterogeneous Enums

Enums can mix numeric and string values, but this is generally 
not recommended as it can lead to confusion.

Example:

*/

enum Mixed {
  No = 0,
  Yes = "YES",
}

let response: Mixed = Mixed.Yes;
console.log(response); // Output: "YES"

/* 
Accessing Enums
Enums can be accessed by their name and value. TypeScript generates a reverse mapping for numeric 
enums which allows you to get the name of an enum member from its value.

enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
*/

let directionName: string = Direction[1];
console.log(directionName);
