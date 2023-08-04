/// OBJECTS METHODS

// the test object
let obj = {
  name: 'Paul',
  age: 28,
  skills: {
    math: 'bad',
    sport: 'good',
    love: 'medium',
  },
  figures: [7, 13, 17034],
  married: false,
  calcBirthYear: function (age) {
    let currentYear = new Date().getFullYear();
    return currentYear - age;
  },
};

// methods

// obj.name; - return "Paul" (value of the "name" property")
// obj['name']; - the same, don't forget about quotes.
// obj.hairColor = blond; - add the new property (hairColor) and set its value (blond)
// obj.calcBirthYear(33); - FUNCTION - return the value of the function
// obj['calcBirthYear'](33); - the same with squad brackets
// delete obj.skills['math']; - remove the "math" property
// Object.keys(obj).length; - COUNTER -  it will return the number of properties
//obj.hasOwnProperty('age'); - return "true", because the property "age" exists in this object
// Object.keys(obj); - it will return the list of properties

/// ARRAYS METHODS

// the test array

let arr = [1, 2, 5, 'Paul', [10, 20, 30, 40, 50]];

console.log(arr.length); // shows amount of items
console.log(arr.length - 1); // shows number of the last index
// arr.push(3); - add a value to the END of the array
// arr.unshift(); - add a value to the BEGINNING of the array
// arr.pop(); - REMOVE the LAST element of the array
// arr.shift(); - REMOVE the FIRST element of the array
// arr.indexOf('Kurlykov'); - search element via name and return its number of element or -1
// arr.includes('Kurlykov); - the same, but return true or false, not a number
// arr.join(', '); - will return a string like (1, 2, 3, 5, Paul...). В скобках - как разделять значения.
// var.split(', '); - make array from string. в скобках - разделитель.

// STRINGS METHODS AND PROPERTIES

let str = 'This is a string';

console.log(str.length); // get the number (16) of symbol's amount
console.log(str[3]); // get the 4th symbol (s) in this string (because we start from 0)
console.log(str.indexOf('g')); // get the index number which this symbol is starting from in this string
console.log(str.indexOf('is')); // get the index number which this collocation is starting from in this string
console.log(str.slice(5)); // get a piece of string from number of index to the end. The result is 'is a string'.
console.log(str.slice(5, 7)); // get a piece of string. From arg #1 (index) to arg #2. In this example from index #5 to index #7. The result is 'is'.

// NUMBERS METHODS AND PROPERTIES

let num = 12.2;
let length = '17.2px';

console.log(Math.round(num)); // return a rounded number (by the common rule). The result is 12
console.log(Math.floor(num)); // return a rounded DOWN number. The result is 12
console.log(Math.ceil(num)); // return a rounded UP number. The result is 13
console.log(Math.trunc(num)); // remove all numbers after a point. Return a whole number by that. The result is 12
console.log(parseInt(length)); // return the whole number from a string. The result is 17
console.log(parseFloat(length)); // return the decimal fraction from a string. The result is 17.2
console.log(Math.random()); // return the random decimal fraction from 0 to 1. The example of result is 0.254676712
console.log(Math.floor(Math.random() * 6)); // return the random number from 0 to 5 (inclusive). 6 is out.

let getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log(getRandom(0, 10)); // this return numbers from 0 (inclusive) to 9 (inclusive). 10 is out.
