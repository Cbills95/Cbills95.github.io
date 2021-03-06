// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/** 
 * Given an input value, print the value to the screen using console.log().
 */
function print(value) {
  // YOUR CODE BELOW HERE //
  console.log(value) //logging the value to be printed back
  // YOUR CODE ABOVE HERE //
}
/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
   let sl = string.length; //creating a vasriable to assign the length of the input string
    
return sl; //returning the string length 
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    let stl = string.toLowerCase(); //changing input of string to be all lowercase

return stl;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    let stu = string.toUpperCase(); //changing input of string to be all uppercase

return stu;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    let sdc = string.toLowerCase().split(" ").join("-"); //assinging a function to varialbe of sdc
//taking our string chaning it to lower case, then splitting the words at the spaces, before joining them back together by a dash.

return sdc; //return our variable of sdc
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    if(string[0].toLowerCase() === char.toLowerCase()){ //checking the first letter of input string and char, changing them to lowercase and returning true if they match
        return true;
    } else { //otherwise return false
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    if(string.substr(-1).toLowerCase() === char.toLowerCase()){ //checking the last letter of input string and char, changing them to lowercase and returning true if they match
        return true;
    } else { //otherwise return false
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
 var concat = stringOne + stringTwo;
//return a string of both stringOne and stringTwo concatenated
    return concat;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
var args = Array.from(arguments);
    return args.join(""); //joining all inputs passed into the args array and returning them joined
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if(stringOne.length > stringTwo.length){ 
        return stringOne; //if stringOne has a higher length count thern two return stringOne
    } else if (stringOne.length < stringTwo.length){
        return stringTwo; //if stringTwo has a higher length count thern one return stringTwo
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne === stringTwo) { //compares the strings and if strings are equal return zero
        return 0;
    } else if (stringOne > stringTwo) { //compares the two strings and returns -1 if stringOne is lower
        return -1; 
    } else if (stringOne < stringTwo) { //compares the two strings and returns 1 if stringOne is higher
        return 1; 
    }
    // YOUR CODE ABOVE HERE //
}  


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne === stringTwo) { //compares the strings and if strings are equal return zero
        return 0;
    } else if (stringOne < stringTwo) { //compares the two strings and returns -1 if stringOne is lower
        return -1; 
    } else if (stringOne > stringTwo) { //compares the two strings and returns 1 if stringOne is higher
        return 1; 
    }
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
