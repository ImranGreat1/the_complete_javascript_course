/* getElementById => is a document method that get HTML element
ONLY by their ID. Is faster that getting IDs with querySelector.
We dont need hashtag before the reference keyword
*/
console.log(document.getElementById("word").textContent);

/* addEventlistener => is a document object method, that add 
event listener to a HTML element. We are basically saying that
if a certain event fires, run the following funtion.
It receives two argument, the event type and the callback function
which is what will run when that event is fired. There are different
kinds of event such as click, mouseover, hover etc. 
*/

document.querySelector(".btn").addEventListener("click", function () {
  // This is a callback function as well as an anonymous function.
  document.querySelector(".btn").textContent = "Thanks!!!";
  document.querySelector(".txt").textContent = "Thank you for following me.";
});

/*
  HOW EVENT HANDLERS WORK

1. Event handlers are stored in the javascript engine in a place
   called the message queue waiting for the event to be triggered.
   This is where all the events that happen in the browser are put.
2. Event are only triggered after all the execution context in the
   execution stack have return, only the global execution context remaining.
3. An event handler create a new execution context since after all
   is just a function waiting to be called
*/

/*
    A callback function: is a function that is passed to another function
    as an argument which in turn, is called by that function. Meaning, we
    basically do not call a callback function ourselves, it is called by
    the function that receives it as an argument. When we have a function
    foo that we want to pass as a callback, we don't pass it using foo(),
    that is calling it but instead we just pass the name as foo.
*/

/* 
    An anonymous function: is a function that doesn't have a name. We use
    anonymous functions when we only want to use that function once and we
    have no intensions in re-using it anywhere. We've used anonymous function
    in our click handler in the above example as the second argument.
*/

// we can change an img element src attribute value using
document.querySelector(".btn-change").addEventListener("click", chaneImage);

// This is also a valid callback function but is not an anonymous function
function chaneImage() {
  var imgNumber = Math.floor(Math.random() * 6) + 1;
  document.getElementById("img").src =
    "pig project/img/dice-" + imgNumber + ".png";
}

/*
  SUMMARY:
  event-listeners: are actions perform in the browser such as click, hover and so on.
  event-handlers: are the functions that wait for an event to be triggered, then it
  perform some action.
*/
