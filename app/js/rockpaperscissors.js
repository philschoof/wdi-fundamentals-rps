////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var playerMove = move || getInput();
    return playerMove;
}

function getComputerMove(move) {
    var computerMove = move || randomPlay();
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if((playerMove === "rock" && computerMove ==="scissors")
        || (playerMove === "paper" && computerMove === "rock")
        || (playerMove === "scissors" && computerMove === "paper")){
            winner = "player";
        }
        else if ((computerMove === "rock" && playerMove === "scissors")
        || (computerMove === "paper" && playerMove === "rock")
        || (computerMove === "scissors" && playerMove === "paper")){
            winner = "computer";
        }
        else if (computerMove === playerMove){
            winner = "tie";
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins < 5 && computerWins < 5){
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);
        if (winner === 'player'){
            console.log('Player chose' + playerMove + ", while computer chose " + computerMove);
            playerWins += 1;
        } else if (winner === 'computer'){
            console.log('Player chose' + playerMove + ", while computer chose " + computerMove);
            computerWins += 1;
        }else(winner === "tie"){
            console.log("tie!");
        };
    }
    return [playerWins, computerWins];
}
