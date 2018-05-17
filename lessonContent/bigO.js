//What is big O notation?
//It is the mathematical expression of how long an algorithm takes to run depending on how long is the input, usually talking about the worst case scenario. Big o notation is used to classify algorithms by how they respond to changes in input size. Big o is important to at least be aware of because it helps developers create applications with good performance. The letter O is used because the growth rate of a function is also referred to as the order of the function

//Simplifying an algorithm
//When we say algorithm, all we mean is a defined set of steps that our worker will follow in order to produce an outcome. Take making a cup of coffee
//1. Get a cup from the cupboard
//2. Get a k cup pod of coffee you want
//3. Ensure that the water in the keurig is at or above minimum level
//4. place the cup on the grate
//5. place the k cup inside of the keurig
//6. press start
//7. wait till the cup is full
//8. enjoy

//Using the above steps, anyone can make a cup of coffee
//What if we had multiple people that wanted coffee? the amount of time required to make a cup of coffee for each person will be relative to the number of people that want coffee
//1 cup of coffee - 30 seconds
//2 people want coffee = 1 minute
//10 people want coffee = 5 minutes
//Expressed in big o notation O(10) = 5 minutes

//The purpose of going over Big O notation is not for you to master every algorithm, but more to be aware of what it is and to help you think about how performant a certain piece of code that you are writing is


//Most common types of Big o notations

//Constant-Time algorithm
//O(1) - "Order 1"
//This algorithm will always return in the same amount of time, regardless of size on input
//Example
const getLast = (items) => {
  //If the array I pass in is 10,000 indeces long or 1 indece long, it will return in the same amount of time
  return items[0];
}

//Linear-Time algorithm
//O(N) - "Order N"
//The number of iterations required to solve will grow in relation to number of items in input
//Example
const findIndex = (items, match) => {
  for (let i = 0; i < items.length; i++) {
    if(items[i] == match) {
      return i;
    }
  }
  return -1;
}

var myItems = [1, 2, 3, 4, 5, 6, 7, 8];
//Best case
findIndex(myItems, 1);
//The above call will return after the first iteration in the for loop
//Worst case
findIndex(myItems, 8);
//Because of how the function was written, this will need to loop 8 times

//Quadratic - Time algorithm
//O(N 2) - "Order N squared"
//The worst case time is the square of the number of inputs. The time grows exponentially related to the number of inputs
//Example
const buildSquareMatrix = (items) => {
  let matrix = [];
  for (let i = 0; i < items.length; i++) {
    matrix[i] = [];
    for(let j = 0; j < items.length; i++) {
      matrix[i].push(items[j])
    }
  }
  return matrix;
}

buildSquareMatrix(['a', 'b', 'c']);
//There will be 9 iterations in the for loops for 3 elements;
buildSquareMatrix(['a', 'b', 'c', 'd']);
//There will now be 16 iterations for the passed in 4 elements

//Logarithmic-Time algorithm
//O(log n) - "Order log N"
//Instead of looking through the components one by one, they split the data in chunks and discard a large amount on every iteration, usually the half or log base 2
//Example
const quickSort = ( list, sortedArray ) => {
  debugger;
  if(!sortedArray) {
    var sortedArray = [];
  }
   if ( list.length < 2) return list;
   let pivot   = list[0];
   let left    = [];
   let right   = [];
   for ( let i = 1; i < list.length; i++ ){
      switch ( true ){
         case ( list[i] < pivot ):
            left.push( list[i] );
            break;
         case ( list[i] >= pivot ):
            if( list[i] )
            right.push( list[i] );
            break;
      }
   }
   return sortedArray.concat( quickSort( left, sortedArray ), pivot, quickSort( right, sortedArray ));
 };
quickSort( ['q','a','z','w','s','x','e','d','c','r']);

//Cool image that shows the amount of time compared to the number of items compared against the different types of algorithms
//https://cdn-images-1.medium.com/max/800/1*_8PfaIyJC7dWJOsKxz47ow.png
