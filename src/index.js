const {
    default: { singleDeckGame }
  } = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");


singleDeckGame.deal();

  let dealerHand = singleDeckGame.getDealerHand();
  const dealerCards = document.querySelector(".dealer-hand"); 
  Dom.renderCards(dealerHand.getCards(),dealerCards);


  let userHand = singleDeckGame.getUserHand(); 
  const userCards = document.querySelector(".user-hand");
  Dom.renderCards(userHand.getCards(),userCards);

  // respond to hit button
  const hitButton = document.querySelector(".actions__hit");
      hitButton.addEventListener("click", () => {
      singleDeckGame.hitUser();
      Dom.renderHit(userHand.getCards(),userCards);
      singleDeckGame.evaluateUser();  // need to decide what to do

      console.log("hit button")
      })

   // respond to double button
   const doubleButton = document.querySelector(".actions__double");
      doubleButton.addEventListener("click", () => {
      singleDeckGame.hitUser();
      Dom.renderHit(userHand.getCards(),userCards);

      // double bet
      
      singleDeckGame.evaluateUser();  // need to decide what to do
      
      Dom.disableActionButtons("true");

      })

   
  const stayButton = document.querySelector(".actions__stay");

  stand(singleDeckGame, Result) {
    singleDeckGame.standUser()
    singleDeckGame.evaluateUser()
    Dom.disableActionButtons("true");
    singleDeckGame.settleDealerHand();
    const dealerHand = document.querySelector(".dealer-hand")
    dealerHand.innerHTML = ""
    Dom.renderCards(
      singleDeckGame.getDealerHand().getCards(), dealerHand
    )

    singleDeckGame.evaluateDealer()

    const outcome = document.querySelector(".outcome")
    const win = singleDeckGame.outcome(WIN)
    const loss = singleDeckGame.outcome(LOSS)
    const push = singleDeckGame.outcome(PUSH)
    const won = document.querySelector(".win")
    const lose = document.querySelector(".lose")
    const draw = document.querySelector(".push")
    const span = document.createElement("span")
    span.classList.add(".win")
    won.textContent = win
    

    //const chips = document.querySelector(".chips");
    // const span = document.createElement("span");
    // span.classList.add("chips");
    // chips.textContent = singleDeckGame.getUserChips();

    switch (singleDeckGame.outcome()) {
      case Result.WIN:
        singleDeckGame.userWin();
        outcome.innerHTML += "You Win!!!";
        win ++;
        break;
      case Result.PUSH:
        outcome.innerHTML += "You Pushed :/";
        push ++;
        break;
      case Result.LOSS:
        outcome.innerHTML += "You Lost!"
        loss++;
        break;
        
    }
      stayButton.addEventListener("click", () => {
      console.log("stay");
      
      
    

          
      })
    }
  }

//removes all cards

  const dealButton = document.querySelector(".actions__deal");
  dealButton.addEventListener("click", () => {
      console.log("deal")
      const dealerCards = document.querySelector(".dealer-hand");
      singleDeckGame.deal();

      dealerCards.append(Dom.generateCard(dealerHand.getCards()[0]));
      dealerCards.append(Dom.generateCard(dealerHand.getCards()[1]));
      const userCards = document.querySelector(".user-hand");

      userCards.append(Dom.generateCard(userHand.getCards()[0]));
      userCards.append(Dom.generateCard(userHand.getCards()[1]));


      
  })

  const newGameButton = document.querySelector(".start-game");
      newGameButton.addEventListener("click", () => {
      console.log("newGame")
      dealerCards.remove()
      userCards.remove()
      singleDeckGame.deal();
  })

  const quitButton = document.querySelector(".quit-game");
      quitButton.addEventListener("click", () => {
      console.log("quit")
      dealerCards.remove()
      userCards.remove()

  })

Dom.displayChips(singleDeckGame)

