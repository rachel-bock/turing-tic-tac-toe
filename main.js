// Query Selectors
var ticTacToeBoard = document.querySelector('.game-board');

// Global variables
var ourGame = new Game();

// Event Listeners
ticTacToeBoard.addEventListener('click', selectSquare);

// DOM Functions
function renderHeading() {
  var currentPlayer = document.querySelector('.current-player');
  currentPlayer.innerText = ourGame.currentPlayer;
}

function renderWinner() {
  var heading = document.querySelector('.heading');
  var playerOneWins = document.querySelector('.player-one-wins');
  var playerTwoWins = document.querySelector('.player-two-wins');
  heading.innerHTML = ourGame.showGameOver();
  playerOneWins.innerText = ourGame.firstPlayer.wins;
  playerTwoWins.innerText = ourGame.secondPlayer.wins;
}

function selectSquare(event) {
  var square = document.querySelector(`#${event.target.id}`);
  square.classList.remove('board-square-unused');
  switch (event.target.id) {
    case 'one':
      var move = ourGame.makeMove(1);
      console.log(move);
      break;
    case 'two':
      var move = ourGame.makeMove(2);
      console.log(move);
      break;
    case 'three':
      var move = ourGame.makeMove(3);
      console.log(move);
      break;
    case 'four':
      var move = ourGame.makeMove(4);
      console.log(move);
      break;
    case 'five':
      var move = ourGame.makeMove(5);
      console.log(move);
      break;
    case 'six':
      var move = ourGame.makeMove(6);
      console.log(move);
      break;
    case 'seven':
      var move = ourGame.makeMove(7);
      console.log(move);
      break;
    case 'eight':
      var move = ourGame.makeMove(8);
      console.log(move);
      break;
    case 'nine':
      var move = ourGame.makeMove(9);
      console.log(move);
      break;                                                                                          
    default:
      break;
  }   
}

