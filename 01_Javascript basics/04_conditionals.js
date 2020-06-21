// *****************IF ELSE STATEMENT************************
/* 
Javacript has many control structures and the if statement
is just one of them.
This allow us to execute a certain block of code base on the
given condition
*/
/* var firstName = "Imran";
// firstname == "Imran" => will return a boolean value
if (firstName == "Imran") {
  // If block
  console.log("Welcome " + firstName);
} else {
  // else block
  console.log("Welcome Guest.");
} */

// Another Example
var isMarried = false;

/*
we can compare using isMarried == true, but when dealing
with a boolean value we don't need to check if true/false.
We can just use the single value alone and will pass based
on true/false
*/
/* if (isMarried) {
  console.log("Have a nice day with your family.");
} else {
  console.log("Have a nice day man.");
} */

// ****************BOOLEAN LOGIC***************
// Evaluate conditions based on logical expression
// Logical operators <, <=, >, >= always return boolean values

//EX.1
/* var johnAge = 23;
if (johnAge < 18) {
  console.log("John is a teenager.");
} else if (johnAge >= 18 && johnAge < 30) {
  // you can change no matter how many else if block we want
  console.log("John is a young man.");
} else {
  console.log("John is a grown up man.");
} */

/* 
    We can chang logic using AND (&&), OR (||)
    && => can chain any number of logic but only returns
    true if all of the logic conditions are true. Returns
    the first falsy value if no falsy value will return 
    the last condition.

    || => can chain any number of logic. This returns true
    if just one of the condition in the chain returns true.
    Returns the first truthy value and if no truthy value will
    return the last conditon

    // the (NOT) operator represented by semi-colon (!)
    invert boolean values. If use with non boolean value, will
    first convert that value to boolean before inverting that 
    boolean value
*/

// EX.2
var test = 0 || "Hey what's up"; // return first truthy
var test2 = "Imran" && undefined && "Hello world!"; // return first falsy
// console.log(test);
// console.log(test2);
/* 
    When you run a condition like x > y && z > y
    the conditional operator execute first because they 
    higher precedence than the && operator, So it will first
    execute x > y, z > y before &&
*/

function compare(name, num1, num2) {
  console.log("Executing " + name);
  return num1 > num2;
}

/* var left, right;
left = compare("left", 12, 4);
right = compare("right", 40, 20);
var result = left && right;
console.log(result); */

// EX.3
var truthy, falsy, stringValue;
truthy = true;
falsy = false;
stringValue = "Football";

/* console.log(!truthy); // false
console.log(!falsy); // true
console.log(!stringValue); // false */
//
//
//
//
//

// *******************TERNARY OPERATOR*************************
/* 
Ternary operator also known as conditional statement is a 
shorter and cleaner way of doing just a single if else statement.
*/
var isAdult = false;

/* isAdult
  ? console.log("John can take beer.")
  : console.log("John is NOT allowed to take beer.");
 */

/* 
    isAdult ? is the condition, if true the first statement
    is going to be executed but if false the second statement
    seperated by column will be executed. Relating if else
    statement, the first statement will be the if statement with
    the condition while the second will be the else statement
  */

//
//
//
//
//
//

// **********SWITCH STATEMENT**************
/* 
  Switch statement is a cleaner way of writing if else statement
  that has multiple else if statements.
*/

/* var person = "John";
var job = "Designer";

switch (job) {
  case "Teacher":
    console.log(person + " teaches kids how to code.");
    break;
  case "Driver":
    console.log(person + " drives Uber in Nigeria.");
    break;
  case "Designer":
    console.log(person + " design beautiful websites.");
    break;
  default:
    console.log(person + " Does something else.");
} */

/* 
  Here we have a variable that we are using as our switch value.
  We are basically saying if the value is a certain value, execute
  the that certain code. 
  
  Note the presence of break statement, It has to be there 
  because when a condition matches every code below it will run
  even if the condition did NOT match. The break help stop the
  execution of other condition after the matched condition.

  If we use a return statement inside of a condition then the break
  is not needed
*/

/* We can also provide more than one condition to code that 
we want to execute when a statement matches.
*/
//Example
/* var carBrand = "Highlander";
switch (carBrand) {
  case "Highlander":
  case "Venza":
    console.log(carBrand + " is made by Toyota.");
    break;
  case "C350":
    console.log(carBrand + " is made by Mercedes Benz.");
    break;
  default:
    console.log("Car not yet in our database.");
} */

/* 
Venza and Highlander execute the same code with different
conditions
*/

// Using switch with boolean values
/* var playerAge = 13;
switch (true) {
  case playerAge < 16:
    console.log("You can't be in the first team yet.");
    break;
  case playerAge >= 16 && playerAge < 35:
    console.log("You can play for the first team.");
    break;
  case playerAge >= 35:
    console.log("You can't play for the first team anymore.");
    break;
} */

/* 
  When using switch with boolean condition, the switch value 
  should be true since that's what we are checking for.
  We can also use false but that will be crazy and reverse
  the conditions
*/

//
//
//
//
//
//

// ********************TRUTHY AND FALSY VALUES***************
/* 
  In Javascript there are values that are considered true or
  false when used with true of false conditional operators
  such as if else statement and the ternary operator
*/

/* Here are the JS falsy values:  undefined, null, 0, "", NaN.
  All values that are not this falsy values are truthy.
*/
//Example
var profession;
/* profession will be undefined becuase we have declared the
variable but haven't define/assign any value to it 
*/
/* if (profession) {
  // undefined is falsy
  console.log("Profession is defined");
} else {
  console.log("Profession is not defined");
} */

/* 
  Sometimes we want to check if a value exist before we execute
  a certain code, this is different with the number value of 0
  because it return false, we can avoid skipping zero if we want
  by ckecking if the value is 0.
*/
// Example
/* var arrayIndex = 0;
if (arrayIndex || arrayIndex === 0) {
  console.log("Hello Array Index!!!");
} else {
  console.log("You are not part of me.");
} */

//
//
//
//
//
//

// DIFFERENCE BTW == (loose equality) AND === (strict equality)
/* 
  The basic difference is that loose equality allow type coercion
  while strict equality do NOT allow type coercion.
*/
// See the difference

/* This coerce the string "23" to number type before checking
the equality
*/
/* console.log(23 == "23"); // Allow type coercion

console.log(23 === "23"); // Does NOT allow type coercion */

//
//
//
//
//
//

//************CODING CHALLENDE 2***********************
/* 
  Calculate the average of the following scores btw two players
  of different basketball team and return the average winner of
  the two for three different games
  John's team scores: 89, 120 and 103 points
  Mike's team scores: 116, 94 and 123 points
*/

/* var johnsAverage = (136 + 100 + 123) / 3;
var mikesAverage = (124 + 120 + 107) / 3;

if (johnsAverage > mikesAverage) {
  console.log(
    "John's team wins with the averega of " +
      johnsAverage +
      " points to Mike's " +
      mikesAverage +
      " points"
  );
} else if (johnsAverage === mikesAverage) {
  console.log("It's a draw between the two teams.");
} else {
  console.log(
    "Mike's team wins with the averega of " +
      mikesAverage +
      " points to John's " +
      johnsAverage +
      " points"
  );
} */

/* Compare the average of the two teams but now including
 Mary's team.
// Mary's team score: 97, 134 and 105 points
*/
// Solution
var marysAverage = (97 + 102 + 143) / 3;
johnsAverage = (105 + 89 + 126) / 3;
mikesAverage = (112 + 121 + 123) / 3;

if (johnsAverage > mikesAverage && johnsAverage > marysAverage) {
  // John wins
  console.log(
    "John's team wins with the averega of " +
      johnsAverage +
      " points to Mike's " +
      mikesAverage +
      " points and Mary's " +
      marysAverage +
      " points"
  );
} else if (mikesAverage > johnsAverage && mikesAverage > marysAverage) {
  // Mike wins
  console.log(
    "Mike's team wins with the averega of " +
      mikesAverage +
      " points to Johns's " +
      johnsAverage +
      " points and Mary's " +
      marysAverage +
      " points"
  );
} else if (marysAverage > johnsAverage && marysAverage > mikesAverage) {
  // Mary wins
  console.log(
    "Mary's team wins with the averega of " +
      marysAverage +
      " points to Johns's " +
      johnsAverage +
      " points and Mike's " +
      mikesAverage +
      " points"
  );
} else if (johnsAverage === mikesAverage && johnsAverage === marysAverage) {
  // Equal, That is a draw
  console.log("It's a draw between the two teams.");
}
