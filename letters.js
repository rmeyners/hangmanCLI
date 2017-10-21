var Letter = function(let) {
	
	this.charac = let;
	
	this.appear = false;

	this.renderLetter = function() {
		return !(this.appear) ? " _ " : this.charac;
	};
};

module.exports = Letter;