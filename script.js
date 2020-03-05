'use strict';


// Ask Name
var name = prompt('Welcome! What is your name?!?!');

name = name.toUpperCase(name);

alert(name + '!' + ' Where have you been all my life?!?!?');

var display = 0 ;

// Question 1
var answer1 = prompt('Did I go to the University of Washington?');

answer1 = answer1.toUpperCase();

console.log(answer1);

while (answer1 !== 'YES' && answer1 !== 'NO'){
  answer1 = prompt('yes or no please!').toUpperCase()
}

if (answer1 == 'NO') {
  alert('Correct!');
  display = (display + 1)
} else if (answer1 == 'YES') {
  alert('oops, read again');
}


// Question 2
var answer2 = prompt('Is my school in the state capitol?');

answer2 = answer2.toUpperCase();

console.log(answer2);

while (answer2 !== 'YES' && answer2 !== 'NO'){
  answer2 = prompt('yes or no please!').toUpperCase()
}

if (answer2 == 'YES'){
  alert('Correct!');
  display = (display + 1)
} else if (answer2 == 'NO') {
  alert('oops, read again');
}


//Question 3
var answer3 = prompt('Was I an Opera Performer?');

answer3 = answer3.toUpperCase();

console.log(answer3);

while (answer3 !== 'YES' && answer3 !== 'NO'){
  answer3 = prompt('yes or no please!').toUpperCase()
}

if (answer3 === 'YES'){
  alert('Correct!');
  display = (display + 1)
} else if (answer3 === 'NO') {
  alert('oops, read again');
}


// Question 4
var answer4 = prompt('Most recently I worked in Cannabis Tech?');

answer4 = answer4.toUpperCase();

console.log(answer4);

while (answer4 !== 'YES' && answer4 !== 'NO'){
  answer4 = prompt('yes or no please!').toUpperCase()
}

if (answer4 == 'YES'){
  alert('Correct!');
  display = (display + 1)
}  else if (answer4 == 'NO') {
  alert('oops, read again');
}


// Question 5
var answer5 = prompt('Did this inspire me to keep learn coding?');

answer5 = answer5.toUpperCase();

console.log(answer5);

while (answer5 !== 'YES' && answer5 !== 'NO'){
  answer5 = prompt('yes or no please!').toUpperCase()
}

if (answer5 == 'YES'){
  alert('Correct!');
  display = (display + 1)
} else if (answer5 == 'NO') {
  alert('oops, read again');
}


// Number Guesser
var choice = prompt('Guess a Number!')
var correct = 15

for (var i = 1; i < 4; i++) {

  if (choice > correct) {
    choice = prompt('Too Big!')
  } else if (choice < correct) {
    choice = prompt('Too Small!')
  } else if (choice == correct) {
    alert('Correct!')
    display = (display + 1)
    break ;
  }
} if (i === 4) {
  alert('Oops, the answer is 15!')
}


// MultiChoice Question
var multiChoice = ['COMMUNITY DEVELOPMENT' , 'DRAMATURGY' ]
var choose = prompt('What was 1 of my Majors in college?').toUpperCase()

for ( i = 0; i < 5; i++ ) {

  if (choose === multiChoice[0]) {
    alert('Correct!') ;
    display = (display + 1) ;
    break ;
  }
  if (choose === multiChoice[1]) {
    alert('Correct!')
    display = (display + 1) 
    break ;
  } else if (choose !== multiChoice) {
    choose = prompt('Try Again').toUpperCase()
  } 

} if (i === 4) {
  alert("The answers were: " multiChoice[0] + " " + multiChoice[1])
}

// Write results to the document

document.write('<h3 class="title"\>' + name + '!' + '</h3>' + '<h3>' + 'Congratulations on finishing the test!' + '</h3>' + '<p>' + 'You answered: ' + '</p>' + '<h3>' + display + '/7' + '</h3>' + '<p>' +' correct!' + '</p>')





