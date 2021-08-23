// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    function countup(n){
    if(n > 100) {
      return [];
    } else if((n % 3 === 0) && (n % 5 === 0)){
      const countArray = countup(n + 1);
      countArray.unshift("FizzBuzz");
      return countArray;
    } else if(n % 3 === 0){
      const countArray = countup(n + 1);
      countArray.unshift("Fizz");
      return countArray;
    } else if(n % 5 === 0){
      const countArray = countup(n + 1);
      countArray.unshift("Buzz");
      return countArray;
    } else {
      const countArray = countup(n + 1);
      countArray.unshift(n);
      return countArray;
    }
    console.log(countup(1));
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}