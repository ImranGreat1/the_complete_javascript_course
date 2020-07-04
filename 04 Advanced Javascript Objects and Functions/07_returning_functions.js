// FIRST-CLASS FUNCTIONS - RETURNING FUNCTIONS FROM OTHER FUNCTIONS
/*
    One of the fact that makes javascript functions first-class functions
    is the ability to return a function from another function.
    Functions are always first-class functions in Javascript because they
    are effectively objects.

    So let see that in practice.
*/

/*
We will build a function that generate return another function, this
function will generate a different function based on different jobs.
The returned functions will ask the user an interview question based
on the job he try to applied for.
*/

function questionGenerator(job) {
  switch (job) {
    case "Developer":
      return function (name) {
        console.log(name + ", can you deploy a production ready app?");
      };
    case "Teacher":
      return function (name) {
        console.log(name + ", what are the qualities of a good teacher?");
      };
    case "UX/UI":
      return function (name) {
        console.log(
          name + " can you briefly explain the job of a UX/UI designer?"
        );
      };
    default:
      return function (name) {
        console.log(name + ", explain what you actually do?");
      };
  }
}

/*
    This similar to how we assign functions to variables but this time we are
    returning it from a function.
*/
var teacherQuestion = questionGenerator("Teacher");

teacherQuestion("John");
teacherQuestion("Jonas");

var developerQuestion = questionGenerator("Developer");

developerQuestion("Imran");
developerQuestion("Samson");

// We can also call it without storing in a variable
questionGenerator("Hacker")("Anonymous");
/*
    We can do this because this runs from left to right, first it returned
    the generated function and then call it immediatetly
*/

// NOTE: This technique is super powerul in Javascript
/* 
    With this technique we can write one generic function that return
    a more specific function based on an input, property or something,
    just like we did with our questionGenerator. This generic functions
    will then produce bunch of more specific questions.
*/
