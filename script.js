'use strict';


var name = prompt('Welcome! What is your name?!?!').toUpperCase();

alert(name + '!' + ' Where have you been all my life?!?!?');

var score = 0 ;


// This is a series of 5 yes or no Questions. 
  var response = prompt(question).toUpperCase();
  if (response === correct) {
    alert('Good job! You\'re paying attention!');
    score++;
  } else {
    alert('WRONG!!!!!! TRY AGAIN NEXT TIME!');
  }
}
yeaOrNay('Did I go to the University of Washington?' , 'NO' );
yeaOrNay('Is my school in the state capitol?' , 'YES');
yeaOrNay('Was I an Opera Performer?' , 'YES');
yeaOrNay('Most recently I worked in Cannabis Tech?', 'YES');
yeaOrNay('Did this inspire me to keep learn coding?' , 'YES');


// Number Guesser
function numberGame(question, correct) {
  var choice = prompt(question);

  for (var i = 0; i <= 4; i++) {
    if (choice > correct) {
      choice = prompt('Too Big!');
    } else if (choice < correct) {
      choice = prompt('Too Small!');
    } else if (choice === correct) {
      alert('Correct!');
      score++ ;
      break ;
    }
  } if (i === 4) {
    alert('Oops, the answer is 15!');
  }
}

numberGame('Guess the number', '15');

// MultiChoice Question

var multiQues = prompt('What was 1 of my Majors in college?').toUpperCase();
var multiChoice = ['COMMUNITY DEVELOPMENT' , 'DRAMATURGY'];
var attempts = 3;

function multiAnswer(multiQues, multiChoice, attempts) {
  attemptsloop: while (attempts, attempts > 0, attempts--) {
    for (var answerIndex = 0; answerIndex < multiChoice.length; answerIndex++) {
      if (multiQues === multiChoice[answerIndex]) {
        alert('Correct!');
        score++ ;
        break attemptsloop;
      } else {
        multiQues = prompt('Wrong! Guess Again!').toUpperCase();
      }
    }
  }
}

multiAnswer(multiQues, multiChoice, attempts);


// Write results to the document

document.write('<h3 class="title">' + name + '!' + '</h3>' + '<h3>' + 'Congratulations on finishing the test!' + '</h3>' + '<p>' + 'You answered: ' + '</p>' + '<h3>' + score + '/7' + '</h3>' + '<p>' +' correct!' + '</p>');



