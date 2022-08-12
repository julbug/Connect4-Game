// class Game {
//     constructor(){

//     this.gameBoard = []

//     this.setGame();
//     }

    

//     setGame(){
//         let board = [];
//     for (let r = 0; r< 6; r++){
//         let row = [];
//      for (let c = 0; c < 7; c++){
//          row.push(' ');
//          let tile = document.createElement("div");
//          tile.id = r.toString() + "-" + c.toString();
//          tile.classList.add("tile");
//          // document.getElementById("game-board").(tile)
//         }
//         board.push(row);
//     }
//         this.gameBoard = board;
//     }
// }

// const newGame = new Game();
//     console.log({newGame});

// Marcos said use this

class Game {
    constructor(){

    this.gameBoard = []

    this.setGame();
    }

    

    setGame(){
        let board = [];
    for (let r = 0; r< 6; r++){
        let row = [];
     for (let c = 0; c < 7; c++){
         row.push(' ');
         let tile = document.createElement("div");
         tile.id = r.toString() + "-" + c.toString();
         tile.classList.add("tile");
         // document.getElementById("game-board").(tile)
        }
        board.push(row);
    }
        this.gameBoard = board;
    }
}

const newGame = new Game();
    console.log({newGame});