import { displayArray} from './display.js'

export function deletePlayer(event){
  playerScores.splice(event.target.value,1)
updateTheIndexForArray()
displayArray()


  event.stopPropagation()
}

function updateTheIndexForArray(){
for(let index in playerScores){
playerScores[index].index = Number(index);
  }


}
