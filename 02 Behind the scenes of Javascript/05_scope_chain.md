What is scope in Javascript?
Scape answer the question "Where we can access certain variables
and functions within our code.

EVERY FUNCTION CREATE A NEW SCOPE
A function scope is a space/environment where the variables
and functions that a function declares can be accessible.

LEXICAL is the position or space in which something is written
in the code.
LEXICAL SCOPING is the position in which a function is lexically
sitting(written) within another function.
When a function is lexically scoped (written) in another function,
that function get accessed to the outer function scope(parent function)
in which it is written in.

In other programming scope can be created using if statement, for
and while loop and other programming structures, but that is not
the case in Javascript. In Javascript you have to write a new
function to create a new scope, and this is very important to know.

STEPS IN WHICH SCOPES ARE CREATED
Just like the global execution context let think of the default scope as
the global scope.

1. Let say we have a function A written in the global scope, that
   function will have access to the scope (variables and functions)
   of the global scope.

2. Let also say function B is written within function A, then function
   B will have access to function A scope and also the global scope
   in which function A is sitting at.

3. But function A don't have access to function B scope, also the global
   scope don't have access to function A scope. It goes from bottom to
   top and not top to bottom.

4. The accessibiliy of function B to function A scope and function A scope
   to the global scope create the SCOPE CHAIN.

HOW ARE THE SCOPE CREATED

1. When we define a function, during the creation phase of the execution context,
   that function will get the variable object of the scopes it has accessed to in
   its SCOPE CHAIN property of the execution context object.

2. Now that function has accessed to all the variable objects that are it scope chain.
   And as we may remember the variable objects contains function and variable declarations
   of a scope.

THERE ARE DIFFERENCES BETWEEN EXECUTION STACK AND THE SCOPE CHAIN.

(First)
(I) Execution stack is the order in which the functions are called
(II) Function scope is the order or position in which the function
is lexically written in the code.

LET SEE SCOPE IN PRACTICE FILE FOR EXAMPLES
