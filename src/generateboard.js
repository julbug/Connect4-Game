class GenerateBoard {
    constructor(){

       this.gameBoard = []
       this.firstPlayer = new Player('Player 1', '#8A9A5B');
       this.secondPlayer = new Player('Player 2', '#885A61');
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
      
      //looping through v,h, and d functions to see if there is a winner
      checkForWinner(){
        if (this.checkVertical() ||
        this.checkHorizontal() ||
        this.checkDiagonal()) {
          alert ("Game Over");
        }
      }
      
      //Check Veritcal
      checkVertical(){
        let verticalWinner = [];
        for (let y = 0; y <= 6; y++) {
          for (let x = 0; x <= 5; x++){
              //the color of the div with the id of x-y
              let currentDiv = document.getElementById(`${x}-${y}`)
              verticalWinner.push(currentDiv.style.backgroundColor);
            }
        } 
        for (let i = 0; i < verticalWinner.length; i++){
          
          if (verticalWinner[i] && (verticalWinner[i] == verticalWinner[i + 1]) && (verticalWinner[i] == verticalWinner[i + 2]) && (verticalWinner[i] == verticalWinner[i + 3]))
          {
         return true
          }
        }
        return false
      }
       
      //Check Horizontal
      checkHorizontal(){
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
          if (HorizontalWinner[i] && (HorizontalWinner[i] == HorizontalWinner[i + 1]) && (HorizontalWinner[i] == HorizontalWinner[i + 2]) && (HorizontalWinner[i] == HorizontalWinner[i + 3]))
          {
          return true
          }
        }
        return false
      }
   


      //Check Diagonal      
      checkDiagonal = () => {
        let gridX, gridY;
        let result = 1;
        let currentDiv = document.getElementById(`${x}-${y}`)
        let currentGridPosition = this.gameBoard[gridX][gridY]
        gridX = currentDiv[0]
        gridY = currnetDiv[2]
        let direction = 'se'
        const directionsArray = ['se', 'ne', 'sw', 'nw']

        console.log({gridX, gridY, currentDiv, currentGridPosition});
      
        for(let x = 1; x < 4; x++) {
          for(let y = 1; y < 4; y++) {
            switch(direction) {
              case directionsArray[0]:
              if(currentGridPosition === this.gameBoard[x][y]) {
                if(result === 1 && direction !== directionsArray[0]) {
                  direction = directionsArray[0]
                } else if (direction === directionsArray[0]) {
                  result += 1;
                  currentGridPosition = this.gameBoard[x][y]
                }
              }
                break;
      
              case directionsArray[1]:
              if(currentGridPosition === this.gameBoard[x-1][y+1]) {
                if(result === 1 && direction !== directionsArray[1]) {
                  direction = directionsArray[1]
                } else if (direction === directionsArray[1]) {
                  result += 1;
                  currentGridPosition = this.gameBoard[x-1][y+1]
                }
              }
                break;
      
              case directionsArray[2]:
              if(currentGridPosition === this.gameBoard[x+1][y-1]) {
                if(result === 1 && direction !== directionsArray[2]) {
                  direction = directionsArray[2]
                } else if (direction === directionsArray[2]) {
                  result += 1;
                  currentGridPosition = this.gameBoard[x+1][y-1]
                }
              }
                break;
      
              case directionsArray[3]:
              if(currentGridPosition === this.gameBoard[x-1][y-1]) {
                if(result === 1 && direction !== directionsArray[3]) {
                  direction = directionsArray[3]
                } else if (direction === directionsArray[3]) {
                  result += 1;
                  currentGridPosition = this.gameBoard[x-1][y-1]
                }
              }
                break;
            }
          }
        }
      
        if (result === 4) {
          return true;
        } else {
          return false;
        }
      }

      //Determines if it is player 1 or player 2's turn
      playerTurn(){
          if(this.player1){
            return "Player 1"
          } else {
            return "Player 2"
          }
        }
      }

      //shows the status of whose turn it is at the top of the page
      function showPlayerStatus(){
        let status = document.querySelector('.playerturn span');
        status.innerText = gameBoard.playerTurn();
      }

      //reloads pages when reset button is clicked
      document.querySelector('.reset').addEventListener('click', function(){
          window.location.reload();
          return false;
        });