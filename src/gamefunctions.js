//score
//DOM functions [click/keydown function]
//click function - looks at current generate board to see whose turn it is


    document.querySelector("#game-board").onclick= function(e){
                console.log(this)

        if (e.target.classList.contains("tile") && gameBoard.player1){
            e.target.style.backgroundColor="red";

        }else if (e.target.classList.contains("tile") && !gameBoard.player1){
            e.target.style.backgroundColor="black";
        }

        gameBoard.player1 = !gameBoard.player1

    }
   
