'use strict'

var name = prompt("Welcome! What is your name?!?!") 

var name = name.toUpperCase(name) 
   
alert(name + "!" + " Where have you been all my life?!?!?")

var answer1 = prompt("Did I go to the University of Washington?")

var answer1 = answer1.toUpperCase()

console.log(answer1)

if (answer1 == "NO") {
    alert("Correct!") 
} else if (answer1 == "YES") {
        alert("oops, read again");
    }

var answer2 = prompt("Is my school in the state capitol?")

var answer2 = answer2.toUpperCase()

console.log(answer2)

if (answer2 == "YES"){
    alert("Correct!")
}  else if (answer2 == "NO") {
    alert("oops, read again")
}

var answer3 = prompt("Was I an Opera Performer?")

var answer3 = answer3.toUpperCase()

console.log(answer3)

if (answer3 == "YES"){
    alert("Correct!")
}  else if (answer3 == "NO") {
    alert("oops, read again")
}

var answer4 = prompt("Most recently I worked in Cannabis Tech?")

var answer4 = answer4.toUpperCase()

console.log(answer4)

if (answer4 == "YES"){
    alert("Correct!")
}  else if (answer4 == "NO") {
    alert("oops, read again")
}

var answer5 = prompt("Did this inspire me to keep learn coding?")

var answer5 = answer5.toUpperCase()

console.log(answer5)

if (answer5 == "YES"){
    alert("Correct!")
}  else if (answer5 == "NO") {
    alert("oops, read again")
}

 document.write("<h3 class=\"title\"\>" + name + "!" + "</h3>" + "<h3>" + "Congratulations on finishing the test!" + "</h3>" + "<p>" + "You answered: " + "</p>" + "<ul>" + "<li>" + answer1 + "</li>" + "<li>" + answer2 + "</li>" + "<li>" + answer3 + "</li>" + "<li>" + answer4 + "</li>" + "<li>" + answer5 + "</li>"+ "</ul>" ) 
