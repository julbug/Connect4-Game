

let gameOver = false;
let board;


let gameBoard = new GenerateBoard;

let player1 = new Player;
let player2 = new Player;


let html = gameBoard.generateGameBoard();
    // Add all the divs to the HTML
document.querySelector("#game-board").innerHTML = html;


// }
