import './style.css';
import { displayArray } from './display.js';
import { addPlayerButton, editPlayerButton } from './window.js';
import './darkmode.js';
import './downloadAndUpload.js';
import './scroll.js';
import './eng.js';

let newArray;
let indexo;
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
  indexo = activityArray.length - 1;
}
else {
  window.playerScores = [new Player('gabbeeto', 1), new Player('memo', 2, 1), new Player('jay', 5, 2)];
  // I do this because of the reference problem when you try to directly put the array
  newArray = JSON.stringify(playerScores);
  window.activityArray = [JSON.parse(newArray)];
  indexo = activityArray.length - 1;
}


displayArray()

export function updateLocalStorage() {
  localStorage.setItem('playerScores', JSON.stringify(playerScores))
}


export function pushToActivityArray() {
if(indexo == activityArray.length -1 ){
  // I do this because of the reference problem when you try to directly put the array
  newArray = JSON.stringify(playerScores);
  activityArray.push(JSON.parse(newArray))
  indexo++
  // console.log(indexo)
  console.log(activityArray)
  }
  else{

    // for(let index in activityArray){
    //  if(index > indexo){
    //     activityArray.splice(index,1)
    //   }
    // }
    
    console.log(`indexo:${indexo}`);
    console.log(`activityArray.length:${activityArray.length}`);
    console.log(`activityArray:`);
    console.log(activityArray);

  activityArray.length = indexo + 1;

    console.log(`activityArray.length:${activityArray.length}`);

    console.log(`activityArray:`);
    console.log(activityArray);

    console.log(`indexo:${indexo}`);

    console.log(activityArray);
  newArray = JSON.stringify(playerScores);
  activityArray.push(JSON.parse(newArray))
  indexo++
  console.log(activityArray)

  }
}

document.addEventListener('keydown', moveBackwardsAndForWardsWithActivityArray)

function moveBackwardsAndForWardsWithActivityArray(event) {

  switch (event.keyCode) {
    case 90:
      if (indexo != 0) {

        console.log(event)
        indexo = indexo -1
        let stringo = JSON.stringify(activityArray[indexo])
        playerScores = JSON.parse(stringo);
        displayArray()
      };
    break;
    case 88:
      if (indexo != activityArray.length -1 ) {

        console.log(event)
        indexo = indexo +1
        let stringo = JSON.stringify(activityArray[indexo])
        playerScores = JSON.parse(stringo);
        displayArray()
      }



  }


}
