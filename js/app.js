'use strict';


//LAB 02: prompt/alerts
// Introduction
let userName = prompt('what is your name?');

alert(`Welcome to my site ${userName} ! How about we play a guessing game. Please answer with a yes/no or y/n`);

let correctCount = 0;


//First Question
let questionOne = prompt('First Question. Did I got to college?').toLowerCase();

if(questionOne === 'y' || questionOne === 'yes') {
  //console.log(`Correct ${userName}! I did. I recently graduated.`);
  alert(`Correct ${userName}! I did. I recently graduated.`);
  correctCount++;
} else if (questionOne === 'n' || questionOne === 'no') {
  //console.log(`Sorry ${userName} that is not correct, I have a college degree.`);
  alert(`Sorry ${userName} that is not correct, I have a college degree.`);
}

// console.log(questionOne);

//Second Question
let questionTwo = prompt('Second Question. Am I located in the east coast?').toLowerCase();

if(questionTwo === 'y' || questionTwo === 'yes') {
  //console.log(`Great guess ${userName}! Yes, I live in NYC.`);
  alert(`Great guess ${userName}! Yes, I live in NYC.`);
  correctCount++;
} else if (questionTwo === 'n' || questionTwo === 'no') {
  //console.log(`Sorry ${userName} that is not correct, I live in the east coast.`)
  alert(`Sorry ${userName} that is not correct, I live in the east coast.`);
}

// console.log(questionTwo);

//Third Question
let questionThree = prompt('Third Question. Do I enjoy spicy food?').toLowerCase();

if(questionThree === 'y' || questionThree === 'yes') {
  //console.log(`Yes! I love spicy food. Awesome guess ${userName}`);
  alert(`Yes! I love spicy food. Awesome guess ${userName}`);
  correctCount++;
} else if (questionThree === 'n' || questionThree === 'no') {
// console.log(`Sadly, that is incorrect ${userName}. I need spice in my life!`);
  alert(`Sadly, that is incorrect ${userName}. I need spice in my life!`);
}

// console.log(questionThree);

//Fourth Question
let questionFour = prompt('Fourth Question. Did I play any instruments growing up?').toLowerCase();

if(questionFour === 'y' || questionFour === 'yes') {
  //console.log(`Yes! Great guess ${userName}. I played the piano, saxophone, and the recorder growing up.`);
  alert(`Yes! Great guess ${userName}. I played the piano, saxophone, and the recorder growing up.`);
  correctCount++;
} else if (questionFour === 'n' || questionFour === 'no') {
// console.log(`Sadly, that is incorrect ${userName}. I played several instruments growing up!`);
  alert(`Sadly, that is incorrect ${userName}. I played several instruments growing up!`);
}

// console.log(questionFour);

//Fifth Question 
let questionFive = prompt('Fifth Question! Do I have any siblings?').toLowerCase();

if(questionFive === 'y' || questionFive === 'yes') {
  //console.log(`You are great at this guessing game ${userName}! I have one older brother.`);
  alert(`You are great at this guessing game ${userName}! I have one older brother`);
  correctCount++;
} else if (questionFive === 'n' || questionFive === 'no') {
  //console.log(`Sadly, that is incorrect ${userName}. I have one older sibling.`);
  alert(`Sadly, that is incorrect ${userName}.`);
}

// console.log(questionFive);



//LAB 03: Loops

let roundTwo = alert('Now for round two of this guessing game. Get Ready...');


//Question 6
const correctAnswer = 6;
let i = 0;

while (i < 4) {
  i++;
  let questionSix = prompt('Sixth Question: How many countries have I visited? Can you guess it correctly?');
  if ( questionSix > correctAnswer) {
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

//End of Question 6 //


// Question 7 
const myAnswer = ['americano', 'affogato', 'espresso', 'cappuccino', 'latte', 'frappuccino'];
let correctGuesses = 0;

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
  } else {
    alert('Sorry, that is wrong.');
  }

  if (correctGuesses === myAnswer.length) {
    break;
  }
}


alert(`${userName} guessed ${correctGuesses} right answer. By the way, my favorite coffee is ${myAnswer}. And you got ${correctCount} out of 7 correct overall`);








