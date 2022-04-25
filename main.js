// GLOBAL VARIABLES
var game = new Game();

// QUERY SELECTORS
var gameBoard = document.querySelector('.game-board');
var heading = document.querySelector('.heading');
var middleSection = document.querySelector('.middle');
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoWins = document.querySelector('.player-two-wins');

var squareOne = document.querySelector('#one');
var squareTwo = document.querySelector('#two');
var squareThree = document.querySelector('#three');
var squareFour = document.querySelector('#four');
var squareFive = document.querySelector('#five');
var squareSix = document.querySelector('#six');
var squareSeven = document.querySelector('#seven');
var squareEight = document.querySelector('#eight');
var squareNine = document.querySelector('#nine');

// EVENT LISTENERS
gameBoard.addEventListener('click', selectSquare);

// FUNCTIONS
function selectSquare(event) {
  if (!game.gameOver){
    switch (event.target.id) {
      case 'one':
        updateSquare(1);
        break;
      case 'two':
        updateSquare(2);
        break;
      case 'three':
        updateSquare(3);
        break;
      case 'four':
        updateSquare(4);
        break;
      case 'five':
        updateSquare(5);
        break;
      case 'six':
        updateSquare(6);
        break;
      case 'seven':
        updateSquare(7);
        break;
      case 'eight':
        updateSquare(8);
        break;
      case 'nine':
        updateSquare(9);
        break;
      default:
        break;
    }
    game.checkWinningCombinations();
  } 
  if (game.gameOver) {
    playerOneWins.innerText = game.playerX.wins;
    playerTwoWins.innerText = game.playerO.wins;
    if (game.winner === 'Draw') {
      heading.innerHTML = `It's a draw!`;
    } else {
      heading.innerHTML = `${game.winner} won!`;
    }  
    gameBoard.removeEventListener('click', selectSquare);
    setTimeout(resetGameBoard, 4000);  
  }
}

function resetGameBoard() {
  game.resetGame();
  squareOne.innerText = '';
  squareTwo.innerText = '';
  squareThree.innerText = '';
  squareFour.innerText = '';
  squareFive.innerText = '';
  squareSix.innerText = '';
  squareSeven.innerText = '';
  squareEight.innerText = '';
  squareNine.innerText = '';
  heading.innerText = `It's ${game.currentPlayer}'s Turn!`
  gameBoard.addEventListener('click', selectSquare);
}

function updateSquare(squareNum) {
  if (game.gameBoard[squareNum]!== 'X' && game.gameBoard[squareNum] !== 'O') {
    switch (squareNum) {
      case 1:
        game.makeMove(1);
        squareOne.innerText = game.gameBoard[1];
        break;
      case 2:
        game.makeMove(2);
        squareTwo.innerText = game.gameBoard[2];
        break;
      case 3:
        game.makeMove(3);
        squareThree.innerText = game.gameBoard[3];
        break;
      case 4:
        game.makeMove(4);
        squareFour.innerText = game.gameBoard[4];
        break;
      case 5:
        game.makeMove(5);
        squareFive.innerText = game.gameBoard[5];
        break;
      case 6:
        game.makeMove(6);
        squareSix.innerText = game.gameBoard[6];
        break;
      case 7:
        game.makeMove(7);
        squareSeven.innerText = game.gameBoard[7];
        break;
      case 8:
        game.makeMove(8);
        squareEight.innerText = game.gameBoard[8];
        break;
      case 9:
        game.makeMove(9);
        squareNine.innerText = game.gameBoard[9];
        break;
      default:
        break;
    }
    game.updatePlayer();
    heading.innerText = `It's ${game.currentPlayer}'s Turn!`;
  }
}