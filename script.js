'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('🤷‍♂️🤷‍♂️NO Number');

    // document.querySelector('.message').textContent = '🤷‍♂️🤷‍♂️NO Number';
  } else if (guess === secretNumber) {
    displayMessage('Correct Number🥳🥳');

    // document.querySelector('.message').textContent = 'Correct Number🥳🥳';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // document.querySelector('.highscore').textContent = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('Too High!!!')
        : displayMessage('Too Low!!!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('You lose the game😥😥');

    document.querySelector('.message').textContent = 'You lose the game😥😥';
    document.querySelector('.score').textContent = 0;
  }

  // (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too High!!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too low🤦‍♂️';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose the game😥😥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start Guessing.....');
  // document.querySelector('.message').textContent = 'Start Guessing.....';
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
