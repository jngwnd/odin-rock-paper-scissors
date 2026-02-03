/*
Write a function that randomly returns "rock", "paper", or "scissors". Use Math.random() to generate a random value and return the 
assigned choice.
*/
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

/*
Write a function that takes the user choice and returns it. Assume that the user input will be valid.

STEP 1: Prompt player's move.
STEP 2: Restructure string for case insensitivity and return.
*/
function getHumanChoice() {
    let choice = prompt("Make your move (rock, paper, scissors):");
    return `${choice.toLowerCase()}`;
}

/*
Initialize variables for score keeping.
*/
let humanScore = 0,
    computerScore = 0;

/*
Write a function that takes player and computer choices as arguments, plays a single round, increments the winner's score, and logs the
winner in the console.

STEP 1: Create a map with the different win conditions.
STEP 2: Take into account the possibility of a tie (avoids bloating the map with results).
STEP 3: Log the result into the console.
STEP 4: Increment player or computer score based on results.
*/
function playRound(humanChoice, computerChoice) {
    const winCondition = {
        "rock, paper": "You lose. Paper beats rock.",
        "paper, scissors": "You lose. Scissors beats paper.",
        "scissors, rock": "You lose. Rock beats scissors.",
        "paper, rock": "You won! Paper beats rock.",
        "scissors, paper": "You won! Scissors beats paper.",
        "rock, scissors": "You won! Rock beats scissors."
    }

    if (humanChoice === computerChoice) {
        console.log("You tied.");
        return;
    }

    let key = `${humanChoice}, ${computerChoice}`;
    let result = winCondition[key].includes("won");
    console.log(winCondition[key]);

    if (result) {
        humanScore++;
    } else {
        computerScore++;
    }
}