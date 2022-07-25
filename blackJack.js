let cards = []
let sum = 0
console.log(sum)
let hasBlackjack = false
let isAlive = false 
let message= ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

let playerEl= document.getElementById("player-el")
let addForm = document.querySelector('#add-player')

//placing player name
addForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    var input = document.getElementById("player-name")
    var output = input.value

    var printOutput = document.createElement('p');
    printOutput.innerHTML ="Start Your Game:" + output;
    playerEl.appendChild(printOutput);
    document.getElementById("player-name").value='';
})

//getting the random cards 
function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function startGame() {
     isAlive = true 

     let firstCard = getRandomCard()
     let secondCard = getRandomCard()
     cards = [firstCard , " - ", secondCard, " - "]
     sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for(i=0; i < cards.length; i++){
    cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "sum: " + sum
    if(sum <= 20){
        message = "do you want to draw another card!"
        hasBlackjack = false
    } else if(sum === 21){
        message = "you got a blackjack "
        hasBlackjack = true
    } else{
        message = "you out of the game"
        hasBlackjack = false
        isAlive = false 
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum += card 
       cards.push(card + " - ")
       renderGame()
    }
}







//playing this is


console.log(hasBlackjack)
console.log(isAlive)
 
let age = 20

if(age < 21){
    console.log("you are not eligible to enter the club")
}
    else if(age <= 10){
        console.log("you not still eligible!")
    }
    else {
    console.log("welcome")
    }
 

    let mySelf =[
        "ibrahim",
         12,
         true,
         "ganiu"
    ]

mySelf.push(false)

let herSelf ="adepoju"
mySelf.push(herSelf)

    console.log(mySelf)

    for (let i = 0; i < mySelf.length; i++) {
        // const element = array[count];
        console.log(mySelf[i])
    }

function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6) + 1
    return randomNumber
}
 console.log(rollDice());

    // let floorNumber = Math.floor(3.4567)
    // console.log(floorNumber);

    //LOGICAL OPERATORS
    
    let hasCompletedCourse = true
    let giveCertificate = true

    if (hasCompletedCourse === true && giveCertificate === true) {
        generateCertificate()
    }

    function generateCertificate() {
        console.log("Generating Certificate....")
    }