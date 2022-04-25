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

  checkForDraw() {
    for (var i = 1; i < 10; i++) {
      if (!this.gameBoard[i]) {
        return;
      }
    }
    this.winner = 'Draw';
    this.gameOver = true;
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

  checkWinningCombinations() {
    this.checkForDraw();
    this.checkThreeInARow(this.gameBoard[1], this.gameBoard[2], this.gameBoard[3]);
    this.checkThreeInARow(this.gameBoard[4], this.gameBoard[5], this.gameBoard[6]);
    this.checkThreeInARow(this.gameBoard[7], this.gameBoard[8], this.gameBoard[9]);
    this.checkThreeInARow(this.gameBoard[1], this.gameBoard[4], this.gameBoard[7]);
    this.checkThreeInARow(this.gameBoard[2], this.gameBoard[5], this.gameBoard[8]);
    this.checkThreeInARow(this.gameBoard[3], this.gameBoard[6], this.gameBoard[9]);
    this.checkThreeInARow(this.gameBoard[3], this.gameBoard[5], this.gameBoard[7]);
    this.checkThreeInARow(this.gameBoard[1], this.gameBoard[5], this.gameBoard[9]);
    if (this.gameOver) {
      this.updateTotalWins();
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