let dolphinsFirstTime = 97;
let dolphinsSecondTime = 112;
let dolphinsThirdTime = 101;

let koalasFirstTime = 109;
let koalasSecondTime = 95;
let koalasThirdTime = 106;

let dolphinsAveragePoints = (dolphinsFirstTime + dolphinsSecondTime + dolphinsThirdTime) / 3;
let koalasAveragePoints = (koalasFirstTime + koalasSecondTime + koalasThirdTime) / 3;

console.log(dolphinsAveragePoints);
console.log(koalasAveragePoints);

if (dolphinsAveragePoints > koalasAveragePoints && dolphinsAveragePoints >= 100) {
    console.log("Dolphins are WINNERS!");
} else if (dolphinsAveragePoints === koalasAveragePoints && dolphinsAveragePoints >= 100) {
    console.log("This is a DRAW!");
} else if (dolphinsAveragePoints < koalasAveragePoints && dolphinsAveragePoints >= 100) {
    console.log("Koalas are WINNERS!")
} else {
    console.log("There is NO enough points to determine a winner!");
}