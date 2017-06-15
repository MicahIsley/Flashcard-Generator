var basicCard = require("./BasicCard");
var clozeCard = require("./ClozeCard");

var cardType = process.argv[2];
var newBasicCard = process.argv[3];
var newClozeCard = process.argv[3];
var first = process.argv[4];
var second = process.argv[5];

if(cardType == "basic"){
	function makeBasicCard(front, back){
		newBasicCard = new basicCard(front, back);
		console.log(newQuestion);
	}

	makeBasicCard(first, second);
}else if(cardType == "cloze"){	
	function makeClozeCard(text, cloze){
		newClozeCard = new clozeCard(text, cloze);
		console.log(newClozeCard);
	}
	makeClozeCard(first, second);
}	

