// conditional statement
// 1. if statement
if (false) {
    // true block
    console.log("This is true");
} else {
    // false block
    console.log("This is false");
}

// variable assignment to boolean value
// hard coded value
let isMoreThan18YearsOld = true;

if (isMoreThan18YearsOld) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// comparison operator 
// dynamic value
const birthYear = 2010;
let currentYear = 2024;
let age = currentYear - birthYear
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// truthy and falsy value
let fName = " John";
if (fName) {
    console.log("Name is present -" + fName);
} else {
    console.log("Name is not present");
}