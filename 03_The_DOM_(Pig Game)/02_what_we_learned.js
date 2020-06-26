// Math object methods

//Math.random => generate random number between 0 and 1
console.log(Math.random());

//Math.floor => removes decimal places on number type
console.log(Math.floor(2.5));

// generates random number between 1 and 6
console.log(Math.floor(Math.random() * 6) + 1);

// document object method and properties

// querySelector => select DOM element using CSS-like selectors
console.log(document.querySelector(".header").textContent);

// textContent => get and set DOM element text just like normal object
document.querySelector(".txt").textContent = "HELLO WORLD UPDATED!!!";

/* innerHTML => get and set DOM element text, including html element if
you want. This can not be done with textContext.
*/
var word = document.querySelector("#word");
word.innerHTML = "<em>" + word.textContent + "</em>";

// adding or modifying style using the querySelector and style property
document.querySelector(".txt").style.backgroundColor = "yellow";

/*
    NOTES
    1. querySelector select only the first item it found.
    2. querySelector can not insert HTML elements, only text.
    3. innerHTML can insert both HTML elements and text
*/
