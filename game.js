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

  checkThreeInARow(square1, square2, square3) {
    if (square1 === square2 && square2 === square3 && square1 === 'X') {
      this.winner = square1;
      this.gameOver = true;
    } else if (square1 === square2 && square2 === square3 && square1 === 'O') {
      this.winner = square1;
      this.gameOver = true;
    }
  }

  makeMove(squareNumber) {
    if (!this.gameBoard[squareNumber]) {
      this.gameBoard[squareNumber] = this.currentPlayer;
    } 
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

  updateTotalWins() {
    if (this.gameOver && this.winner === 'X') {
      this.playerX.increaseWins();
    } else if (this.gameOver && this.winner === 'O') {
      this.playerO.increaseWins();
    }
  }
}

module.exports = Game;