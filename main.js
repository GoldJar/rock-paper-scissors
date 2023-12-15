let playerSelection = '';
let computerSelection = '';
let roundResult = '';
let playerScore = 0;
let computerScore = 0;

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+ min);
}

function getComputerChoice() {
    let computer = getRndInt(1, 3);
    if (computer === 1) {
        return 'rock'
    } else if (computer === 2) {
        return 'paper'
    } else if (computer === 3) {
        return 'scissors'
    };
}

function getPlayerChoice() {
    return prompt("Select your choice: ", "")
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice().toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return 'Tie';
    
    } else if (
        (playerSelection === 'rock' && computerSelection ==='scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    return `Final Score: Player(${playerScore}), Computer(${computerScore})`;
}

console.log(game());