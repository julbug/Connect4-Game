

let gameOver = false;
let board;



//generates board
let gameBoard = new GenerateBoard;


//generates the players
// let player1 = new Player;
// let player2 = new Player;


let html = gameBoard.generateGameBoard();
    // Add all the divs to the HTML

    console.log({gameBoard, html, player1: gameBoard.firstPlayer})
    

document.querySelector("#game-board").innerHTML = html;