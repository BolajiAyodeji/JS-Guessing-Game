//Create a secret number
var secretNumber = 4;

//Ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//Check if guess is right
if (guess === secretNumber) {
    alert("You got it right buddy!");
}
//Otherwise, check if higher
else if (guess > secretNumber) {
    alert("Too high, guess again!")
}
//Otherwise, check if lower
else {
    alert("Too low, guess again!")
}