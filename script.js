btnOptions = document.querySelectorAll(".btn-option");
displayComp = document.getElementById('computerText');
displayPlayer = document.getElementById('playerText');
displayResults = document.getElementById('result')
let computer;
let player;
let results;

btnOptions.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    getComputerScore();
    displayPlayer.textContent = `Player: ${player}`;
    displayComp.textContent = `Computer: ${computer}`;
    getResults();
    displayResults.textContent = `Results: ${results}`;
}))

function getComputerScore() {
    const randomNum = Math.floor(Math.random() * 3) + 1; 
    switch(randomNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS"
            break;
    }        
    return computer
} 

function getResults() {
    if(computer === player) {
        results = "ITS A TIE!"
    } else if (computer === "SCISSORS"  && player === "PAPER"){
        results = "YOU LOSE!"
    } else if (computer === "PAPER"  && player === "ROCK"){
        results = "YOU LOSE!"
    }else if (computer === "ROCK"  && player === "SCISSORS"){
        results = "YOU LOSE!"
    }else {
        results = "YOU WIN!"
    }
}












