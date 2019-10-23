const {
    default: { singleDeckGame }
} = require("blackjack-dealer-logic"); //imports dealer logic

singleDeckGame.deal(); //deals the cards

const userHand = singleDeckGame.getUserHand(); //gets user hand, probably need one for dealer as well

generateCard(userHand.getCards()[0]);
generateCard(userHand.getCards()[1]);  //gets top two cards out of array of cards (Deck)

function generateCard(card) {

    const playingCard = document.createElement("section");
    playingCard.classList.add("playing-card");

    const valueContainer = document.createElement("section");
    valueContainer.classList.add("value-container");

    const value = document.createElement("span");
    value.classList.add("value");
    value.textContent = card.getValue();


// const playingCard = document.playingCard.classList.add("playing-card");
// const valueContainer
// valueContainer.classList

}