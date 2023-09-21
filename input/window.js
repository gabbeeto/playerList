import { displayArray } from './display.js';
import { Player, pushToActivityArray } from './main.js';

let window = document.querySelector('#window');

document.addEventListener('keydown',openWindows)



function openWindows(event){
  switch(event.keyCode){
    case 219:
     addPlayerButton();
    break;
    case 221:
     editPlayerButton();

  }


}

export function addPlayerButton() {
  if (isWindowNotOpen) {




    isWindowNotOpen = false;
    window = document.querySelector('#window');

    window.innerHTML = `<button id='closeWindow'>cerrar</button>
    <p>nombre:</p>
    <input type="text" id='name'>
    <button id='addButton'>agregar</button>`

    document.querySelector('#closeWindow').addEventListener('click', closeWindow)
    document.addEventListener('keydown', closeWindowKeyboard)
    document.querySelector('#addButton').addEventListener('click', addToTheScoresPlayerArray)
    document.addEventListener('keydown', addToTheScoresPlayerArrayKeyboard)

    window.style.display = 'flex';

    document.querySelector(`#window input[type='text']`).select()
  }
}



function addToTheScoresPlayerArrayKeyboard(event) {
  console.log(event.keyCode)
  if (event.keyCode == 13) {
    addToTheScoresPlayerArray()
  }
}


function displayAndHide(el){
  el.style.opacity = '1';
setTimeout(()=> {el.style.opacity = '0';},2000)
}
function addToTheScoresPlayerArray() {
  let msg = document.querySelector('#message')

  setTimeout(displayAndHide(msg),1000)

  let nameText = document.querySelector(`#window input[type='text']`);

  msg.innerText = `${nameText.value} ha sido agregado`
  console.log(playerScores)
  playerScores.push(new Player(nameText.value, 1, playerScores.length))
  pushToActivityArray()
  displayArray()

  closeWindow()
}


export function editPlayerButton() {
  if (isWindowNotOpen && typeof selectedPlayer == "number") {

    isWindowNotOpen = false;
    window.innerHTML = `<button id='closeWindow' >cerrar</button>
    <p>nombre:</p>
    <input value='${playerScores[selectedPlayer].name}' type="text" id='name' autofocus='true' >
    <p>stars:</p>
    <input type="number" value='${playerScores[selectedPlayer].score}'  id="stars">
    <button id='applyButton'>aplicar cambios</button>`

    document.querySelector('#closeWindow').addEventListener('click', closeWindow)
    document.addEventListener('keydown', closeWindowKeyboard)
    document.querySelector('#applyButton').addEventListener('click', applyChanges)
    document.addEventListener('keydown', applyChangesKeyboard)

    window.style.display = 'flex';
    document.querySelector(`#window input[type='number']`).select()


  }
}


function applyChangesKeyboard(event) {
  console.log(event.keyCode)
  if (event.keyCode == 13) {
    applyChanges()
  }
}


function applyChanges() {
  let msg = document.querySelector('#message')
  if(playerScores[selectedPlayer].score != document.getElementById('stars').value){

  setTimeout(displayAndHide(msg),1000)
  msg.innerText = `${playerScores[selectedPlayer].name} ahora tiene ${document.getElementById('stars').value} estrellas`
  }

  else if(playerScores[selectedPlayer].name != document.getElementById('name').value ){
  msg.style.opacity = '1';
  msg.innerText = `${playerScores[selectedPlayer].name} ahora se llama ${document.getElementById('name').value}`
  }

  playerScores[selectedPlayer].name = document.getElementById('name').value;
  playerScores[selectedPlayer].score = document.getElementById('stars').value;

  pushToActivityArray()
  displayArray()

  closeWindow()

}




function closeWindowKeyboard(event) {
  console.log(event.keyCode)
  if (event.keyCode == 27) {
    closeWindow()
  }
}

function closeWindow() {
  window.style.display = 'none';
  isWindowNotOpen = true;
  document.removeEventListener('keydown', closeWindowKeyboard)
  document.removeEventListener('keydown', applyChangesKeyboard)
  document.removeEventListener('keydown', addToTheScoresPlayerArrayKeyboard)
}
