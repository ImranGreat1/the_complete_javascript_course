/* Functions is a one of the basic essential principles of javascript
It's a way to organise codes that we want to reuse again and again or 
just organisation purpose.
*/

// This is how we define function
function calculateAge(yearOfBirth, name) {
  /* yearOfBirth and name are variables that created within 
    the function scope the variables are also referred to as argument.
    A function can take no argument to many arguments */
  var age = 2020 - yearOfBirth;
  return name + " is " + age + " years old.";
}

/* 
    A function usually return something, but a function can
    also not return anything. a function can only have one 
    return statement. No code is executed below the return
    statement
*/

// using a function is referred to as calling a function
var ageImran = calculateAge(1996, "Imran");
// console.log(ageImran);
// console.log(calculateAge(1978, "John"));
// console.log(calculateAge(1984, "Jane"));

//  Another Example
function whatDoYouDo(profession, name) {
  /* When using a switch inside a function we use the return statement
        within each case, that will serve as the function return statement
    */
  switch (profession) {
    case "Teacher":
      return name + " teaches kid how to code.";
    case "Designer":
      return name + " design beautiful websites.";
    case "Doctor":
      return name + " save peoples live.";
    default:
      return name + " does something else.";
  }
}

console.log(whatDoYouDo("Designer", "Imran"));
console.log(whatDoYouDo("Police", "Umar"));
var workJane = whatDoYouDo("Teacher", "Jane");
console.log(workJane);

//
//
//
//
//
//  FUNCTION STATEMENT VS FUNCTION EXPRESSION
/* 
  In javascript expressions are code that produce result while 
  statement doesn't immediately or directly return something.
  When javascript except a value, we write expressions such as
  1 + 1, a > b etc.
  Statement perform actions but they do not produce immediate results
  such as function declaration,if else statement and a while loop.  
  */

// function declaration or function statement
// function greet(name) {
//   console.log("Hello " + name);
// }

// function expression
var greet = function (name) {
  console.log("Hello " + name);
};

greet("Imran");

/* The way that we call the function, the arguments and every functionality
of the function statement work the same with function expressions
*/
