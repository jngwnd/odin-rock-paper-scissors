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