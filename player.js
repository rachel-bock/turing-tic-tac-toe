class Player {
  constructor(number, token) {
    this.id = number;
    this.token = token;
    this.wins = 0;
  }

  increaseWins() {
    this.wins += 1;
    if (this.wins === 1) {
      console.log(`${this.token} has won ${this.wins} time.`);  
    } else {
      console.log(`${this.token} has won ${this.wins} times.`);
    }
  }
}

module.exports = Player;