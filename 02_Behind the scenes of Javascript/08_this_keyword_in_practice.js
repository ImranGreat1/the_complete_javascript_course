/* 
Calling the "this" keyword on the global execution context
point to the windows object (in case of the browser) which 
is the default object of the browser. 
*/
// console.log(this);

// ACCESSING THE "this" KEYWORD IN A REGULAR FUNCTION CALL
/* 
    As we discussed earlier in the theory section, the "this"
    keyword point to the window object when we accessed it in a
    regular function call.
*/
// calculateAge(2020, 1996);

function calculateAge(currentYear, yearOfBirth) {
  console.log(currentYear - yearOfBirth);
  console.log(this);
}

// ACCESSING THE "this" KEYWORD IN A METHOD CALL

var john = {
  fullName: "John Doe",
  yearOfBirth: 1987,
  calculateAge: function (currentYear) {
    console.log(currentYear - this.yearOfBirth);
    console.log(this);
  },
};

/* 
    As we may remember the "this" keyword point to the object
    that call the method in a method call
*/
// john.calculateAge(2020);

// CALLING REGULAR FUNCTION WITHIN A METHOD
/* 
    It doesn't matter where we call a regular function, even 
    within a method which is attached to an object, that regular
    function will point its "this" variable to the global object
    or the window object in our case here.
    It will not point to the object in which it was called in.
    
    Let see example below
*/
var person = {
  name: "Jonas",
  yearOfBirth: 1993,
  calculateAge: function (currentYear) {
    // This will point to the object that calls the method
    console.log(this);
    console.log(currentYear - this.yearOfBirth);

    inner();

    function inner() {
      // This will point to the window object because is a regular function
      console.log(this);
    }
  },
};

// person.calculateAge(2020);

// PROVE THAT THE "this" KEYWORD IS SET AT THE TIME THE FUNCTION IS CALLED
/* 
    There is something called METHOD BORROWING in Javascript where we 
    assign the method of another object to another object property
    also as method. Method borrowing is actually a common pracice in Javascript.
*/

// Let borrow the method of john object that is far above in the program
var mike = {
  fullName: "Mike Phil",
  yearOfBirth: 1988,
};

// method borrowing
mike.calculateAge = john.calculateAge;

/* We will see that the "this" variable is not attached to the john object
and is only set when the function is called */

mike.calculateAge(2020);
