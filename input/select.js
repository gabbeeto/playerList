export function selectPlayer(event) {
  for (let player of playerScores) {
    if (event.target.value == player.index) {
      window.selectedPlayer = player.index;
    }
  }
  addBackgroundToSelectedPlayer()

}
function addBackgroundToSelectedPlayer() {
  for (let div of document.querySelectorAll('main > div > div:first-of-type')) {
    if (window.selectedPlayer == div.value) {
      div.style.backgroundColor = 'yellow'
    }
    else {
      div.style.backgroundColor = ''

    }


  }

}
