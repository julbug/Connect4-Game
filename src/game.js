class Game {
    constructor(){

    this.gameBoard = []

    this.generateGameBoard();

   
    }

    

    generateGameBoard(){
        let board = [];
        //console.log({board});
    for (let r = 0; r < 6; r++){
        let row = [];
        //console.log({row});
     for (let c = 0; c < 7; c++){
        row.push(' ');
        this.generateTile(r, c);
        }
        board.push(row);
    }
        this.gameBoard = board;

    }


    generateTile(r, c) {
        let tile = document.createElement("div");
         tile.id = r.toString() + "-" + c.toString();
         tile.classList.add("tile");
         document.getElementById("game-board").tile
        //console.log({tile});
    }
    

}

const newGame = new Game();
    console.log({newGame});



    //==BluePrint for Game====
    // create class for game - done
    //create a function for loading the gameboard - done
    //alert for directions
    // create a function to alternate players turns (currentPlayer)
    //create a function for placing the chips in columns (refresh board after each move to show updated board)
    //creating a function for placing chips on top of each other instead of overlapping (placeChip)
    //create a function to check if a selceted column is full [if it is, alert user to select another column]
    //function to check if the current move was a winning move (checkWon)
    //function to declare a winner if there is one (winningArray)
    //function for restart/reset buttons to restart the game
    //function to keep score
 