const pick = ['rock', 'paper', 'scissors'];

function computerPlay() {
  randomNum = Math.floor(Math.random() * 4);
  return pick[randomNum];
}

function playRound(playerSelection, computerSelection) {
  let computerPlay;
  computerPlay = pick[computerSelection];
}
