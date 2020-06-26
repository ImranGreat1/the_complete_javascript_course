//OBJECT.CREATE
/* 
    Object.create method allow us to create an object that inherit from a
    prototype. We first create the object we want to use as prototype then
    we create our object based on that prototype object we create.

    Let see object.create in practice
*/

// Create the object that will server as the prototype
var personProto = {
  calculateAge: function (currentYear) {
    if (currentYear) {
      console.log(currentYear - this.yearOfBirth);
    } else {
      console.log(2020 - this.yearOfBirth);
    }
  },
};

/*
Create our object using the Object.create method.
It takes the prototype as the first argument
*/
var john = Object.create(personProto);

john.name = "John";
john.yearOfBirth = 1990;
john.job = "Teacher";

console.log(john);
john.calculateAge();

/*
    In the above example we create an object that inherit the calculateAge
    method. But as we can see doing this is not ideal, we have to set the
    prototype with an empty object first before we set other properties
    of the object.
    
    Fortunately Object.create method takes in the object we want to create
    as the second argument. But the object we pass in will be slightly
    different from how we define object.

    The values of the properties of the object we pass as second argument
    to the Object.create method must also be an object, this object will
    contain a value property which will be the value of the original
    property when the object is created.
    
    Let see that in action
*/

var mary = Object.create(personProto, {
  name: { value: "Mary" },
  yearOfBirth: { value: 1984 },
  job: { value: "Mother" },
});

console.log(mary);
mary.calculateAge();

// Confirm Personproto object is mary's and john's prototype
console.log(mary.__proto__ === personProto);
console.log(john.__proto__ === personProto);

/* 
    Object.create is just another way to create objects that inherit
    from a prototype, but still the function constructor is the most
    used pattern to create object that inherit from a prototype.

    The Object.create though is more flexible that the function constructor
    pattern and can be use to create complex structures because it allows us
    to choose the object we want as prototype for different objects.

*/

// Difference between Object.create method and function constructors
/* 
    Objects created using the Object.create method inherit directly
    from the object that is passed to the Object.create method as the
    first argument.
    WHILE
    Objects created using function constructors inherit methods and
    properties from the prototype property of the constructor.
*/
