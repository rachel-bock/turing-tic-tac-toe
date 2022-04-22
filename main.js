// GLOBAL VARIABLES
var game = new Game();

// QUERY SELECTORS
var currentPlayer = document.querySelector('.current-player');
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
  
}

function resetGameBoard() {
  middleSection.innerHTML = `
  <section class="heading">
    It's <span class="current-player">${game.playsFirst}</span>'s Turn!
  </section>
  <section class="game-board">
    <div id="one" class="board-square"></div>
    <div id="two" class="board-square"></div>
    <div id="three" class="board-square"></div>
    <div id="four" class="board-square"></div>
    <div id="five" class="board-square"></div>
    <div id="six" class="board-square"></div>
    <div id="seven" class="board-square"></div>
    <div id="eight" class="board-square"></div>
    <div id="nine" class="board-square"></div>
  </section>`
}

function updateSquare(squareNum) {
  console.log(squareNum, '<<< squareNum');
  if (!game.gameBoard[squareNum]) {
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
    console.log(game.gameBoard[squareNum], "<<< GameBoard at square");
    game.updatePlayer();
    currentPlayer.innerText = game.currentPlayer;
  }
}