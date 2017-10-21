var prompt = require('prompt');
var Word = require('./words.js');

prompt.start();

game = {
	wordBank: ["bills", "dolphins", "patriots", "jets", "ravens", "bengals", "browns", "steelers", "texans", "colts", "jaguars", "titans", "broncos", "cheifs", "raiders", "chargers", "cowboys", "eagles", "redskins", "giants", "bears", "lions", "packers", "vikings", "falcons", "panthers", "saints", "buccaneers", "cardinals", "rams", "49ers", "seahawks"],
	wordsGuessed: 0,
	guessesRemaining: 10, 
	gameWord: null, 
	startGame: function (words){
		
		this.resetGuesses();

		this.gameWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);

		this.gameWord.getLetters(); 

		console.log("NFL Team List\n" + game.wordBank.toString() + " \n\n");
		console.log("Welcome to NFL Hangman!\nGuess NFL Team Names!");
 		console.log(this.gameWord.renderWord() + '\n');
		
		this.userPrompt();

	}, 
	resetGuesses: function(){
		this.guessRemaining = 10;
	},
	userPrompt: function(){
		var self = this;

		prompt.get(['Guess a letter!'], function(err, result) {
		    
		    console.log('**You Guessed: ' + result.guessLetter);

		    var userGuesses = self.gameWord.findLetter(result.guessLetter);

		    if (userGuesses == 0){
		    	console.log('Try Again!');
		    	self.guessesRemaining--;
		    }else{
		    	console.log('Correct!');

	    		if(self.gameWord.findWord()){
			    	console.log('You Won! You guessed ' + self.gameWord.word);
			    	return;
			    }
		    }
		    
		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.gameWord.renderWord());

		    if ((self.guessesRemaining > 0) && (self.gameWord.found == false)){
		    	self.userPrompt();
		    }
		    else if(self.guessesRemaining == 0){
		    	console.log('You lost! The correct team was', self.gameWord.word);
		    }else{
		    	console.log(self.gameWord.renderWord());
		    }
		});
	}


};

game.startGame();