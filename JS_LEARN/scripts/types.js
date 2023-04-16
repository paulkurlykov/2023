//////////// STRING/NUMBERS CONVERTIONS

let inputYear = '1991';
let number = 18;

console.log(inputYear + number); // result is 199118

console.log(Number(inputYear) + number); // result is 2009
console.log(Number('Pasha')); // result is NaN (not a number)
console.log(typeof NaN); // result is number
console.log(String(23)); // result is 23

console.log('I am ' + 33 + ' years old');
console.log("23" + "10" + 5); // result is 23105
console.log("23" - "10" - 5); // result is 10 (because minus)

let n = "1" + 1;
n = n - 1;
console.log(n); // result is 10

console.log("10" - "4" - "3" + "5"); //result is 35


///////////////// BULEAN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Paul")); // true
console.log(Boolean({})); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false

let money = 0;

if (money) { // if money is true
    console.log("Don't spend it at all");
} else { // if money is false
    console.log("You should get a job");
} // result is false, because 0 is false

let height; // we didn't define it

if (height) {
    console.log("height is defined");
} else {
    console.log("height is UNdefined");
} // result is false

