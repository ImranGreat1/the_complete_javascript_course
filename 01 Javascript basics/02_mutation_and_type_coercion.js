/* 
    MUTATION
    Javascript values in a variable can be change to whatever
    value and whatever data type you like. Because Javascript
    is dynamically typed language, Javascript will immediately
    recognise the data type of the language
 */

var month = 1;
month = 'January';
console.log(month);

// TYPE COERCION
// Coercion is the act of converting one data type to another

age = 23;

/* When we concatenate a non string type to a string data type
   that non string data type will get coerce to a string type
 */
console.log(age + ' years');

// Another example
var name, age, isMarried;
name = 'Imran';
age = 23;
isMarried = false;
// age and isMarried will be coerced to string
console.log(name + ' is ' + age + ' years old. Is he married? ' + isMarried);

// We can also use alert to output string to the browser
// alert('Hello world!');

/* We can use prompt method to get data from the user
Note: All data coming from prompt are of string type
*/
// var yearOfBirth = prompt('What your year of birth ?');
// console.log(yearOfBirth);
// console.log(typeof yearOfBirth);
