//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
var kts = Object.keys(object).join(' ');
    return kts;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
var vts =[];

for(var key in object){
    if(typeof object[key] === 'string'){
        vts.push(object[key]);
    }
}
return vts.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array';
    } else if(typeof(collection) === 'object'){
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
 var cw = string.charAt(0).toUpperCase() + string.slice(1);
    return cw;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
 var caw = string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
    return caw;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
     return "Welcome " + object['name'].charAt(0).toUpperCase() 
     +  object['name'].slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return  object['name'].charAt(0).toUpperCase() 
     +  object['name'].slice(1) + " is a " +  object['species'].charAt(0).toUpperCase() 
     +  object['species'].slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  if (object.hasOwnProperty("noises") === false) {//check for empty object FIRST!
  return "there are no noises"
  } else if (object["noises"].length === 0) {//check for empty array
    return "there are no noises"
  } else if (object["noises"] !== undefined) {//check for noises via array with a value
  return object["noises"].join(" "); //return array as a string w/ .join and spaces
  } else {
     return "there are no noises"}//cover your bases!
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
   if(string.search(word) > 0){
       return true;
   } else {
       return false;
   }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object['friends'].push(name);
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // creat a variable to hold the friends array
let friends = object.friends;
    // check for empty object or if argument matches
if (friends === undefined || friends.includes(name) === false) {
    return false;
    }
return true;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
   // Create a new variable and assign it to an array literal 
let notMyFriendList = [];
    // Loop through the friends array
    
    for(let i = 0; i < array.length; i++){ 
        let userFriends = array[i].friends; // Create variable to access the friends array
        let userName = array[i].name; // Create variable to access the person's name
        
        if(userFriends.length > 0 && userFriends.includes(name) === false && name !== userName){
            notMyFriendList.push(userName); // If all true, push target name into new array
    
        } else if(userFriends.length === 0 && name !== userName){ // If the person has no friends  And if the target name does not match the person's name
            notMyFriendList.push(userName); // Push all names into new array
        }
    }
    // Return the final array 
    return notMyFriendList
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    if(object.hasOwnProperty(key) || !object.hasOwnProperty(key)) {
        object[key] = value;
    }
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
 for (var i = 0; i <= array.length - 1; i++) {
  if (object.hasOwnProperty(array[i])) {
     delete object[array[i]];
  }
 }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
 const duplicateArray = [];

 for(var i = 0; i <= array.length - 1; i++){
     
    if(duplicateArray.includes(array[i])){
    } else {
        duplicateArray.push(array[i]);
    }
 }
 return duplicateArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}