var prompt = require('prompt');
var Word = require('./words.js');

prompt.start();

game = {
	wordBank : ["bills", "dolphins", "patriots", "jets", "ravens", "bengals", "browns", "steelers", "texans", "colts", "jaguars", "titans", "broncos", "cheifs", "raiders", "chargers", "cowboys", "eagles", "redskins", "giants", "bears", "lions", "packers", "vikings", "falcons", "panthers", "saints", "buccaneers", "cardinals", "rams", "49ers", "seahawks"],
	wordsWon : 0,
	guessesRemaining : 10, 
	currentWrd : null, 
	startGame : function (wrd){
		
		this.resetGuessesRemaining();

		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);

		this.currentWrd.getLets(); 

		console.log("NFL Team List\n" + game.wordBank.toString() + " \n\n");
		console.log("Welcome to NFL Hangman!\nGuess NFL Team Names!");
 		console.log(this.currentWrd.wordRender() + '\n');
		
		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    
		    console.log('**You Guessed: ' + result.guessLetter);

		    var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

		    if (findHowManyOfUserGuess == 0){
		    	console.log('Try Again!');
		    	self.guessesRemaining--;
		    }else{
		    	console.log('Correct!');

	    		if(self.currentWrd.didWeFindTheWord()){
			    	console.log('You Won! You guessed ' + self.currentWrd.word);
			    	return;
			    }
		    }
		    
		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.currentWrd.wordRender());

		    if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
		    	self.keepPromptingUser();
		    }
		    else if(self.guessesRemaining == 0){
		    	console.log('You lost! The correct team was', self.currentWrd.word);
		    }else{
		    	console.log(self.currentWrd.wordRender());
		    }
		});
	}


};

game.startGame();