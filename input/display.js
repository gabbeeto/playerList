import {deletePlayer} from './delete.js'


window.sortedPlayer = window.playerScores;


const mainContainer = document.querySelector('main');

export function displayArray() {
  sortArray()
  for (let player of sortedPlayer) {
    let playerContainer = document.createElement(`div`);
    let nameDiv = document.createElement('div')

    let playerName = document.createElement('p');
    playerName.innerText = player.name;
 
    deleteImage = document.createElement(img)
    deleteImage.value = player.index;
    deleteImage.addEventListener('click', deletePlayer)

    mainContainer.appendChild(playerContainer)
    playerContainer.appendChild(nameDiv)
    nameDiv.appendChild(playerName)

  }
}

function sortArray() {
  sortedPlayer = window.playerScores.toSorted((a, b) => { return Number(b.score) - Number(a.score) })
}


