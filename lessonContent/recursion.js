//What is recursion?
//Put quite simply, its a function that calls itself
//All recursive functions must have a base case.. a base case is a specific condition
//inside the function where the function returns a value instead of calling itself again
//When there is no case, the function will call itself indefinitely creating an infinite loop

//What is the call stack in JavaScript?
//In JavaScript function calls are popped off the stack when that function returns a value

//What is LIFO?
//Last in first out is a programming paradigm that refers to the last element
//pushed onto the call stack will the first element returned

//Why use recursion?
//Recursion is a great way of breaking down big problem into smaller problems
//Oftentimes, you can achieve the same result of a recursive function using a for or while loop
//The question comes down to is my code more readable by writing this as a recursive function?

//Real world examples of using recursion

//The most classic example of Recursion - Factorial Function
function factorial(num) {
  debugger;
  var nextNum = num -1;
  //base case - meaning this where the return will occur
  if (num === 1) {
    return num;
  }
  return num * factorial(nextNum);
}
factorial(4)
//The factorial function will continue to call itself as long as the num does not equal 1
//when the num does equal 1, it will return num = 1;
//then the previous function that called it factorial(2) will return 2 * the return value of factorial(1) = 1;
// and so on until we get to the last return

//When designing a recursive function, it is important to consider all the possible function inputs
//What would happen if I called factorial(-1) in the previous example?

//Let's write a few together

//1. reverse a string... e.x reverseStr('barnyard') returns 'draynrab';

//2. count the number of recurring digits in a number... e.x recurring(12311123131, 1)
