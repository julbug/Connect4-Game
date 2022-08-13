let playerOne = "1";
let playerTwo = "2";
// let currPlayer = playerOne;

let gameOver = false;
let board;


window.onload = function () {
// const newGame = new Game();
// console.log({newGame});

let gameBoard = new GenerateBoard;
let html = gameBoard.generateGameBoard();
    // Add all the divs to the HTML
document.querySelector("#game-board").innerHTML = html;

}


