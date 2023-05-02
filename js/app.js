'use strict';

// introduction 
let userName = prompt('what is your name?');

alert(`Welcome to my site ${userName} ! How about we play a guessing game. Please answer with a yes/no or y/n`);

//First Question
let questionOne = prompt('First Question. Did I got to college?').toLocaleLowerCase();

if(questionOne === 'y' || questionOne === 'yes') {
  alert(`Correct ${userName}! I did. I recently graduated.`);
} else if (questionOne === 'n' || questionOne === 'no') {
  alert(`Sorry ${userName} that is not correct, I have a college degree.`);
}

// console.log(questionOne);

//Second Question
let questionTwo = prompt('Second Question. Am I located in the eastcoast?').toLocaleLowerCase();

if(questionTwo === 'y' || questionTwo === 'yes') {
  alert(`Great guess ${userName}! Yes, I live in NYC.`);
} else if (questionTwo === 'n' || questionTwo === 'no') {
  alert(`Sorry ${userName} that is not correct, I live in the eastcoast.`);
}

// console.log(questionTwo);

//Third Question
let questionThree = prompt('Third Question. Do I enjoy spicy food?').toLocaleLowerCase();

if(questionThree === 'y' || questionThree === 'yes') {
  alert(`Yes! I love spicy food. Awesome guess ${userName}`);
} else if (questionThree === 'n' || questionThree === 'no') {
  alert(`Sadly, that is incorrect ${userName}. I need spice in my life!`);
}

// console.log(questionThree);

//Fourth Question
let questionFour = prompt('Fourth Question. Did I play any instruments growing up?').toLocaleLowerCase();

if(questionFour === 'y' || questionFour === 'yes') {
  alert(`Yes! Great guess ${userName}. I played the piano, saxophone, and the recorder growing up.`);
} else if (questionFour === 'n' || questionFour === 'no') {
  alert(`Sadly, that is incorrect ${userName}. I played several instruments growing up!`);
}

// console.log(questionFour);

//Fifth Question 
let questionFive = prompt('Final Question! Do I have any siblings?').toLocaleLowerCase();

if(questionFive === 'y' || questionFive === 'yes') {
  alert(`You are great at this guessing game ${userName}! I have one older brother. hank you so much for answering these 5 questions, now welcome to my page!`);
} else if (questionFive === 'n' || questionFive === 'no') {
  alert(`Sadly, that is incorrect ${userName}. I have one older sibling. Thank you so much for answering these 5 questions, now welcome to my page!`);
}

// console.log(questionFive);







