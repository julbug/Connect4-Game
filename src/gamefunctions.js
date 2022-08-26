
//function for changing player turns and chip color
    document.querySelector("#game-board").onclick= function(e){

//check if its a tile and if its player one        
let gridPosition = e.target.id
let gridX = e.target.id[0]
let gridY = e.target.id[2]
console.log({gridPosition, gridX, gridY, checkThis: e.target.classList.contains("tile")})

        if (e.target.classList.contains("tile")){

            //run a reverse loop
            for (let x = 5; x >= 0; x--){    
                
                
            // grab next position
            let nextPosition = x + "-" + gridPosition[2]

            let currentDiv = document.getElementById(nextPosition);

            if (!currentDiv.style.backgroundColor){
                if(gameBoard.player1){
               
                currentDiv.style.backgroundColor="#8A9A5B";

                //break stops the for loop, so essentially we are stopping the for loop after each color change 
                break;

            } else if(!gameBoard.player1){

                currentDiv.style.backgroundColor="#885A61";
                
                // gameBoard.checkDiagonal(gridX, gridY);

                break;
            }
    

        }

    }
    setTimeout(
        gameBoard.checkForWinner(),
        100
    )
    
}
        //check for winner (define in game board class)
        gameBoard.player1 = !gameBoard.player1
        showPlayerStatus();
        
        
    }