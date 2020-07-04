// DIFFERENCE BETWEEN PRIMITIVES AND OBJECTS VALUES
/* 
    The major difference between primitives values and objects
    is:
    I. When we assign a primitive value to a variable, that variable
    store the exact form of that value.
    WHILE
    II. When we assign an object to a variable, we are not actually
    assigning that object value to the variable, instead the variable
    stores the reference to that object in memory
    
    Let see that in practice
*/

var a = 30;
var b = a;

var a = 23;

/* 
    What really happened in the above code:

    I. We Declare variable "a" and assign it to 30

    II. Declare varibale "b" and assign it to the value of variable "a",
    meaning a copy of variable "a" value assign to "b". Variable "b" has
    nothing to do with variable "a", it just make a copy of it.
    
    III. We then changed variable "a" to 23. This change will not change
    variable "b" value because each variable has its own different value.

    It just like copying the design of a house, if the original house design
    you copied from is changed, that should'nt affect your house, becuase
    they are two different houses now.

*/
console.log(a);
console.log(b);

// Let do the same with objects and see the outcome
var obj1 = {
  name: "Imran",
  city: "Kaduna",
};

var obj2 = obj1;

obj1.city = "Lagos";

/*
    What really happened with obj1 and obj2:

    I.  We declare variable obj1 and assigned it to an object

    II. We declare variable obj2 and assigned it the value of
        variable obj1. As we already know, variables stores the reference
        to the object that is assign to them not the object itself. In
        our case here that means obj2 is assigned the reference value of
        the object that was assigned to obj1, which also just store the
        reference value. i.e If the reference value in memory is 0.3322,
        then both obj1 and obj2 will reference to this reference number.

        So when we finally mutate the object then it will affect all variables
        that have reference to it memory.

    
    III. We changed obj1 city property value to "Lagos".
        Since both obj1 and obj2 now refernce the same value in memory,
        changing obj1 will also affect obj2 because they are pointing to
        the same value in memory.


*/
console.log(obj1);
console.log(obj2);

// Prove that variables stores reference to objects but not the form of the objects.
var x = { name: "Hello" };
var y = { name: "Hello" };

/* 
    Because the variables stored the reference in memory to this objects.
    Then the comparison will be false even though they have the same form
    of value, because is not the object form that is compared but the reference
    value in memory. 
    variable "x" may have a reference value of 939839002289302
    variable "y" may have a reference value of 939839002289303
    // And memory reference will always be different
*/
console.log(x == y);
console.log(x === y);

// Let see the comparison with primitive values
var name1 = "Imran";
var name2 = "Imran";

/* 
    Variables stores the actual form of primitive values not the reference,
    name1 will store "Imran" and name2 will also store "Imran". They are
    different variables but their values are the same because we are comparing
    the form not the reference in memory. "Imran" will always be "Imran".

*/

console.log(name1 == name2);

// The same principle applies when passing variables as function arguments
var str = "foo";
var obj = { name: "John", surname: "Doe" };

function mutate(a, b) {
  a = "bar";
  b.surname = "Smith";
}

mutate(str, obj);

/* 
    With the primitive value, we just gave a copy of the value in
    our function argument while with the object value, we gave a
    copy of the reference of the value in memory.

    1.  The primitive value is not affected because is a totally different
        copy from the one stored in the variable.

    2.  The obj surname property is changed because the function will have to go
        to the memory to check which value is he pointing at using the reference
        that was pass to it, then it will grab that object and change it. That is
        why it affected the value in the obj variable because they reference the
        same value in memory and that value was mutated by the function.
*/

console.log(str);
console.log(obj);
