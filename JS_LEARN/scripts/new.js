function calcTip(bill) {
  if (bill < 300 && bill > 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

let bills = [125, 555, 44];
let tips = [];

tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));

let total = [bills, tips];

console.log(total);

let a = 23;
let b = 16;
let summ = 5;

function zebra(par1, par2) {
  if (a < 20) {
    summ = a + b;
  }
  return summ;
}

console.log(zebra(a, b));
