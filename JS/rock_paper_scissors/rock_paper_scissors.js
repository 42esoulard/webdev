let choice = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let humanScore = 0;

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
    
    if (result === "You win! ") {
        humanScore++;
        console.log(humanScore);
        return result + playerSelection + " beats " + computerSelection;
    }
    computerScore++;
    return result + computerSelection + " beats " + playerSelection;
}

let playerSelection;
let computerSelection;

const main = document.querySelector('main');

const pComputerScore = document.querySelector('.computer-score');
const pHumanScore = document.querySelector('.human-score');

const buttons = document.querySelectorAll('div button');

const divResult = document.createElement('div');
divResult.classList.add('result');
const divWinner = document.createElement('div');
divWinner.classList.add('winner');
const playAgain = document.createElement('button');
playAgain.textContent = "Play again?";

function replay() {

    pComputerScore.textContent = "0";
    pHumanScore.textContent = "0";
    computerScore = 0;
    humanScore = 0;

    main.removeChild(playAgain);
    main.removeChild(divWinner);
    buttons.forEach(button => button.addEventListener('click', game))
}

function game(e) {
    divResult.textContent = playRound(this["id"], computerPlay());
    main.append(divResult);

    pComputerScore.textContent = computerScore.toString();
    pHumanScore.textContent = humanScore.toString();

    if (computerScore === 5 || humanScore === 5) {
        if (computerScore === 5)
            divWinner.textContent = "THE MACHINE WON, BOW BEFORE THE MACHINE!"
        else if (humanScore === 5)
            divWinner.textContent = "You won at this perfectly randomized game, congrats!"
        main.appendChild(divWinner)
        main.appendChild(playAgain);
        main.removeChild(divResult);
        buttons.forEach(button => button.removeEventListener('click', game))
        playAgain.addEventListener('click', replay);
    }
}

buttons.forEach(button => button.addEventListener('click', game))
