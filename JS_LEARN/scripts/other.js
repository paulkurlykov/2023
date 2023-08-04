// [1] - ОПЕРАТОР +=
// [2] - ПЕРЕНОС СТРОК
// [3] - ОПЕРАТОРЫ =
// [4] - AND, OR, NOT
// [5] - ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ (превращение одного типа данных в другой)

///[1]/// ОПЕРАТОР +=

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

let fullSentence =
  "I'm" + ' ' + firstName + ' ' + secondName + ' and I sound like this';
console.log(fullSentence);

let myAge = currentYear - birthYear;
console.log(myAge);

let fullSetence$ = `I'm ${firstName} ${secondName} and I sound like this`; // it's the same like on 18 line
console.log(fullSetence$);

///[2]/// ПЕРЕНОС СТРОК

let multipleLines =
  'string with \n\
multiple \n\
lines';
console.log(multipleLines);

let multipleLinesEasy = `string with
multiple
lines too`;
console.log(multipleLinesEasy);

///[3]/// EQUALS OPERATORS
/*
const vozrast = '18';
if (vozrast === 18) { // it's false, because vozrast is a string
    console.log("it's true");
} else {
    console.log("It's false")
}

if (vozrast == 18) { // it's true, because no matter that it's string
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

///[4]/// AND, OR, NOT
*/
let age = 16;

let boolean;

if (age >= 20) {
  // defaut value is FALSE
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
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

let isTired = true; // c

console.log(hasDriverLicense || hasGoodVision || isTired);

console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

///[5]/// ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ

// сделать строку - String

console.log(typeof String(55)); // will show "string", not number

// сделать строку - concatination

console.log(typeof (null + '')); // will show "string", not number

// example

let path = 'https://vk.com/catalog/movies/'; // допустим, здесь передается часть пути сайта
let num = 5; // допустим, здесь динамически передается конец пути сайта. Надо это сложить
let adress = path + num;
console.log(adress); // https://vk.com/catalog/movies/5

// сделать число - Number

console.log(typeof Number('66')); // will show "number", not string

// сделать число через +

let someString = '44';
let turned = +someString;
console.log(typeof turned);

// или

console.log(typeof +'77'); // will show 'number', not sting

// используем prompt

let answr = +prompt(`Write your favourite number`); // преобразует строку в число

// если пробовать преобразовать буквы - все равно будет number

let ducan = 'this are letter';
console.log(typeof Number(ducan));

// превращение в boolean

// 0, '', null, undefined, NaN - false by default

let one = 0;
if (!one) {
  // if one is false
  console.log(`${one} is false`); // will show '0 is false'
}

// сделать boolean через Boolean

console.log(typeof Boolean('111')); // will show 'boolean'

// сделать boolean через !!

console.log(typeof !!'222'); // will show 'boolean'
