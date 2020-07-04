// Methods are functions that are inside an objects

var person = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1996,
  // Method
  fullName: function () {
    /* We access the whole object using "this" key word within
        the object, that is when we can this within this current
        object we are referencing to the person object */
    // console.log(this);
    return this.firstName + " " + this.lastName;
  },

  calcAge: function (currentYear) {
    // Set property of age
    this.age = currentYear - this.birthYear;
  },
};

// console.log(person.fullName());

person.calcAge(2020);
// console.log(person.age);

//
//
//
//
//
//
//  CODING CHALLENGE 4
/* 
  Let's remember the first coding challenge where Mark and John compared
  their BMIs. Let's now implement the same functionality with objects and
  methods.
  1. For each of them, create an object with properties for their full name,
  mass, and height
  2. Then, add a method to each object to calculate the BMI. Save the BMI to
  the object and also return it from the method.
  3. In the end, log to the console who has the highest BMI, together with the
  full name and the respective BMI. Don't forget they might have the same BMI.
  
  // Formular for calculating BMI ==> mass / height**2
*/

var mike = {
  fullName: "Mike Phil",
  mass: 78, // in kg
  height: 1.69,
  calcBMI: function () {
    var BMI = this.mass / this.height ** 2;
    this.BMI = BMI;
    return this.BMI;
  },
};

var john = {
  fullName: "John Doe",
  mass: 92, // in kg
  height: 1.95,
  calcBMI: function () {
    var BMI = this.mass / this.height ** 2;
    this.BMI = BMI;
    return this.BMI;
  },
};

console.log(mike.fullName, mike.calcBMI());
console.log(john.fullName, john.calcBMI());

// Calculate who has more BMI
function whoHasMoreBMI(person1, person2) {
  if (person1.BMI > person2.BMI) {
    console.log(
      person1.fullName +
        " has the highest BMI with " +
        person1.BMI +
        " than " +
        person2.fullName +
        "'s " +
        person2.BMI
    );
  } else if (person2.BMI > person1.BMI) {
    console.log(
      person2.fullName +
        " has the highest BMI with " +
        person2.BMI +
        " than " +
        person1.fullName +
        "'s " +
        person1.BMI
    );
  } else {
    console.log(
      person1.fullName + " and " + person2.fullName + " have the same BMI"
    );
  }
}

whoHasMoreBMI(john, mike);

john.height = 1.8;
// recalculate the BMI after changing the height or mass
john.calcBMI();

whoHasMoreBMI(mike, john);
