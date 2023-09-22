import { displayArray } from './display.js';
import { Player, pushToActivityArray } from './main.js';

let window = document.querySelector('#window');

document.addEventListener('keydown', openWindows)



function openWindows(event) {
  switch (event.keyCode) {
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

    if(lang == 'es'){
    window.innerHTML =`<button id='closeWindow'>cerrar</button>
    <p>nombre:</p>
    <input type="text" id='name'>
    <button id='addButton'>agregar</button>`}
    else{
    window.innerHTML =`<button id='closeWindow'>close</button>
    <p>name:</p>
    <input type="text" id='name'>
    <button id='addButton'>add</button>`}

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


export function displayAndHide(el) {
  setTimeout(display, 500)

  function display() {
    el.style.opacity = '1';
    setTimeout(hide, 3000)
  }

  function hide() {
    el.style.opacity = '0';
  }

}


function addToTheScoresPlayerArray() {
  let msg = document.querySelector('#message')

  displayAndHide(msg);

  let nameText = document.querySelector(`#window input[type='text']`);

  if(lang == 'es'){
  msg.innerText = `${nameText.value} ha sido agregado`;
  }
  else{
  msg.innerText = `${nameText.value} has been added`;
  }
  console.log(playerScores)
  playerScores.push(new Player(nameText.value, 1, playerScores.length))
  pushToActivityArray()
  displayArray()

  closeWindow()
}


export function editPlayerButton() {
  if (isWindowNotOpen && typeof selectedPlayer == "number") {

    isWindowNotOpen = false;
    if(lang == 'es'){
    window.innerHTML = `<button id='closeWindow' >cerrar</button>
    <p>nombre:</p>
    <input value='${playerScores[selectedPlayer].name}' type="text" id='name' autofocus='true' >
    <p>estrellas:</p>
    <input type="number" value='${playerScores[selectedPlayer].score}'  id="stars">
    <button id='applyButton'>aplicar cambios</button>`
    }
    else{
    window.innerHTML = `<button id='closeWindow' >close</button>
    <p>name:</p>
    <input value='${playerScores[selectedPlayer].name}' type="text" id='name' autofocus='true' >
    <p>stars:</p>
    <input type="number" value='${playerScores[selectedPlayer].score}'  id="stars">
    <button id='applyButton'>apply changes</button>`


    }

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
  if (playerScores[selectedPlayer].score != document.getElementById('stars').value) {

    displayAndHide(msg);
    if(lang == 'es'){
    msg.innerText = `${playerScores[selectedPlayer].name} ahora tiene ${document.getElementById('stars').value} estrellas`
    }
    else{
    msg.innerText = `${playerScores[selectedPlayer].name} has ${document.getElementById('stars').value} stars right now!`
    }
  }

  else if (playerScores[selectedPlayer].name != document.getElementById('name').value) {
    msg.style.opacity = '1';



    if(lang == 'es'){
    msg.innerText = `${playerScores[selectedPlayer].name} ahora se llama ${document.getElementById('name').value}`
    }
    else{
    msg.innerText = `${playerScores[selectedPlayer].name} changed its name to ${document.getElementById('name').value}`
    }

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
