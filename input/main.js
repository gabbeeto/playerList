import './style.css';
import { displayArray } from './display.js'
import { addPlayerButton, editPlayerButton } from './window.js'
import './darkmode.js'

let newArray;
window.isHistoryNotApplied = true;
window.isWindowNotOpen = true;

document.querySelector('header > button').addEventListener('click', addPlayerButton);
document.querySelector('header > button:nth-of-type(2)').addEventListener('click', editPlayerButton);

export class Player {
  constructor(name, score, index = 0) {
    this.name = name;
    this.score = score;
    this.index = index;
  }
}


if (localStorage.playerScores) {
  window.playerScores = JSON.parse(localStorage.playerScores);
  // I do this because of the reference problem when you try to directly put the array
  newArray = JSON.stringify(playerScores);
  window.activityArray = [JSON.parse(newArray)];
}
else {
  window.playerScores = [new Player('gabbeeto', 1), new Player('memo', 2, 1), new Player('jay', 5, 2)];
  // I do this because of the reference problem when you try to directly put the array
  newArray = JSON.stringify(playerScores);
  window.activityArray = [JSON.parse(newArray)];
}


displayArray()

export function updateLocalStorage() {
  localStorage.setItem('playerScores', JSON.stringify(playerScores))
}


export function pushToActivityArray() {

  // I do this because of the reference problem when you try to directly put the array
  newArray = JSON.stringify(playerScores);
  activityArray.push(JSON.parse(newArray))
}
