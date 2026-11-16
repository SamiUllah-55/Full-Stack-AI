String literals learning notes


1. ${} allows variables and expressions to be inserted into strings.

2. trim() removes spaces from the beginning and end of a string.

3. toLowerCase() and toUpperCase() change letter casing.

4. includes() checks whether text exists inside a string.

5. replace() and replaceAll() replace matching text.

6. slice() extracts a portion of a string.

7. split() converts a string into an array, while length returns its character count.

=====================================================================================

Data types in variable

1. const declares a variable that cannot be reassigned. use it by default
2. let declares a variable that can be reassigned.
3. Common datatypes
   a. String
   b. Number
   c. Boolean
   d. Undefined -> when a variable is not initialized with a value. Its type is also undefined
   c. Null -> intenionaly assigned as null. its type is object.
   d. Array
   e. Object (Key value pair)
4. typeOf

======================================================================================

Week 2 javascript concepts

1. Conditional statements
2. Operators
3. Type coercion	Automatic conversion of one data type into another.
4. use !name or name.trim()==='' to make the field required

5. Switch statement 
   break is used to prevent fall-through

| if/else | switch |
|---|---|
| Can check ranges and complex conditions | Best for matching specific values |
| Supports && and || directly | Matches a value against cases |
| Good for validation | Good for category selection |
| Can use nested conditions | Can contain multiple cases |   

6. Expression: A piece of JavaScript that produces a value.