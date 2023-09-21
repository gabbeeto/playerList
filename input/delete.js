import { displayArray } from './display.js'
import { pushToActivityArray } from './main.js'
import { displayAndHide} from './window.js'

document.addEventListener('keydown', deleteSelected)

function deleteSelected(event) {
  if (typeof selectedPlayer == 'number' && isWindowNotOpen && event.keyCode == 46) {
    playerScores.splice(selectedPlayer, 1)
    updateTheIndexForArray()
    displayArray()
  }
}

export function deletePlayer(event) {

  console.log(playerScores[event.target.value].name)
  let msg = document.querySelector('#message')
  msg.innerText = `${playerScores[event.target.value].name} fue eliminado`
  displayAndHide(msg)
  playerScores.splice(event.target.value, 1)
  updateTheIndexForArray()

  pushToActivityArray()
  displayArray()

  event.stopPropagation()
}

function updateTheIndexForArray() {
  for (let index in playerScores) {
    playerScores[index].index = Number(index);
  }


}
