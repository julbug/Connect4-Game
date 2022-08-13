
class GenerateBoard {
    constructor(){

    this.gameBoard = []

    this.generateGameBoard();
    }
    

   generateTile(x,y) {
    let tile = document.createElement("div");
         tile.id = x.toString() + "-" + y.toString();
         tile.classList.add("tile");
         document.getElementById("game-board").tile
         console.log({tile})
    }
    
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

