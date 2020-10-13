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
    for (var i = 1; i <= 100; i++){ //starting out loop at 1 going up to 100
    if(( i % 3 === 0 ) && ( i % 5 === 0 )){
        console.log('FizzBuzz'); //telling our loop to print 'FizzBuzz' if it IS a muttiple of 3 and 5
    } else if( i % 5 == 0 ){
        console.log("Buzz"); //telling our loop to print "buzz" for each case of a number that is mutiple of 5
    } else if( i % 3 == 0 ){ 
        console.log("Fizz"); //telling our loop to print "fizz" for each case of a number that is mutiple of 3
    } else {
        console.log(i); //telling our loop to print the number if it is neither a mutiple of 3 or 5
    }
    }
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}