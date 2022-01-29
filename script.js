'use strict';
const check = document.querySelector('.check');
const again = document.querySelector('#again');
const inpGuess = document.querySelector('.guess');
const highScore = document.querySelector('.highscore');
const score = document.querySelector('.score');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const max = [];
let secretNumber;
let myScore = 20;

function random() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
}

function checkMe() {
  score.innerHTML = myScore-- - 1;

  if (inpGuess.value == secretNumber) {
    max.push(myScore + 1);
    highScore.innerHTML = Math.max(...max);
    message.innerHTML = 'Correct Number';
    number.innerHTML = secretNumber;
  } else if (inpGuess.value < secretNumber) {
    message.innerHTML = 'Too low!';
  } else {
    message.innerHTML = 'Too high!';
  }
}

function reset() {
  myScore = 20;
  score.innerHTML = 20;
  inpGuess.value = '';
  number.innerHTML = '';
  message.innerHTML = 'Start guessing...';
  number.innerHTML = '?';
  random();
}
random();
