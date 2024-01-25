const resultsDiv = document.querySelector(".results");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const computerChoiceDiv = document.querySelector(".computer-choice");
const roundDiv = document.querySelector(".round");

const buttonPress = document.addEventListener("click", playRound);

let playerWins = 0;
let computerWins = 0;

function playRound(event) {
    if (playerWins >= 5 || computerWins >= 5) {
        return;
    }

    let playerSelection;
    switch (event.target.id) {
        case "rock": case "paper": case "scissors":
            playerSelection = event.target.id;
            break;
        default:
            return;
    }
    let computerSelection = getComputerChoice();
    computerChoiceDiv.textContent = `Computer chooses ${computerSelection}`;
    
    let round = evaluateRound(playerSelection, computerSelection);
    console.log(round);

    switch (round) {
        case "win":
            playerWins++;
            roundDiv.textContent = `You win the round! ${capitalize(playerSelection)} beats ${computerSelection}!`;
            playerScoreSpan.textContent = `Player: ${playerWins}`;
            break;
        case "lose":
            computerWins++;
            roundDiv.textContent = `You lose the round! ${capitalize(computerSelection)} beats ${playerSelection}!`;
            computerScoreSpan.textContent = `Computer: ${computerWins}`;
            break;
        default:
            roundDiv.textContent = `Tie round!`;
    }
    
    if (playerWins === 5) {
        const header = document.createElement("h1");
        header.textContent = "You win the game!";
        resultsDiv.appendChild(header);
        document.querySelectorAll(".buttons button").forEach((button) => {
            button.disabled = true;
        });
    } else if (computerWins === 5) {
        const header = document.createElement("h1");
        header.textContent = "You lose the game!";
        resultsDiv.appendChild(header);
        document.querySelectorAll(".buttons button").forEach((button) => {
            button.disabled = true;
        });
    }
    // TODO: Update DOM
    // TODO: Handle winning
}

function capitalize(str) {
    str = str ?? "";
    if (str.length === 0) {
        return "";
    }
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function evaluateRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        return "lose";
    } else {
        return "win";
    }
}
