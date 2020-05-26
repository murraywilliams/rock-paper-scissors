const pick = ['rock', 'paper', 'scissors'];
let computerPick;
let playerPick;

function computerPlay() {
  randomNum = Math.floor(Math.random() * 3);
  return (computerPick = pick[randomNum]);
}

function playerTurn() {
  let player = prompt('Make your pick (Rock, Paper, Scissors');

  playerPick = player.toLowerCase();
  computerPick = computerPlay();

  setTimeout(function () {
    playRound(playerPick, computerPick);
  }, 1000);
}

function playRound(playerSelection, computerSelection) {
  console.log(`Player Picked ${playerPick}`);
  console.log(`Computer Picked ${computerPick}`);
  // See who wins the round

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('You Lose.');
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    console.log("It's a tie");
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('Player Wins!');
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('Player Wins!');
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    console.log("It's a tie");
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('You Lose.');
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('You Lose.');
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('Player Wins!');
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors')
    console.log("It's a tie");

  let startOver = prompt('Play Again? Y/N').toLowerCase();

  if (startOver == 'y') {
    playerTurn();
  }

  // Allow player to play again
}
