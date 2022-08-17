class GenerateBoard {
    constructor(){

       this.gameBoard = []
       
       this.generateGameBoard();

       this.player1 = true;

    }
     
    
    generateGameBoard() {
      let boardCode = ""
      for (let x = 0; x < 6; x++) {
        for (let y = 0; y < 7; y++) {
              boardCode += `<div class="tile" id=${x}-${y} data-position-x="${x}" data-position-y="${y}"></div>`;
            }
          }
        return boardCode
      }
    }



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
 

    //chip class for tokens
    //refer to card game screenshot
    


