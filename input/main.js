import './style.css';
import { displayArray } from './display.js'
import {addPlayerButton, editPlayerButton} from './window.js'

document.querySelector('header > button').addEventListener('click',addPlayerButton);
document.querySelector('header > button:last-of-type').addEventListener('click',editPlayerButton);

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
  window.playerScores = [new Player('gabbeeto', 1),new Player('memo', 2,1),new Player('jay', 5,2),new Player('1234', 6,3)]
}


displayArray()


