'use strict';
const check = document.querySelector('.check');
const again = document.querySelector('#again');
const inpGuess = document.querySelector('.guess');
const highScore = document.querySelector('.highscore');
const score = document.querySelector('.score');
const max = [];
let secretNumber;
let myScore = 20;

function random (){
secretNumber = Math.floor(Math.random()*20)+1
}

function checkMe(){
	score.innerHTML = (myScore--) -1
  
	if(inpGuess.value == secretNumber) {
  	max.push(myScore +1);
    highScore.innerHTML = Math.max(...max)
  }
  
}

function reset() {
	myScore = 20
	score.innerHTML = 20;
  inpGuess.value = '';
	random();
  
}
random()
