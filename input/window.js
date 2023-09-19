import {displayArray} from './display.js';
import {Player} from './main.js';


let window = document.querySelector('#window');


export function addPlayerButton() {
  window = document.querySelector('#window');

  window.innerHTML = `<button id='closeWindow'>cerrar</button>
<p>nombre:</p>
<input type="text" id='name'>
<button id='addButton'>agregar</button>
`

  document.querySelector('#closeWindow').addEventListener('click', closeWindow)
  document.querySelector('#addButton').addEventListener('click', addToTheScoresPlayerArray)
  window.style.display = 'flex';

  document.querySelector(`#window input[type='text']`).select()
}


function addToTheScoresPlayerArray() {
let nameText = document.querySelector(`#window input[type='text']`);
  console.log(playerScores)
playerScores.push(new Player(nameText.value,1,playerScores.length))

displayArray()
closeWindow()
}


export function editPlayerButton() {
  window.innerHTML = `<button id='closeWindow' >cerrar</button>
<p>nombre:</p>
<input type="text" id='name' autofocus='true' >
<p>stars:</p>
<input type="number"  id="stars">
<button id='applyButton'>aplicar cambios</button>
`

  document.querySelector('#closeWindow').addEventListener('click', closeWindow)
  document.querySelector('#applyButton').addEventListener('click', applyChanges)

  window.style.display = 'flex';
  document.querySelector(`#window input[type='number']`).select()

  alert('editing player')
}


function applyChanges() {
  alert('apply changes button works fine')
displayArray()
closeWindow()

}





function closeWindow() {
  window.style.display = 'none';
}
