
    document.querySelector("#game-board").onclick= function(e){

        if (e.target.classList.contains("tile")) {

            let gridPosition = e.target.id 

            for (let x = 5; x >= 0; x--) {
            let nextPosition = x + "-" + gridPosition[2]
            console.log(gridPosition[0])
            let currentDiv = document.getElementById(nextPosition);

            if (!currentDiv.style.backgroundColor) {
                if (gameBoard.player1) {
                currentDiv.style.backgroundColor="#8A9A5B";
                break; 
                }
                else if(!gameBoard.player1) {
                    currentDiv.style.backgroundColor="black";
                break;
                }
            }
            console.log(currentDiv.style.backgroundColor + " " + gridPosition);
            }
        }   
            
            gameBoard.player1 = !gameBoard.player1

    }
                
      