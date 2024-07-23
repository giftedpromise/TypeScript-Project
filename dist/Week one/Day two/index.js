"use strict";
let firstName = "John";
let personName = "John Doe";
console.log(personName);
let age = 25;
let height = 1.8;
console.log(`Age: ${age}, Height: ${height}`);
let isStudent = true;
console.log(`Student: ${isStudent}`);
let value = 300;
value = "string";
value = true;
let value1 = 30;
value1 = "string";
if (value1 === "string") {
    console.log(value1.toUpperCase());
}
function logMessage(message) {
    console.log(message);
}
let value2 = null;
let anotherValue = undefined;
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
let obj = { name: "Alice" };
obj = [1, 2, 3];
let sym1 = Symbol("key1");
let sym2 = Symbol("key2");
let obj1 = {
    [sym1]: "value1",
    [sym2]: "value2",
};
console.log(obj1[sym1]);
//# sourceMappingURL=index.js.map