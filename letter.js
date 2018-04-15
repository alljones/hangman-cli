var userInput = String.fromCharCode(event.keyCode);

//Letter Constructor
var Letter = function(){
    this.blank = "_";
    this.hasGuess = false;
    this.guess = function(){
        if(!this.hasGuess){
            // place the letter of the input
            this.blank = userInput;
        } else {
            this.blank = "_"; //keep as a blank
        }
    this.checkInput = function(){
        //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

    }
    }
}

//Exporting Letter.js
module.exports = Letter;