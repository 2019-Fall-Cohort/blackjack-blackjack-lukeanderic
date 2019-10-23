const {
    default: { singleDeckGame }
} = require("blackjack-dealer-logic"); //imports dealer logic

singleDeckGame.deal(); //deals the cards

const userHand = singleDeckGame.getUserHand(); //gets user hand, probably need one for dealer as well

generateCard(userHand.getCards()[0]);
generateCard(userHand.getCards()[1]);  //gets top two cards out of array of cards (Deck)

function generateCard(card) {  //generates the card with suit and value

    const playingCard = document.createElement("section"); //creates a <section> that will be the 
    playingCard.classList.add("playing-card");             //actual  playing card
    

    const valueContainer = document.createElement("section");  //creates a <section> that will be the 
    valueContainer.classList.add("value-container");           //element that stores the value and suit
                                                                //of the card
                                                                //also variable "valueContainer"
    const value = document.createElement("span");  //also variable "value"
    value.classList.add("value");                  //creates a <span> that will hold the card's value
    value.textContent = card.getValue();

    const value = document.createElement("span"); //creates a <span> that will hold the card's suit
    value.classList.add("suit");                 
    value.textContent = card.getValue();

    valueContainer.append(value);           //updates value, suit and valueContainer
    valueContainer.append(suit);
    playingCard.append(valueContainer);

    const table = document.querySelector(".table");  //interacts with the css element
    table.append(playingCard);  //updates playingCard


    



}