
const rps = ["rock", "paper", "scissors"];
const invalid = "You must choose 'rock', 'paper' or 'scissors'!";

let playerPoints = 0;
let compPoints = 0;
let drawPoints = 0;


function game(){
    for (let counter = 1; counter < 6; counter++){
        const playerSelection = prompt(`\nRound ${counter}/5\nROCK, PAPER, SCISSORS!\nGO!\n`);
        if (rps.includes(playerSelection.toLowerCase())){
            playRound(playerSelection);
        } else {
            console.log(invalid);
            counter -= 1;
        }
    }
    resetGame();
}


function playRound(playerSelection, compSelection = computerPlay()){
    console.log(`The computer chose: ${compSelection}.`);
    if (playerSelection == compSelection){
            draw();
    } else if (playerSelection == "rock"){
            (compSelection == "scissors") ?
            win():
            lose();
    } else if (playerSelection == "paper"){
            (compSelection == "rock") ?
            win():
            lose();
    } else {
            (compSelection == "paper") ?
            win():
            lose();
    }
    console.log(playerPoints, drawPoints, compPoints);
}


function win(){
    console.log("You won this round!");
    playerPoints += 1;
}
function lose(){
    console.log("You lost this round!");
    compPoints += 1;
}
function draw(){
    console.log("It's a draw!");
    drawPoints += 1;
}

function resetGame(){
    if (compPoints < playerPoints){
        alert("CONGRATS!\nYou won the game!");
    } else if (compPoints > playerPoints){
        alert("Game over!\nYou lost.");
    } else {
        alert("No winners...\nYou and the computer has the same points.")
    }
    playerPoints = compPoints = drawPoints = 0;
}


function computerPlay(){
    const randomIndex = Math.floor(Math.random() * rps.length);
    const compSelection = rps[randomIndex];
    return compSelection;
    }
    