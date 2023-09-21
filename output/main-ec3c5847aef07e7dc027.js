/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./input/darkmode.js":
/*!***************************!*\
  !*** ./input/darkmode.js ***!
  \***************************/
/***/ (() => {

let isDarkMode = matchMedia('(prefers-color-scheme: dark)').matches;

let darkModeButton = document.querySelector('header > button:nth-of-type(3)');
darkModeButton.addEventListener('click',activateDarkMode)


if (isDarkMode) {

  activateDarkMode()

}


function activateDarkMode() {
  let html = document.querySelector('html')
  html.classList.toggle('dark')
  if (html.className == 'dark') {
    darkModeButton.innerText = 'modo claro'
  }
  else{
    darkModeButton.innerText = 'modo oscuro'

  }
}


/***/ }),

/***/ "./input/delete.js":
/*!*************************!*\
  !*** ./input/delete.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deletePlayer: () => (/* binding */ deletePlayer)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./input/display.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./input/main.js");
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window.js */ "./input/window.js");




document.addEventListener('keydown', deleteSelected)

function deleteSelected(event) {
  if (typeof selectedPlayer == 'number' && isWindowNotOpen && event.keyCode == 46) {
    playerScores.splice(selectedPlayer, 1)
    updateTheIndexForArray()
    ;(0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayArray)()
  }
}

function deletePlayer(event) {

  console.log(playerScores[event.target.value].name)
  let msg = document.querySelector('#message')
  msg.innerText = `${playerScores[event.target.value].name} fue eliminado`
  ;(0,_window_js__WEBPACK_IMPORTED_MODULE_2__.displayAndHide)(msg)
  playerScores.splice(event.target.value, 1)
  updateTheIndexForArray()

  ;(0,_main_js__WEBPACK_IMPORTED_MODULE_1__.pushToActivityArray)()
  ;(0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayArray)()

  event.stopPropagation()
}

function updateTheIndexForArray() {
  for (let index in playerScores) {
    playerScores[index].index = Number(index);
  }


}


/***/ }),

/***/ "./input/display.js":
/*!**************************!*\
  !*** ./input/display.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayArray: () => (/* binding */ displayArray)
/* harmony export */ });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./input/main.js");
/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.js */ "./input/delete.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.js */ "./input/select.js");
/* harmony import */ var _img_removeImg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/removeImg.png */ "./input/img/removeImg.png");
/* harmony import */ var _img_star_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/star.png */ "./input/img/star.png");







window.sortedPlayer = window.playerScores;


const mainContainer = document.querySelector('main');

function displayArray() {
  mainContainer.innerHTML = '';
  sortArray()
  ;(0,_main_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)()
  for (let player of sortedPlayer) {
    let playerContainer = document.createElement(`div`);
    let nameDiv = document.createElement('div');
    nameDiv.value = player.index;

    let playerName = document.createElement('p');
    playerName.innerText = player.name;

    let deleteImage = document.createElement('img');
    deleteImage.value = player.index;
    deleteImage.addEventListener('click', _delete_js__WEBPACK_IMPORTED_MODULE_1__.deletePlayer);
    deleteImage.src = _img_removeImg_png__WEBPACK_IMPORTED_MODULE_3__;

    nameDiv.addEventListener('click', _select_js__WEBPACK_IMPORTED_MODULE_2__.selectPlayer)


    mainContainer.appendChild(playerContainer);
    playerContainer.appendChild(nameDiv);
    nameDiv.append(playerName, deleteImage);


    let starDiv = document.createElement('div');
    playerContainer.appendChild(starDiv)

    let sizeOfScores = (player.score * 60) + 10

    if (sizeOfScores > starDiv.clientWidth) {
      starDiv.innerHTML = ''
      let star = document.createElement('img');
      star.src = _img_star_png__WEBPACK_IMPORTED_MODULE_4__;
      let scoreText = document.createElement('p');
      scoreText.innerText = player.score;
      starDiv.append(star, scoreText);
    }
    else{
      for (let index = 0; index < player.score; index++) {
        let star = document.createElement('img');
        star.src = _img_star_png__WEBPACK_IMPORTED_MODULE_4__;
        starDiv.appendChild(star);
      }


    }


  }
}

function sortArray() {
  window.sortedPlayer = window.playerScores.toSorted((a, b) => { return Number(b.score) - Number(a.score) })
}




/***/ }),

/***/ "./input/downloadAndUpload.js":
/*!************************************!*\
  !*** ./input/downloadAndUpload.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./input/display.js");



var FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
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
    ;(0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayArray)()
  }
}


/***/ }),

/***/ "./input/main.js":
/*!***********************!*\
  !*** ./input/main.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   pushToActivityArray: () => (/* binding */ pushToActivityArray),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./input/style.css");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./input/display.js");
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window.js */ "./input/window.js");
/* harmony import */ var _darkmode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./darkmode.js */ "./input/darkmode.js");
/* harmony import */ var _darkmode_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_darkmode_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _downloadAndUpload_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./downloadAndUpload.js */ "./input/downloadAndUpload.js");






let newArray;
let indexo;
window.isHistoryNotApplied = true;
window.isWindowNotOpen = true;

document.querySelector('header > button').addEventListener('click', _window_js__WEBPACK_IMPORTED_MODULE_2__.addPlayerButton);
document.querySelector('header > button:nth-of-type(2)').addEventListener('click', _window_js__WEBPACK_IMPORTED_MODULE_2__.editPlayerButton);

class Player {
  constructor(name, score, index = 0) {
    this.name = name;
    this.score = score;
    this.index = index;
  }
}


if (localStorage.playerScores) {
  window.playerScores = JSON.parse(localStorage.playerScores);
  // I do this because of the reference problem when you try to directly put the array
  newArray = JSON.stringify(playerScores);
  window.activityArray = [JSON.parse(newArray)];
  indexo = activityArray.length - 1;
}
else {
  window.playerScores = [new Player('gabbeeto', 1), new Player('memo', 2, 1), new Player('jay', 5, 2)];
  // I do this because of the reference problem when you try to directly put the array
  newArray = JSON.stringify(playerScores);
  window.activityArray = [JSON.parse(newArray)];
  indexo = activityArray.length - 1;
}


(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayArray)()

function updateLocalStorage() {
  localStorage.setItem('playerScores', JSON.stringify(playerScores))
}


function pushToActivityArray() {
if(indexo == activityArray.length -1 ){
  // I do this because of the reference problem when you try to directly put the array
  newArray = JSON.stringify(playerScores);
  activityArray.push(JSON.parse(newArray))
  indexo++
  // console.log(indexo)
  console.log(activityArray)
  }
  else{

    // for(let index in activityArray){
    //  if(index > indexo){
    //     activityArray.splice(index,1)
    //   }
    // }
    
    console.log(`indexo:${indexo}`);
    console.log(`activityArray.length:${activityArray.length}`);
    console.log(`activityArray:`);
    console.log(activityArray);

  activityArray.length = indexo + 1;

    console.log(`activityArray.length:${activityArray.length}`);

    console.log(`activityArray:`);
    console.log(activityArray);

    console.log(`indexo:${indexo}`);

    console.log(activityArray);
  newArray = JSON.stringify(playerScores);
  activityArray.push(JSON.parse(newArray))
  indexo++
  console.log(activityArray)

  }
}

document.addEventListener('keydown', moveBackwardsAndForWardsWithActivityArray)

function moveBackwardsAndForWardsWithActivityArray(event) {

  switch (event.keyCode) {
    case 90:
      if (indexo != 0) {

        console.log(event)
        indexo = indexo -1
        let stringo = JSON.stringify(activityArray[indexo])
        playerScores = JSON.parse(stringo);
        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayArray)()
      };
    break;
    case 88:
      if (indexo != activityArray.length -1 ) {

        console.log(event)
        indexo = indexo +1
        let stringo = JSON.stringify(activityArray[indexo])
        playerScores = JSON.parse(stringo);
        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayArray)()
      }



  }


}


/***/ }),

/***/ "./input/select.js":
/*!*************************!*\
  !*** ./input/select.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectPlayer: () => (/* binding */ selectPlayer)
/* harmony export */ });

document.addEventListener('keydown', keyboardNavegation)
function keyboardNavegation(event) {
  if (typeof selectedPlayer == "number" && isWindowNotOpen) {

    switch (event.keyCode) {
      case 37:
      case 38:
        for (let index = 0; index < sortedPlayer.length; index++) {
          if (sortedPlayer[index].index == selectedPlayer && index > 0) {
            selectedPlayer = sortedPlayer[index - 1].index
          };
        }
        selectPlayer(event)
        break;

      case 39:
      case 40:
        let dim;
        for (let index = 0; index < sortedPlayer.length; index++) {
          if (window.sortedPlayer[index].index == selectedPlayer && index < sortedPlayer.length -1 ) {
            dim = window.sortedPlayer[index +1].index;
          };
        }
        if(typeof dim == 'number'){
        window.selectedPlayer = dim;
        }
        selectPlayer(event)
        break;

    }


  }


}



function selectPlayer(event) {
  if (isWindowNotOpen) {
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
      div.style.backgroundColor = 'var(--lightOrange)'
    }
    else {
      div.style.backgroundColor = ''
    }
  }

}


/***/ }),

/***/ "./input/window.js":
/*!*************************!*\
  !*** ./input/window.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlayerButton: () => (/* binding */ addPlayerButton),
/* harmony export */   displayAndHide: () => (/* binding */ displayAndHide),
/* harmony export */   editPlayerButton: () => (/* binding */ editPlayerButton)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./input/display.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./input/main.js");



let window = document.querySelector('#window');

document.addEventListener('keydown', openWindows)



function openWindows(event) {
  switch (event.keyCode) {
    case 219:
      addPlayerButton();
      break;
    case 221:
      editPlayerButton();

  }


}

function addPlayerButton() {
  if (isWindowNotOpen) {




    isWindowNotOpen = false;
    window = document.querySelector('#window');

    window.innerHTML = `<button id='closeWindow'>cerrar</button>
    <p>nombre:</p>
    <input type="text" id='name'>
    <button id='addButton'>agregar</button>`

    document.querySelector('#closeWindow').addEventListener('click', closeWindow)
    document.addEventListener('keydown', closeWindowKeyboard)
    document.querySelector('#addButton').addEventListener('click', addToTheScoresPlayerArray)
    document.addEventListener('keydown', addToTheScoresPlayerArrayKeyboard)

    window.style.display = 'flex';

    document.querySelector(`#window input[type='text']`).select()
  }
}



function addToTheScoresPlayerArrayKeyboard(event) {
  console.log(event.keyCode)
  if (event.keyCode == 13) {
    addToTheScoresPlayerArray()
  }
}


function displayAndHide(el) {
  setTimeout(display, 500)

  function display() {
    el.style.opacity = '1';
    setTimeout(hide, 3000)
  }

  function hide() {
    el.style.opacity = '0';
  }

}


function addToTheScoresPlayerArray() {
  let msg = document.querySelector('#message')

  displayAndHide(msg);

  let nameText = document.querySelector(`#window input[type='text']`);

  msg.innerText = `${nameText.value} ha sido agregado`
  console.log(playerScores)
  playerScores.push(new _main_js__WEBPACK_IMPORTED_MODULE_1__.Player(nameText.value, 1, playerScores.length))
  ;(0,_main_js__WEBPACK_IMPORTED_MODULE_1__.pushToActivityArray)()
  ;(0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayArray)()

  closeWindow()
}


function editPlayerButton() {
  if (isWindowNotOpen && typeof selectedPlayer == "number") {

    isWindowNotOpen = false;
    window.innerHTML = `<button id='closeWindow' >cerrar</button>
    <p>nombre:</p>
    <input value='${playerScores[selectedPlayer].name}' type="text" id='name' autofocus='true' >
    <p>stars:</p>
    <input type="number" value='${playerScores[selectedPlayer].score}'  id="stars">
    <button id='applyButton'>aplicar cambios</button>`

    document.querySelector('#closeWindow').addEventListener('click', closeWindow)
    document.addEventListener('keydown', closeWindowKeyboard)
    document.querySelector('#applyButton').addEventListener('click', applyChanges)
    document.addEventListener('keydown', applyChangesKeyboard)

    window.style.display = 'flex';
    document.querySelector(`#window input[type='number']`).select()


  }
}


function applyChangesKeyboard(event) {
  console.log(event.keyCode)
  if (event.keyCode == 13) {
    applyChanges()
  }
}


function applyChanges() {
  let msg = document.querySelector('#message')
  if (playerScores[selectedPlayer].score != document.getElementById('stars').value) {

    displayAndHide(msg);
    msg.innerText = `${playerScores[selectedPlayer].name} ahora tiene ${document.getElementById('stars').value} estrellas`
  }

  else if (playerScores[selectedPlayer].name != document.getElementById('name').value) {
    msg.style.opacity = '1';
    msg.innerText = `${playerScores[selectedPlayer].name} ahora se llama ${document.getElementById('name').value}`
  }

  playerScores[selectedPlayer].name = document.getElementById('name').value;
  playerScores[selectedPlayer].score = document.getElementById('stars').value;

  (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.pushToActivityArray)()
  ;(0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayArray)()

  closeWindow()

}




function closeWindowKeyboard(event) {
  console.log(event.keyCode)
  if (event.keyCode == 27) {
    closeWindow()
  }
}

function closeWindow() {
  window.style.display = 'none';
  isWindowNotOpen = true;
  document.removeEventListener('keydown', closeWindowKeyboard)
  document.removeEventListener('keydown', applyChangesKeyboard)
  document.removeEventListener('keydown', addToTheScoresPlayerArrayKeyboard)
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./input/style.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./input/style.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
background: 0;
padding: 0;
box-sizing:border-box;
}

:root{
--orange:#FF8D15;
--orange:#FF8D15;
--white:white;
--black:black;
--green:#C1F7C1;
--lightOrange:#FFE5A7;
}

:root.dark{
--orange:#512C05;
--white:black;
--black:white;
--green:#161D16;
--lightOrange:#3B3527;
}

body{
background-color: var(--orange);
color:var(--black);
display: flex;
justify-content:center;
align-items:center;
position: relative;
}

header{
display:flex;
position:absolute;
left: 0;
top: 0;
gap:5px;
}

#message{
position:absolute;
right: 0;
top: 0;
transition: opacity 6s;

}

button {
background-color:var(--white);
color: var(--black);
padding: 10px;
border:2px solid var(--black);
border-radius:10px;
transition: background-color,color 0.5s ;
}

input[type='file']::file-selector-button{

background-color:var(--white);
color: var(--black);
border:2px solid var(--black);
padding: 2.5px;
transition: background-color,color 0.5s ;
border-radius:10px;
}

button:nth-of-type(4), input[type='file']{
opacity:0;
transition:opacity 1s;
}

input[type='file']{
background-color:var(--white);
color: var(--black);
border: 2px solid var(--black);
}

button:hover:nth-of-type(4),input:hover[type='file']{
opacity:1;
}


input:hover[type='file']{
background-color:var(--black);
color: var(--white);
border: 2px solid var(--white);
}


button:hover,input[type='file']::file-selector-button{
background-color:var(--black);
border:2px solid var(--white);
color: var(--white);
cursor: pointer;
}


main{
overflow-y:scroll;
margin-top:8vh;
width:90vw;
height:90vh;
border-radius:20px;
background-color:var(--white);
border:2px solid var(--black);
}

main>  div{
display: grid;
grid-template:1fr / 20% 1fr;
}

main  div > div:first-of-type{
display: flex;
flex-direction:row;
justify-content:center;
align-items:center;
text-align:center;
border-right:2px solid var(--black);
border-bottom:2px solid var(--black);
}


main  div > div:last-of-type{
display:flex ;
justify-content:flex-start;
align-items:center;
border-bottom:2px solid var(--black);
padding-left:10px;
}

main img{
width:60px;
height:60px;

}

#window{
position:absolute;
display:none;
flex-direction:column;
border:2px solid var(--black) ;
padding: 10px;
background-color: var(--white);
border-radius:20px;
top:50vh ;
left:50vw;
transform: translate(-50%,-50%);
gap:5px ;
}

input{
border-radius:10px;
padding:10px ;
border:2px solid var(--black) ;
color:var(--black);
}
input:focus{
background-color:var(--green);
outline:0px solid transparent;
}

`, "",{"version":3,"sources":["webpack://./input/style.css"],"names":[],"mappings":"AAAA;AACA,aAAa;AACb,UAAU;AACV,qBAAqB;AACrB;;AAEA;AACA,gBAAgB;AAChB,gBAAgB;AAChB,aAAa;AACb,aAAa;AACb,eAAe;AACf,qBAAqB;AACrB;;AAEA;AACA,gBAAgB;AAChB,aAAa;AACb,aAAa;AACb,eAAe;AACf,qBAAqB;AACrB;;AAEA;AACA,+BAA+B;AAC/B,kBAAkB;AAClB,aAAa;AACb,sBAAsB;AACtB,kBAAkB;AAClB,kBAAkB;AAClB;;AAEA;AACA,YAAY;AACZ,iBAAiB;AACjB,OAAO;AACP,MAAM;AACN,OAAO;AACP;;AAEA;AACA,iBAAiB;AACjB,QAAQ;AACR,MAAM;AACN,sBAAsB;;AAEtB;;AAEA;AACA,6BAA6B;AAC7B,mBAAmB;AACnB,aAAa;AACb,6BAA6B;AAC7B,kBAAkB;AAClB,wCAAwC;AACxC;;AAEA;;AAEA,6BAA6B;AAC7B,mBAAmB;AACnB,6BAA6B;AAC7B,cAAc;AACd,wCAAwC;AACxC,kBAAkB;AAClB;;AAEA;AACA,SAAS;AACT,qBAAqB;AACrB;;AAEA;AACA,6BAA6B;AAC7B,mBAAmB;AACnB,8BAA8B;AAC9B;;AAEA;AACA,SAAS;AACT;;;AAGA;AACA,6BAA6B;AAC7B,mBAAmB;AACnB,8BAA8B;AAC9B;;;AAGA;AACA,6BAA6B;AAC7B,6BAA6B;AAC7B,mBAAmB;AACnB,eAAe;AACf;;;AAGA;AACA,iBAAiB;AACjB,cAAc;AACd,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB,6BAA6B;AAC7B,6BAA6B;AAC7B;;AAEA;AACA,aAAa;AACb,2BAA2B;AAC3B;;AAEA;AACA,aAAa;AACb,kBAAkB;AAClB,sBAAsB;AACtB,kBAAkB;AAClB,iBAAiB;AACjB,mCAAmC;AACnC,oCAAoC;AACpC;;;AAGA;AACA,aAAa;AACb,0BAA0B;AAC1B,kBAAkB;AAClB,oCAAoC;AACpC,iBAAiB;AACjB;;AAEA;AACA,UAAU;AACV,WAAW;;AAEX;;AAEA;AACA,iBAAiB;AACjB,YAAY;AACZ,qBAAqB;AACrB,8BAA8B;AAC9B,aAAa;AACb,8BAA8B;AAC9B,kBAAkB;AAClB,SAAS;AACT,SAAS;AACT,+BAA+B;AAC/B,QAAQ;AACR;;AAEA;AACA,kBAAkB;AAClB,aAAa;AACb,8BAA8B;AAC9B,kBAAkB;AAClB;AACA;AACA,6BAA6B;AAC7B,6BAA6B;AAC7B","sourcesContent":["*{\nbackground: 0;\npadding: 0;\nbox-sizing:border-box;\n}\n\n:root{\n--orange:#FF8D15;\n--orange:#FF8D15;\n--white:white;\n--black:black;\n--green:#C1F7C1;\n--lightOrange:#FFE5A7;\n}\n\n:root.dark{\n--orange:#512C05;\n--white:black;\n--black:white;\n--green:#161D16;\n--lightOrange:#3B3527;\n}\n\nbody{\nbackground-color: var(--orange);\ncolor:var(--black);\ndisplay: flex;\njustify-content:center;\nalign-items:center;\nposition: relative;\n}\n\nheader{\ndisplay:flex;\nposition:absolute;\nleft: 0;\ntop: 0;\ngap:5px;\n}\n\n#message{\nposition:absolute;\nright: 0;\ntop: 0;\ntransition: opacity 6s;\n\n}\n\nbutton {\nbackground-color:var(--white);\ncolor: var(--black);\npadding: 10px;\nborder:2px solid var(--black);\nborder-radius:10px;\ntransition: background-color,color 0.5s ;\n}\n\ninput[type='file']::file-selector-button{\n\nbackground-color:var(--white);\ncolor: var(--black);\nborder:2px solid var(--black);\npadding: 2.5px;\ntransition: background-color,color 0.5s ;\nborder-radius:10px;\n}\n\nbutton:nth-of-type(4), input[type='file']{\nopacity:0;\ntransition:opacity 1s;\n}\n\ninput[type='file']{\nbackground-color:var(--white);\ncolor: var(--black);\nborder: 2px solid var(--black);\n}\n\nbutton:hover:nth-of-type(4),input:hover[type='file']{\nopacity:1;\n}\n\n\ninput:hover[type='file']{\nbackground-color:var(--black);\ncolor: var(--white);\nborder: 2px solid var(--white);\n}\n\n\nbutton:hover,input[type='file']::file-selector-button{\nbackground-color:var(--black);\nborder:2px solid var(--white);\ncolor: var(--white);\ncursor: pointer;\n}\n\n\nmain{\noverflow-y:scroll;\nmargin-top:8vh;\nwidth:90vw;\nheight:90vh;\nborder-radius:20px;\nbackground-color:var(--white);\nborder:2px solid var(--black);\n}\n\nmain>  div{\ndisplay: grid;\ngrid-template:1fr / 20% 1fr;\n}\n\nmain  div > div:first-of-type{\ndisplay: flex;\nflex-direction:row;\njustify-content:center;\nalign-items:center;\ntext-align:center;\nborder-right:2px solid var(--black);\nborder-bottom:2px solid var(--black);\n}\n\n\nmain  div > div:last-of-type{\ndisplay:flex ;\njustify-content:flex-start;\nalign-items:center;\nborder-bottom:2px solid var(--black);\npadding-left:10px;\n}\n\nmain img{\nwidth:60px;\nheight:60px;\n\n}\n\n#window{\nposition:absolute;\ndisplay:none;\nflex-direction:column;\nborder:2px solid var(--black) ;\npadding: 10px;\nbackground-color: var(--white);\nborder-radius:20px;\ntop:50vh ;\nleft:50vw;\ntransform: translate(-50%,-50%);\ngap:5px ;\n}\n\ninput{\nborder-radius:10px;\npadding:10px ;\nborder:2px solid var(--black) ;\ncolor:var(--black);\n}\ninput:focus{\nbackground-color:var(--green);\noutline:0px solid transparent;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./input/style.css":
/*!*************************!*\
  !*** ./input/style.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./input/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./input/img/removeImg.png":
/*!*********************************!*\
  !*** ./input/img/removeImg.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "removeImg.png";

/***/ }),

/***/ "./input/img/star.png":
/*!****************************!*\
  !*** ./input/img/star.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "star.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./input/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZG93bmxvYWRBbmRVcGxvYWQuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L21haW4uanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvd2luZG93LmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9pbnB1dC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9kaXN0L0ZpbGVTYXZlci5taW4uanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L3N0eWxlLmNzcz9hMTNlIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBpc0RhcmtNb2RlID0gbWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XG5cbmxldCBkYXJrTW9kZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbjpudGgtb2YtdHlwZSgzKScpO1xuZGFya01vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFjdGl2YXRlRGFya01vZGUpXG5cblxuaWYgKGlzRGFya01vZGUpIHtcblxuICBhY3RpdmF0ZURhcmtNb2RlKClcblxufVxuXG5cbmZ1bmN0aW9uIGFjdGl2YXRlRGFya01vZGUoKSB7XG4gIGxldCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXG4gIGh0bWwuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpXG4gIGlmIChodG1sLmNsYXNzTmFtZSA9PSAnZGFyaycpIHtcbiAgICBkYXJrTW9kZUJ1dHRvbi5pbm5lclRleHQgPSAnbW9kbyBjbGFybydcbiAgfVxuICBlbHNle1xuICAgIGRhcmtNb2RlQnV0dG9uLmlubmVyVGV4dCA9ICdtb2RvIG9zY3VybydcblxuICB9XG59XG4iLCJpbXBvcnQgeyBkaXNwbGF5QXJyYXkgfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5pbXBvcnQgeyBwdXNoVG9BY3Rpdml0eUFycmF5IH0gZnJvbSAnLi9tYWluLmpzJ1xuaW1wb3J0IHsgZGlzcGxheUFuZEhpZGV9IGZyb20gJy4vd2luZG93LmpzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZGVsZXRlU2VsZWN0ZWQpXG5cbmZ1bmN0aW9uIGRlbGV0ZVNlbGVjdGVkKGV2ZW50KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ZWRQbGF5ZXIgPT0gJ251bWJlcicgJiYgaXNXaW5kb3dOb3RPcGVuICYmIGV2ZW50LmtleUNvZGUgPT0gNDYpIHtcbiAgICBwbGF5ZXJTY29yZXMuc3BsaWNlKHNlbGVjdGVkUGxheWVyLCAxKVxuICAgIHVwZGF0ZVRoZUluZGV4Rm9yQXJyYXkoKVxuICAgIGRpc3BsYXlBcnJheSgpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVBsYXllcihldmVudCkge1xuXG4gIGNvbnNvbGUubG9nKHBsYXllclNjb3Jlc1tldmVudC50YXJnZXQudmFsdWVdLm5hbWUpXG4gIGxldCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpXG4gIG1zZy5pbm5lclRleHQgPSBgJHtwbGF5ZXJTY29yZXNbZXZlbnQudGFyZ2V0LnZhbHVlXS5uYW1lfSBmdWUgZWxpbWluYWRvYFxuICBkaXNwbGF5QW5kSGlkZShtc2cpXG4gIHBsYXllclNjb3Jlcy5zcGxpY2UoZXZlbnQudGFyZ2V0LnZhbHVlLCAxKVxuICB1cGRhdGVUaGVJbmRleEZvckFycmF5KClcblxuICBwdXNoVG9BY3Rpdml0eUFycmF5KClcbiAgZGlzcGxheUFycmF5KClcblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVUaGVJbmRleEZvckFycmF5KCkge1xuICBmb3IgKGxldCBpbmRleCBpbiBwbGF5ZXJTY29yZXMpIHtcbiAgICBwbGF5ZXJTY29yZXNbaW5kZXhdLmluZGV4ID0gTnVtYmVyKGluZGV4KTtcbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbWFpbi5qcydcbmltcG9ydCB7IGRlbGV0ZVBsYXllciB9IGZyb20gJy4vZGVsZXRlLmpzJ1xuaW1wb3J0IHsgc2VsZWN0UGxheWVyIH0gZnJvbSAnLi9zZWxlY3QuanMnXG5pbXBvcnQgcmVtb3ZlSW1nIGZyb20gJy4vaW1nL3JlbW92ZUltZy5wbmcnXG5pbXBvcnQgc3RhckltZyBmcm9tICcuL2ltZy9zdGFyLnBuZydcblxuXG53aW5kb3cuc29ydGVkUGxheWVyID0gd2luZG93LnBsYXllclNjb3JlcztcblxuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFycmF5KCkge1xuICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBzb3J0QXJyYXkoKVxuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKVxuICBmb3IgKGxldCBwbGF5ZXIgb2Ygc29ydGVkUGxheWVyKSB7XG4gICAgbGV0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxldCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZURpdi52YWx1ZSA9IHBsYXllci5pbmRleDtcblxuICAgIGxldCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsYXllck5hbWUuaW5uZXJUZXh0ID0gcGxheWVyLm5hbWU7XG5cbiAgICBsZXQgZGVsZXRlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVJbWFnZS52YWx1ZSA9IHBsYXllci5pbmRleDtcbiAgICBkZWxldGVJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVBsYXllcik7XG4gICAgZGVsZXRlSW1hZ2Uuc3JjID0gcmVtb3ZlSW1nO1xuXG4gICAgbmFtZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFBsYXllcilcblxuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJDb250YWluZXIpO1xuICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICBuYW1lRGl2LmFwcGVuZChwbGF5ZXJOYW1lLCBkZWxldGVJbWFnZSk7XG5cblxuICAgIGxldCBzdGFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJEaXYpXG5cbiAgICBsZXQgc2l6ZU9mU2NvcmVzID0gKHBsYXllci5zY29yZSAqIDYwKSArIDEwXG5cbiAgICBpZiAoc2l6ZU9mU2NvcmVzID4gc3RhckRpdi5jbGllbnRXaWR0aCkge1xuICAgICAgc3RhckRpdi5pbm5lckhUTUwgPSAnJ1xuICAgICAgbGV0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHN0YXIuc3JjID0gc3RhckltZztcbiAgICAgIGxldCBzY29yZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBzY29yZVRleHQuaW5uZXJUZXh0ID0gcGxheWVyLnNjb3JlO1xuICAgICAgc3RhckRpdi5hcHBlbmQoc3Rhciwgc2NvcmVUZXh0KTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwbGF5ZXIuc2NvcmU7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgc3Rhci5zcmMgPSBzdGFySW1nO1xuICAgICAgICBzdGFyRGl2LmFwcGVuZENoaWxkKHN0YXIpO1xuICAgICAgfVxuXG5cbiAgICB9XG5cblxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRBcnJheSgpIHtcbiAgd2luZG93LnNvcnRlZFBsYXllciA9IHdpbmRvdy5wbGF5ZXJTY29yZXMudG9Tb3J0ZWQoKGEsIGIpID0+IHsgcmV0dXJuIE51bWJlcihiLnNjb3JlKSAtIE51bWJlcihhLnNjb3JlKSB9KVxufVxuXG5cbiIsImltcG9ydCB7ZGlzcGxheUFycmF5fSBmcm9tICcuL2Rpc3BsYXkuanMnXG5cblxudmFyIEZpbGVTYXZlciA9IHJlcXVpcmUoJ2ZpbGUtc2F2ZXInKTtcbmNvbnN0IGRvd25sb2FkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyID4gYnV0dG9uOm50aC1vZi10eXBlKDQpJyk7XG5jb25zdCB1cGxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBoZWFkZXIgPiBpbnB1dFt0eXBlPSdmaWxlJ11gKTtcblxuZG93bmxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb3dubG9hZEZpbGUpXG51cGxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBsb2FkRmlsZSlcblxuZnVuY3Rpb24gZG93bmxvYWRGaWxlKCkge1xuXG4gIGxldCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KHBsYXllclNjb3JlcyldLCB7IHR5cGU6IFwidGV4dC9qc29uO2NoYXJzZXQ9dXRmLThcIiB9KTtcbiAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCBcInBsYXllckxpc3QuanNvblwiKTtcblxuXG59XG5cblxuZnVuY3Rpb24gdXBsb2FkRmlsZSgpIHtcbiAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBsZXQgdXBsb2FkZWRGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdHlwZT0nZmlsZSddYCkuZmlsZXNbMF1cblxuICBmaWxlUmVhZGVyLnJlYWRBc1RleHQodXBsb2FkZWRGaWxlKVxuICBmaWxlUmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICBwbGF5ZXJTY29yZXMgPSBKU09OLnBhcnNlKGZpbGVSZWFkZXIucmVzdWx0KVxuICAgIGRpc3BsYXlBcnJheSgpXG4gIH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZGlzcGxheUFycmF5IH0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuaW1wb3J0IHsgYWRkUGxheWVyQnV0dG9uLCBlZGl0UGxheWVyQnV0dG9uIH0gZnJvbSAnLi93aW5kb3cuanMnXG5pbXBvcnQgJy4vZGFya21vZGUuanMnXG5pbXBvcnQgJy4vZG93bmxvYWRBbmRVcGxvYWQuanMnXG5cbmxldCBuZXdBcnJheTtcbmxldCBpbmRleG87XG53aW5kb3cuaXNIaXN0b3J5Tm90QXBwbGllZCA9IHRydWU7XG53aW5kb3cuaXNXaW5kb3dOb3RPcGVuID0gdHJ1ZTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyID4gYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQbGF5ZXJCdXR0b24pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyID4gYnV0dG9uOm50aC1vZi10eXBlKDIpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0UGxheWVyQnV0dG9uKTtcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHNjb3JlLCBpbmRleCA9IDApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cbn1cblxuXG5pZiAobG9jYWxTdG9yYWdlLnBsYXllclNjb3Jlcykge1xuICB3aW5kb3cucGxheWVyU2NvcmVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucGxheWVyU2NvcmVzKTtcbiAgLy8gSSBkbyB0aGlzIGJlY2F1c2Ugb2YgdGhlIHJlZmVyZW5jZSBwcm9ibGVtIHdoZW4geW91IHRyeSB0byBkaXJlY3RseSBwdXQgdGhlIGFycmF5XG4gIG5ld0FycmF5ID0gSlNPTi5zdHJpbmdpZnkocGxheWVyU2NvcmVzKTtcbiAgd2luZG93LmFjdGl2aXR5QXJyYXkgPSBbSlNPTi5wYXJzZShuZXdBcnJheSldO1xuICBpbmRleG8gPSBhY3Rpdml0eUFycmF5Lmxlbmd0aCAtIDE7XG59XG5lbHNlIHtcbiAgd2luZG93LnBsYXllclNjb3JlcyA9IFtuZXcgUGxheWVyKCdnYWJiZWV0bycsIDEpLCBuZXcgUGxheWVyKCdtZW1vJywgMiwgMSksIG5ldyBQbGF5ZXIoJ2pheScsIDUsIDIpXTtcbiAgLy8gSSBkbyB0aGlzIGJlY2F1c2Ugb2YgdGhlIHJlZmVyZW5jZSBwcm9ibGVtIHdoZW4geW91IHRyeSB0byBkaXJlY3RseSBwdXQgdGhlIGFycmF5XG4gIG5ld0FycmF5ID0gSlNPTi5zdHJpbmdpZnkocGxheWVyU2NvcmVzKTtcbiAgd2luZG93LmFjdGl2aXR5QXJyYXkgPSBbSlNPTi5wYXJzZShuZXdBcnJheSldO1xuICBpbmRleG8gPSBhY3Rpdml0eUFycmF5Lmxlbmd0aCAtIDE7XG59XG5cblxuZGlzcGxheUFycmF5KClcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllclNjb3JlcycsIEpTT04uc3RyaW5naWZ5KHBsYXllclNjb3JlcykpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hUb0FjdGl2aXR5QXJyYXkoKSB7XG5pZihpbmRleG8gPT0gYWN0aXZpdHlBcnJheS5sZW5ndGggLTEgKXtcbiAgLy8gSSBkbyB0aGlzIGJlY2F1c2Ugb2YgdGhlIHJlZmVyZW5jZSBwcm9ibGVtIHdoZW4geW91IHRyeSB0byBkaXJlY3RseSBwdXQgdGhlIGFycmF5XG4gIG5ld0FycmF5ID0gSlNPTi5zdHJpbmdpZnkocGxheWVyU2NvcmVzKTtcbiAgYWN0aXZpdHlBcnJheS5wdXNoKEpTT04ucGFyc2UobmV3QXJyYXkpKVxuICBpbmRleG8rK1xuICAvLyBjb25zb2xlLmxvZyhpbmRleG8pXG4gIGNvbnNvbGUubG9nKGFjdGl2aXR5QXJyYXkpXG4gIH1cbiAgZWxzZXtcblxuICAgIC8vIGZvcihsZXQgaW5kZXggaW4gYWN0aXZpdHlBcnJheSl7XG4gICAgLy8gIGlmKGluZGV4ID4gaW5kZXhvKXtcbiAgICAvLyAgICAgYWN0aXZpdHlBcnJheS5zcGxpY2UoaW5kZXgsMSlcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgXG4gICAgY29uc29sZS5sb2coYGluZGV4bzoke2luZGV4b31gKTtcbiAgICBjb25zb2xlLmxvZyhgYWN0aXZpdHlBcnJheS5sZW5ndGg6JHthY3Rpdml0eUFycmF5Lmxlbmd0aH1gKTtcbiAgICBjb25zb2xlLmxvZyhgYWN0aXZpdHlBcnJheTpgKTtcbiAgICBjb25zb2xlLmxvZyhhY3Rpdml0eUFycmF5KTtcblxuICBhY3Rpdml0eUFycmF5Lmxlbmd0aCA9IGluZGV4byArIDE7XG5cbiAgICBjb25zb2xlLmxvZyhgYWN0aXZpdHlBcnJheS5sZW5ndGg6JHthY3Rpdml0eUFycmF5Lmxlbmd0aH1gKTtcblxuICAgIGNvbnNvbGUubG9nKGBhY3Rpdml0eUFycmF5OmApO1xuICAgIGNvbnNvbGUubG9nKGFjdGl2aXR5QXJyYXkpO1xuXG4gICAgY29uc29sZS5sb2coYGluZGV4bzoke2luZGV4b31gKTtcblxuICAgIGNvbnNvbGUubG9nKGFjdGl2aXR5QXJyYXkpO1xuICBuZXdBcnJheSA9IEpTT04uc3RyaW5naWZ5KHBsYXllclNjb3Jlcyk7XG4gIGFjdGl2aXR5QXJyYXkucHVzaChKU09OLnBhcnNlKG5ld0FycmF5KSlcbiAgaW5kZXhvKytcbiAgY29uc29sZS5sb2coYWN0aXZpdHlBcnJheSlcblxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtb3ZlQmFja3dhcmRzQW5kRm9yV2FyZHNXaXRoQWN0aXZpdHlBcnJheSlcblxuZnVuY3Rpb24gbW92ZUJhY2t3YXJkc0FuZEZvcldhcmRzV2l0aEFjdGl2aXR5QXJyYXkoZXZlbnQpIHtcblxuICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICBjYXNlIDkwOlxuICAgICAgaWYgKGluZGV4byAhPSAwKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgIGluZGV4byA9IGluZGV4byAtMVxuICAgICAgICBsZXQgc3RyaW5nbyA9IEpTT04uc3RyaW5naWZ5KGFjdGl2aXR5QXJyYXlbaW5kZXhvXSlcbiAgICAgICAgcGxheWVyU2NvcmVzID0gSlNPTi5wYXJzZShzdHJpbmdvKTtcbiAgICAgICAgZGlzcGxheUFycmF5KClcbiAgICAgIH07XG4gICAgYnJlYWs7XG4gICAgY2FzZSA4ODpcbiAgICAgIGlmIChpbmRleG8gIT0gYWN0aXZpdHlBcnJheS5sZW5ndGggLTEgKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgIGluZGV4byA9IGluZGV4byArMVxuICAgICAgICBsZXQgc3RyaW5nbyA9IEpTT04uc3RyaW5naWZ5KGFjdGl2aXR5QXJyYXlbaW5kZXhvXSlcbiAgICAgICAgcGxheWVyU2NvcmVzID0gSlNPTi5wYXJzZShzdHJpbmdvKTtcbiAgICAgICAgZGlzcGxheUFycmF5KClcbiAgICAgIH1cblxuXG5cbiAgfVxuXG5cbn1cbiIsIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkTmF2ZWdhdGlvbilcbmZ1bmN0aW9uIGtleWJvYXJkTmF2ZWdhdGlvbihldmVudCkge1xuICBpZiAodHlwZW9mIHNlbGVjdGVkUGxheWVyID09IFwibnVtYmVyXCIgJiYgaXNXaW5kb3dOb3RPcGVuKSB7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMzc6XG4gICAgICBjYXNlIDM4OlxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc29ydGVkUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChzb3J0ZWRQbGF5ZXJbaW5kZXhdLmluZGV4ID09IHNlbGVjdGVkUGxheWVyICYmIGluZGV4ID4gMCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRQbGF5ZXIgPSBzb3J0ZWRQbGF5ZXJbaW5kZXggLSAxXS5pbmRleFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0UGxheWVyKGV2ZW50KVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOTpcbiAgICAgIGNhc2UgNDA6XG4gICAgICAgIGxldCBkaW07XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzb3J0ZWRQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5zb3J0ZWRQbGF5ZXJbaW5kZXhdLmluZGV4ID09IHNlbGVjdGVkUGxheWVyICYmIGluZGV4IDwgc29ydGVkUGxheWVyLmxlbmd0aCAtMSApIHtcbiAgICAgICAgICAgIGRpbSA9IHdpbmRvdy5zb3J0ZWRQbGF5ZXJbaW5kZXggKzFdLmluZGV4O1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mIGRpbSA9PSAnbnVtYmVyJyl7XG4gICAgICAgIHdpbmRvdy5zZWxlY3RlZFBsYXllciA9IGRpbTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RQbGF5ZXIoZXZlbnQpXG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG5cbiAgfVxuXG5cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RQbGF5ZXIoZXZlbnQpIHtcbiAgaWYgKGlzV2luZG93Tm90T3Blbikge1xuICAgIGZvciAobGV0IHBsYXllciBvZiBwbGF5ZXJTY29yZXMpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gcGxheWVyLmluZGV4KSB7XG4gICAgICAgIHdpbmRvdy5zZWxlY3RlZFBsYXllciA9IHBsYXllci5pbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgYWRkQmFja2dyb3VuZFRvU2VsZWN0ZWRQbGF5ZXIoKVxuICB9XG59XG5mdW5jdGlvbiBhZGRCYWNrZ3JvdW5kVG9TZWxlY3RlZFBsYXllcigpIHtcbiAgZm9yIChsZXQgZGl2IG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ21haW4gPiBkaXYgPiBkaXY6Zmlyc3Qtb2YtdHlwZScpKSB7XG4gICAgaWYgKHdpbmRvdy5zZWxlY3RlZFBsYXllciA9PSBkaXYudmFsdWUpIHtcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tbGlnaHRPcmFuZ2UpJ1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJ1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBkaXNwbGF5QXJyYXkgfSBmcm9tICcuL2Rpc3BsYXkuanMnO1xuaW1wb3J0IHsgUGxheWVyLCBwdXNoVG9BY3Rpdml0eUFycmF5IH0gZnJvbSAnLi9tYWluLmpzJztcblxubGV0IHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kb3cnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9wZW5XaW5kb3dzKVxuXG5cblxuZnVuY3Rpb24gb3BlbldpbmRvd3MoZXZlbnQpIHtcbiAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgY2FzZSAyMTk6XG4gICAgICBhZGRQbGF5ZXJCdXR0b24oKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjIxOlxuICAgICAgZWRpdFBsYXllckJ1dHRvbigpO1xuXG4gIH1cblxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQbGF5ZXJCdXR0b24oKSB7XG4gIGlmIChpc1dpbmRvd05vdE9wZW4pIHtcblxuXG5cblxuICAgIGlzV2luZG93Tm90T3BlbiA9IGZhbHNlO1xuICAgIHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kb3cnKTtcblxuICAgIHdpbmRvdy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBpZD0nY2xvc2VXaW5kb3cnPmNlcnJhcjwvYnV0dG9uPlxuICAgIDxwPm5vbWJyZTo8L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9J25hbWUnPlxuICAgIDxidXR0b24gaWQ9J2FkZEJ1dHRvbic+YWdyZWdhcjwvYnV0dG9uPmBcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZVdpbmRvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VXaW5kb3cpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNsb3NlV2luZG93S2V5Ym9hcmQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheUtleWJvYXJkKVxuXG4gICAgd2luZG93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjd2luZG93IGlucHV0W3R5cGU9J3RleHQnXWApLnNlbGVjdCgpXG4gIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXlLZXlib2FyZChldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC5rZXlDb2RlKVxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXkoKVxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbmRIaWRlKGVsKSB7XG4gIHNldFRpbWVvdXQoZGlzcGxheSwgNTAwKVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG4gICAgZWwuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBzZXRUaW1lb3V0KGhpZGUsIDMwMDApXG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKCkge1xuICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXkoKSB7XG4gIGxldCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpXG5cbiAgZGlzcGxheUFuZEhpZGUobXNnKTtcblxuICBsZXQgbmFtZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjd2luZG93IGlucHV0W3R5cGU9J3RleHQnXWApO1xuXG4gIG1zZy5pbm5lclRleHQgPSBgJHtuYW1lVGV4dC52YWx1ZX0gaGEgc2lkbyBhZ3JlZ2Fkb2BcbiAgY29uc29sZS5sb2cocGxheWVyU2NvcmVzKVxuICBwbGF5ZXJTY29yZXMucHVzaChuZXcgUGxheWVyKG5hbWVUZXh0LnZhbHVlLCAxLCBwbGF5ZXJTY29yZXMubGVuZ3RoKSlcbiAgcHVzaFRvQWN0aXZpdHlBcnJheSgpXG4gIGRpc3BsYXlBcnJheSgpXG5cbiAgY2xvc2VXaW5kb3coKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0UGxheWVyQnV0dG9uKCkge1xuICBpZiAoaXNXaW5kb3dOb3RPcGVuICYmIHR5cGVvZiBzZWxlY3RlZFBsYXllciA9PSBcIm51bWJlclwiKSB7XG5cbiAgICBpc1dpbmRvd05vdE9wZW4gPSBmYWxzZTtcbiAgICB3aW5kb3cuaW5uZXJIVE1MID0gYDxidXR0b24gaWQ9J2Nsb3NlV2luZG93JyA+Y2VycmFyPC9idXR0b24+XG4gICAgPHA+bm9tYnJlOjwvcD5cbiAgICA8aW5wdXQgdmFsdWU9JyR7cGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5uYW1lfScgdHlwZT1cInRleHRcIiBpZD0nbmFtZScgYXV0b2ZvY3VzPSd0cnVlJyA+XG4gICAgPHA+c3RhcnM6PC9wPlxuICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9JyR7cGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5zY29yZX0nICBpZD1cInN0YXJzXCI+XG4gICAgPGJ1dHRvbiBpZD0nYXBwbHlCdXR0b24nPmFwbGljYXIgY2FtYmlvczwvYnV0dG9uPmBcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZVdpbmRvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VXaW5kb3cpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNsb3NlV2luZG93S2V5Ym9hcmQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcGx5QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBseUNoYW5nZXMpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGFwcGx5Q2hhbmdlc0tleWJvYXJkKVxuXG4gICAgd2luZG93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3dpbmRvdyBpbnB1dFt0eXBlPSdudW1iZXInXWApLnNlbGVjdCgpXG5cblxuICB9XG59XG5cblxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzS2V5Ym9hcmQoZXZlbnQpIHtcbiAgY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSlcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICBhcHBseUNoYW5nZXMoKVxuICB9XG59XG5cblxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzKCkge1xuICBsZXQgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKVxuICBpZiAocGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5zY29yZSAhPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnMnKS52YWx1ZSkge1xuXG4gICAgZGlzcGxheUFuZEhpZGUobXNnKTtcbiAgICBtc2cuaW5uZXJUZXh0ID0gYCR7cGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5uYW1lfSBhaG9yYSB0aWVuZSAke2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFycycpLnZhbHVlfSBlc3RyZWxsYXNgXG4gIH1cblxuICBlbHNlIGlmIChwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLm5hbWUgIT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZSkge1xuICAgIG1zZy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIG1zZy5pbm5lclRleHQgPSBgJHtwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLm5hbWV9IGFob3JhIHNlIGxsYW1hICR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZX1gXG4gIH1cblxuICBwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICBwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLnNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJzJykudmFsdWU7XG5cbiAgcHVzaFRvQWN0aXZpdHlBcnJheSgpXG4gIGRpc3BsYXlBcnJheSgpXG5cbiAgY2xvc2VXaW5kb3coKVxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIGNsb3NlV2luZG93S2V5Ym9hcmQoZXZlbnQpIHtcbiAgY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSlcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMjcpIHtcbiAgICBjbG9zZVdpbmRvdygpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VXaW5kb3coKSB7XG4gIHdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBpc1dpbmRvd05vdE9wZW4gPSB0cnVlO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2xvc2VXaW5kb3dLZXlib2FyZClcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGFwcGx5Q2hhbmdlc0tleWJvYXJkKVxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheUtleWJvYXJkKVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG5iYWNrZ3JvdW5kOiAwO1xucGFkZGluZzogMDtcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcbn1cblxuOnJvb3R7XG4tLW9yYW5nZTojRkY4RDE1O1xuLS1vcmFuZ2U6I0ZGOEQxNTtcbi0td2hpdGU6d2hpdGU7XG4tLWJsYWNrOmJsYWNrO1xuLS1ncmVlbjojQzFGN0MxO1xuLS1saWdodE9yYW5nZTojRkZFNUE3O1xufVxuXG46cm9vdC5kYXJre1xuLS1vcmFuZ2U6IzUxMkMwNTtcbi0td2hpdGU6YmxhY2s7XG4tLWJsYWNrOndoaXRlO1xuLS1ncmVlbjojMTYxRDE2O1xuLS1saWdodE9yYW5nZTojM0IzNTI3O1xufVxuXG5ib2R5e1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xucG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5oZWFkZXJ7XG5kaXNwbGF5OmZsZXg7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbmxlZnQ6IDA7XG50b3A6IDA7XG5nYXA6NXB4O1xufVxuXG4jbWVzc2FnZXtcbnBvc2l0aW9uOmFic29sdXRlO1xucmlnaHQ6IDA7XG50b3A6IDA7XG50cmFuc2l0aW9uOiBvcGFjaXR5IDZzO1xuXG59XG5cbmJ1dHRvbiB7XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcbmNvbG9yOiB2YXIoLS1ibGFjayk7XG5wYWRkaW5nOiAxMHB4O1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG50cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLGNvbG9yIDAuNXMgO1xufVxuXG5pbnB1dFt0eXBlPSdmaWxlJ106OmZpbGUtc2VsZWN0b3ItYnV0dG9ue1xuXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcbmNvbG9yOiB2YXIoLS1ibGFjayk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBhZGRpbmc6IDIuNXB4O1xudHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvcixjb2xvciAwLjVzIDtcbmJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuYnV0dG9uOm50aC1vZi10eXBlKDQpLCBpbnB1dFt0eXBlPSdmaWxlJ117XG5vcGFjaXR5OjA7XG50cmFuc2l0aW9uOm9wYWNpdHkgMXM7XG59XG5cbmlucHV0W3R5cGU9J2ZpbGUnXXtcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xuY29sb3I6IHZhcigtLWJsYWNrKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbn1cblxuYnV0dG9uOmhvdmVyOm50aC1vZi10eXBlKDQpLGlucHV0OmhvdmVyW3R5cGU9J2ZpbGUnXXtcbm9wYWNpdHk6MTtcbn1cblxuXG5pbnB1dDpob3Zlclt0eXBlPSdmaWxlJ117XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJsYWNrKTtcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG59XG5cblxuYnV0dG9uOmhvdmVyLGlucHV0W3R5cGU9J2ZpbGUnXTo6ZmlsZS1zZWxlY3Rvci1idXR0b257XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJsYWNrKTtcbmJvcmRlcjoycHggc29saWQgdmFyKC0td2hpdGUpO1xuY29sb3I6IHZhcigtLXdoaXRlKTtcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5tYWlue1xub3ZlcmZsb3cteTpzY3JvbGw7XG5tYXJnaW4tdG9wOjh2aDtcbndpZHRoOjkwdnc7XG5oZWlnaHQ6OTB2aDtcbmJvcmRlci1yYWRpdXM6MjBweDtcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG59XG5cbm1haW4+ICBkaXZ7XG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZToxZnIgLyAyMCUgMWZyO1xufVxuXG5tYWluICBkaXYgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjpyb3c7XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xudGV4dC1hbGlnbjpjZW50ZXI7XG5ib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbn1cblxuXG5tYWluICBkaXYgPiBkaXY6bGFzdC1vZi10eXBle1xuZGlzcGxheTpmbGV4IDtcbmp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuYWxpZ24taXRlbXM6Y2VudGVyO1xuYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYmxhY2spO1xucGFkZGluZy1sZWZ0OjEwcHg7XG59XG5cbm1haW4gaW1ne1xud2lkdGg6NjBweDtcbmhlaWdodDo2MHB4O1xuXG59XG5cbiN3aW5kb3d7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbmRpc3BsYXk6bm9uZTtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spIDtcbnBhZGRpbmc6IDEwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5ib3JkZXItcmFkaXVzOjIwcHg7XG50b3A6NTB2aCA7XG5sZWZ0OjUwdnc7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuZ2FwOjVweCA7XG59XG5cbmlucHV0e1xuYm9yZGVyLXJhZGl1czoxMHB4O1xucGFkZGluZzoxMHB4IDtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spIDtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbn1cbmlucHV0OmZvY3Vze1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmVlbik7XG5vdXRsaW5lOjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGFBQWE7QUFDYixlQUFlO0FBQ2YscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixhQUFhO0FBQ2IsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixPQUFPO0FBQ1AsTUFBTTtBQUNOLE9BQU87QUFDUDs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1IsTUFBTTtBQUNOLHNCQUFzQjs7QUFFdEI7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYiw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCLHdDQUF3QztBQUN4Qzs7QUFFQTs7QUFFQSw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2Qsd0NBQXdDO0FBQ3hDLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLFNBQVM7QUFDVCxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQSw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLDhCQUE4QjtBQUM5Qjs7O0FBR0E7QUFDQSw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2Y7OztBQUdBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxVQUFVO0FBQ1YsV0FBVztBQUNYLGtCQUFrQjtBQUNsQiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsbUNBQW1DO0FBQ25DLG9DQUFvQztBQUNwQzs7O0FBR0E7QUFDQSxhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCLGtCQUFrQjtBQUNsQixvQ0FBb0M7QUFDcEMsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFdBQVc7O0FBRVg7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQiw4QkFBOEI7QUFDOUIsYUFBYTtBQUNiLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsU0FBUztBQUNULFNBQVM7QUFDVCwrQkFBK0I7QUFDL0IsUUFBUTtBQUNSOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuYmFja2dyb3VuZDogMDtcXG5wYWRkaW5nOiAwO1xcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuLS1vcmFuZ2U6I0ZGOEQxNTtcXG4tLW9yYW5nZTojRkY4RDE1O1xcbi0td2hpdGU6d2hpdGU7XFxuLS1ibGFjazpibGFjaztcXG4tLWdyZWVuOiNDMUY3QzE7XFxuLS1saWdodE9yYW5nZTojRkZFNUE3O1xcbn1cXG5cXG46cm9vdC5kYXJre1xcbi0tb3JhbmdlOiM1MTJDMDU7XFxuLS13aGl0ZTpibGFjaztcXG4tLWJsYWNrOndoaXRlO1xcbi0tZ3JlZW46IzE2MUQxNjtcXG4tLWxpZ2h0T3JhbmdlOiMzQjM1Mjc7XFxufVxcblxcbmJvZHl7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG5jb2xvcjp2YXIoLS1ibGFjayk7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmhlYWRlcntcXG5kaXNwbGF5OmZsZXg7XFxucG9zaXRpb246YWJzb2x1dGU7XFxubGVmdDogMDtcXG50b3A6IDA7XFxuZ2FwOjVweDtcXG59XFxuXFxuI21lc3NhZ2V7XFxucG9zaXRpb246YWJzb2x1dGU7XFxucmlnaHQ6IDA7XFxudG9wOiAwO1xcbnRyYW5zaXRpb246IG9wYWNpdHkgNnM7XFxuXFxufVxcblxcbmJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuY29sb3I6IHZhcigtLWJsYWNrKTtcXG5wYWRkaW5nOiAxMHB4O1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbmJvcmRlci1yYWRpdXM6MTBweDtcXG50cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLGNvbG9yIDAuNXMgO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdmaWxlJ106OmZpbGUtc2VsZWN0b3ItYnV0dG9ue1xcblxcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xcbmNvbG9yOiB2YXIoLS1ibGFjayk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxucGFkZGluZzogMi41cHg7XFxudHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvcixjb2xvciAwLjVzIDtcXG5ib3JkZXItcmFkaXVzOjEwcHg7XFxufVxcblxcbmJ1dHRvbjpudGgtb2YtdHlwZSg0KSwgaW5wdXRbdHlwZT0nZmlsZSdde1xcbm9wYWNpdHk6MDtcXG50cmFuc2l0aW9uOm9wYWNpdHkgMXM7XFxufVxcblxcbmlucHV0W3R5cGU9J2ZpbGUnXXtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcXG5jb2xvcjogdmFyKC0tYmxhY2spO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyOm50aC1vZi10eXBlKDQpLGlucHV0OmhvdmVyW3R5cGU9J2ZpbGUnXXtcXG5vcGFjaXR5OjE7XFxufVxcblxcblxcbmlucHV0OmhvdmVyW3R5cGU9J2ZpbGUnXXtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJsYWNrKTtcXG5jb2xvcjogdmFyKC0td2hpdGUpO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG59XFxuXFxuXFxuYnV0dG9uOmhvdmVyLGlucHV0W3R5cGU9J2ZpbGUnXTo6ZmlsZS1zZWxlY3Rvci1idXR0b257XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ibGFjayk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuY29sb3I6IHZhcigtLXdoaXRlKTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbm1haW57XFxub3ZlcmZsb3cteTpzY3JvbGw7XFxubWFyZ2luLXRvcDo4dmg7XFxud2lkdGg6OTB2dztcXG5oZWlnaHQ6OTB2aDtcXG5ib3JkZXItcmFkaXVzOjIwcHg7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxufVxcblxcbm1haW4+ICBkaXZ7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLXRlbXBsYXRlOjFmciAvIDIwJSAxZnI7XFxufVxcblxcbm1haW4gIGRpdiA+IGRpdjpmaXJzdC1vZi10eXBle1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246cm93O1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuYWxpZ24taXRlbXM6Y2VudGVyO1xcbnRleHQtYWxpZ246Y2VudGVyO1xcbmJvcmRlci1yaWdodDoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG59XFxuXFxuXFxubWFpbiAgZGl2ID4gZGl2Omxhc3Qtb2YtdHlwZXtcXG5kaXNwbGF5OmZsZXggO1xcbmp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG5ib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxucGFkZGluZy1sZWZ0OjEwcHg7XFxufVxcblxcbm1haW4gaW1ne1xcbndpZHRoOjYwcHg7XFxuaGVpZ2h0OjYwcHg7XFxuXFxufVxcblxcbiN3aW5kb3d7XFxucG9zaXRpb246YWJzb2x1dGU7XFxuZGlzcGxheTpub25lO1xcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKSA7XFxucGFkZGluZzogMTBweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuYm9yZGVyLXJhZGl1czoyMHB4O1xcbnRvcDo1MHZoIDtcXG5sZWZ0OjUwdnc7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG5nYXA6NXB4IDtcXG59XFxuXFxuaW5wdXR7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbnBhZGRpbmc6MTBweCA7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjaykgO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG59XFxuaW5wdXQ6Zm9jdXN7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmVlbik7XFxub3V0bGluZTowcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGEsYixjKXt2YXIgZD1uZXcgWE1MSHR0cFJlcXVlc3Q7ZC5vcGVuKFwiR0VUXCIsYSksZC5yZXNwb25zZVR5cGU9XCJibG9iXCIsZC5vbmxvYWQ9ZnVuY3Rpb24oKXtnKGQucmVzcG9uc2UsYixjKX0sZC5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxkLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5uYXZpZ2F0b3ImJi9NYWNpbnRvc2gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJi9BcHBsZVdlYktpdC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmIS9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksZz1mLnNhdmVBc3x8KFwib2JqZWN0XCIhPXR5cGVvZiB3aW5kb3d8fHdpbmRvdyE9PWY/ZnVuY3Rpb24oKXt9OlwiZG93bmxvYWRcImluIEhUTUxBbmNob3JFbGVtZW50LnByb3RvdHlwZSYmIWE/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihiLGQsZSxnKXtpZihnPWd8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxnJiYoZy5kb2N1bWVudC50aXRsZT1nLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGIpcmV0dXJuIGMoYixkLGUpO3ZhciBoPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1iLnR5cGUsaT0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxqPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoanx8aCYmaXx8YSkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaz1uZXcgRmlsZVJlYWRlcjtrLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWsucmVzdWx0O2E9aj9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxnP2cubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZz1udWxsfSxrLnJlYWRBc0RhdGFVUkwoYil9ZWxzZXt2YXIgbD1mLlVSTHx8Zi53ZWJraXRVUkwsbT1sLmNyZWF0ZU9iamVjdFVSTChiKTtnP2cubG9jYXRpb249bTpsb2NhdGlvbi5ocmVmPW0sZz1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLnJldm9rZU9iamVjdFVSTChtKX0sNEU0KX19KTtmLnNhdmVBcz1nLnNhdmVBcz1nLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1nKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcCIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2lucHV0L21haW4uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=