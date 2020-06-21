HOW OUR CODE IS EXECUTED

1. Javscript is hosted by a host environment usually a browser like chrome,
   firefox, safare etc. but it has other host environments like the nodejs
   server and other applications that accept Javascript code.

2. This host environments has engines that take our code and parse it using
   a parser e.g Chrome has the V8 engine and Firefox has the spidermonkey engine.

3. The engine parse our code using a parser which generates a data structure
   known as the Abstract Syntax Tree. The parser read our code line by line and if
   there's any error then the code stop executing and throws an error. That means
   the parser no the Javascript rules and how code and syntax should be written.

4. If there's no error then the engine translate our code into machine code or a
   set of instrunctions that can be read directly by the computer processor and then
   perform the set of instructions.

5. Only when the code has been converted to the machine code
   can the computer processor read and perform the necessary task.

NOTE: There is actually way more going on behind the scenes and different engines do
things in a slightly differently way.
