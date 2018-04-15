//Require letter.js
var Letter = require("./letter");

//Word Constructor
var Word = function(){
    this.newLetter = [];
    this.wordRep = guess();

}

//Export Word.js
module.exports = Word;