/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

// Reset UI at the beginning of game
resetUI();

// Hide dice roll and hold button
document.querySelector(".btn-roll").style.display = "none";
document.querySelector(".btn-hold").style.display = "none";

// HANDLING DICE ROLLING CLICK EVENT
document.querySelector(".btn-roll").addEventListener("click", function () {
  // Get random number from 1 to 6
  var dice = Math.floor(Math.random() * 6) + 1;
  var diceDOM = document.querySelector(".dice");
  //   change img src based on dice number
  diceDOM.src = "img/dice-" + dice + ".png";
  // display dice
  diceDOM.style.display = "block";

  // Check if number is NOT 1
  if (dice !== 1) {
    // Add dice to roundScore
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    //Next player turn
    nextPlayer();
  }
});

// HOLD BUTTON LOGIC
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Add roundScore to Global score
  scores[activePlayer] += roundScore;

  // Update the UI
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  // Check if active player has won
  if (scores[activePlayer] >= 100) {
    // Declare winner in the UI
    document.getElementById("name-" + activePlayer).textContent = "Winner!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");

    // Change new game button to New Game
    document.querySelector(".btn-new").innerHTML =
      "<i class='ion-ios-plus-outline'></i>New game";

    // Remove player as active
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");

    // remove dice from UI
    document.querySelector(".dice").style.display = "none";

    // Hide dice roll and hold button
    document.querySelector(".btn-roll").style.display = "none";
    document.querySelector(".btn-hold").style.display = "none";
  } else {
    // Change to nextPlayer
    nextPlayer();
  }
});

// NEW GAME BUTTON LOGIC
document.querySelector(".btn-new").addEventListener("click", function () {
  // Remove winner in the UI before resetting game and active player
  var winner = document.querySelector(".player-" + activePlayer + "-panel");
  winner.classList.remove("winner");
  winner.classList.remove("active");

  // Reset UI
  resetUI();

  // Change new game button display in the UI
  document.querySelector(".btn-new").innerHTML =
    "<i class='ion-ios-minus-outline'></i>Reset game";

  // Reset player name
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  // Show dice roll and hold button
  document.querySelector(".btn-roll").style.display = "block";
  document.querySelector(".btn-hold").style.display = "block";

  // Make player 1 active player
  document.querySelector(".player-0-panel").classList.add("active");
});

// DRY Principle functions => for cleaner and maintainable code.

// Next player turn
function nextPlayer() {
  // reset roundScore before the next player play
  roundScore = 0;
  document.querySelector("#current-" + activePlayer).textContent = "0";

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Visually change active player
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

// Reset UI when clicked the new reset/new game button
function resetUI() {
  scores = [0, 0];
  roundScore = 0;

  activePlayer = 0;

  document.querySelector(".dice").style.display = "none";

  // set scores and round scores to zero by default
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
}
