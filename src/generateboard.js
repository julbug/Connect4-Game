
class GenerateBoard {
    constructor(){

    this.gameBoard = []

    this.generateGameBoard();
    }
    

    // generateGameBoard(){
    //     let board = [];
    //     console.log ({board});

    // for (let r = 0; r< 6; r++){
    //     let row = [];
    //     console.log ({row});
    //  for (let c = 0; c < 7; c++){
    //      row.push(' ');
    //      this.generateTile(r,c);
    //     }
    //     board.push(row);
    // }
    //     this.gameBoard = board;
    // }

   generateTile(r,c) {
    let tile = document.createElement("div");
         tile.id = r.toString() + "-" + c.toString();
         tile.classList.add("tile");
         document.getElementById("game-board").tile
         console.log({tile})
    }

    function 


generateGameBoard() {
  let boardCode = ""
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 7; y++) {
          boardCode += `<div class="tile" id=${x}-${y} data-position-x="${x}" data-position-y="${y}"></div>`;
        }
      }
    return boardCode
  }
}

