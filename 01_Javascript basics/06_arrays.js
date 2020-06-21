/* 
    Arrays in javascript are ordered collection of data, that can be accessed
    using numeric index. Javascript array index start from 0, that is the first
    item has an index 0. That is to say Javascript arrays are zero based.
    We can store any kind of data type in array, even other arrays.
*/

// creating array using array literals
var myArray = ["Imran", 23, true];
// console.log(myArray);

// creating array using the Array class with the "new" keyword
var names = new Array("John", "Mike", "Doe");
// console.log(names);

// to access an array value we use the bracket notation
// console.log(myArray[0]);
var age = myArray[1];
// console.log(age);

// Mutating array
myArray[2] = false;
// console.log(myArray);

// Adding items to array using the bracket notation
myArray[3] = ["Javscript", "CSS"];
// console.log(myArray);

/* 
    We can add value to any index we want, the index that
    are left out will be undefined by default.
*/
/* myArray[10] = 10;
console.log(myArray);
console.log(myArray[8]);
 */

// Access the number of items in an array
// console.log(myArray.length);
// Using the length property to add item to the end of the list
myArray[myArray.length] = "before";
myArray[myArray.length] = "after";
// console.log(myArray);

// ARRAY METHODS

// PUSH => Add item to the end of the array
myArray.push(null);
// console.log(myArray);

// POP => Remove item from the end of the array
var nums = [1, 2, 4, 6];
nums.pop(); // returns the removed item from the arry
// console.log(nums);

// UNSHIFT => Add to the beginning of the array
myArray.unshift("Great");
// console.log(myArray);

// SHIFT => Remove item from the beginning of the array
// console.log("Removed item =>", nums.shift()); // returns the removed item
// console.log(nums);

/* INDEXOF => return the index of the item passed to it as
argument or return -1 if that item is not in the array */

// console.log(myArray.indexOf("Imran"));
// console.log(myArray.indexOf("Nigeria"));

// myArray[myArray.length] = "Suleiman";

/* if (myArray.indexOf("Suleiman") === -1) {
  myArray[myArray.length] = "Suleiman";
  console.log("Added Suleiman to the list");
} else {
  console.log("Name already exist.");
} */

// console.log(myArray);

//
//
//
//
//

//  CODING CHALLENGE 3

/* 
  John and his family went on a holiday and went to three different
  restaurants. The bills were $124, $48 and $268.

  To tip the waiter a fair amount, John created a simple tip calculator
  (as a function). He likes to tip 20% of the bill when the bill is less
  than $50, 15% when the bill is between $50 and $200, and 10% if the
  is more than $200.

  In the end John would like to have 2 arrays
  1) Containing all three tips (one for each bill)
  2) Containing all three final paid amounts (bill + tip)

*/

// Solution

function calcTip(bill) {
  switch (true) {
    case bill < 50:
      return bill * (20 / 100);
    case bill > 50 && bill < 200:
      return bill * (15 / 100);
    case bill > 200:
      return bill * (10 / 100);
  }
}

var tipArray = [calcTip(124), calcTip(48), calcTip(268)];
console.log(tipArray);
var totalArray = [tipArray[0] + 124, tipArray[1] + 48, tipArray[2] + 268];
console.log(totalArray);

console.log(calcTip(100));
console.log(calcTip(300));
console.log(calcTip(10));

// Instrunctor solution
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill > 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }

  return bill * percentage;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

var finalValues = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(tips);
console.log(finalValues);
