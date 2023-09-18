import './style.css';

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}


if (localStorage.playerScores) {
  window.playerScores = JSON.parse(localStorage.playerScores)
}
else {
  window.playerScores = [new Player('crazy02', 7)]
}



