/* 
    IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
    Immediately invoked functional expression is a commonly use
    pattern in Javascript. It allows us to structure our code, obtain
    variable privacy and code modulation. IIFE allowed us to run a function
    once we create it, meaning we don't have to declare and then call it,
    we just use it as an expression and call it immediately.
    Imagine we want to create a simple game where a person win if he
    picks a number greater or equal to 5 and lose if it less than 5.

    Normally we will create a function and then run it. Let see that
    in practice. Just a simple game for demonstration. 
*/

// What we will normally do before we knew the IIFE pattern.
function game() {
  var score = Math.random() * 10 + 1;
  score >= 5 ? console.log("You won.") : console.log("Try again next time");
}

game();

/*
    Let say we just want the score variable of our game to be hidden,
    assuming that's our main aim here, we don't want it to be access
    from the global scope. We will simply create a function because
    each function call create its own execution context, that's what
    we just did with the above code.
    
    But there is a more elegant way to create and call our function
    using IIFE pattern. Since we are not re-using our function in anywhere,
    we are simply just calling it to obtain variable privacy, we can
    take advantage of the IIFE pattern which allows us to create non-reusable
    functions.

    Let's see the IIFE in practice.
*/

(function () {
  var score = Math.random() * 10 + 1;
  score >= 5 ? console.log("You won.") : console.log("Try again next time");
})();

/*
    LET DISCUSS HOW THE IIFE WORKS.

    1. When we create an anonymous function without assigning it to any
    variable or property, Javascript will assume that is a function
    declaration and when the parser read through our code it will
    find out that the function has no name and then it will throw error.

    2. To make the Javascript parser look at it as an expression then 
    we need to wrap the function with a parenthesis, that way the
    Javascript parser will not assume is a function declaration 
    because anything wrap between parenthesis cannot be a statement.
    So the function will be seen by the parser as an expression.

    3. Living the function between parenthesis will not do anything since
    we are not calling it or assigning it to any variable, that is why we
    need the outer parenthesis to call it immediately.

*/

// IIFE can also take in PARENTHESIS
(function (name) {
  console.log("Hello " + name);
})("John");

/*
    The outer parentesis receives the argument that the IIFE expects.
*/

/*
    With IIFE we achieve variable privacy and structure our code in
    a more elegant manner.
*/
