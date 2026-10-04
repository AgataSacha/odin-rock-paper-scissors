function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
}

function getHumanChoice(){
    return choice = Number(prompt("Choose: [1] Rock, [2] Paper, [3] Scissors"));
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === 1){
        if (computerChoice === 1){
            console.log("Draw!");
        }
        else if (computerChoice === 2){
            console.log("You lose. Paper beats rock."); 
            computerScore++;
        }
        else if (computerChoice === 3){
            console.log("You win! Rock beats scissors.");
            humanScore++; 
        }
    }
    else if (humanChoice === 2){
        if (computerChoice === 1){
            console.log("You win! Paper beats rock.");
            humanScore++; 
        }
        else if (computerChoice === 2){
            console.log("Draw!"); 
        }
        else if (computerChoice === 3){
            console.log("You lose. Scissors beat paper."); 
            computerScore++;
        }
    }
    else if (humanChoice === 3){
        if (computerChoice === 1){
            console.log("You lose. Rock beats scissors.");
            computerScore++;
        }
        else if (computerChoice === 2){
            console.log("You win! Scissors beat paper.");
            humanScore++;  
        }
        else if (computerChoice === 3){
            console.log("Draw!");
        }
    }
}

function playGame(){
    const numberOfRounds = 5
    for (let i=0; i<numberOfRounds; i++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
    if (humanScore > computerScore){
        console.log("You won the game!");
    }
    else if (humanScore < computerScore){
        console.log("You lost the game.");
    }
    else {
        console.log("Draw!");
    }
}

let humanScore = 0;
let computerScore = 0;
playGame()