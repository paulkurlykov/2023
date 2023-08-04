"use strict";

const checkButton = document.querySelector(".check");

// let randomNumber = Math.floor(Math.random() * 21),
//   messageText = document.querySelector(".message").textContent;

document.querySelector(".check").addEventListener("click", () => {
  const inputValue = document.querySelector(".guess").value;
  console.log(inputValue);
});

// console.log(randomNumber);
// console.log(inputValue);

// checkButton.addEventListener("click", (e) => {
//   console.log(inputValue);
//   if (inputValue == randomNumber) {
//     console.log("win");
//     messageText = "You WIN!";
//   } else if (inputValue > randomNumber) {
//     console.log("too high");
//     messageText = "too HIGH!";
//   } else if (inputValue < randomNumber) {
//     messageText = "too LOW!";
//     console.log("too low");
//   } else {
//     messageText = `You didn't put the number!`;
//   }
// });
