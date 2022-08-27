
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
      // let gridX, gridY;
      let result = 1;
      let isWinner = false;
      // console.log({gridX, gridY, currentGridPosition});
    
      for(let x = 0; x < 6; x++) {
        for(let y = 0; y < 7; y++) {
          let currentDiv = document.getElementById(`${x}-${y}`).style.backgroundColor;
          
          for(let i = 0; i < 4; i++) {
            if ((x+3 < 5) && (y+3 < 7)) {
              
              let first = document.getElementById(`${x+1}-${y+1}`).style.backgroundColor || 'none';
              let second = document.getElementById(`${x+2}-${y+2}`).style.backgroundColor || 'none';
              let third = document.getElementById(`${x+3}-${y+3}`).style.backgroundColor || 'none';

              if(currentDiv === first && currentDiv == second && currentDiv === third) {
                console.log('Match SE ***************> ', {currentDiv, second, third, first});

                isWinner = true;
              }

            }

            if ((x-3 > 0) && (y+3 < 7)) {

              // console.log({nextDiv: document.getElementById(`${x-1}-${y+1}`), x, y})

              let first = document.getElementById(`${x-1}-${y+1}`).style.backgroundColor || 'none';
              let second = document.getElementById(`${x-2}-${y+2}`).style.backgroundColor || 'none';
              let third = document.getElementById(`${x-3}-${y+3}`).style.backgroundColor || 'none';

              if(currentDiv === first && currentDiv == second && currentDiv === third) {
                console.log('Match NE ***************> ', {currentDiv, second, third, first});
                
                isWinner = true;
              }

            }
          }
         
          }
        }

      return isWinner;

    }


    //Determines if it is player 1 or player 2's turn
    playerTurn(){
        if(this.player1){
          return "Player 1"
        } else {
          return "Player 2"
        }
      }


       //looping through v,h, and d functions to see if there is a winner
    checkForWinner(){
      if (
      this.checkVertical() ||
      this.checkHorizontal() ||
      this.checkDiagonal()
      ) {

        const winnerMessage = document.getElementById('winner-display')
        console.log({winnerMessage})
        winnerMessage.classList.remove('hide')

        setTimeout(() => {
          if(!this.player1) {

            winnerMessage.innerHTML = 'Game Over, Player 1 is the winner!';
          } else {
            winnerMessage.innerHTML = 'Game Over, Player 2 is the winner!';
          }
          
        }, 50)


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
