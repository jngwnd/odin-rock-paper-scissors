/*
Write a function that randomly returns "rock", "paper", or "scissors". Use Math.random() to generate a random value and return the 
assigned choice.
*/
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

/*
Write a function that takes the user choice and returns it. Assume that the user input will be valid.

STEP 1: Prompt player's move.
STEP 2: Restructure string for capitalization and return.
*/
function getHumanChoice() {
    let choice = prompt("Make your move (rock, paper, scissors):");
    return `${choice.slice(0, 1).toUpperCase()}${choice.slice(1).toLowerCase()}`;
}