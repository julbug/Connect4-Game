//score
//DOM functions [click/keydown function]
//click function - looks at current generate board to see whose turn it is


    document.querySelector("#game-board").onclick= function(e){

        if (e.target.classList.contains("tile") && gameBoard.player1) {
            let gridPosition = e.target.id 
            let bottomPosition = "5-" + gridPosition[2]
            console.log(bottomPosition);

            if (bottomPosition.style.backgroundColor="white") {
                bottomPosition.style.backgroundColor="#8A9A5B"
            }
            else if (gridPosition[0]-1

            )
            

            
        }

    }
                
            
            

            // if bottomPosition = backgroundColor 
            // e.target.style.backgroundColor="#8A9A5B";
            // find e.target id 
            // whatever the 2nd number is, that # is gonna stay. you need to look at the last position and identify if it's empty and if it is you change color and if it's not, then you look at one higher and then one higher 
        

    //     } else if (e.target.classList.contains("tile") && !gameBoard.player1){
    //         e.target.style.backgroundColor="black";
    //     }

    //     gameBoard.player1 = !gameBoard.player1

    // }

    // let gravityRule = 


    // function tileFinder () {
    //     for (let i=0; i < boardCode.length; i++);
    //     console.log("it's working");
    // }
    // console.log(boardCode.length);


