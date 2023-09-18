import './style.css';
import { displayArray } from './display.js'
class Player {
  constructor(name, score, index = 0) {
    this.name = name;
    this.score = score;
    this.index = index;
  }
}


if (localStorage.playerScores) {
  window.playerScores = JSON.parse(localStorage.playerScores)
}
else {
  window.playerScores = [new Player('gabbeeto', 1),new Player('memo', 22,1)]
}


displayArray()
