//number lies between 1 and 100
let num = 75;

if (num >= 1 && num <= 100) {
    console.log("The number lies between 1 and 100.");
} else {
    console.log("The number is outside the range.");
}

//Check whether a person can vote (age ≥ 18 and citizenship is Indian).
let age = 20;
let citizenship = "Indian";

if (age >= 18 && citizenship === "Indian") {
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible to vote.");
}

//Check if a year is a leap year.
let year = 2024;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year + " is a Leap Year.");
} else {
    console.log(year + " is not a Leap Year.");
}

//Check whether a number is even and greater than 50.
let number = 68;

if (number % 2 === 0 && number > 50) {
    console.log("The number is even and greater than 50.");
} else {
    console.log("Condition not satisfied.");
}

//Determine if a student has passed all subjects.

let math = 75;
let science = 68;
let english = 55;

if (math >= 35 && science >= 35 && english >= 35) {
    console.log("Student has passed all subjects.");
} else {
    console.log("Student has failed in one or more subjects.");
}

// Check if a number is positive.
let nu = 15;

if (nu > 0) {
    console.log("The number is positive.");
}

//Check if a person is eligible for a driving license.
let ag = 20;

if (ag >= 18) {
    console.log("Eligible for Driving License.");
} else {
    console.log("Not Eligible.");
}

//Check if a number is divisible by 7.
let numbers = 49;

if (numbers % 7 === 0) {
    console.log("Number is divisible by 7.");
} else {
    console.log("Number is not divisible by 7.");
}
//Check whether a number is even or odd.