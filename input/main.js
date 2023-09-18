
if (localStorage.playerScores) {
  window.playerScores = JSON.parse(localStorage.playerScores)
}
else {
  window.playerScores = [new Player('crazy02', 7)]
}

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}


