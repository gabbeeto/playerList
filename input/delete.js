import { displayArray } from './display.js'
import { pushToActivityArray } from './main.js'

document.addEventListener('keydown', deleteSelected)

function deleteSelected(event) {
  if (typeof selectedPlayer == 'number' && isWindowNotOpen && event.keyCode == 46) {
    playerScores.splice(selectedPlayer, 1)
    updateTheIndexForArray()
    displayArray()
  }
}

export function deletePlayer(event) {
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
