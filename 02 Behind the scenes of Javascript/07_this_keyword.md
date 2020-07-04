The this keyword in of execution context is determine by
the following.

Regular function call: When we call a regular function the "this"
variable will be pointed to the global object by default, which
in the case of the browser is the window object.

method call: methods are functions that are inside an object. When
an object call a method the "this" variable point to the object
that call the method.

Note: The "this" keyword/variable is not assigned a value until
when the function is invoked. As we know the "this" keyword is
part of the creation phase of creating the execution context,
which is set in the execution context object together with the
variable object and the scope chain, so it is only set when the
function is called/invoked.
