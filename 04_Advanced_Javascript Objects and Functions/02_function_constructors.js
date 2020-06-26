// Function Constructors
/* 
    In javascript there are different ways to create object, but the
    most commonly used one is the funtion constructor.
    Function constructor is a commonly used pattern in Javascript, this 
    pattern is like a standard way that we have to solve a problem always
    in the same way.

    Function constructor is a pattern to write like a blueprint for objects.
    Like we've discussed in the last section, where we said we can write a
    Person constructor as a blueprint to create instances of Person's object
    e.g the John object.
*/

// Using object literals
var john = {
  name: "John Doe",
  yearOfBirth: 1990,
  job: "Teacher",
  calculateAge: function (currentYear) {
    console.log(currentYear - this.yearOfBirth);
  },
};

// console.log(john);

// Function constructor (The Person blueprint)
/* 
    It is a convention to use uppercase to write the first letter
    of the constructor name when writing a function constructor
*/
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // Each Person's instance will have this method attached to it.
  this.greet = function () {
    console.log("Hello " + this.name);
  };
};

// Instanciate a new object
var mike = new Person("Mike Phil", 1994, "Football Coach");

/* 
    1.  When we create a new object using a function constructor, we said
    we INSTANCIATE a new object because any object created with that
    constructor will be an instance of the constructor that created it.

    2.  Normally when we call regular function, the "this" keyword of that
    function will point to the global object. But pointing every object we
    instanciate to the global object will make no sense. The "new" keyword
    comes to the rescue and prevent our function constructor from pointing
    to the global object.

    // The "new" keyword

    3. When we first call the constructor function with the "new" keyword,
    here is what happen:
    (i) The "new" keyword create a NEW EMPTY object
    
    (ii) The "new" keyword then call the function. Rememebr, every function
    call create a new execution context with the "this" keyword assigned
    before the function start executing.

    (iii) The "new" keyword then point the "this" keyword to the new empty 
    object that was created at the beginning by the "new" keyword.

    (iv) When the function runs, the "this" value will be our new empty object,
    so setting properties or methods on the "this" keyword will point to our new
    empty object.

    3. If nothing is set to return from the constructor function then the return
    value will be the new object that was created.

    4. The value will then be assigned to the variable that call the constructor
    function.

*/

// INHERITANCE
/* 
    To simply add a method to our instances, we can simply add it as a property
    in the function constructor. Imagine we have 20 methods and each one contains
    atleast 100 lines of code, setting those methods in the constructor will then
    provide 20 methods for every object that is created using that function 
    constructor. But that will not be efficient because every object will have
    20 methods each.
    This is where inheritance come into play, instead of having 20 methods
    directly attached to each object, we will add those 20 methods to the 
    prototype property of the function constructor, that way the instances
    will inherit all the methods and can call them. This way the methods are
    not directly attached to the instances of the function constructor.
    
    Let's look at inheritance in practice.
*/

var jane = new Person("Jane Lar", 1967, "Doctor");

/* 
This method will not be attached to each instance but instead it will inherit
the method from the function constructor.
*/
Person.prototype.calculateAge = function (currentYear) {
  console.log(currentYear - this.yearOfBirth);
};

// Calling the inherited method to prove that inheritance work
jane.calculateAge(2020);
mike.calculateAge(2020);
// Calling attached methods
jane.greet();
mike.greet();

/*
    Inheritance are commonly used with methods, but they can also be use
    with properties as well. Using inheritance with properties is not very
    common but we can also do that.
*/

Person.prototype.isAdmin = false;

console.log(jane.isAdmin);
console.log(mike.isAdmin);

// console.log(jane);
