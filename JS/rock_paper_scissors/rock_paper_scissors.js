let choice = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return choice[Math.floor(Math.random() * 3)];
}

function formatInput(input) {

    if (input.length > 0) {
        input = input.toLowerCase();
        let array = input.split('');
        array[0] = array[0].toUpperCase();
        input = array.join('');
    }
    return input;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = formatInput(playerSelection);
    if (computerSelection === playerSelection)
        return "It's a tie!";
    
    let result = "You lose! ";

    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Scissors")
                result = "You win! ";
            break;
        case "Paper":
            if (computerSelection === "Rock")
                result = "You win! ";
            break;
        case "Scissors":
            if (computerSelection === "Paper")
                result = "You win! ";
            break;   
        default:
            return "That's gibberish, you lose. " 
    }
    
    if (result === "You win! ")
        return result + playerSelection + " beats " + computerSelection;
    return result + computerSelection + " beats " + playerSelection;
}

let playerSelection;
let computerSelection;

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors?");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
