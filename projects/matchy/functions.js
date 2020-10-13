/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){ //search function with an array param and string param to be used to search

    for (var i = 0; i < animals.length; i++){ //looping through array to find correct animal object
        if(animals[i].name === name){ //checking for name in animal object at current index to equal the input name
           return animals[i]; 
        } else if(i === animals.length - 1 ){ //if the result fails and the animal doesnt exist after looping over the array
            return null; //return null;
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    
    for (var i = 0; i < animals.length; i++){ //looping through array to find correct animal object
        if(animals[i].name === name){ //checking for name in animal object at current index to equal the input name
           return animals.splice(i, 1, replacement); //replacing the object with the declared name with a new object
        } 
    }
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    
    for (var i = 0; i < animals.length; i++){ //looping through array to find correct animal object
        if(animals[i].name === name){ //checking for name in animal object at current index to equal the input name
           return animals.splice(i, 1); //replacing the object with the declared name with a new object
        } 
    }
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    
for (var i = 0; i < animals.length; i++){//looping through array to find correct animal object
       if (animals[i].name.search(animal['name']) === 0 ) {
             console.log('Name already taken');
             return 0; //if array has an animal with input name already, dont add it
          
        } else if (animals[i].name.search(animal['name']) === -1) { //comparing the characters of the Array and new object names.  returns -1 if the array name is ahead of object, then pushes object
             return -1 && animals.push(animal);

        } else if (animals[i].name.search(animal['name']) === 1 ) {  //comparing the characters of the Array and new object names. Return 1 if object name is ahead of array and push object
            return 1 && animals.push(animal);
      }  
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
