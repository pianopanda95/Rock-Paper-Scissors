
const rps = ["Rock", "Paper", "Scissors"];



function computerPlay(){
const randomIndex = Math.floor(Math.random() * rps.length);
const compSelect = rps[randomIndex];
return compSelect;
}

