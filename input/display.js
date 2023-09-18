import { deletePlayer } from './delete.js'
import removeImg from './img/removeImg.png'
import starImg from './img/star.png'


window.sortedPlayer = window.playerScores;


const mainContainer = document.querySelector('main');

export function displayArray() {
  sortArray()
  for (let player of sortedPlayer) {
    let playerContainer = document.createElement(`div`);
    let nameDiv = document.createElement('div');

    let playerName = document.createElement('p');
    playerName.innerText = player.name;

    let deleteImage = document.createElement('img');
    deleteImage.value = player.index;
    deleteImage.addEventListener('click', deletePlayer);
    deleteImage.src = removeImg;



    mainContainer.appendChild(playerContainer);
    playerContainer.appendChild(nameDiv);
    nameDiv.appendChild(playerName);
    nameDiv.appendChild(deleteImage);


    let starDiv = document.createElement('div');
    playerContainer.appendChild(starDiv)
    for(let index = 0; index < player.score; index++){
      let star = document.createElement('img');
      star.src = starImg;
      starDiv.appendChild(star);

    }



  }
}

function sortArray() {
  sortedPlayer = window.playerScores.toSorted((a, b) => { return Number(b.score) - Number(a.score) })
}


