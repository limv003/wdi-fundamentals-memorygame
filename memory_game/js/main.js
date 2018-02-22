//unit 8 assignment: create an array of cards and alert for a match
var cards = ["queen","queen", "king", "king"];
var cardsInPlay = [];

//unit 9 assignment: create a function for flipping cards
var checkForMatch = function () {
  	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	};
}

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId] + ".");
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};

flipCard(0);
flipCard(2);