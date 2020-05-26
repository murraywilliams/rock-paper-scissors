const pick = ['rock', 'paper', 'scissors'];
let playerPick;
let computerPick;
roundNum = 5;

function computerPlay() {
  randomNum = Math.floor(Math.random() * 3);
  return (computerPick = pick[randomNum]);
}

function playerTurn() {
  let player = prompt('Make your pick (Rock, Paper, Scissors');

  return player.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  console.log(playerPick, computerPick);
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return console.log(
      `You lose ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    );
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return console.log("It's a tie");
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return console.log(
      `Player Wins! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    );
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return console.log(
      `Player Wins! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    );
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return console.log("It's a tie");
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return console.log(
      `You lose ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    );
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return console.log(
      `You lose ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    );
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return console.log(
      `Player Wins! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    );
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors')
    return console.log("It's a tie");
}

function game() {
  playRound(playerTurn(), computerPlay());
}
