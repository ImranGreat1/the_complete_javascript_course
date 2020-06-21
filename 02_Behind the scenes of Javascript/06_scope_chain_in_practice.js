// THIS SPACE IS THE GLOBAL SCOPE

var a = "Hello!";

first();

function first() {
  // This is a local scope
  var b = "Great";
  second();

  function second() {
    var c = "Dream chaser!";
    console.log(a, b, c);
  }
}

// Let discuss what happens with the above
/* 
1. We declare variable "a" and the function "first" in the
global scope.

2. The "first" function is in written in the global scope so it
has access to the variables and functions in that scope. That
means the variable object of the global execution object will be
added to the scope chain of the "first" function in the function
execution object

3. Likewise the second function has access to the "first" function
scope because it is written inside the "first" function. Having 
access to the first function also gives us access to the global
scope which the first function is sitting.

4. In the second function we log the variable a, b and c which the
second variable has access to in it scope.
*/

// ANOTHER EXAMPlE

var x = "Xylophone!";

one();

function one() {
  // This is a local scope
  var y = "Yoyo!";
  two();

  function two() {
    var z = "Zebra";
    // We have access to "three" function because it is in the global scope
    three();
  }
}

function three() {
  var f = "Food";
  /* We don't have access to variable y and z in this function scope because
is not sitting inside of any of the function that has that variable */

  //   console.log(y);
  //   console.log(z);

  //   We have access to the x variable because it is defined in the global scope
  console.log(x);
  console.log(f);
}
