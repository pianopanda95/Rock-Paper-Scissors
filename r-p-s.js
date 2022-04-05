const rps = ['rock', 'paper', 'scissors'];

const rock = document.querySelector('#rock').value;
const paper = document.querySelector('#paper').value;
const scissors = document.querySelector('#scissors').value;

const buttons = document.querySelectorAll('button');

const playerPoints = document.querySelector('#playerPoints');
const compPoints = document.querySelector('#compPoints');
let pp = 0;
let cp = 0;

for (button of buttons) {
    button.addEventListener('click', (e) => {
    const playerSelection = e.target.value;
    playRound(playerSelection);
    playerPoints.textContent = pp.toString();
    compPoints.textContent = cp.toString();
    });
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
    } else if (playerSelection == "scissors"){
            (compSelection == "paper") ?
            win():
            lose();
    }
}


function win(){
    console.log("You won this round!");
    pp += 1;
}
function lose(){
    console.log("You lost this round!");
    cp += 1;
}
function draw(){
    console.log("It's a draw!");
}



function computerPlay() {
    const randomIndex = Math.floor(Math.random() * rps.length);
    const compSelection = rps[randomIndex];
    return compSelection;
}