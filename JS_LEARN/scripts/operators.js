//////////////////////////////////// +=

let firstName = 'Paul';
let secondName = 'Kurlykov';
let birthYear = 1990;
let currentYear = 2023;

//secondName += firstName; // это как secondName + firstName

console.log(secondName); // KurlykovPaul
//---------------------------------------

let x = 5;
let y = 6;
x += y; // x = x + y | x = (5 + 6)
console.log(x); // 11

let fullSentence = "I'm" + " " + firstName + " " + secondName + " and I sound like this";
console.log(fullSentence);

let myAge = currentYear - birthYear;
console.log(myAge);

let fullSetence$ = `I'm ${firstName} ${secondName} and I sound like this`; // it's the same like on 18 line
console.log(fullSetence$);

let multipleLines = 'string with \n\
multiple \n\
lines';
console.log(multipleLines);

let multipleLinesEasy = `string with
multiple
lines too`;
console.log(multipleLinesEasy);


/////EQUALS OPERATORS
/*
const vozrast = '18';
if (vozrast === 18) { // it's false
    console.log("it's true");
} else {
    console.log("It's false")
}

if (vozrast == 18) { // it's true
    console.log("it's true");
} else {
    console.log("It's false")
}

//let favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { // it's true
    console.log("Cool! It's an amazing number!");
}

if (favourite === 23) { // it's false
    console.log("Cool! It's an amazing number!");
} else {
    console.log("IT'S NOT!")
}

//////////////// AND, OR, NOT
*/
let age = 16;

let boolean;

if (age >= 20) { // defaut value is FALSE
    boolean = true;
} else {
    boolean = false;
}

console.log(boolean); //false cause it's defaut
console.log(!boolean); //true (inverted)
console.log(boolean || !boolean); // true (cause one of them is true)
console.log(boolean && !boolean); // false (cause on of them false)

let hasDriverLicense = true; // a
let hasGoodVision = true; // b

console.log(hasDriverLicense && hasGoodVision);

let shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

let isTired = true; // c

console.log(hasDriverLicense || hasGoodVision || isTired);

console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}