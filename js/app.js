'use strict';

console.log('hey world');


let userName = prompt('what is your name?');

alert(`Welcome to my site ${userName}, lets play a guessing game. Please answer yes/no. Or y/n`);

let questionOne = prompt('Do I a degee?').toLocaleLowerCase();

if(questionOne === 'y' || questionOne === 'yes') {
    alert('you are correct!');
} else if (questionOne === 'n' || questionOne === 'no') {
    alert('sorry but you are wrong, but I have a college degree');
}





