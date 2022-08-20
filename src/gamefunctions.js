
//function for changing player turns and chip color
    document.querySelector("#game-board").onclick= function(e){

//check if its a tile and if its player one        
        if (e.target.classList.contains("tile")){

            let gridPosition = e.target.id

            //run a reverse loop
            for (let x = 5; x >= 0; x--){    
                
                
               // grab next position
            let nextPosition = x + "-" + gridPosition[2]

            // console.log(nextPosition); 
            let currentDiv = document.getElementById(nextPosition);


            // console.log(currentDiv);
            // console.log(currentDiv.style.backgroundColor);

            if (!currentDiv.style.backgroundColor){
                if(gameBoard.player1){
               
                currentDiv.style.backgroundColor="#8A9A5B";

                //break stops the for loop, so essentially we are stopping the for loop after each color change 
                break;

            } else if(!gameBoard.player1){

                currentDiv.style.backgroundColor="maroon";

                break;
            }
    

        }

    }
    setTimeout(
        gameBoard.checkHorizontal,
        10
    )
    
}


        //check for winner (define in game board class)
        gameBoard.player1 = !gameBoard.player1
        showPlayerStatus();
        
    }


            
 


    
