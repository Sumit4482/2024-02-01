/*
 Problem Statement : 
 To Create a Grid of Height 30 and Width 50 which will be Fixed.
 Inside the Gird there is a special character(*) present.
 The Special Character (*) is Called FireFly.
 The Firefly will populate inside the Gird at any Co-ordinate.
 The Firefly will move 1 Unit from its position in any direction. 
*/


//Declaring Constants 
const ROW = 30; //Row Size of the Grid
const COL = 50; //Column Size of the Grid

// These are the defalt co-ordinates where the firefly appears at start
var x = 5;
var y = 5;


/**
 * Generate a Random Move of 1 Unit.
 */
function getRandomMove() {
    //Create Random Number which is in between [-1,0,1]
    let move = Math.floor(Math.random() * 8);
    switch (move) {
        case 0:  return { dx: -1, dy: 0 };   // Move left
        case 1:  return { dx: 1, dy: 0 };    // Move right
        case 2:  return { dx: 0, dy: -1 };   // Move up
        case 3:  return { dx: 0, dy: 1 };    // Move down
        case 4:  return { dx: -1, dy: -1 };  // Move top-left
        case 5:  return { dx: -1, dy: 1 };   // Move bottom-left
        case 6:  return { dx: 1, dy: -1 };   // Move top-right
        case 7:  return { dx: 1, dy: 1 };    // Move bottom-right
        default: return { dx: 0, dy: 0 };    // No move
    }
}


/**
 * Prints Grid With Boundaries.
*/

function printPattern() {
   
    for (let i = 0; i <= ROW; i++) {
        for (let j = 0; j <= COL; j++) {

            //Four Corners Here
            if ((i == 0 && j == 0) || (i == 0 && j == COL) || (i == ROW && j == 0) || (i == ROW && j == COL)) {
                process.stdout.write("+");
            } 
            //Top and Bottom Boundaries 
            else if ((i == 0 && j != 0 && j < COL) || (i == ROW && j != 0 && j < COL)) {
                process.stdout.write('_');
            } 
            //Left and Right Boundaries
            else if ((j == 0 && i > 0 && i < COL) || (j == COL && i > 0 && i < ROW)) {
                process.stdout.write('|');
            } 
            // FireFly
            else if (i == x && j == y) {
                process.stdout.write("*");
            } 
            //Space
            else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}

/**
 *  Runner :
 *  It Clears the Console Outputs
 *  Print the Gird with Firefly position with defined Co-ordinates (x,y)
 *  Change the Co-ordinate
*/

function runner() {
    console.clear(); // Clears the Console
    printPattern();  // Prints Pattern
    const move = getRandomMove();  // Get the Move
    x += move.dx; // Adds the Units in X-Co-ordinate
    y += move.dy; // Adds the Units in Y-Co-ordinate

    // Ensure the '*' stays within the grid bounds
    x = Math.max(1, Math.min(x, ROW - 1));
    y = Math.max(1, Math.min(y, COL - 1));

    console.log(); // Add a blank line between iterations

}


//Run Code Several Times
setInterval(runner, 500)
