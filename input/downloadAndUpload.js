import {displayArray} from './display.js'


var FileSaver = require('file-saver');
const downloadButton = document.querySelector('header > button:nth-of-type(4)');
const uploadButton = document.querySelector(`header > input[type='file']`);

downloadButton.addEventListener('click', downloadFile)
uploadButton.addEventListener('change', uploadFile)

function downloadFile() {

  let blob = new Blob([JSON.stringify(playerScores)], { type: "text/json;charset=utf-8" });
  FileSaver.saveAs(blob, "playerList.json");


}


function uploadFile() {
  let fileReader = new FileReader();
  let uploadedFile = document.querySelector(`input[type='file']`).files[0]

  fileReader.readAsText(uploadedFile)
  fileReader.onload = () => {
    playerScores = JSON.parse(fileReader.result)
    displayArray()
  }
}
