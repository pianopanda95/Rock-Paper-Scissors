
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
        const playerSelection = prompt(`    Round ${counter}/5\n
                                \nROCK, PAPER, SCISSORS!\nGO!\n`);
        playRound(playerSelection.toLowerCase());
    }
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
    } else if (playerSelection == "scissors"){
            (compSelection == "paper") ?
            console.log(win) :
            console.log(lose);
    } else {
        console.log(invalid);
    }
    countPoints(playerSelection, compSelection);
}

function countPoints(playerSelection, compSelection){
    console.log(playerSelection, compSelection);
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
    } else if (playerSelection == "scissors"){
        (compSelection == "paper") ?
         playerPoints += 1 :
         compPoints += 1;
    } else {
        console.log(invalid);
    }
    console.log(playerPoints, drawPoints, compPoints);
}


function computerPlay(){
    const randomIndex = Math.floor(Math.random() * rps.length);
    const compSelection = rps[randomIndex];
    return compSelection;
    }
    