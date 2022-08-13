
const boardchoice = [x,y]
const player1 
const player2 

class Player {
constructor (color){
this.Color = color;
}

    document.getElementsByClassName(".tile").onclick = function () {
        
    }

playerTurn(){
  if (player1 === true){
        document.getElementsByClassName('.tile').style.color = "red";
    } else {
        document.getElementsByClassName('.tile').style.color = "black";
    }
}

}
