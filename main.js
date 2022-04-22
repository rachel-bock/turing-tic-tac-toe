// Query Selectors
var ticTacToeBoard = document.querySelector('.game-board');
var currentPlayer = document.querySelector('.current-player');
var heading = document.querySelector('.heading');
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoWins = document.querySelector('.player-two-wins');


// Global variables
var ourGame = new Game();

// Event Listeners
ticTacToeBoard.addEventListener('click', selectSquare);

// DOM Functions
function renderHeading() {
  currentPlayer.innerText = ourGame.currentPlayer;
}

function renderWinner() {
  heading.innerHTML = ourGame.showGameOver();
  playerOneWins.innerText = ourGame.firstPlayer.wins;
  playerTwoWins.innerText = ourGame.secondPlayer.wins;
}

function selectSquare(event) {
  var square = document.querySelector(`#${event.target.id}`);
  var winningHeadingText = '';
  switch (event.target.id) {
    case 'one':
      var move = ourGame.makeMove(1);
      break;
    case 'two':
      var move = ourGame.makeMove(2);
      break;
    case 'three':
      var move = ourGame.makeMove(3);
      break;
    case 'four':
      var move = ourGame.makeMove(4);
      break;
    case 'five':
      var move = ourGame.makeMove(5);
      break;
    case 'six':
      var move = ourGame.makeMove(6);
      break;
    case 'seven':
      var move = ourGame.makeMove(7);
      break;
    case 'eight':
      var move = ourGame.makeMove(8);
      break;
    case 'nine':
      var move = ourGame.makeMove(9);
      break;                                                                                          
    default:
      break;
  }   
  console.log(move, '<<< move');
  if(move) {
    square.innerText = ourGame.currentPlayer;
    winningHeadingText = ourGame.showGameOver();
    ourGame.updatePlayerTurn();
    renderHeading();
  }  
}

