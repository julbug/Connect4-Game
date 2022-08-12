let playerOne = "1";
let playerTwo = "2";
// let currPlayer = playerOne;

let gameOver = false;
let board;

// let rows = 6;
// let columns = 7;

window.onload = function () {
//    setGame();
    const newGame = new Game();
    console.log({newGame});
}

// function setGame(){
//     board = [];
// for (let r = 0; r< rows; r++){
//     let row = [];
//  for (let c = 0; c < columns; c++){
//      row.push(' ');
//      let tile = document.createElement("div");
//      tile.id = r.toString() + "-" + c.toString();
//      tile.classList.add("tile");
//      document.getElementById("game-board").append(tile)
//     }
//     board.push(row);
// }
// }