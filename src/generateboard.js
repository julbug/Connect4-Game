class GenerateBoard {
    constructor(){

       this.gameBoard = []
       
       this.generateGameBoard();

       this.player1 = true;
       
    }
     
    ///drawing the board
    generateGameBoard() {
      let boardCode = ""
      for (let x = 0; x < 6; x++) {
        for (let y = 0; y < 7; y++) {
              boardCode += `<div class="tile" id=${x}-${y} data-position-x="${x}" data-position-y="${y}"></div>`;
            }
          }
        return boardCode
      }    


      checkForWinner(){
      checkVertical()
      checkHorizontal()
      //   checkRightUpDiagonal()
      //   checkLeftUpDiagonal()
      }


      checkVertical(){
        let gameOver = false;
        let verticalWinner = [];
          for (let y = 0; y <= 6; y++) {
            for (let x = 0; x <= 5; x++){
              //the color of the div with the id of x-y
              let currentDiv = document.getElementById(`${x}-${y}`)
              verticalWinner.push(currentDiv.style.backgroundColor);
            }
        } 
        for (let i = 0; i < verticalWinner.length; i++){
          //console.log(verticalWinner[i])
          if (verticalWinner[i] && (verticalWinner[i] == verticalWinner[i + 1]) && (verticalWinner[i] == verticalWinner[i + 2]) && (verticalWinner[i] == verticalWinner[i + 3])){
         gameOver = true;
          }
         
        }
         if (gameOver){
           alert ("Game Over")
         }
      }
       

      checkHorizontal(){
        let gameOver = false;
        let HorizontalWinner = [];
          for (let x = 0; x <= 5; x++) {
            for (let y = 0; y <= 6; y++){
              //the color of the div with the id of x-y
              let currentDiv = document.getElementById(`${x}-${y}`)
              HorizontalWinner.push(currentDiv.style.backgroundColor);
            }
        } 
        for (let i = 0; i < HorizontalWinner.length; i++){
          //console.log(verticalWinner[i])
          if (HorizontalWinner[i] && (HorizontalWinner[i] == HorizontalWinner[i + 1]) && (HorizontalWinner[i] == HorizontalWinner[i + 2]) && (HorizontalWinner[i] == HorizontalWinner[i + 3])){
         gameOver = true;
          }
         
        }
         if (gameOver){
           alert ("Game Over")
         }
      }
      //checkDiagonalRightUp()
      //checkDiagonalLeftUp()


        playerTurn(){
          if(this.player1){
            return "Player 1"
          } else {
            return "Player 2"
          }
        }

      }

      function showPlayerStatus(){
        let status = document.querySelector('.playerturn span');
        status.innerText = gameBoard.playerTurn();
      }

       document.querySelector('.reset').addEventListener('click', function(){  window.location.reload();
          return false;
        });

    
  

    
    
      
    // }
  
  //   checkDiagonalRightUp()
  //   checkDiagonalLeftUp()

  // }



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