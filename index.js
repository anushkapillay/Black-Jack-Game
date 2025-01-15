let first_random_number = Math.floor(Math.random()*12)
let second_random_number = Math.floor(Math.random()*12)

let firstCard = first_random_number
let secondCard = second_random_number
let sum = firstCard + secondCard

let game_state = false;
let isAlive = true;

let message = " "
let messageEl = document.getElementById("text-message");

let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("selected-cards")
let cards = [firstCard,secondCard];



function startGame(){
    renderGame()
}

function renderGame(){
    if(sum <= 20){
        cardsEl.textContent = "Cards: " + cards[0] + "&" + cards[1]
        sumEl.textContent = sum;
        message = "Pick another card"
     }else if(sum == 21){
         message ="You got Black Jack"
         game_state = true;
     }else{
         message = "You lost, Play again!"
         isAlive = false
     }
messageEl.textContent = message     
}

function newCard(){
    console.log("new card drawn")
    let new_card = firstCard;
    sum += new_card;
    console.log(sum)
    renderGame()
}


