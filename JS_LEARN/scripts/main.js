let bill = 430;
let tip;
let tipString;


tip = bill < 300 && bill > 50 ? 1.15 : 1.2;
tipString = tip === 1.15 ? "15%" : "20%";

// if (bill < 300 && bill > 50) {
//   tip = 1.15
// } else {
//   tip = 1.2;
// }

let total = bill * tip;

console.log(total);

console.log(`The bill was ${bill} $, the tip was ${tipString}, and the final value is ${total}`);

let x = "String";

