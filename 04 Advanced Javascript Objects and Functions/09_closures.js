/*
    CLOSURES

    Closures gives us the ability to access the variable objects of a parent
    function even after the that parent function has returned, meaning, the 
    function has already been removed from the execution stack. If we can
    remember, the variable objects are all the variables and input that are
    defined within a function scope.

    An inner function has always access to the variables and parameters
    of its outer function, even if the outer function has returned.


    Let's see closure in practice.
*/

function setGame(winningScore) {
  var message = "Game playing...";
  return function () {
    var score = Math.floor(Math.random() * 10 + 1);
    console.log(message);
    score >= winningScore ? console.log("You won!") : console.log("Try again.");
    console.log(score);
  };
}

var gameOfFive = setGame(5);

var gameOfSeven = setGame(7);

// gameOfFive();
// gameOfSeven();

/* 
    DISCUSS WHAT IS HAPPENING WITH THE ABOVE CODE

    I. We created a function setGame
        i. this function has a parameter of winningScore that
        set the winning score of the game. Meaning if you number
        is greater or equal to winning score you've won the game.

        ii. setGame function return a new function that uses the
        winningScore. This returned function uses the winningScore
        within it scope.

        iii. when we the setGame function with the number 5, the
        setGame will return a new function (Game) with the winningScore
        set to 5. When we call the returned function then our winningScore
        will be five.

    // THE QUESTION IS HOW DID tHE RETURNED FUNCTION STILL REMEMBER THE WINNING
    SCORE EVEN AFTER THE PARENT FUNCTION HAS RETURNED.

    II. When a function sit lexically in another, then that function will have
    access to the variable object of it parent. So in this case the returned
    function will have access to the variable object of the setGame function
    which is the winningScore and message variable.

    III. But the variable object is part of the execution context of a function.
    So what happens when the function finish executing or returned, the execution
    context will then be removed from the execution stack. What then happen with
    the variable object ?

        1. Even if the execution context has been removed from the execution stack,
        the variable object is not removed, it is there in memory, that's why we
        can access it from the returned function.

        2. The returned function can still access the variable object of it parent
        because it has closed in with the parent variable object. We can simply use
        the parent variable objects even after the parent has returned with the help
        of closure.

        NOTE: why did the returned function have access to the variable object of its
        parent ?

        The returned function has access to the variable object of its parent
        because of the scope chain. Scope chain are all the variable objects that
        a function has access to.

        THE SCOPE CHAIN ALWAYS STAY INTACT.


    IV. We do not create closures ourselves, it is build into Javascript.
        Javascript do the work for us, we do not say we want to create closure.

*/

// Let's modify our question generator function to use closures

function questionGenerator(job) {
  return function (name) {
    // We closed in with the job variable (argument) of the outer function
    switch (job) {
      case "developer":
        console.log(name + ", can you deploy a production ready app?");
        break;
      case "teacher":
        console.log(name + ", what are the qualities of a good teacher?");
        break;
      case "UX/UI":
        console.log(
          name + ", can you briefly explain the job of a UX/UI designer?"
        );
        break;
      default:
        console.log(name + ", explain what you actually do?");
    }
  };
}

var teacherQuestion = questionGenerator("teacher");

teacherQuestion("Jonas");
questionGenerator("developer")("Imran");
questionGenerator("UX/UI")("John");
questionGenerator("")("Mary");
