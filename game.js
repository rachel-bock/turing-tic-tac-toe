const Player = require("./player");

class Game {
  constructor() {
    this.currentPlayer = 'X';
    this.gameBoard = new Array(10);
    this.gameOver = false;
    this.playerO = new Player(2, '0');
    this.playerX = new Player(1, 'X');
    this.playsFirst = 'X';
    this.winner = null;
  }

  resetGame() {
    this.gameBoard = new Array(10);
    this.gameOver = false;
    if (this.playsFirst === 'X') {
      this.playsFirst = 'O';
    } else {
      this.playsFirst = 'X';
    }
    this.currentPlayer = this.playsFirst;
    this.winner = null;
  }

  updatePlayer() {
    if (this.currentPlayer === 'X') {
      this.currentPlayer = 'O';
    } else {
      this.currentPlayer = 'X';
    }
  }
}

module.exports = Game;