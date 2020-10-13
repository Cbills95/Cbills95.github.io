/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};

animal.species = 'Parakeet'; //adding the key of species through dot notation
animal['name'] = 'Tucker';  //adding the key of name through bracket notation
animal['noises'] = [];     //adding noises key through bracket notation
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];

noises[0] = 'cheep';
noises.push('peep');
noises.unshift('sing');
noises[noises.length] = 'chirp';

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal['noises'].push('kisses');

console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      dot notation and bracket notation.
 * 2. What are the different ways of accessing elements on arrays?
 *      bracket notation and array methods.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];

var duck = { species: 'duck', 
             name: 'Jerome', 
             noises: ['quack', 'honk', 'sneeze', 'woosh'] 
    }; 
var dog = { species: 'dog', 
            name: 'Gizmeaux', 
            noises: ['woof', 'bark', 'whine', 'pant'] 
    };
var cat = { species: 'cat', 
            name: 'Lexi', 
            noises: ['meow', 'purr'] 
    };
    
animals.push(animal);
animals.push(duck);
animals.push(dog);
animals.push(cat);
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; //array felt easier to work with as a list

function getRandom(animals, min, max) {
      min = Math.ceil(min); //setting our minimum number to round up 
      max = Math.floor(max); //setting our max number to round down
    return animals[Math.floor(Math.random(animals) * (animals.length - 1))];
} //setting up our random numbers to be rounded whole as to not cause unexpected errors, as well 
// as creating an RNG 
animals[0]["friends"] = friends;


console.log(friends);
console.log(animals);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}