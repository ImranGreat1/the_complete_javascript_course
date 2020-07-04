// FIRST-CLASS FUNCTIONS - PASSING FUNCTIONS AS ARGUMENTS

/* 
    Before we dive into passing functions as arguments, let's
    talk about some facts about functions.
    
    // SOME FACTS ABOUT FUNCTIONS
    1. Functions are instances of the Object type.
    2. Functions also do behave like any other object.
    3. We can store functions in variables just like any other object.
    4. We can pass other functions as arguments to functions.
    5. We can also return a function from another function

    With all this facts, we say we have FIRST-CLASS FUNCTIONS in
    Javascript.

    With that being said, let's take a look at how we can pass
    functions as an argument to other functions
*/

/* 
    Let's create a function that takes in an array as the first argument
    and a function as the second argument. The function will loop through
    the array and for each item we will call the callback function on that
    item and finally we will return the array of the calculated items;
*/

function arrayCalc(arr, fn) {
  var arrResult = [];
  for (var i = 0; i < arr.length; i++) {
    // Callback function in action
    var element = fn(arr[i]);
    arrResult.push(element);
  }

  return arrResult;
}

var years = [1990, 1988, 1996, 2004, 1947];

// Callback function
function calculateAge(el) {
  return 2020 - el;
}

var ages = arrayCalc(years, calculateAge);

console.log(ages);

/* 
  Let us briefly explain what happened in the above code.

  1. We created a function that takes in an array and a function
  as the first and second argument consecutively.

  2. That function we passed as argument is commonly known as a
  CALLBACK FUNCTION. It is call a callback function because
  we do not literally call it ourselves but the function that
  received it as argument call it during execution. That means
  we don't use () when we pass it to the function, as we will
  normally do when calling a function.
  
  3. We create a generic function that loops through and array
  and with each loop item we decide what to do with it based
  on the function we passed as argument. In our case here, we
  created a callback function that calculate the age of each
  item in the array of years of birth that we passed to it.

  4. Within our generic function, we create a new array that
  we push the result of each calculated loop item into and at
  the end, we return the array of the loop result. In our case
  of the above example we return the array of ages

  We can think of our generic function as a machine that receives
  an array and perform some action on each item of the array based
  on the instruction (function) pass to it.
*/

/*
  Let's create a callback function that receive a person's age and
  return a boolean based on whether if the person is of full age
  or not, meaning the person is up to 18 years old.
*/

function isFullAge(el) {
  return el >= 18;
}

var fullAge = arrayCalc(ages, isFullAge);
console.log(fullAge);

// let's use it with string array
function toObject(el) {
  return { name: el };
}

var names = ["John", "Jane", "Mark", "Mike"];

var objNames = arrayCalc(names, toObject);
console.log(objNames);

/* 
  We will calculate the maximum heart rate of a person, measured in beat per
  minute which is also calculated using the age of a person.

  The formular is 206.9 - (0.67 * age) => applied for ages between 18 and 81.
*/

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var heartRates = arrayCalc(ages, maxHeartRate);
console.log(heartRates);

/*
  NEW STUFF LEARNED.
  Math.round(2.45) => 2, Math.round(16.566) => 17 
  The round method of the Math object round numbers to their
  nearest whole number
*/
