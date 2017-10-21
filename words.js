var Letter = require('./letters.js');

var Word = function(words){
	this.word = words;
	this.lets = [];
	this.found = false;

	this.getLetters = function() {
		for(var i = 0; i < this.word.length; i++) {
			this.lets.push(new Letter(this.word[i]));
		}
	};
	
	this.findWord = function() {
		this.found = this.lets.every(function(curLet) {
			return curLet.appear;
		});
		return this.found;
	};

	this.findLetter = function(guessLetter) {
		var returnLetter = 0;

		for(var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac == guessLetter){
				this.lets[i].appear = true;
				returnLetter++;
			}
		}
		return returnLetter;
	};

	this.renderWord = function() {
		var str = '';

		for(var i = 0; i < this.lets.length; i++){
			str += this.lets[i].renderLetter();
		}
		return str;
	};
}

module.exports = Word;