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




}

module.exports = Game;