'use strict';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `Correct number:`;
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/
// <<<event lstners>>>
//<<<Define the secret number outside of the functions!!!>>>
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//<<<score counter>>>
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // <<<Implementing game logic>>>
  if (!guess) {
    //document.querySelector('.message').textContent = `Wrong Input!!!`;
    displayMessage(`Wrong Input!!!`);
    //<<<When player wins>>
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = `Correct Number!!!`;
    displayMessage(`Correct Number!!!`);
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = `30rem`;
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //<<<Refactoring the code!!!>>> if guess !== secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? `Too high!` : `Too low!`;
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = `Game Over!!!`;
      displayMessage(`Game Over!!!`);
      document.querySelector('.score').textContent = 0;
    }
  }
  //<<<when guess high>>>
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = `Too high!`;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = `Game Over!!!`;
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     //<<<when guess low>>>
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       console.log(
  //         (document.querySelector('.message').textContent = `Too low!`)
  //       );
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = `Game Over!!!`;
  //       document.querySelector('.score').textContent = 0;
  //     }
  //}
});
//<<<Challenge!!!>>>
//make AGAIN button work;
//attach a click event to the again button
//write a function, where everithing resets itself to default values (secretNumber, +guess number, +score, +background, +secret number width and '?')
//try to add the previous score to the 'highscore', score message; ---- optional;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.number').style.width = `15rem`;
  document.querySelector('.number').textContent = `?`;
  //document.querySelector('.message').textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);
  document.querySelector('.guess').value = ``;
});
