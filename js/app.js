'use strict';

//LAB 02: prompt/alerts
// Introduction
let userName = prompt('what is your name?');

alert(`Welcome to my site ${userName} ! How about we play a guessing game. Please answer with a yes/no or y/n`);

let correctCount = 0;

//First Question
function questionOne() {
  let questionOne = prompt('First Question. Did I got to college?').toLowerCase();

  if (questionOne === 'y' || questionOne === 'yes') {
    alert(`Correct ${userName}! I did. I recently graduated.`);
    correctCount++;
  } else if (questionOne === 'n' || questionOne === 'no') {
    alert(`Sorry ${userName} that is not correct, I have a college degree.`);
  } else {
    alert('Input a yes/no or y/n');
  }
}

questionOne();


//Second Question
function questionTwo() {
  let questionTwo = prompt('Second Question. Am I located in the east coast?').toLowerCase();

  if (questionTwo === 'y' || questionTwo === 'yes') {
    alert(`Great guess ${userName}! Yes, I live in NYC.`);
    correctCount++;
  } else if (questionTwo === 'n' || questionTwo === 'no') {
    alert(`Sorry ${userName} that is not correct, I live in the east coast.`);
  } else {
    alert('Input a yes/no or y/n');
  }
}

questionTwo();

//Third Question
function questionThree() {
  let questionThree = prompt('Third Question. Do I enjoy spicy food?').toLowerCase();

  if (questionThree === 'y' || questionThree === 'yes') {
    alert(`Yes! I love spicy food. Awesome guess ${userName}`);
    correctCount++;
  } else if (questionThree === 'n' || questionThree === 'no') {
    alert(`Sadly, that is incorrect ${userName}. I need spice in my life!`);
  } else {
    alert('Input a yes/no or y/n');
  }
}

questionThree();

//Fourth Question
function questionFour() {
  let questionFour = prompt('Fourth Question. Did I play any instruments growing up?').toLowerCase();

  if (questionFour === 'y' || questionFour === 'yes') {
    alert(`Yes! Great guess ${userName}. I played the piano, saxophone, and the recorder growing up.`);
    correctCount++;
  } else if (questionFour === 'n' || questionFour === 'no') {
    alert(`Sadly, that is incorrect ${userName}. I played several instruments growing up!`);
  } else {
    alert('Input a yes/no or y/n');
  }
}

questionFour();

//Fifth Question 
function questionFive() {
  let questionFive = prompt('Fifth Question! Do I have any siblings?').toLowerCase();

  if (questionFive === 'y' || questionFive === 'yes') {
    alert(`You are great at this guessing game ${userName}! I have one older brother`);
    correctCount++;
  } else if (questionFive === 'n' || questionFive === 'no') {
    alert(`Sadly, that is incorrect ${userName}.`);
  } else {
    alert('Input a yes/no or y/n');
  }
}

questionFive();


//LAB 03: Loops


//Question 6
const correctAnswer = 6;
let i = 0;


function questionSix() {
  while (i < 4) {
    i++;
    let questionSix = prompt('Sixth Question: How many countries have I visited? Can you guess it correctly?');
    if (questionSix > correctAnswer) {
      alert('Too high! Think lower.');
    } else if (questionSix < correctAnswer) {
      alert('Too low! Think higher.');
    } else {
      alert('Bingo! ding ding ding!');
      correctCount++;
      break;
    }
  }

  alert(`The correct answer is ${correctAnswer}`);
}
questionSix();


// Question 7 
const myAnswer = ['americano', 'affogato', 'espresso', 'cappuccino', 'latte', 'frappuccino'];
let correctGuesses = 0;

function questionSeven() {
  for (let i = 0; i < 6; i++) {
    let userGuess = prompt('Seventh Question: Can you name some of my favorite type of coffee?').toLowerCase();

    let isCorrectGuess = false;

    for (let j = 0; j < myAnswer.length; j++) {
      if (userGuess === myAnswer[j]) {
        isCorrectGuess = true;
        break;
      }
    }

    if (isCorrectGuess) {
      alert('Bingo!');
      correctGuesses++;
      break;
    } else {
      alert('Sorry, that is wrong.');
    }

    if (correctGuesses === myAnswer.length) {
      break;
    }
  }
  alert(`${userName} guessed ${correctGuesses} right answer. By the way, my favorite coffee is ${myAnswer}. And you got ${correctCount} out of 7 correct overall`);
}

questionSeven();







