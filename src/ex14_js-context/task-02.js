function Hangman(word) {
    this.word = word.toLowerCase;
    this.symbols = word.split('');
  
    this.answerArray = [];
  
    for (let i = 0; i < this.symbols.length; i += 1) {
      this.answerArray[i] = '_';
    }
  
    this.err = 6;
  
    this.mistakes = [];
  }
  
  Hangman.prototype.guess = function guess(letter) {
    if (this.symbols.includes(letter)) {
      for (let i = 0; i < this.symbols.length; i += 1) {
        if (this.symbols[i] === letter) {
          this.answerArray[i] = letter;
        }
      }
      console.log(this.answerArray.join(' '));
    } else {
      this.err -= 1;
      this.mistakes.push(letter);
      console.log(`${this.err} | ${this.mistakes}`);
    }
    return this;
  };
  
  Hangman.prototype.getGuessedString = function getGuessedString() {
    return this.answerArray.join(' ');
  };
  
  Hangman.prototype.getErrorsLeft = function getErrorsLeft() {
    return this.err;
  };
  
  Hangman.prototype.getWrongSymbols = function getWrongSymbols() {
    return this.mistakes;
  };
  
  Hangman.prototype.getStatus = function getStatus() {
    return `${this.answerArray.join(' ')} | errors left ${this.err}`;
  };
  
  Hangman.prototype.startAgain = function startAgain(word) {
    this.symbols = word.split('');
  
    this.answerArray = [];
  
    for (let i = 0; i < this.symbols.length; i += 1) {
      this.answerArray[i] = '_';
    }
    this.err = 6;
  
    this.mistakes = [];
  };
  
  module.exports = Hangman;
  