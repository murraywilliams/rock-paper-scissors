const pick = ['rock', 'paper', 'scissors'];
let playerPick;
let computerPick;
const roundNum = 2;
let playerScore = 0;
let computerScore = 0;

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
    computerScore++;
    return console.log(
      `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    );
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return console.log("It's a tie");
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return console.log(
      `Player Wins! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    );
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return console.log(
      `Player Wins! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    );
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return console.log("It's a tie");
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return console.log(
      `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    );
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return console.log(
      `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    );
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return console.log(
      `Player Wins! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    );
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors')
    return console.log("It's a tie");
}

function game() {
  for (let i = 0; i < roundNum; i++) {
    playRound(playerTurn(), computerPlay());
  }
  console.log(`\n*************\nSCORES\n*************\n`);
  console.log(`\nPLAYER: ${playerScore} | COMPUTER: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log(`Player Wins! with a score of ${playerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`Computer Wins! with a score of ${computerScore}`);
  } else {
    console.log(`YOU TIED!`);
  }
}
