var FileSaver = require('file-saver');
const downloadButton = document.querySelector('header > button:nth-of-type(4)');

downloadButton.addEventListener('click',downloadFile)

function downloadFile(){

let blob = new Blob([JSON.stringify(playerScores)], {type: "text/json;charset=utf-8"});
FileSaver.saveAs(blob, "playerList.json");


}

