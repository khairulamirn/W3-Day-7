console.log('Hello, World')

// JavaScript Intro 101 (Dynamic type language) (loose type language)

// 1. Variables (like box and we store something)
// assign a value to a variable
// var more traditional, let is newer0 
// var x = 5; 
let y =10 
const z = 15;

// variable naming conventions (majority all people used) 
// (is a rule which is followed by the majority developers)
// camel case (other: snake_case PascalCase kebab-case)
const birthYear = 2003; 

console.log(y);
console.log(z);
console.log(birthYear);

//  we can reassign the value to a variable
y = 40;
// z = 16; Output: error
console.log(y); 

//  2. Data Types
// Number 
let num = 3.14;

// String 
// double quotes, single quates, backticks 
let str = "Hello, World!";
let str2 = 'Hello, World!';
let str3 = `Hello, World!`;

// Boolean (truth or false)
let isMale = true; 
let isFemale = false;

// Undefined 
let e;
console.log(e);

// Null
let a = null;
console.log(a);

// Object 
// using curly braces
let person = {
    firstName: "Khairul",
    lastName: "Lamin",
    age: 21,
};
console.log(person);

// Array
// using square brackets 
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

// determine the data type of a variable
console.log(num, typeof num);
console.log(str, typeof str);
console.log(isMale, typeof isMale);
console.log(z, typeof z);
console.log(a, typeof a);
console.log(fruits, typeof fruits);