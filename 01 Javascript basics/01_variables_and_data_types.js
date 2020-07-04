// VAriables are like containers to store data or values

// Variables rules
/* Variables must start with can only start with letters a-z (A-Z),
dollar sign ($) and underscore (_). Variables can include numbers but
not at the beginning. e.g item1 and item2 are valid variables
*/

/* We have to declare a variable before we can use it. We can declare
a variable with the 'var' keyword
*/

var firstName = 'Imran';
console.log(firstName);

// We can define/declare a variable without a value
// But a default value of undefined will given to it
var lastName;
console.log(lastName);

// We can define mutiple variables in oneline
var age, work, address;

age = 23;
work = 'Software Developer';
address = 'Kaduna, Nigeria';

console.log(firstName + ' is a ' + work + ' in ' + address + '.');

/* Javascript has reserved keywords that cannot be used as variables
    e.g if, function, var, for etc.
*/

/*
 In Javascript we have 5 basic primitive data types
string
number
boolean
undefined
null

 // There are also two new other primitive data types
symbol
bigInt
 */

//  String
var greet = 'Hello World';

// Number
var num = 12;

// boolean ---> values can only be true/false
var isMale = true;

// undefined
var experience = undefined;

// null
var projects = null;

// symbol
var sym = Symbol('unique');

// bigInt  --> very large number ending with "n"
var amLarge = 166782933903n;
console.log(typeof amLarge);
