// JAVASCRIPT BASIC OPERATORS

/* 
   ********************* Math Operators*****************
    Apart from being able to perform calculations with JS math
    opertors, this operators also have some special characteristics
    and behaviours
 */

// Examples of basic math operators are +, -, *, /

var add, subtract, multiply, divide, x, y;
x = 6;
y = 3;
add = x + y;
subtract = y - x;
multiply = y * x;
divide = x / y;

// console.log(add, subtract, multiply, divide);

// *****************Logical operators************
// Example of logical operators are <, >, <=, >=;
var num1, num2;

num1 = 2;
num2 = 4;

// Logical operators return boolean values
var isNum1Bigger = num1 > num2;

// console.log(isNum1Bigger);

// ******************Typeof operator*****************
/* typeof return the string representation of the data type
of any value pass to it. It requires only one operand

*/

var school;
// console.log(typeof 'Imran');
// console.log(typeof school);
// console.log(typeof 20);

/* 
   ********************* OPERATORS PRECEDENCE*****************
    This is the rules in which Javascript operators are executed,
    operator with the higher precedence get executed first.
 */

/* parentesis have the highest precedence, that means code in parenthesis
get executed first
*/

var calc = 2 * (6 + 2); // 2 * 8 because of the parenthesis
// console.log(calc);

// * multiply operator have more precedence than addition operator
var calc2 = 2 * 6 + 2; // 12 + 2
// console.log(calc2);

/* Some basic operators and their precedence number, remember the higher precedence
   get executed first.
*/

//  OPERATOR                        // PRECEDNCE
// parenthesis ()                      21
// new                                 19       // right to left
// postfix increment/decrement         18
// prefix increment/decrement          17       // right to left
// typeof, delete, await               17       // right to left
// unary plus/negation, !              17       // right to left
// exponentiation  **                  16       // right to left
// multiply/divide/modulus             15
// addition/subtraction                14
// <, <=, >, >=                        12
// ==, !=, ===, !==                    11
// &&                                  6
// ||                                  5
// ******Right to left associativity
// ? "" : ""                           4
// =, +=, -=, /=, **=, *=, %=          3

// Ex1
var cal3 = 3 > 2 > 1;
/* 3 > 2 = true, true > 1, true get coerce to number type
   true equals 1 when coerced, 1 > 1 = false
*/
// console.log(cal3);

// Ex2
var a, b;
a = b = { name: "Imran" };

// expected output => 5
/* 
   associativity of equality operator is from right to left
   value 5 first get assigned to b then value of b then get
   assigned to a
*/
// console.log(a === b);

// ******************CODING CHALLENGE 1**************************

//formula for calculating BMI (Body Mass Index) => mass / height^2

//compare John and Mark BMI and log whether Mark has higher BMI than John
var mikeMass, mikeHeight, jonhMass, johnHeight;
//Mike
mikeMass = 65; // kg
mikeHeight = 1.85; // meters
// John
jonhMass = 70; // kg
johnHeight = 1.6; // meters

var mikeBMI = mikeMass / mikeHeight ** 2;
var johnBMI = jonhMass / johnHeight ** 2;
var comparison = mikeBMI > johnBMI;
console.log("Mike's BMI: " + mikeBMI);
console.log("John's BMI: " + johnBMI);

console.log("is Mike's BMI is higher than John's ?", comparison);
