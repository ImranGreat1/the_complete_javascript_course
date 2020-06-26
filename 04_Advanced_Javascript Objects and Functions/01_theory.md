Everything is an Object in Javascript (Almost Everything)
The popular saying of everything is an object in Javascript is not
eniterly true because we have two big different type of values,
primitives and objects.

// Primitives values are:

1.  string
2.  number
3.  boolean
4.  undefined
5.  null

// Then everything else is an object, including

- functions
- arrays
- Dates
- objects
- Number, String, Boolean wrappers etc.

Almost everything in Javascript is an object in Javascript, that is
what makes the language unique and different from other popular programming
languages, like python, Java, C++ etc.
Objects are not just for storing data which is what we previously
only use them for. Object are use also for complex stuff under the surface.

// OBJECT-ORIENTED PROGRAMMING
In very simple terms, object-oriented programming makes heavy use of objects,
properties and methods. This objects interact with one another to make complex
applications.
We use object to store data, structure our codes(applications) and keep our
codes clean.

Imaging we want to create three different objects for three different people
with the same properties and methods. We usually will use object literal and
store each person object in a different variable.
---What if we have like a blueprint that we can use to create all three persons
without the need to create each object seperately

--- In Javascript we have what we called a CONSTRUCTOR/PROTOTYPE that allow us
to create a blueprint for objects, this constructor is also an object but a
special one. In other programming languages, this constructor is popularly known
as a CLASS.
----The contructor is used to create objects of particular properties and
methods that the contructor defined, this new objects that are created from the
constructor are instances of that constructor object.

// INHERITANCE
In simple terms, Inheritance is when one object is based on another object.
Inheritance is when one object get access to another object properties and
methods.

---Imagine we have a Person constructor that produces instances of persons
and that Person constructor has name, job, yearOfBirth properties and calcAge
method.
--- We also have an Athlete constructor that produces instances of athletes,
that Athlete constructor has it own unique properties such as olympicsParticipation,
medalsWon properties and alloweParticipation method.
But an Athlete also has a name, yearOfBirth and basically all that a person has,
instead of the Athlete contructor creating those properties and methods, we can
decide to inherit from the Person constructor and that will give us access to all
it properties and method. Now the Athlete contructor will include it own unique
properties and methods as well as the ones of the Person constructor.
--- Let look now look at how javascript handle inheritance.

// PROTOTYPES AND PROTOTYPE CHAINS
Javascript is a prototype-based language which means inheritance works by using
something call prototypes. In practice, this means every Javacript object has a
prototype property which makes inheritance possible in Javasccript.
--- Again inheritance is made possible through the prototype property every
Javascript object has.

// How does inheritance work behind the scenes using prototypes
Again every Javascript object has a prototype property that makes inheritance
possible.
--- Let go back to our Person constructor where it create instances of persons,
let assume we create a john object using the Person constructor. John will inherit
the properties and methods of the Person constructor.
--- If we want certain properties or methods to be inherit from our Person
constructor to the john object, then we must add those properties and methods
to the Person's constructor prototype property. Then any object created using
the Person's constructor will get access to the properties and methods that are
in Person constructor prototype property.

// What is really important to note here is:
The Constructor's prototype property is not the prototype of the constructor
itself.
In our case here, the Person's prototype property is not the prototype of the
Person itself, but the prototype of all the instances the Person constructor
create. In our example the Person's prototype property is the prototype of john.

--- That's not even all, the Person constructor also is an instance of an even
bigger constructor which is the Object object.

--- Each and every Javascript that we ever created is an instance of the Object
constructor which has a lot of methods in it prototype property.
--- When we access a property or a method in an object, that object first check
within it if that property or method exist, if not found, it will check its
prototype which is the prototype property of its parent and this continues to
go up the ladder until it reaches the Object constructor. When also not found
in the Object constructor, the prototype of the Object constructor will be null
and null is the only one that has no prototype and therefore is the final link
in the prototype chain and in this case undefined is returned.

This process is what is called the PROTOTYPE CHAIN. The prototype chain is what
makes inheritance possible in Javascript. That is why when we access a property
that doesn't exist, it returns undefined.
