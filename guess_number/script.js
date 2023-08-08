"use strict";

let randomNumber,
  messageText = document.querySelector(".message"),
  score = 20,
  numberBox = document.querySelector(".number"),
  body = document.querySelector("body"),
  scoreDiv = document.querySelector(".score"),
  againButton = document.querySelector(".again"),
  highScoreDiv = document.querySelector(".highscore"),
  highscore = 0,
  input = document.querySelector(".guess"),
  checkButton = document.querySelector(".check");

const randomize = () => {
  randomNumber = Math.floor(Math.random() * 21);
  return randomNumber;
};

randomize();

const setScoreInBox = () => {
  scoreDiv.textContent = score;
};

const displayText = (message) => {
  messageText.textContent = message;
};

const switchWinStyle = () => {
  numberBox.textContent = randomNumber;
  numberBox.style.width = "300px";
  body.style.backgroundColor = "#3EB489";
};

const resetStyle = () => {
  numberBox.style.width = "150px";
  numberBox.textContent = "?";
  body.style.backgroundColor = "#222";
};

const numberMatching = () => {
  if (
    input.value == null ||
    input.value == NaN ||
    input.value == "" ||
    input.value <= 0 ||
    input.value > 20
  ) {
    displayText(`❌ It's not a number from 1 to 20!`);
  } else {
    if (input.value == randomNumber) {
      displayText("💥💥💥You WIN!💥💥💥");
      switchWinStyle();
      setScoreInBox();
      highscore += score;
      highScoreDiv.textContent = highscore;
      checkButton.removeEventListener("click", numberMatching);
    } else if (input.value > randomNumber) {
      score--;
      displayText("⬇⬇ Lower!");
      setScoreInBox();
    } else if (input.value < randomNumber) {
      score--;
      displayText("⬆⬆ Higher!");
      setScoreInBox();
    }
  }
  if (score <= 0) {
    displayText("🤯 GAME OVER!");
    checkButton.removeEventListener("click", numberMatching);
  }
};

checkButton.addEventListener("click", numberMatching);

const resetGame = () => {
  checkButton.addEventListener("click", numberMatching);
  resetStyle();
  score = 20;
  input.value = "";
  displayText("Start guessing...");
  setScoreInBox();
  randomize();
};

againButton.addEventListener("click", resetGame);
