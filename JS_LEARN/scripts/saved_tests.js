let markObj = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

let johnObj = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

let mBMI = markObj.calcBMI();
let jBMI = johnObj.calcBMI();

if (mBMI > jBMI) {
  console.log(
    `${markObj.firstName}'s BMI (${mBMI}) is higher than ${johnObj.firstName}'s BMI (${jBMI})!`
  );
} else {
  console.log(
    `${johnObj.firstName}'s BMI (${jBMI}) is higher than ${markObj.firstName}'s BMI (${mBMI})!`
  );
}

// markObj.calcBMI();
// johnObj.calcBMI();

// if(markObj.bmi > johnObj.bmi) {
//     console.log(`${mark.firstName}'s BMI (${mBMI}) is higher than ${johnObj.firstName}'s BMI (${jBMI})!`);
// } else {
//     console.log(`${john.firstName}'s BMI (${jBMI}) is higher than ${markObj.firstName}'s BMI (${mBMI})!`);
// }

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  let bill = bills[i];
  let tip = calcTip(bill);
  tips.push(tip);
  totals.push(bill + tip);
}

function calcTip(bill) {
  if (bill < 300 && bill > 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

function calcAverage(arr) {
  let sum = 0;
  let arl = arr.length;
  for (let i = 0; i < arl; i++) {
    sum += arr[i];
  }
  return sum / arl;
}

console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
