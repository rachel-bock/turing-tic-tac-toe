// GLOBAL VARIABLES
var game = new Game();

// QUERY SELECTORS
var gameBoard = document.querySelector('.game-board');
var heading = document.querySelector('.heading');
var middleSection = document.querySelector('.middle');
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoWins = document.querySelector('.player-two-wins');

// EVENT LISTENERS
gameBoard.addEventListener('click', selectSquare);

// FUNCTIONS
function selectSquare(event) {
  
}

function setupGameBoard() {
  middleSection.innerHTML = `
  <section class="heading">
    It's <span class="current-player">${game.playsFirst}</span>'s Turn!
  </section>
  <Section class="game-board">
    <div id="one" class="board-square"></div>
    <div id="two" class="board-square"></div>
    <div id="three" class="board-square"></div>
    <div id="four" class="board-square"></div>
    <div id="five" class="board-square"></div>
    <div id="six" class="board-square"></div>
    <div id="seven" class="board-square"></div>
    <div id="eight" class="board-square"></div>
    <div id="nine" class="board-square"></div>
  </Section>`
}
