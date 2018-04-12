// word list (all lower case)
var fruitsList = ["computer", "ios", "windows","aids"];
// computer selected solution 
var chosenWord = '';
// breaks the solution into letter to be stored in array
var lettersInChosenWord= [];
// number of blanks shown based on solution
var numBlanks = 0;
// holds a mix of blank and solved leters 
var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = '';

// game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


function startGame() {
	// resets the guesses back to 0
	numGuesses = 9;
	// solution is chosen randomly from wordlist
	chosenWord = fruitsList[Math.floor(Math.random() * fruitsList.length)];
	// the word is split into letters
	lettersInChosenWord = chosenWord.split("");
	// counts the number of letters in the word
	numBlanks = lettersInChosenWord.length;
	// prints the solution in the console (for testing purposes)
	console.log(chosenWord);
	// resets the guess and success array aat each round
	blanksAndSuccesses = [];
	// resets the wrong guesses from the previous round
	wrongGuesses = [];
	// fills up the blanks annd sucesses list with the correct number corspondning to the lenght of the chosen word
	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}
	// prints the initial blanks in the console 
	console.log(blanksAndSuccesses);

	// reprints the guesses left
	document.getElementById("guesses-left").innerHTML = numGuesses;
	// prints the blanks at the beging of each round
	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
	// clears wrong guesses
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}

function checkLetters(letter) {
	var letterInWord = false;

	for (var i=0; i < numBlanks; i++) {
		if (chosenWord[i] === letter) {
			letterInWord = true;
		}
	}


	if (letterInWord) {
		for (var j=0; j < numBlanks; j++) {
			if (chosenWord[j] === letter) {
				blanksAndSuccesses[j] = letter;
			}
		}
		console.log(blanksAndSuccesses);
	} 

	else {
		wrongGuesses.push(letter);
		numGuesses--;
	}
}

function roundComplete() {
	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + 
		" | NumGuesses: " + numGuesses);

	document.getElementById("guesses-left").innerHTML = numGuesses;
	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

	if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
		winCounter++;
		alert("You win!");

		document.getElementById("win-counter").innerHTML = winCounter;

		startGame();
	}

	else if (numGuesses === 0) {
		lossCounter++;
		alert("You lose");

		document.getElementById("loss-counter").innerHTML = lossCounter;

		startGame();
	}
}

startGame();

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
};