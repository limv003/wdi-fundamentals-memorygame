//unit 8 assignment: create an array of cards and alert for a match
var cards = ["queen","queen", "king", "king"];
var cardsInPlay = [];

//create variable to show 1st card a user has flipped
var cardOne = cards[0];
var cardTwo = cards[2];

//add 1st card to the cardsInPlay array
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

//check to make sure user has flipped two cards & they match
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay [1]) {
		alert("You found a match!");
} else {
		alert("Sorry, try again.");
};