let playerRed = "R";
let playerYellow = "Y";
let currPlayer = playerRed;

let gameOver = false;
let board;

let rows = 6;
let columns = 7;

window.onload = function () {
    setGame();
}

function setGame(){
    board = [];

for (let r = 0; r< rows; r++){
    let row = [];
 for (let c = 0; c < columns; c++){
     //JS
     row.push(' ');

     //HTML
     //<div id = "0-0" class="tile"></div>
     let tile = document.createElement("div");
     tile.id = r.toString() + "-" + c.toString();
     tile.classList.add("tile");
     document.getElementById("game-board").append(tile) 
    }
    board.push(row);
}
}