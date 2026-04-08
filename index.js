const btnDiv = document.querySelector('#button-container');
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissors');

let humanScore = 0,
    computerScore = 0;

btnDiv.addEventListener('click', (e) => {
    const id = e.target.id;
    
    const result = playRound(id, getComputerChoice());
    
    if (humanScore === 5 || computerScore === 5) {
            setTimeout(() => {
                alert((humanScore > computerScore) ? "Congratulations! You beat the computer!" : "You lost... Better luck next time.");
                humanScore = 0;
                computerScore = 0;
                scoreDiv.textContent = `Your Score: ${humanScore}
                                        Computer Score: ${computerScore}`;
            }, 100)
        }


})

/*
Write a function that takes player and computer choices as arguments, plays a single round, increments the winner's score, and logs the
winner in the console.

STEP 1: Create a map with the different win conditions.
STEP 2: Take into account the possibility of a tie (avoids bloating the map with results).
STEP 3: Log the result into the console.
STEP 4: Increment player or computer score based on results.

***EDITED TO WORK WITH BUTTON CHOICES.
*/
function playRound(humanChoice, computerChoice) {
    const winCondition = {
        "rock, paper": "You lose. Paper beats rock.",
        "paper, scissors": "You lose. Scissors beats paper.",
        "scissors, rock": "You lose. Rock beats scissors.",
        "paper, rock": "You won! Paper beats rock.",
        "scissors, paper": "You won! Scissors beats paper.",
        "rock, scissors": "You won! Rock beats scissors."
    };

    if (humanChoice === computerChoice) {
        resultDiv.textContent = "You tied.";
        scoreDiv.textContent = `Your Score: ${humanScore}
                                Computer Score: ${computerScore}`;
        return;
    }

    let key = `${humanChoice}, ${computerChoice}`;
    let result = winCondition[key].includes("won");
    
    if (result) {
        humanScore += 1;
    } else {
        computerScore += 1;
    }

    resultDiv.textContent = winCondition[key];
    scoreDiv.textContent = `Your Score: ${humanScore}
                            Computer Score: ${computerScore}`;

    return result;
}


/* PREVIOUS CODE */


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
// function getHumanChoice() {
//     let choice = prompt("Make your move (rock, paper, scissors):");
//     return `${choice.toLowerCase()}`;
// }

/*
Write a function that plays five rounds of Rock, Paper, Scissors, keeping track of scores and declares a winner at the end.

STEP 1: Initialize score variables.
STEP 2: Create for loop for the five rounds.
STEP 3: Initialize variables for getHumanChoice(), getComputerChoice(), and playRound() result.
STEP 4: Modify score based on playRound() result (in the case of a tie, repeat the round).
*/
// function playGame() {
//     let humanScore = 0,
//         computerScore = 0;

//     console.log("Best of 5 rounds. Start!");
    
//     for (let i = 0; i < 5; i++) {
//         let humanMove = getHumanChoice();
//         let computerMove = getComputerChoice();

//         let result = playRound(humanMove, computerMove);
        
//         switch (result) {
//             case true:
//                 humanScore++;
//                 break;
//             case false:
//                 computerScore++;
//                 break;
//             default:
//                 i--;

//         }
//     }

//     console.log((humanScore > computerScore) ? "Congratulations! You beat the computer!" : "You lost... Better luck next time.");
// }

// playGame();