const rps = ['rock', 'paper', 'scissors'];

const rock = document.querySelector('#rock').value;
const paper = document.querySelector('#paper').value;
const scissors = document.querySelector('#scissors').value;

const rpsButtons = document.querySelectorAll('#rpsButtons>button');
const lastDiv = document.querySelector('#lastDiv');

const playerPoints = document.querySelector('#playerPoints');
const compPoints = document.querySelector('#compPoints');
let pp = 0;
let cp = 0;

const para1 = document.querySelector('#p1');
para1.textContent = '';

const para2 = document.querySelector('#p2');
para2.textContent = '';

const resetButton = document.querySelector('#resetButton');
resetButton.style.display = 'none';


for (button of rpsButtons) {
    button.addEventListener('click', (e) => {
    const playerSelection = e.target.value;
    playRound(playerSelection);
    playerPoints.textContent = pp;
    compPoints.textContent = cp;
    });
}


function computerPlay() {
    const randomIndex = Math.floor(Math.random() * rps.length);
    const compSelection = rps[randomIndex];
    return compSelection;
}


function playRound(playerSelection, compSelection = computerPlay()){
    para1.textContent = `You chose: ${playerSelection}.\nThe computer chose: ${compSelection}.`;
    if (playerSelection == compSelection) {
            draw();
    } else if (playerSelection == "rock") {
            (compSelection == "scissors") ?
            win():
            lose();
    } else if (playerSelection == "paper") {
            (compSelection == "rock") ?
            win():
            lose();
    } else if (playerSelection == "scissors") {
            (compSelection == "paper") ?
            win():
            lose();
    }
    if (cp == 5 || pp == 5){ 
        end();
    }
}

function win() {
    para2.textContent = 'You won this round!';
    pp += 1;
}
function lose() {
    para2.textContent = 'You lost this round!';
    cp += 1;
}
function draw() {
    para2.textContent = `It's a draw!`;
}

function end(){
    if (pp == 5) {
        para1.textContent = `Congrats! You WON the game!`;
    } else if (cp == 5) {
        para1.textContent = `Game over! You LOST the game!`;
    }
    para2.textContent = `You have ${pp} points -- the computer has ${cp}`;
    for (button of rpsButtons) {
        button.disabled = true;
    }
    resetButton.style.display = 'inline ';
}

resetButton.addEventListener('click', (e) => {
    cp = pp = 0;
    playerPoints.textContent = pp;
    compPoints.textContent = cp;
    para1.textContent = '';
    para2.textContent = '';
    resetButton.style.display = 'none ';
    for (button of rpsButtons){
        button.disabled = false;
    }
});