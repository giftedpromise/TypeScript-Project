"use strict";
let newNumbers = [1, 2, 3, 4, 5];
console.log(newNumbers);
console.log(newNumbers.push(6));
console.log(newNumbers.shift());
console.log(newNumbers);
let shoe = ["Adidas", 300, true];
shoe[2] = false;
console.log(shoe[0]);
console.log(shoe[1]);
console.log(shoe[2]);
let students = [
    ["Alice", 85],
    ["Bob", 70],
    ["Charlie", 95],
];
console.log(students.push(["David", 75]));
let topStudents = students.filter(([name, grade]) => grade >= 70);
console.log(topStudents);
//# sourceMappingURL=practice.js.map