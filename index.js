let firstCard = getRamdonCard()
let secondCard = getRamdonCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let disable_start_btn = document.getElementById("disable-start-btn")
let disable_btn = document.getElementById("disable-btn")
let disable_replay_btn = document.getElementById("disable-replay-btn")
let player = {
    Name :"ANushka",
    Chips :123
 }
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name +": "+player.Chips



function getRamdonCard(){
    let randomNumber = Math.floor(Math.random() * 13)+1
    if(randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else{
        return randomNumber;
    }
    
}
function startGame() {
    
    isAlive = true;
    let firstCard = getRamdonCard()
    let secondCard = getRamdonCard()
    cards[firstCard,secondCard]
    sum = firstCard + secondCard;
    renderGame()
   
}

function renderGame() {
    disable_btn.style.display = "block"
     disable_start_btn.style.display = "none"
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21) {
        message = "You've got Blackjack! Refresh to Replay"
        hasBlackJack = true
        disable_btn.style.display = "none"

    } else {
        message = "You're out of the game! Refresh to restart"
        isAlive = false
    }
    messageEl.textContent = message
}
function replay(){
    renderGame()
}
function newCard() {
    console.log("new card drwan")
    if (isAlive ==true && hasBlackJack ==false) {
        let card = getRamdonCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
    if(!isAlive){
        disable_btn.style.display = "none"
    }
}



