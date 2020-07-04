/* 
    The Javascript console is a very powerful tool. we can use it
    not just to log something on the console but we can also inspect
    objects and their prototype chains.
*/

// Let use our Person constructor
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // Each Person's instance will have this method attached to it.
  this.greet = function () {
    console.log("Hello " + this.name);
  };
};

Person.prototype.calculateAge = function (currentYear) {
  console.log(currentYear - this.yearOfBirth);
};

var john = new Person("John Doe", 1991, "Instructor");

Person.prototype.isAdmin = false;

// What to check in the console
/*
    In the console objects prototype are represented by __proto__
    1. john.__proto__ === Person.prototype

    2. Inspect the john.__proto__ and Person.prototype, you'll 
    find also the prototype property of the Object function constructor.
    Like we said earlier every object created is an instance of the Object
    object which is the Object function constructor

    3. Within Person function constructor, you'll also find another prototype,
    which is the prototype property of the Object function constructor.
*/
// console.log(john.__proto__ === Person.prototype);

/*
Because of the prototype chain we can use the methods provied by the 
prototype property of the Object function contructor within our john object
*/

// hasOwnProperty
// Let use the hasOwnProperty method that checks if a property exist in an object
// console.log(john.hasOwnProperty("name"));

// This will return false because it is not john's OWN property but inherited one.
// console.log(john.hasOwnProperty("isAdmin"));

/* 
// instanceof
instanceof operator => checks if an object is an instance of a certain function 
constructor
*/

// console.log(john instanceof Person);

// Prove that almost everything is an object using arrays
var nums = [1, 2, "hello"];
// console.log(nums);

/*
    All arrays are instance of the Array function constructor which
    is a build-in function constructor in Javascript. We have used
    some of the methods provided to us in the prototype property
    of the Array function constructor e.g push, pop, shift and unshift
    methods provided to all instances of the Array.
    The Array is also an instance of the Object object as every object
    in Javascript
*/

// Prove that arrays are as well objects
// console.log(nums.length);

// console.log(nums.__proto__ === Array.prototype);

// console.log(Array.prototype.hasOwnProperty("unshift"));
