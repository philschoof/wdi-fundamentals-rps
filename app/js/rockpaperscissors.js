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
    switch (playerMove === "rock"){
        case (computerMove == "paper"):
            winner = "computer";
            break;
        case (computerMove === "scissors"):
            winner = "player";
            break;
        default:
            winner = "tie";
            break;
    }
    switch (playerMove === "paper"){
        case (computerMove == "rock"):
            winner = "player";
            break;
        case (computerMove === "scissors"):
            winner = "computer";
            break;
        default:
            winner = "tie";
            break;
    }
    switch (playerMove === "scissors"){
        case (computerMove == "rock"):
            winner = "computer";
            break;
        case (computerMove === "paper"):
            winner = "player";
            break;
        default:
            winner = "tie";
            break;
    }
    ////
    switch (computerMove === "rock"){
        case (playerMove == "paper"):
            winner = "computer";
            break;
        case (playerMove === "scissors"):
            winner = "player";
            break;
        default:
            winner = "tie";
            break;
    }
    switch (computerMove === "paper"){
        case (playerMove == "rock"):
            winner = "player";
            break;
        case (playerMove === "scissors"):
            winner = "computer";
            break;
        default:
            winner = "tie";
            break;
    }
    switch (computerMove === "scissors"){
        case (playerMove == "rock"):
            winner = "computer";
            break;
        case (playerMove === "paper"):
            winner = "player";
            break;
        default:
            winner = "tie";
            break;
    }
    return winner;
}

function playToFive(getPlayerMove, getComputerMove, getWinner ) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for(var i = 0; i < 5; i++){
        getPlayerMove();
        getComputerMove();
        getWinner();
        console.log('Player chose' + playerMove + ", while computer chose " + computerMove);
        console.log("The score is " + playerWins + "to " + computerWins);
    }
    return [playerWins, computerWins];
}
