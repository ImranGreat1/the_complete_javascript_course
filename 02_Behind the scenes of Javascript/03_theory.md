HOW DOES THE FUNCTION EXECUTION CONTEXT GET CREATED

As we said earlier we can associate an execution context with
an object.
The execution context object has 3 properties

1. The variable object
2. Scope chain
3. The "this" variable

The variable object => stores the argument that is pass to the
function, inner varaiables declarations and function declarations

The scope chain => Contains the current variable object as well the
variable object of all it parents.

"this" variable => setting the "this" variable.

When a function is called, it generate a new execution context that
get put on top of the execution stack and this happens in two phases,

1. the creation phase and 2. the execution phase.

THE CREATION PHASE: Include setting the three properties of the context object

1. The variable object
2. The Scope chain
3. The "this" variable

<!-- SETTING THE VARIABLE OBJECT -->

(i) All the arguments pass to the function are stored in an object in the
variable object.
(ii) The function is scan for function declarations and each function
is stored as a property pointing to that function declaration in the
variable object.
(iii) The function is scan for variable declarations and each variable
is stored as a property and set the value to that property to undefined.

NB: The scanning of function and variables declarations within the function
that get set in the Variable object as property is what is known
as HOISTING in Javascript.

NOTE: Function declarations properties are actually defined, pointing to
the actual function declation while the variable declaration properties
are set to undefined. The variable declaration is set at the time the
function is running.

<!-- THE SCOPE CHAIN -->

Creation of the scope chain: We will discussed in another chapter

<!-- "this" VARIABLE -->

Determine the value of the "this" variable

<!-- EXECUTION PHASE -->

THE EXECUTION PHASE:
The code of the function that generate the current execution context
is ran line by line.
