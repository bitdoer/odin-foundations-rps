const results_div = document.querySelector(".results");

const buttonPress = document.addEventListener("click", playRound);

let playerWins = 0;
let computerWins = 0;

function playRound(event) {
    
    let playerSelection;
    switch (event.target.id) {
        case "rock": case "paper": case "scissors":
            playerSelection = event.target.id;
            break;
    }
    let computerSelection = getComputerChoice();
    let round = evaluateRound(playerSelection, computerSelection);
    console.log(round);

    switch (round) {
        case "win":
            playerWins++;
            break;
        case "lose":
            computerWins++;
            break;
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

function playRound(playerSelection, computerSelection) {

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
