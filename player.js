class Player {
  constructor(number, token) {
    this.id = number;
    this.token = token;
    this.wins = 0;
  }

  increaseWins() {
    this.wins += 1;
  }
}

module.exports = Player;