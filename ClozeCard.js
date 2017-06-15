module.exports = ClozeCard;

function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "");
}

ClozeCard.prototype.question = function(){
	console.log(this.partial);
};

ClozeCard.prototype.answer = function(){
	console.log(this.text);
}