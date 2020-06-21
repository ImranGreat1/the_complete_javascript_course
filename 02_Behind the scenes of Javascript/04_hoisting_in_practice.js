/* Our common behaviour when using a function is that we declare
it first before we use it in our code just like the below example
*/

// We declare the function
function calculateAge(yearOfBirth, currentYear) {
  console.log(currentYear - yearOfBirth);
}

// We use it down here
calculateAge(1996, 2020);

/* Going back to our discussion in 03_theory.md, we said that functions
and variables declarations get stored as properties in the variables object
of the execution context object during the the creation phase of the execution
context that is before the execution phase. That gives us access to the functions
before the execution phase which is the time the function runs.

Let see that in practice.
*/

/* We get access to this function because it is already in the variables object
of the execution context object before the code start to run */
sayMyName("Imran");

// Declare after the call
function sayMyName(name) {
  console.log("Hello " + name);
}

// Both ways works
sayMyName("Aymaan");

/* The latter is different when it comes to function expressions because
function expressions are not hoisted, so they won't be available before the 
declaration of the funtions.
*/

/* The variable play will be hoisted but set to undefined, so when we call
play, the value will be undefined which will throw an error */

// play(); // this throw error

var play = function () {
  console.log("playing...");
};

play(); // this works

/* The same happens when we declare variables, but with variables the actual values
are not stored together with the properties,intead they are set to undefined.
The variables only get set during the execution phase of the execution context.
That means the variable is set when the execution reached where the variable is 
defined in the code.

Let see that in practice
*/

// below is what we will normally do
var name = "John Doe";
console.log(name);

// Check the other way around
/* This will log undefined because variable declaratios are set to undefined in 
 the variables object of the execution context object and will only get set at
 the time the code is running
*/

console.log(player); // undefined
var player = "Messi";

/* Both of the below will throw an error because the function and variable 
are yet to be declared */

// greet();
// console.log(hafsat);

/* Hoisting is mostly used to take advantage of function declarations
because it gave us the flexiblity of using the functions before their
declarations unlike variables declations which are set to undefined */

/* Hints: This works because the variable is set on the variables object
before the execution phase of the execution context */
age = 4;
console.log(age);
var age;
