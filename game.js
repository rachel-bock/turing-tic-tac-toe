class Game {
  constructor() {
    this.firstPlayer = new Player(1, 'X');
    this.secondPlayer = new Player(2, 'O');
    this.currentPlayer = 'X';
    this.gameBoard = new Array(10);
    this.gameBoard[0] = this.currentPlayer;
    this.winner = null;    
  }

  checkForWinner() {
    // method will check all winning combinations 
    // or if the game is a draw 
    // after the player selects a square
    this.checkCombination(this.gameBoard[1], this.gameBoard[2], this.gameBoard[3]);
    this.checkCombination(this.gameBoard[4], this.gameBoard[5], this.gameBoard[6]);
    this.checkCombination(this.gameBoard[7], this.gameBoard[8], this.gameBoard[9]);
    this.checkCombination(this.gameBoard[1], this.gameBoard[4], this.gameBoard[7]);
    this.checkCombination(this.gameBoard[2], this.gameBoard[5], this.gameBoard[8]);
    this.checkCombination(this.gameBoard[3], this.gameBoard[6], this.gameBoard[9]);
    this.checkCombination(this.gameBoard[1], this.gameBoard[5], this.gameBoard[9]);
    this.checkCombination(this.gameBoard[3], this.gameBoard[5], this.gameBoard[7]);
    this.checkDraw();
    if (this.winner) {
      this.showGameOver();
    }
  }

  checkCombination(square1, square2, square3) {
    // method will compare 3 values of combinations to check for win.
    if (square1  === square2 && square2 === square3) {
      this.winner = square1;
    }
  }

  checkDraw() {
    // method will check for a draw.  If it is a draw, update the this.winner value with 'Draw'.
    for (var i = 1; i < this.gameBoard.length; i++) {
      if (!this.gameBoard[i]) {
        return;
      }
    }
    return this.winner = 'Draw';
  }

  makeMove(squareNumber) {
    if (!this.gameBoard[squareNumber]) {
      this.gameBoard[squareNumber] = this.currentPlayer;
    } else {
      console.log(`That square is already taken.`);
      return; 
    }
    if (this.currentPlayer === 'X') {
      this.currentPlayer = 'O';
    } else {
      this.currentPlayer = 'X';
    }
    this.checkForWinner();
    // if(this.winner) {
    //   this.setupGameBoard();
    // }
    this.updatePlayerTurn();
  }

  setupGameBoard() {
    // method will clear this.gameBoard array
    // Set who goes first on the gameBoard array.
    if (this.gameBoard[0] === 'X') {
      this.gameBoard[0] = 'O';
    } else {
      this.gameBoard[0] = 'X';
    }
    for (var i = 1; i < this.gameBoard.length; i++) {
      this.gameBoard[i] = null;
    }
    this.currentPlayer = this.gameBoard[0];
    this.updatePlayerTurn();
  }

  showGameOver() {
    // method will update the screen to show the winner of the game or 
    // declare it is a draw if that is the case.
    if (this.winner === 'X') {
      // Report back to user who won the game.
      console.log(`${this.winner} won!`);
      this.firstPlayer.increaseWins();
    } else if (this.winner === 'O') {
      console.log(`${this.winner} won!`);
      this.secondPlayer.increaseWins();
    } else if (this.winner === 'Draw') {
      console.log(`It's a draw!`);
    }
    this.setupGameBoard();
  }

  updatePlayerTurn() {
    console.log(`It's ${this.currentPlayer}'s turn!`);
  }
}

module.exports = Game;