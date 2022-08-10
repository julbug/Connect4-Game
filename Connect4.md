//class for the game functions and methods
class Game{
    //empty array for grid
    //alert for directions?
    //function for restart/reset buttons
    //function to place chips in selected columns
    //function to check if the column is not already full (if it is, ask the user to select another column)
    //a function to refresh the grid everytime a chip is placed in a slot
    //function to keep score
    //checkWon function
    //winningArray function
    //currentPlayer function
    //^general class

}

//class for the player functions and methods
class Players {
//let playerOne
//let playerTwo
//cpu [cat paw?] create a function that randomly choses to put one chip on the board
    //^ player2 can inherit from general class
}


//EventListener to load board game
window.addEventListener


//EXTRA:
//single player mode vs AI mode
//levels of difficulty
// 4 JS files (game, player, ai, index.js)


// Game Logic

// -Two Classes:
// - Game
//     - Game board (6 rows x 7 columns)
//     - EventListener function that loads the game on the screen when clicked [createBoard]
//     - Alert that provides directions?
//     - Restart/ reset buttons
//     - Moving o f the chips (maybe we could use a key down function for this?)
//         - Vertically, horizontally, diagonal
//     - Keep score function
//     - Know when 4 of the same colored chips are placed in a row (checkWon function (a loop that cycles every time a move has been made to see if last move made a winning combination))
//     - Winner alert when there are 4 in a row (winningArray function (to alert when there is a winner))
//     - Cannot allow the same player to make a move two times in a row (currentPlayer function)
// - Players
//     - Function to ask if its Player vs Player OR Player vs CPU
//         - Red chips
//         - Black chips
//     - In the case that there is a draw or winner: function to ask if they want to play again (feeds into reset/restart function)
//     - selectColumn function to choose which column to place the chips in


//if else statement for chips (if there is a blue or red chip, else leave blank)


//constructor(color){
    this.playerName = playerName
    this.chosenColor = color
}

class game{
    constructor(){
        this.player1;
        this.player2;
            }
            createPlayer(){
                document.queryrSelector(input)
                document.queryrSelector(input)
                this.player1 = new Player(document.queryselectpr(inpptu), doc.)

            }
}

placeChip(x,y,player){
    this.gameBoard[x, y] = {img: `${player1.chosenColor}.img`}
}

Helpful Sites:
https://www.mathsisfun.com/games/connect4.html
https://kevinshannon.dev/connect4/