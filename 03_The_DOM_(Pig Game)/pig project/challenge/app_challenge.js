/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, previousScore, winningScore;

winningScore = 100;

// Reset UI at the beginning of game
resetUI();

// Hide dice roll and hold button
document.querySelector(".btn-roll").style.display = "none";
document.querySelector(".btn-hold").style.display = "none";

// Hide change button
document.querySelector(".change-btn").style.display = "none";

// HANDLING DICE ROLLING CLICK EVENT
document.querySelector(".btn-roll").addEventListener("click", function () {
  // Get random number from 1 to 6
  var dice1, dice2;
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;

  // CHALLENGE 1 Solution
  if (previousScore === 6 && dice1 === 6) {
    console.log("Double six");
    document.getElementById("score-" + activePlayer).textContent = "0";
    scores[activePlayer] = 0;
    nextPlayer();
  } else {
    var dice1DOM, dice2DOM;
    dice1DOM = document.getElementById("dice-1");
    dice2DOM = document.getElementById("dice-2");

    //   change img src based on dice number
    dice1DOM.src = "../img/dice-" + dice1 + ".png";
    dice2DOM.src = "../img/dice-" + dice2 + ".png";

    // display dice
    dice1DOM.style.display = "block";
    dice2DOM.style.display = "block";

    // Calculate the sum of the two dice
    var sumOfDices = dice1 + dice2;
    // Check if number is NOT 1
    if (dice1 !== 1 && dice2 !== 1) {
      // Add dice to roundScore
      roundScore += sumOfDices;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //Next player turn
      nextPlayer();
    }

    // Set current dice to previous score
    previousScore = dice1;
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
  if (scores[activePlayer] >= winningScore) {
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
    // Hide dices
    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";

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

  // Hide winning score input
  document.querySelector(".set-form").style.display = "none";
  // Show change winning score button
  document.querySelector(".change-btn").style.display = "block";

  // Reset UI
  resetUI();

  // Change new game button display in the UI
  document.querySelector(".btn-new").innerHTML =
    "<i class='ion-ios-minus-outline btn-new'></i>Reset game";

  // Reset player name
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  // Show dice roll and hold button
  document.querySelector(".btn-roll").style.display = "block";
  document.querySelector(".btn-hold").style.display = "block";

  // Make player 1 active player
  document.querySelector(".player-0-panel").classList.add("active");
});

// CHALLENGE 2 SOLUTION

// SET WINNING SCORE HANDLER
document.querySelector(".btn-set-score").addEventListener("click", function () {
  var score = document.getElementById("score-field").value;
  score <= 0 ? (winningScore = 100) : (winningScore = score);

  // Display change block
  document.querySelector(".change-btn").style.display = "block";

  // Hide winning score input
  document.querySelector(".set-form").style.display = "none";
});

// TOGGLE WINNING INPUT
document.querySelector(".change-btn").addEventListener("click", function () {
  // Hide change button
  document.querySelector(".change-btn").style.display = "none";

  // Display winning score input
  document.getElementById("score-field").value = winningScore;
  document.querySelector(".set-form").style.display = "block";
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

  // Hide dices
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";

  // set scores and round scores to zero by default
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
}
