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
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerLower = playerSelection.toLowerCase();
    let computerLower = computerSelection.toLowerCase();

    if (playerLower === computerLower) {
        return "Tie! The round must be replayed.";
    } else if (
        (playerLower === "rock" && computerLower === "paper")
        || (playerLower === "paper" && computerLower === "scissors")
        || (playerLower === "scissors" && computerLower === "rock")
    ) {
        return `You lose the round! ${capitalize(computerLower)} beats ${playerLower}!`;
    } else {
        return `You win the round! ${capitalize(playerLower)} beats ${computerLower}!`;
    }
}

function game() {
    console.log("Rock Paper Scissors!");

    let i = 0;
    let wins = 0;
    while (i < 5) {
        console.log(`Round ${i + 1}`);
        let playerSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        console.log(round);

        if (round.slice(0, 3) === "Tie") {
            continue;
        }

        if (round.slice(4, 7) === "win") {
            wins++;
        }

        i++;

        if (wins >= 3 || i - wins >= 3) {
            break;
        }

    }
    
    console.log(`You ${wins >= 3 ? "win" : "lose"} the game! Final score: ${wins} - ${i - wins}`);
}
