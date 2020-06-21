// We use loop to run certain block of code multiply times

// FOR LOOP
/* function one() {
  var i = 0;
  console.log("First");
  return i;
}

function two() {
  console.log("Second");
  return 10;
}

function three() {
  console.log("Third");
  return 1;
}
for (var i = one(); i < two(); i += three()) {
  console.log(i);
} */

// Below is how we normally write for loop, i did that for demonstration.
/* for (var i = 0; i < 10; i++) {
  console.log(i);
} */

// We can increment by any number we want
/* for (var i = 0; i <= 20; i += 3) {
  console.log(i);
} */

/* 
1. var i = 0; is the initial state that is set before the start
of any loop.
2. i < 10; is the condition that is checked before any iteration
    in the loop.
3. i++; is the code that is run after each iteration
*/

/* A more practical use case of for loop is to loop through
 an array */

var john = ["John", "Doe", 45, true, "Software Developer"];
/* 
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
} */

/* 
    Array.length will always be greater than the last index of
    the array by one because of the zero based index of javascript
    arrays. 
    We use the length to set our conditional, as "i" the counter
    is less than the array length, so our conditional will be 
    false when the counter reach the value of the array length
    which will be right after the value of the last index of the
    array.
*/

// WHILE LOOP
/*
    A while unlike the for loop just take in the condition
    and keep running while it is true
 */
// Let's do exactlty what we did with the for loop
/* var i = 0;
while (i < john.length) {
  console.log(john[i]);
  // We must increment if not the conditional will loop forever
  i++;
} */

// We can also loop throught numbers
/* var j = 0;
while (j < 10) {
  console.log(j);
  j += 2;
} */

// DO WHILE LOOP
/* 
    Do while is just like while loop but it must iterate atleast
    one time even if the condition is false. Let see example.
*/
/* var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
 */
/* 1. It goes through the while block scope first then
to the condition. That means the first iteration always run. */

// CONTINUE STATEMENT
/* 
    The continue statement quit out of the current iteration
    and move to the next one base on a condition
*/

// log only odd numbers
/* for (var i = 0; i <= 10; i++) {
  if (i % 2 === 1) continue;
  console.log(i);
} */

// Another example
var imran = ["Imran", "Great", 23, false, "Software Developer"];

// log only string type values
/* for (var i = 0; i < imran.length; i++) {
  if (typeof imran[i] != "string") continue;
  console.log(imran[i]);
} */

// BREAK STATEMENT
/* 
    The break statement exit completely from the current loop.
    It stops the loop entirely.
*/

// break when the item equal 23
/* for (var i = 0; i < imran.length; i++) {
  if (imran[i] == 23) break;
  console.log(imran[i]);
} */

//Another example
// silly one but the loop stops when it reaches 5
/* for (var i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("Breaking the loop");
    break;
  }

  console.log(i);
} */

// Mini Challenge ==> Looping backwards
// Iterate the items in the opposite direction
/* var animals = ["cat", "dog", "elephant"];

for (var i = animals.length - 1; i >= 0; i--) {
  console.log(animals[i]);
} */

//
//
//
//
//
//
//

// *******************CODING CHALLENGE 5*********************
/* 
  Remember the tip calculator challenge? Let's create a more
  advanced version using everything we learned.

  This time, John and his family went to 5 different restaurants.
  The bills were $124, $48, $268, $180 and $42.
  John likes to tip 20% of the bill when the bill is less than $50,
  15% when the bill is between $50 and $200, and 10% if the bill is
  more than $200.

  Implement a tip calculator using objects and loops:
  1. Create an object with an array for the bill values.
  2. Add a method to calculate the tip.
  3. This method should include a loop to iterate over all
  the paid bills and do the tip calculations.
  4. As an output create:
  (i) A new array containing all tips
  (ii) An array containing final paid amounts (bill + tip);
  Hint: start with two empty arrays as properties and fill them
  up in the loop.
*/

var john = {
  fullName: "John Doe",
  bills: [124, 48, 268, 180, 42],
  tips: [],
  finalAmounts: [],
  calcTip: function () {
    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];

      var percentage;

      if (bill < 50) {
        percentage = 20 / 100;
      } else if (bill >= 50 && bill < 200) {
        percentage = 15 / 100;
      } else {
        percentage = 10 / 100;
      }

      var tip = bill * percentage;
      var finalAmount = tip + bill;
      this.tips.push(tip);
      this.finalAmounts.push(finalAmount);
    }
  },
};

john.calcTip();

// Next challenge
/* 
  Mark's family also went on a holiday, going to 4 different restaurants.
  The bills were $77, $475, $110 and $45.
  Mark likes to tip 20% of the bill when the bill is less than $100,
  10% when the bill is between $100 and $300, and 25% if the bill is
  more than $300 (different than John).

  1. Implement the same functionality as before, this time using Mark's
  tipping rules.
  2. Create a function (not a method) to calculate the average of a given
  array of tips.
  3. Calculate the average tip for each family
  4. Log to the console which family paid the highest tips on average 
*/

var mark = {
  fullName: "Mark Phil",
  bills: [77, 475, 110, 45],
  tips: [],
  finalAmounts: [],
  calcTip: function () {
    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];

      // I personally decided to use switch here
      var percentage;
      switch (true) {
        case bill < 100:
          percentage = 20 / 100;
          break;
        case bill >= 100 && bill < 300:
          percentage = 10 / 100;
          break;
        default:
          percentage = 25 / 100;
      }

      var tip = bill * percentage;
      var finalAmount = tip + bill;
      this.tips.push(tip);
      this.finalAmounts.push(finalAmount);
    }
  },
};

mark.calcTip();

// Calculate the average array of tips
function calcAverage(tips) {
  var sum = 0;
  // I personally decided to use while loop here.
  var i = 0;
  while (i < tips.length) {
    sum += tips[i];
    i++;
  }

  return sum / tips.length;
}

// Store the average within each data
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

// Display who has the higest average tip
if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family paid the highest average tip with " +
      john.average +
      " than " +
      mark.fullName +
      "'s family " +
      mark.average +
      " average tip."
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s family paid the highest average tip with $" +
      mark.average +
      " than " +
      john.fullName +
      "'s family $" +
      john.average +
      " average tip."
  );
} else {
  console.log(
    mark.fullName +
      " and " +
      john.fullName +
      "families paid the same tip average of $" +
      mark.average
  );
}
