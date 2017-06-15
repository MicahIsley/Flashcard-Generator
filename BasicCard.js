module.exports = BasicCard;

function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

BasicCard.prototype.question = function() {
	console.log(this.front);
};

BasicCard.prototype.answer = function() {
	console.log(this.back);
}

