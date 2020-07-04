/* 
    Objects are unordered collection of key value pairs.
    Unlike arrays object are accessed using properties also
    know as keys. Like arrays objects can store any data type.
    We can access object value using their pair property
*/

// Creating object using object literals
var person = {
  firstName: "Imran",
  lastName: "Suleiman",
  birthYear: 1996,
};

console.log(person);

// Creating object using Object class and the "new" keyword
var phone = new Object({
  brand: "Goole Pixel",
  model: "Googel pixel 3xl",
});

console.log(phone);

// Accessing object values using the dot notation
console.log(person.firstName);
var lname = person.lastName;
console.log(lname);

// Access object values using the bracket notation
/* 
In between the bracket we must pass string representation of the
value.
*/
var fname = person["firstName"];
// We can do something like this when not passing string directly
var year = "birthYear";
console.log(fname, lname, person[year]);

// Mutate object using the dot notation
person.lastName = "Great";

// Mutate object using the bracket notation
person.birthYear = 1980;

console.log(person);

// Adding new key value pairs using the dot notation
person.profession = "Software Developer";
console.log(person);

// Adding new key value pairs using the bracket notation
person["isMarried"] = false;
console.log(person);
