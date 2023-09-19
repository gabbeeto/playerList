export function selectPlayer(event) {
if(isWindowNotOpen){
  for (let player of playerScores) {
    if (event.target.value == player.index) {
      window.selectedPlayer = player.index;
    }
  }
  addBackgroundToSelectedPlayer()
  }
}
function addBackgroundToSelectedPlayer() {
    for (let div of document.querySelectorAll('main > div > div:first-of-type')) {
      if (window.selectedPlayer == div.value) {
        div.style.backgroundColor = '#FFE5A7'
      }
      else {
        div.style.backgroundColor = ''
      }
    }

}
