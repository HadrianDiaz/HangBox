var words = ['computer', 'apple', 'android'];

var chosenWord = '';

var lettersIn = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = '';


var winCounter = 0;
var lossCounter = 0;
var numGuesses = 0;





function startGame() {

	numGuesses = 0;

	chosenWord = words[Math.floor(Math.random() * words.legth)];

	lettersIn = chosenWord.split('')

	numBlanks = lettersIn.legth;

	console.log(chosenWord);

	

}