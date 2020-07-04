EXECUTION CONTEXT

Every javascript code is run in an execution context.We can associate
an execution context with an object. The Default execution context is
associated with the global object.

What is an execution context?
An execution context is a box or container or wrapper which stores
variables and in which piece of our code is evaluated and executed.
An execution context can be think of as an object which contains
properties that store important data of that context.

In the browser, the default execution context is the window object.
So when we define a variable is like setting a property on the global
object which is the window in the case of the browser.
e.g firstName === window.firstName // true

WHICH CODES ARE IN THE GLOBAL OBJECT OR THE GLOBAL EXECUTION CONTEXT

1. All code that are not inside of any function.

If any code that is inside a function is not in the global execution
context then which execution context are they in ?
####### When we call a function, that function get a new execution context,
this new execution context is then put on top of the current execution
context making the so called execution stack.
####### During the duration of that function call that function execution
context becomes the current execution context. And when the function
finished executing and is returned the function execution context is
removed from the execution stack.
######### Also when another function get called within another function
execution context then that new function call with get a new execution
context that will get put on top of the current execution context which
is part of the execution stack, making this new function call the current
execution context through the duration of it execution.
