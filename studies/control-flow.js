/**
 * 
 * CONTROL FLOW:
 *
 * 0. The interpreter reads code like a story, from top to bottom, left to right. 
 * We can direct the interpreter to read code further by specifying actions to be
 * performed under specified conditions. We accomplish this by using if/else if/else
 * statements and switch cases. 
 *
 *
 * 1. IF-ELSE-ELSE IF STATEMENTS
 * 
 *    a. If/else-if/else statements are used to evaluate if a condition is true. If it is true, 
 *    then an action is executed, or another specified action occurs. The interpreter runs through
 *    the code until it finds a condition that evaluates to true.
 * 
 */     let age = 30; // We declare a variable to use in our conditional statement
 
        if(age === 21){ // The 'if' keyword is used to tell the interpreter we are beginning
                       // an if statement. Curly braces are placed after and our code is placed inside.
                       // If this condition is not true, then the code goes down to the else-if statement.
            console.log("You may enter.");
            
        } else if(age < 21){ // The 'else if' keyword tells the interpreter we have another
                             // condition to look for and execute another action if the first
                             // condition is not met. If this statement is not true, the code
                             // goes down to the final else statement.
            console.log("Go away!");
            
        } else { // The 'else' keyword with curly braces after it runs a default action
                 // if none of the above conditions are met.
            console.log("C'mon in, old-timer!");
        }

/**
 *    b. We can have multiple if statements and nested if statements. Ideally, you want to use 
 *      one if statement and you can have as many else if statements required to check for all 
 *      conditions. Ultimately, you will end with one else statement.
 * 
 *    c. The interpreter will run one if block at a time. If the first if statement resolves to 
 *      true, then the interpreter will stop running the code. If the if statement resolves to
 *      false, then it will check the next else-if statement. If true the code stops, but if false
 *      then it will default to running your else statement. In sum, the code stops running when
 *      a condition is met.
 */