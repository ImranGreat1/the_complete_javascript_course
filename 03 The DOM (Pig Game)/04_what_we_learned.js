document.querySelector(".btn-toggle").addEventListener("click", function () {
  // The ternary Operator
  var randomNum = Math.floor(Math.random() * 30) + 1;
  var message;

  // shorter if else statement
  randomNum <= 17
    ? (message = "You are not allowed in here!")
    : (message = "Welcome to the party.");

  document.querySelector(".soft-txt").textContent = message;

  // classList method
  // add() and remove() method add and remove a class respectively
  document.querySelector(".soft-txt").classList.add("added-class");
  document.querySelector(".soft-txt").classList.remove("removed-class");

  // toggle() add a class if the class is not in the list, otherwise remove if found.
  document.querySelector(".soft-txt").classList.toggle("active");
});

// State Variable
/* 
  State variable is a variable that store the condition of a system.
  We perform a certain action based on the state value and change it
  when we need after a particular change in the system.
*/
// Very simple example of state variable
var isPlaying, score;
isPlaying = true;
score = 17;

// We will assume this function is a callback function on an event handler
function play() {
  // when our state variable is true
  if (isPlaying) {
    console.log("Game is still on....");
    score += 5;

    if (score >= 20) {
      // we change the state of the variable when the player reach a certain point
      isPlaying = false;
    }
  }
}

// Next time the handler won't perform anything because the state variable has changed
