document.querySelector("#game-board").onclick = function(e) {
    // Check if it's a tile and if it's player one
    let gridPosition = e.target.id;
    let gridX = e.target.id[0];
    let gridY = e.target.id[2];
  
    if (e.target.classList.contains("tile")) {
      // Run a reverse loop
      for (let x = 5; x >= 0; x--) {
        // Grab next position
        let nextPosition = x + "-" + gridPosition[2];
        let currentDiv = document.getElementById(nextPosition);
  
        if (!currentDiv.style.backgroundColor) {
          if (gameBoard.player1) {
            currentDiv.style.backgroundColor = "#8A9A5B";
          } else {
            currentDiv.style.backgroundColor = "#885A61";
          }
  
          // Check for a winner
          if (gameBoard.checkForWinner()) {
            const winnerMessage = document.getElementById("winner-display");
            winnerMessage.classList.remove("hide");
  
            setTimeout(() => {
              if (!gameBoard.player1) {
                winnerMessage.innerHTML = "Game Over, Player 1 is the winner!";
              } else {
                winnerMessage.innerHTML = "Game Over, Player 2 is the winner!";
              }
            }, 50);
          }
  
          // Switch players
          gameBoard.player1 = !gameBoard.player1;
          gameBoard.showPlayerStatus();
          break;
        }
      }
    }
  };
  