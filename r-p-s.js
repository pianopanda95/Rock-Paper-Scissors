
const rps = ["rock", "paper", "scissors"];

const win = "You won this round!"
const lose = "You lost this round!"
const draw = "It's a draw!"
const invalid = "You must choose 'rock', 'paper' or 'scissors'!";

let playerPoints = 0;
let compPoints = 0;
let drawPoints = 0;


function game(){
    for (let counter = 1; counter < 6; counter++){
        const playerSelection = prompt(`\nRound ${counter}/5\nROCK, PAPER, SCISSORS!\nGO!\n`);
        
        switch(playerSelection.toLowerCase()){
            case "rock":
            case "paper":
            case "scissors":
            playRound(playerSelection);
            break;
            default:
            console.log(invalid);
            counter -= 1;
        }
    }
    playerPoints = compPoints = drawPoints = 0;
}


function playRound(playerSelection, compSelection = computerPlay()){
    console.log(`The computer chose: ${compSelection}. `);
    if (playerSelection == compSelection){
            console.log(draw);
    } else if (playerSelection == "rock"){
            (compSelection == "scissors") ?
            console.log(win) :
            console.log(lose);
    } else if (playerSelection == "paper"){
            (compSelection == "rock") ?
            console.log(win) :
            console.log(lose);
    } else {
            (compSelection == "paper") ?
            console.log(win) :
            console.log(lose);
    }
    countPoints(playerSelection, compSelection);
}

function countPoints(playerSelection, compSelection){
    if (playerSelection == compSelection){
         drawPoints += 1;
    } else if (playerSelection == "rock"){
        (compSelection == "scissors") ?
         playerPoints += 1 :
         compPoints += 1;
    } else if (playerSelection == "paper"){
        (compSelection == "rock") ?
         playerPoints += 1 :
         compPoints += 1;
    } else {
        (compSelection == "paper") ?
         playerPoints += 1 :
         compPoints += 1;
    }
    console.log(playerPoints, drawPoints, compPoints);
}


function computerPlay(){
    const randomIndex = Math.floor(Math.random() * rps.length);
    const compSelection = rps[randomIndex];
    return compSelection;
    }
    