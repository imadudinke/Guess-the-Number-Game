'use strict';
let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = '';
const displyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displyHighScore = function (score) {
  document.querySelector('.highscore').textContent = score;
};
// addEventListner
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // WHEN NO INPUT
  if (!guess) {
    displyMessage('⛔ NO Number ');

    // WHEN WIN
  } else if (guess === secertNumber) {
    if (score > highScore) {
      highScore = score;
      displyHighScore(highScore);
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secertNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displyMessage('🎉 Correct answer ');
  } else if (guess !== secertNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        guess > secertNumber ? '📉Too high' : '📈 Too low';
    } else {
      displyMessage('💥You lost the game...');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  secertNumber = Math.trunc(Math.random() * 20) + 1;
  displyMessage('Start guessing...');
  document.querySelector('input').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
