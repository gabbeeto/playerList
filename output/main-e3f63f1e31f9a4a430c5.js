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
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll.js */ "./input/scroll.js");
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scroll_js__WEBPACK_IMPORTED_MODULE_5__);







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

/***/ "./input/scroll.js":
/*!*************************!*\
  !*** ./input/scroll.js ***!
  \*************************/
/***/ (() => {

let scrollButton = document.querySelector('button:last-of-type');
let mainContainer = document.querySelector('main');

scrollButton.addEventListener('click', addScroll);

function addScroll(){
mainContainer.classList.toggle('scroll')
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Robot Crush.otf */ "./input/font/Robot Crush.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Minecrafter.Alt.ttf */ "./input/font/Minecrafter.Alt.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./font/American Captain.otf */ "./input/font/American Captain.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
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


@font-face{
font-family: 'default';
src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}


@font-face{
font-family: 'button';
src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}


@font-face{
font-family: 'popUp';
src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

body{
background-color: var(--orange);
color:var(--black);
display: flex;
justify-content:center;
align-items:center;
position: relative;
font-family: 'default';
}


p{
font-size:max(0.9rem,2.3vw);
}

header{
display:flex;
position:absolute;
left: 0;
top: 0;
gap:5px;
}

#message{
font-family: 'popUp';
text-transform:uppercase;
font-size: 2.5rem;
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
font-family: 'button';
font-size:1.3rem;
}

input[type='file']::file-selector-button{

font-family: 'button';
background-color:var(--white);
color: var(--black);
border:2px solid var(--black);
padding: 2.5px;
transition: background-color,color 0.5s ;
border-radius:10px;
}

button:nth-of-type(4),button:nth-of-type(5), input[type='file']{
opacity:0;
transition:opacity 1s;
}

input[type='file']{
background-color:var(--white);
color: var(--black);
border: 2px solid var(--black);
font-family: 'default';
}

button:hover:nth-of-type(4),button:hover:nth-of-type(5), input:hover[type='file']{
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
margin-top:8vh;
width:90vw;
border-radius:20px;
background-color:var(--white);
border:2px solid var(--black);
}

main.scroll{
overflow-y:auto;
height:90vh;
}


main>  div{
display: grid;
grid-template:1fr / 35% 1fr;
}

main  div > div:first-of-type{
display: flex;
flex-direction:row;
justify-content:center;
align-items:center;
text-align:center;
border-right:2px solid var(--black);
}

main  div > div:last-of-type:not(main div:last-of-type >div:last-of-type),
main  div > div:first-of-type:not(main  div:last-of-type > div:first-of-type){
border-bottom:2px solid var(--black);
}


main  div > div:last-of-type{
display:flex ;
justify-content:flex-start;
align-items:center;
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

input:focus:not(input[type='file']){
background-color:var(--green);
outline:0px solid transparent;
}

`, "",{"version":3,"sources":["webpack://./input/style.css"],"names":[],"mappings":"AAAA;AACA,aAAa;AACb,UAAU;AACV,qBAAqB;AACrB;;;AAGA;AACA,gBAAgB;AAChB,gBAAgB;AAChB,aAAa;AACb,aAAa;AACb,eAAe;AACf,qBAAqB;AACrB;;AAEA;AACA,gBAAgB;AAChB,aAAa;AACb,aAAa;AACb,eAAe;AACf,qBAAqB;AACrB;;;AAGA;AACA,sBAAsB;AACtB,4CAAmC;AACnC;;;AAGA;AACA,qBAAqB;AACrB,4CAAsC;AACtC;;;AAGA;AACA,oBAAoB;AACpB,4CAAwC;AACxC;;AAEA;AACA,+BAA+B;AAC/B,kBAAkB;AAClB,aAAa;AACb,sBAAsB;AACtB,kBAAkB;AAClB,kBAAkB;AAClB,sBAAsB;AACtB;;;AAGA;AACA,2BAA2B;AAC3B;;AAEA;AACA,YAAY;AACZ,iBAAiB;AACjB,OAAO;AACP,MAAM;AACN,OAAO;AACP;;AAEA;AACA,oBAAoB;AACpB,wBAAwB;AACxB,iBAAiB;AACjB,iBAAiB;AACjB,QAAQ;AACR,MAAM;AACN,sBAAsB;AACtB;;AAEA;AACA,6BAA6B;AAC7B,mBAAmB;AACnB,aAAa;AACb,6BAA6B;AAC7B,kBAAkB;AAClB,wCAAwC;AACxC,qBAAqB;AACrB,gBAAgB;AAChB;;AAEA;;AAEA,qBAAqB;AACrB,6BAA6B;AAC7B,mBAAmB;AACnB,6BAA6B;AAC7B,cAAc;AACd,wCAAwC;AACxC,kBAAkB;AAClB;;AAEA;AACA,SAAS;AACT,qBAAqB;AACrB;;AAEA;AACA,6BAA6B;AAC7B,mBAAmB;AACnB,8BAA8B;AAC9B,sBAAsB;AACtB;;AAEA;AACA,SAAS;AACT;;;AAGA;AACA,6BAA6B;AAC7B,mBAAmB;AACnB,8BAA8B;AAC9B;;;AAGA;AACA,6BAA6B;AAC7B,6BAA6B;AAC7B,mBAAmB;AACnB,eAAe;AACf;;;AAGA;AACA,cAAc;AACd,UAAU;AACV,kBAAkB;AAClB,6BAA6B;AAC7B,6BAA6B;AAC7B;;AAEA;AACA,eAAe;AACf,WAAW;AACX;;;AAGA;AACA,aAAa;AACb,2BAA2B;AAC3B;;AAEA;AACA,aAAa;AACb,kBAAkB;AAClB,sBAAsB;AACtB,kBAAkB;AAClB,iBAAiB;AACjB,mCAAmC;AACnC;;AAEA;;AAEA,oCAAoC;AACpC;;;AAGA;AACA,aAAa;AACb,0BAA0B;AAC1B,kBAAkB;AAClB,iBAAiB;AACjB;;AAEA;AACA,UAAU;AACV,WAAW;;AAEX;;AAEA;AACA,iBAAiB;AACjB,YAAY;AACZ,qBAAqB;AACrB,8BAA8B;AAC9B,aAAa;AACb,8BAA8B;AAC9B,kBAAkB;AAClB,SAAS;AACT,SAAS;AACT,+BAA+B;AAC/B,QAAQ;AACR;;AAEA;AACA,kBAAkB;AAClB,aAAa;AACb,8BAA8B;AAC9B,kBAAkB;AAClB;;AAEA;AACA,6BAA6B;AAC7B,6BAA6B;AAC7B","sourcesContent":["*{\nbackground: 0;\npadding: 0;\nbox-sizing:border-box;\n}\n\n\n:root{\n--orange:#FF8D15;\n--orange:#FF8D15;\n--white:white;\n--black:black;\n--green:#C1F7C1;\n--lightOrange:#FFE5A7;\n}\n\n:root.dark{\n--orange:#512C05;\n--white:black;\n--black:white;\n--green:#161D16;\n--lightOrange:#3B3527;\n}\n\n\n@font-face{\nfont-family: 'default';\nsrc: url('./font/Robot\\ Crush.otf');\n}\n\n\n@font-face{\nfont-family: 'button';\nsrc: url('./font/Minecrafter.Alt.ttf');\n}\n\n\n@font-face{\nfont-family: 'popUp';\nsrc: url('./font/American\\ Captain.otf');\n}\n\nbody{\nbackground-color: var(--orange);\ncolor:var(--black);\ndisplay: flex;\njustify-content:center;\nalign-items:center;\nposition: relative;\nfont-family: 'default';\n}\n\n\np{\nfont-size:max(0.9rem,2.3vw);\n}\n\nheader{\ndisplay:flex;\nposition:absolute;\nleft: 0;\ntop: 0;\ngap:5px;\n}\n\n#message{\nfont-family: 'popUp';\ntext-transform:uppercase;\nfont-size: 2.5rem;\nposition:absolute;\nright: 0;\ntop: 0;\ntransition: opacity 6s;\n}\n\nbutton {\nbackground-color:var(--white);\ncolor: var(--black);\npadding: 10px;\nborder:2px solid var(--black);\nborder-radius:10px;\ntransition: background-color,color 0.5s ;\nfont-family: 'button';\nfont-size:1.3rem;\n}\n\ninput[type='file']::file-selector-button{\n\nfont-family: 'button';\nbackground-color:var(--white);\ncolor: var(--black);\nborder:2px solid var(--black);\npadding: 2.5px;\ntransition: background-color,color 0.5s ;\nborder-radius:10px;\n}\n\nbutton:nth-of-type(4),button:nth-of-type(5), input[type='file']{\nopacity:0;\ntransition:opacity 1s;\n}\n\ninput[type='file']{\nbackground-color:var(--white);\ncolor: var(--black);\nborder: 2px solid var(--black);\nfont-family: 'default';\n}\n\nbutton:hover:nth-of-type(4),button:hover:nth-of-type(5), input:hover[type='file']{\nopacity:1;\n}\n\n\ninput:hover[type='file']{\nbackground-color:var(--black);\ncolor: var(--white);\nborder: 2px solid var(--white);\n}\n\n\nbutton:hover,input[type='file']::file-selector-button{\nbackground-color:var(--black);\nborder:2px solid var(--white);\ncolor: var(--white);\ncursor: pointer;\n}\n\n\nmain{\nmargin-top:8vh;\nwidth:90vw;\nborder-radius:20px;\nbackground-color:var(--white);\nborder:2px solid var(--black);\n}\n\nmain.scroll{\noverflow-y:auto;\nheight:90vh;\n}\n\n\nmain>  div{\ndisplay: grid;\ngrid-template:1fr / 35% 1fr;\n}\n\nmain  div > div:first-of-type{\ndisplay: flex;\nflex-direction:row;\njustify-content:center;\nalign-items:center;\ntext-align:center;\nborder-right:2px solid var(--black);\n}\n\nmain  div > div:last-of-type:not(main div:last-of-type >div:last-of-type),\nmain  div > div:first-of-type:not(main  div:last-of-type > div:first-of-type){\nborder-bottom:2px solid var(--black);\n}\n\n\nmain  div > div:last-of-type{\ndisplay:flex ;\njustify-content:flex-start;\nalign-items:center;\npadding-left:10px;\n}\n\nmain img{\nwidth:60px;\nheight:60px;\n\n}\n\n#window{\nposition:absolute;\ndisplay:none;\nflex-direction:column;\nborder:2px solid var(--black) ;\npadding: 10px;\nbackground-color: var(--white);\nborder-radius:20px;\ntop:50vh ;\nleft:50vw;\ntransform: translate(-50%,-50%);\ngap:5px ;\n}\n\ninput{\nborder-radius:10px;\npadding:10px ;\nborder:2px solid var(--black) ;\ncolor:var(--black);\n}\n\ninput:focus:not(input[type='file']){\nbackground-color:var(--green);\noutline:0px solid transparent;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./input/font/American Captain.otf":
/*!*****************************************!*\
  !*** ./input/font/American Captain.otf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "American Captain.otf";

/***/ }),

/***/ "./input/font/Minecrafter.Alt.ttf":
/*!****************************************!*\
  !*** ./input/font/Minecrafter.Alt.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Minecrafter.Alt.ttf";

/***/ }),

/***/ "./input/font/Robot Crush.otf":
/*!************************************!*\
  !*** ./input/font/Robot Crush.otf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Robot Crush.otf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sa0ZBQWtGLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FB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O1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZG93bmxvYWRBbmRVcGxvYWQuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L21haW4uanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvc2VsZWN0LmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9pbnB1dC93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvc3R5bGUuY3NzP2ExM2UiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaXNEYXJrTW9kZSA9IG1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuXG5sZXQgZGFya01vZGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b246bnRoLW9mLXR5cGUoMyknKTtcbmRhcmtNb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhY3RpdmF0ZURhcmtNb2RlKVxuXG5cbmlmIChpc0RhcmtNb2RlKSB7XG5cbiAgYWN0aXZhdGVEYXJrTW9kZSgpXG5cbn1cblxuXG5mdW5jdGlvbiBhY3RpdmF0ZURhcmtNb2RlKCkge1xuICBsZXQgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxuICBodG1sLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKVxuICBpZiAoaHRtbC5jbGFzc05hbWUgPT0gJ2RhcmsnKSB7XG4gICAgZGFya01vZGVCdXR0b24uaW5uZXJUZXh0ID0gJ21vZG8gY2xhcm8nXG4gIH1cbiAgZWxzZXtcbiAgICBkYXJrTW9kZUJ1dHRvbi5pbm5lclRleHQgPSAnbW9kbyBvc2N1cm8nXG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgZGlzcGxheUFycmF5IH0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuaW1wb3J0IHsgcHVzaFRvQWN0aXZpdHlBcnJheSB9IGZyb20gJy4vbWFpbi5qcydcbmltcG9ydCB7IGRpc3BsYXlBbmRIaWRlfSBmcm9tICcuL3dpbmRvdy5qcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRlbGV0ZVNlbGVjdGVkKVxuXG5mdW5jdGlvbiBkZWxldGVTZWxlY3RlZChldmVudCkge1xuICBpZiAodHlwZW9mIHNlbGVjdGVkUGxheWVyID09ICdudW1iZXInICYmIGlzV2luZG93Tm90T3BlbiAmJiBldmVudC5rZXlDb2RlID09IDQ2KSB7XG4gICAgcGxheWVyU2NvcmVzLnNwbGljZShzZWxlY3RlZFBsYXllciwgMSlcbiAgICB1cGRhdGVUaGVJbmRleEZvckFycmF5KClcbiAgICBkaXNwbGF5QXJyYXkoKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQbGF5ZXIoZXZlbnQpIHtcblxuICBjb25zb2xlLmxvZyhwbGF5ZXJTY29yZXNbZXZlbnQudGFyZ2V0LnZhbHVlXS5uYW1lKVxuICBsZXQgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKVxuICBtc2cuaW5uZXJUZXh0ID0gYCR7cGxheWVyU2NvcmVzW2V2ZW50LnRhcmdldC52YWx1ZV0ubmFtZX0gZnVlIGVsaW1pbmFkb2BcbiAgZGlzcGxheUFuZEhpZGUobXNnKVxuICBwbGF5ZXJTY29yZXMuc3BsaWNlKGV2ZW50LnRhcmdldC52YWx1ZSwgMSlcbiAgdXBkYXRlVGhlSW5kZXhGb3JBcnJheSgpXG5cbiAgcHVzaFRvQWN0aXZpdHlBcnJheSgpXG4gIGRpc3BsYXlBcnJheSgpXG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGhlSW5kZXhGb3JBcnJheSgpIHtcbiAgZm9yIChsZXQgaW5kZXggaW4gcGxheWVyU2NvcmVzKSB7XG4gICAgcGxheWVyU2NvcmVzW2luZGV4XS5pbmRleCA9IE51bWJlcihpbmRleCk7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL21haW4uanMnXG5pbXBvcnQgeyBkZWxldGVQbGF5ZXIgfSBmcm9tICcuL2RlbGV0ZS5qcydcbmltcG9ydCB7IHNlbGVjdFBsYXllciB9IGZyb20gJy4vc2VsZWN0LmpzJ1xuaW1wb3J0IHJlbW92ZUltZyBmcm9tICcuL2ltZy9yZW1vdmVJbWcucG5nJ1xuaW1wb3J0IHN0YXJJbWcgZnJvbSAnLi9pbWcvc3Rhci5wbmcnXG5cblxud2luZG93LnNvcnRlZFBsYXllciA9IHdpbmRvdy5wbGF5ZXJTY29yZXM7XG5cblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBcnJheSgpIHtcbiAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgc29ydEFycmF5KClcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKClcbiAgZm9yIChsZXQgcGxheWVyIG9mIHNvcnRlZFBsYXllcikge1xuICAgIGxldCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsZXQgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVEaXYudmFsdWUgPSBwbGF5ZXIuaW5kZXg7XG5cbiAgICBsZXQgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbGF5ZXJOYW1lLmlubmVyVGV4dCA9IHBsYXllci5uYW1lO1xuXG4gICAgbGV0IGRlbGV0ZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZGVsZXRlSW1hZ2UudmFsdWUgPSBwbGF5ZXIuaW5kZXg7XG4gICAgZGVsZXRlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQbGF5ZXIpO1xuICAgIGRlbGV0ZUltYWdlLnNyYyA9IHJlbW92ZUltZztcblxuICAgIG5hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQbGF5ZXIpXG5cblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyKTtcbiAgICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgbmFtZURpdi5hcHBlbmQocGxheWVyTmFtZSwgZGVsZXRlSW1hZ2UpO1xuXG5cbiAgICBsZXQgc3RhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFyRGl2KVxuXG4gICAgbGV0IHNpemVPZlNjb3JlcyA9IChwbGF5ZXIuc2NvcmUgKiA2MCkgKyAxMFxuXG4gICAgaWYgKHNpemVPZlNjb3JlcyA+IHN0YXJEaXYuY2xpZW50V2lkdGgpIHtcbiAgICAgIHN0YXJEaXYuaW5uZXJIVE1MID0gJydcbiAgICAgIGxldCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBzdGFyLnNyYyA9IHN0YXJJbWc7XG4gICAgICBsZXQgc2NvcmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgc2NvcmVUZXh0LmlubmVyVGV4dCA9IHBsYXllci5zY29yZTtcbiAgICAgIHN0YXJEaXYuYXBwZW5kKHN0YXIsIHNjb3JlVGV4dCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGxheWVyLnNjb3JlOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHN0YXIuc3JjID0gc3RhckltZztcbiAgICAgICAgc3RhckRpdi5hcHBlbmRDaGlsZChzdGFyKTtcbiAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0QXJyYXkoKSB7XG4gIHdpbmRvdy5zb3J0ZWRQbGF5ZXIgPSB3aW5kb3cucGxheWVyU2NvcmVzLnRvU29ydGVkKChhLCBiKSA9PiB7IHJldHVybiBOdW1iZXIoYi5zY29yZSkgLSBOdW1iZXIoYS5zY29yZSkgfSlcbn1cblxuXG4iLCJpbXBvcnQge2Rpc3BsYXlBcnJheX0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuXG5cbnZhciBGaWxlU2F2ZXIgPSByZXF1aXJlKCdmaWxlLXNhdmVyJyk7XG5jb25zdCBkb3dubG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbjpudGgtb2YtdHlwZSg0KScpO1xuY29uc3QgdXBsb2FkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaGVhZGVyID4gaW5wdXRbdHlwZT0nZmlsZSddYCk7XG5cbmRvd25sb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG93bmxvYWRGaWxlKVxudXBsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwbG9hZEZpbGUpXG5cbmZ1bmN0aW9uIGRvd25sb2FkRmlsZSgpIHtcblxuICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShwbGF5ZXJTY29yZXMpXSwgeyB0eXBlOiBcInRleHQvanNvbjtjaGFyc2V0PXV0Zi04XCIgfSk7XG4gIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgXCJwbGF5ZXJMaXN0Lmpzb25cIik7XG5cblxufVxuXG5cbmZ1bmN0aW9uIHVwbG9hZEZpbGUoKSB7XG4gIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgbGV0IHVwbG9hZGVkRmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9J2ZpbGUnXWApLmZpbGVzWzBdXG5cbiAgZmlsZVJlYWRlci5yZWFkQXNUZXh0KHVwbG9hZGVkRmlsZSlcbiAgZmlsZVJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgcGxheWVyU2NvcmVzID0gSlNPTi5wYXJzZShmaWxlUmVhZGVyLnJlc3VsdClcbiAgICBkaXNwbGF5QXJyYXkoKVxuICB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGRpc3BsYXlBcnJheSB9IGZyb20gJy4vZGlzcGxheS5qcydcbmltcG9ydCB7IGFkZFBsYXllckJ1dHRvbiwgZWRpdFBsYXllckJ1dHRvbiB9IGZyb20gJy4vd2luZG93LmpzJ1xuaW1wb3J0ICcuL2Rhcmttb2RlLmpzJ1xuaW1wb3J0ICcuL2Rvd25sb2FkQW5kVXBsb2FkLmpzJ1xuaW1wb3J0ICcuL3Njcm9sbC5qcydcblxubGV0IG5ld0FycmF5O1xubGV0IGluZGV4bztcbndpbmRvdy5pc0hpc3RvcnlOb3RBcHBsaWVkID0gdHJ1ZTtcbndpbmRvdy5pc1dpbmRvd05vdE9wZW4gPSB0cnVlO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFBsYXllckJ1dHRvbik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b246bnRoLW9mLXR5cGUoMiknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQbGF5ZXJCdXR0b24pO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc2NvcmUsIGluZGV4ID0gMCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxufVxuXG5cbmlmIChsb2NhbFN0b3JhZ2UucGxheWVyU2NvcmVzKSB7XG4gIHdpbmRvdy5wbGF5ZXJTY29yZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wbGF5ZXJTY29yZXMpO1xuICAvLyBJIGRvIHRoaXMgYmVjYXVzZSBvZiB0aGUgcmVmZXJlbmNlIHByb2JsZW0gd2hlbiB5b3UgdHJ5IHRvIGRpcmVjdGx5IHB1dCB0aGUgYXJyYXlcbiAgbmV3QXJyYXkgPSBKU09OLnN0cmluZ2lmeShwbGF5ZXJTY29yZXMpO1xuICB3aW5kb3cuYWN0aXZpdHlBcnJheSA9IFtKU09OLnBhcnNlKG5ld0FycmF5KV07XG4gIGluZGV4byA9IGFjdGl2aXR5QXJyYXkubGVuZ3RoIC0gMTtcbn1cbmVsc2Uge1xuICB3aW5kb3cucGxheWVyU2NvcmVzID0gW25ldyBQbGF5ZXIoJ2dhYmJlZXRvJywgMSksIG5ldyBQbGF5ZXIoJ21lbW8nLCAyLCAxKSwgbmV3IFBsYXllcignamF5JywgNSwgMildO1xuICAvLyBJIGRvIHRoaXMgYmVjYXVzZSBvZiB0aGUgcmVmZXJlbmNlIHByb2JsZW0gd2hlbiB5b3UgdHJ5IHRvIGRpcmVjdGx5IHB1dCB0aGUgYXJyYXlcbiAgbmV3QXJyYXkgPSBKU09OLnN0cmluZ2lmeShwbGF5ZXJTY29yZXMpO1xuICB3aW5kb3cuYWN0aXZpdHlBcnJheSA9IFtKU09OLnBhcnNlKG5ld0FycmF5KV07XG4gIGluZGV4byA9IGFjdGl2aXR5QXJyYXkubGVuZ3RoIC0gMTtcbn1cblxuXG5kaXNwbGF5QXJyYXkoKVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyU2NvcmVzJywgSlNPTi5zdHJpbmdpZnkocGxheWVyU2NvcmVzKSlcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaFRvQWN0aXZpdHlBcnJheSgpIHtcbmlmKGluZGV4byA9PSBhY3Rpdml0eUFycmF5Lmxlbmd0aCAtMSApe1xuICAvLyBJIGRvIHRoaXMgYmVjYXVzZSBvZiB0aGUgcmVmZXJlbmNlIHByb2JsZW0gd2hlbiB5b3UgdHJ5IHRvIGRpcmVjdGx5IHB1dCB0aGUgYXJyYXlcbiAgbmV3QXJyYXkgPSBKU09OLnN0cmluZ2lmeShwbGF5ZXJTY29yZXMpO1xuICBhY3Rpdml0eUFycmF5LnB1c2goSlNPTi5wYXJzZShuZXdBcnJheSkpXG4gIGluZGV4bysrXG4gIC8vIGNvbnNvbGUubG9nKGluZGV4bylcbiAgY29uc29sZS5sb2coYWN0aXZpdHlBcnJheSlcbiAgfVxuICBlbHNle1xuXG4gICAgLy8gZm9yKGxldCBpbmRleCBpbiBhY3Rpdml0eUFycmF5KXtcbiAgICAvLyAgaWYoaW5kZXggPiBpbmRleG8pe1xuICAgIC8vICAgICBhY3Rpdml0eUFycmF5LnNwbGljZShpbmRleCwxKVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyhgaW5kZXhvOiR7aW5kZXhvfWApO1xuICAgIGNvbnNvbGUubG9nKGBhY3Rpdml0eUFycmF5Lmxlbmd0aDoke2FjdGl2aXR5QXJyYXkubGVuZ3RofWApO1xuICAgIGNvbnNvbGUubG9nKGBhY3Rpdml0eUFycmF5OmApO1xuICAgIGNvbnNvbGUubG9nKGFjdGl2aXR5QXJyYXkpO1xuXG4gIGFjdGl2aXR5QXJyYXkubGVuZ3RoID0gaW5kZXhvICsgMTtcblxuICAgIGNvbnNvbGUubG9nKGBhY3Rpdml0eUFycmF5Lmxlbmd0aDoke2FjdGl2aXR5QXJyYXkubGVuZ3RofWApO1xuXG4gICAgY29uc29sZS5sb2coYGFjdGl2aXR5QXJyYXk6YCk7XG4gICAgY29uc29sZS5sb2coYWN0aXZpdHlBcnJheSk7XG5cbiAgICBjb25zb2xlLmxvZyhgaW5kZXhvOiR7aW5kZXhvfWApO1xuXG4gICAgY29uc29sZS5sb2coYWN0aXZpdHlBcnJheSk7XG4gIG5ld0FycmF5ID0gSlNPTi5zdHJpbmdpZnkocGxheWVyU2NvcmVzKTtcbiAgYWN0aXZpdHlBcnJheS5wdXNoKEpTT04ucGFyc2UobmV3QXJyYXkpKVxuICBpbmRleG8rK1xuICBjb25zb2xlLmxvZyhhY3Rpdml0eUFycmF5KVxuXG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1vdmVCYWNrd2FyZHNBbmRGb3JXYXJkc1dpdGhBY3Rpdml0eUFycmF5KVxuXG5mdW5jdGlvbiBtb3ZlQmFja3dhcmRzQW5kRm9yV2FyZHNXaXRoQWN0aXZpdHlBcnJheShldmVudCkge1xuXG4gIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgIGNhc2UgOTA6XG4gICAgICBpZiAoaW5kZXhvICE9IDApIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgaW5kZXhvID0gaW5kZXhvIC0xXG4gICAgICAgIGxldCBzdHJpbmdvID0gSlNPTi5zdHJpbmdpZnkoYWN0aXZpdHlBcnJheVtpbmRleG9dKVxuICAgICAgICBwbGF5ZXJTY29yZXMgPSBKU09OLnBhcnNlKHN0cmluZ28pO1xuICAgICAgICBkaXNwbGF5QXJyYXkoKVxuICAgICAgfTtcbiAgICBicmVhaztcbiAgICBjYXNlIDg4OlxuICAgICAgaWYgKGluZGV4byAhPSBhY3Rpdml0eUFycmF5Lmxlbmd0aCAtMSApIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgaW5kZXhvID0gaW5kZXhvICsxXG4gICAgICAgIGxldCBzdHJpbmdvID0gSlNPTi5zdHJpbmdpZnkoYWN0aXZpdHlBcnJheVtpbmRleG9dKVxuICAgICAgICBwbGF5ZXJTY29yZXMgPSBKU09OLnBhcnNlKHN0cmluZ28pO1xuICAgICAgICBkaXNwbGF5QXJyYXkoKVxuICAgICAgfVxuXG5cblxuICB9XG5cblxufVxuIiwibGV0IHNjcm9sbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKTtcbmxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG5zY3JvbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRTY3JvbGwpO1xuXG5mdW5jdGlvbiBhZGRTY3JvbGwoKXtcbm1haW5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2Nyb2xsJylcbn1cblxuXG5cblxuIiwiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5Ym9hcmROYXZlZ2F0aW9uKVxuZnVuY3Rpb24ga2V5Ym9hcmROYXZlZ2F0aW9uKGV2ZW50KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ZWRQbGF5ZXIgPT0gXCJudW1iZXJcIiAmJiBpc1dpbmRvd05vdE9wZW4pIHtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSAzNzpcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzb3J0ZWRQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHNvcnRlZFBsYXllcltpbmRleF0uaW5kZXggPT0gc2VsZWN0ZWRQbGF5ZXIgJiYgaW5kZXggPiAwKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFBsYXllciA9IHNvcnRlZFBsYXllcltpbmRleCAtIDFdLmluZGV4XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RQbGF5ZXIoZXZlbnQpXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM5OlxuICAgICAgY2FzZSA0MDpcbiAgICAgICAgbGV0IGRpbTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNvcnRlZFBsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAod2luZG93LnNvcnRlZFBsYXllcltpbmRleF0uaW5kZXggPT0gc2VsZWN0ZWRQbGF5ZXIgJiYgaW5kZXggPCBzb3J0ZWRQbGF5ZXIubGVuZ3RoIC0xICkge1xuICAgICAgICAgICAgZGltID0gd2luZG93LnNvcnRlZFBsYXllcltpbmRleCArMV0uaW5kZXg7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YgZGltID09ICdudW1iZXInKXtcbiAgICAgICAgd2luZG93LnNlbGVjdGVkUGxheWVyID0gZGltO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFBsYXllcihldmVudClcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG5cblxuICB9XG5cblxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFBsYXllcihldmVudCkge1xuICBpZiAoaXNXaW5kb3dOb3RPcGVuKSB7XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIHBsYXllclNjb3Jlcykge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBwbGF5ZXIuaW5kZXgpIHtcbiAgICAgICAgd2luZG93LnNlbGVjdGVkUGxheWVyID0gcGxheWVyLmluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgICBhZGRCYWNrZ3JvdW5kVG9TZWxlY3RlZFBsYXllcigpXG4gIH1cbn1cbmZ1bmN0aW9uIGFkZEJhY2tncm91bmRUb1NlbGVjdGVkUGxheWVyKCkge1xuICBmb3IgKGxldCBkaXYgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbWFpbiA+IGRpdiA+IGRpdjpmaXJzdC1vZi10eXBlJykpIHtcbiAgICBpZiAod2luZG93LnNlbGVjdGVkUGxheWVyID09IGRpdi52YWx1ZSkge1xuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1saWdodE9yYW5nZSknXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnXG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IGRpc3BsYXlBcnJheSB9IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgeyBQbGF5ZXIsIHB1c2hUb0FjdGl2aXR5QXJyYXkgfSBmcm9tICcuL21haW4uanMnO1xuXG5sZXQgd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdycpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb3BlbldpbmRvd3MpXG5cblxuXG5mdW5jdGlvbiBvcGVuV2luZG93cyhldmVudCkge1xuICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICBjYXNlIDIxOTpcbiAgICAgIGFkZFBsYXllckJ1dHRvbigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyMjE6XG4gICAgICBlZGl0UGxheWVyQnV0dG9uKCk7XG5cbiAgfVxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBsYXllckJ1dHRvbigpIHtcbiAgaWYgKGlzV2luZG93Tm90T3Blbikge1xuXG5cblxuXG4gICAgaXNXaW5kb3dOb3RPcGVuID0gZmFsc2U7XG4gICAgd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdycpO1xuXG4gICAgd2luZG93LmlubmVySFRNTCA9IGA8YnV0dG9uIGlkPSdjbG9zZVdpbmRvdyc+Y2VycmFyPC9idXR0b24+XG4gICAgPHA+bm9tYnJlOjwvcD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD0nbmFtZSc+XG4gICAgPGJ1dHRvbiBpZD0nYWRkQnV0dG9uJz5hZ3JlZ2FyPC9idXR0b24+YFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlV2luZG93JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVdpbmRvdylcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2xvc2VXaW5kb3dLZXlib2FyZClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUb1RoZVNjb3Jlc1BsYXllckFycmF5KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhZGRUb1RoZVNjb3Jlc1BsYXllckFycmF5S2V5Ym9hcmQpXG5cbiAgICB3aW5kb3cuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN3aW5kb3cgaW5wdXRbdHlwZT0ndGV4dCddYCkuc2VsZWN0KClcbiAgfVxufVxuXG5cblxuZnVuY3Rpb24gYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheUtleWJvYXJkKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGV2ZW50LmtleUNvZGUpXG4gIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheSgpXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFuZEhpZGUoZWwpIHtcbiAgc2V0VGltZW91dChkaXNwbGF5LCA1MDApXG5cbiAgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBlbC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIHNldFRpbWVvdXQoaGlkZSwgMzAwMClcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgZWwuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgfVxuXG59XG5cblxuZnVuY3Rpb24gYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheSgpIHtcbiAgbGV0IG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJylcblxuICBkaXNwbGF5QW5kSGlkZShtc2cpO1xuXG4gIGxldCBuYW1lVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN3aW5kb3cgaW5wdXRbdHlwZT0ndGV4dCddYCk7XG5cbiAgbXNnLmlubmVyVGV4dCA9IGAke25hbWVUZXh0LnZhbHVlfSBoYSBzaWRvIGFncmVnYWRvYFxuICBjb25zb2xlLmxvZyhwbGF5ZXJTY29yZXMpXG4gIHBsYXllclNjb3Jlcy5wdXNoKG5ldyBQbGF5ZXIobmFtZVRleHQudmFsdWUsIDEsIHBsYXllclNjb3Jlcy5sZW5ndGgpKVxuICBwdXNoVG9BY3Rpdml0eUFycmF5KClcbiAgZGlzcGxheUFycmF5KClcblxuICBjbG9zZVdpbmRvdygpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQbGF5ZXJCdXR0b24oKSB7XG4gIGlmIChpc1dpbmRvd05vdE9wZW4gJiYgdHlwZW9mIHNlbGVjdGVkUGxheWVyID09IFwibnVtYmVyXCIpIHtcblxuICAgIGlzV2luZG93Tm90T3BlbiA9IGZhbHNlO1xuICAgIHdpbmRvdy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBpZD0nY2xvc2VXaW5kb3cnID5jZXJyYXI8L2J1dHRvbj5cbiAgICA8cD5ub21icmU6PC9wPlxuICAgIDxpbnB1dCB2YWx1ZT0nJHtwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLm5hbWV9JyB0eXBlPVwidGV4dFwiIGlkPSduYW1lJyBhdXRvZm9jdXM9J3RydWUnID5cbiAgICA8cD5zdGFyczo8L3A+XG4gICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT0nJHtwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLnNjb3JlfScgIGlkPVwic3RhcnNcIj5cbiAgICA8YnV0dG9uIGlkPSdhcHBseUJ1dHRvbic+YXBsaWNhciBjYW1iaW9zPC9idXR0b24+YFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlV2luZG93JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVdpbmRvdylcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2xvc2VXaW5kb3dLZXlib2FyZClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwbHlCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGx5Q2hhbmdlcylcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXBwbHlDaGFuZ2VzS2V5Ym9hcmQpXG5cbiAgICB3aW5kb3cuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjd2luZG93IGlucHV0W3R5cGU9J251bWJlciddYCkuc2VsZWN0KClcblxuXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBhcHBseUNoYW5nZXNLZXlib2FyZChldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC5rZXlDb2RlKVxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgIGFwcGx5Q2hhbmdlcygpXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBhcHBseUNoYW5nZXMoKSB7XG4gIGxldCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpXG4gIGlmIChwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLnNjb3JlICE9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFycycpLnZhbHVlKSB7XG5cbiAgICBkaXNwbGF5QW5kSGlkZShtc2cpO1xuICAgIG1zZy5pbm5lclRleHQgPSBgJHtwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLm5hbWV9IGFob3JhIHRpZW5lICR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJzJykudmFsdWV9IGVzdHJlbGxhc2BcbiAgfVxuXG4gIGVsc2UgaWYgKHBsYXllclNjb3Jlc1tzZWxlY3RlZFBsYXllcl0ubmFtZSAhPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlKSB7XG4gICAgbXNnLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgbXNnLmlubmVyVGV4dCA9IGAke3BsYXllclNjb3Jlc1tzZWxlY3RlZFBsYXllcl0ubmFtZX0gYWhvcmEgc2UgbGxhbWEgJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlfWBcbiAgfVxuXG4gIHBsYXllclNjb3Jlc1tzZWxlY3RlZFBsYXllcl0ubmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gIHBsYXllclNjb3Jlc1tzZWxlY3RlZFBsYXllcl0uc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnMnKS52YWx1ZTtcblxuICBwdXNoVG9BY3Rpdml0eUFycmF5KClcbiAgZGlzcGxheUFycmF5KClcblxuICBjbG9zZVdpbmRvdygpXG5cbn1cblxuXG5cblxuZnVuY3Rpb24gY2xvc2VXaW5kb3dLZXlib2FyZChldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC5rZXlDb2RlKVxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuICAgIGNsb3NlV2luZG93KClcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZVdpbmRvdygpIHtcbiAgd2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGlzV2luZG93Tm90T3BlbiA9IHRydWU7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjbG9zZVdpbmRvd0tleWJvYXJkKVxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXBwbHlDaGFuZ2VzS2V5Ym9hcmQpXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhZGRUb1RoZVNjb3Jlc1BsYXllckFycmF5S2V5Ym9hcmQpXG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L1JvYm90IENydXNoLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udC9NaW5lY3JhZnRlci5BbHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250L0FtZXJpY2FuIENhcHRhaW4ub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG5iYWNrZ3JvdW5kOiAwO1xucGFkZGluZzogMDtcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcbn1cblxuXG46cm9vdHtcbi0tb3JhbmdlOiNGRjhEMTU7XG4tLW9yYW5nZTojRkY4RDE1O1xuLS13aGl0ZTp3aGl0ZTtcbi0tYmxhY2s6YmxhY2s7XG4tLWdyZWVuOiNDMUY3QzE7XG4tLWxpZ2h0T3JhbmdlOiNGRkU1QTc7XG59XG5cbjpyb290LmRhcmt7XG4tLW9yYW5nZTojNTEyQzA1O1xuLS13aGl0ZTpibGFjaztcbi0tYmxhY2s6d2hpdGU7XG4tLWdyZWVuOiMxNjFEMTY7XG4tLWxpZ2h0T3JhbmdlOiMzQjM1Mjc7XG59XG5cblxuQGZvbnQtZmFjZXtcbmZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XG5zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuXG5AZm9udC1mYWNle1xuZm9udC1mYW1pbHk6ICdidXR0b24nO1xuc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cblxuQGZvbnQtZmFjZXtcbmZvbnQtZmFtaWx5OiAncG9wVXAnO1xuc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbmJvZHl7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG5hbGlnbi1pdGVtczpjZW50ZXI7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5mb250LWZhbWlseTogJ2RlZmF1bHQnO1xufVxuXG5cbnB7XG5mb250LXNpemU6bWF4KDAuOXJlbSwyLjN2dyk7XG59XG5cbmhlYWRlcntcbmRpc3BsYXk6ZmxleDtcbnBvc2l0aW9uOmFic29sdXRlO1xubGVmdDogMDtcbnRvcDogMDtcbmdhcDo1cHg7XG59XG5cbiNtZXNzYWdle1xuZm9udC1mYW1pbHk6ICdwb3BVcCc7XG50ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG5mb250LXNpemU6IDIuNXJlbTtcbnBvc2l0aW9uOmFic29sdXRlO1xucmlnaHQ6IDA7XG50b3A6IDA7XG50cmFuc2l0aW9uOiBvcGFjaXR5IDZzO1xufVxuXG5idXR0b24ge1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5jb2xvcjogdmFyKC0tYmxhY2spO1xucGFkZGluZzogMTBweDtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xuYm9yZGVyLXJhZGl1czoxMHB4O1xudHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvcixjb2xvciAwLjVzIDtcbmZvbnQtZmFtaWx5OiAnYnV0dG9uJztcbmZvbnQtc2l6ZToxLjNyZW07XG59XG5cbmlucHV0W3R5cGU9J2ZpbGUnXTo6ZmlsZS1zZWxlY3Rvci1idXR0b257XG5cbmZvbnQtZmFtaWx5OiAnYnV0dG9uJztcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xuY29sb3I6IHZhcigtLWJsYWNrKTtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xucGFkZGluZzogMi41cHg7XG50cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLGNvbG9yIDAuNXMgO1xuYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuXG5idXR0b246bnRoLW9mLXR5cGUoNCksYnV0dG9uOm50aC1vZi10eXBlKDUpLCBpbnB1dFt0eXBlPSdmaWxlJ117XG5vcGFjaXR5OjA7XG50cmFuc2l0aW9uOm9wYWNpdHkgMXM7XG59XG5cbmlucHV0W3R5cGU9J2ZpbGUnXXtcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xuY29sb3I6IHZhcigtLWJsYWNrKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XG59XG5cbmJ1dHRvbjpob3ZlcjpudGgtb2YtdHlwZSg0KSxidXR0b246aG92ZXI6bnRoLW9mLXR5cGUoNSksIGlucHV0OmhvdmVyW3R5cGU9J2ZpbGUnXXtcbm9wYWNpdHk6MTtcbn1cblxuXG5pbnB1dDpob3Zlclt0eXBlPSdmaWxlJ117XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJsYWNrKTtcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG59XG5cblxuYnV0dG9uOmhvdmVyLGlucHV0W3R5cGU9J2ZpbGUnXTo6ZmlsZS1zZWxlY3Rvci1idXR0b257XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJsYWNrKTtcbmJvcmRlcjoycHggc29saWQgdmFyKC0td2hpdGUpO1xuY29sb3I6IHZhcigtLXdoaXRlKTtcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5tYWlue1xubWFyZ2luLXRvcDo4dmg7XG53aWR0aDo5MHZ3O1xuYm9yZGVyLXJhZGl1czoyMHB4O1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbn1cblxubWFpbi5zY3JvbGx7XG5vdmVyZmxvdy15OmF1dG87XG5oZWlnaHQ6OTB2aDtcbn1cblxuXG5tYWluPiAgZGl2e1xuZGlzcGxheTogZ3JpZDtcbmdyaWQtdGVtcGxhdGU6MWZyIC8gMzUlIDFmcjtcbn1cblxubWFpbiAgZGl2ID4gZGl2OmZpcnN0LW9mLXR5cGV7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246cm93O1xuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcbmFsaWduLWl0ZW1zOmNlbnRlcjtcbnRleHQtYWxpZ246Y2VudGVyO1xuYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG59XG5cbm1haW4gIGRpdiA+IGRpdjpsYXN0LW9mLXR5cGU6bm90KG1haW4gZGl2Omxhc3Qtb2YtdHlwZSA+ZGl2Omxhc3Qtb2YtdHlwZSksXG5tYWluICBkaXYgPiBkaXY6Zmlyc3Qtb2YtdHlwZTpub3QobWFpbiAgZGl2Omxhc3Qtb2YtdHlwZSA+IGRpdjpmaXJzdC1vZi10eXBlKXtcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbn1cblxuXG5tYWluICBkaXYgPiBkaXY6bGFzdC1vZi10eXBle1xuZGlzcGxheTpmbGV4IDtcbmp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuYWxpZ24taXRlbXM6Y2VudGVyO1xucGFkZGluZy1sZWZ0OjEwcHg7XG59XG5cbm1haW4gaW1ne1xud2lkdGg6NjBweDtcbmhlaWdodDo2MHB4O1xuXG59XG5cbiN3aW5kb3d7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbmRpc3BsYXk6bm9uZTtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spIDtcbnBhZGRpbmc6IDEwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5ib3JkZXItcmFkaXVzOjIwcHg7XG50b3A6NTB2aCA7XG5sZWZ0OjUwdnc7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuZ2FwOjVweCA7XG59XG5cbmlucHV0e1xuYm9yZGVyLXJhZGl1czoxMHB4O1xucGFkZGluZzoxMHB4IDtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spIDtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbn1cblxuaW5wdXQ6Zm9jdXM6bm90KGlucHV0W3R5cGU9J2ZpbGUnXSl7XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWdyZWVuKTtcbm91dGxpbmU6MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1YscUJBQXFCO0FBQ3JCOzs7QUFHQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGFBQWE7QUFDYixlQUFlO0FBQ2YscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixhQUFhO0FBQ2IsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQjs7O0FBR0E7QUFDQSxzQkFBc0I7QUFDdEIsNENBQW1DO0FBQ25DOzs7QUFHQTtBQUNBLHFCQUFxQjtBQUNyQiw0Q0FBc0M7QUFDdEM7OztBQUdBO0FBQ0Esb0JBQW9CO0FBQ3BCLDRDQUF3QztBQUN4Qzs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0Qjs7O0FBR0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQSxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLE9BQU87QUFDUCxNQUFNO0FBQ04sT0FBTztBQUNQOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLFFBQVE7QUFDUixNQUFNO0FBQ04sc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQix3Q0FBd0M7QUFDeEMscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQjs7QUFFQTs7QUFFQSxxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFDN0IsY0FBYztBQUNkLHdDQUF3QztBQUN4QyxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxTQUFTO0FBQ1QscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUIsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsOEJBQThCO0FBQzlCOzs7QUFHQTtBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZjs7O0FBR0E7QUFDQSxjQUFjO0FBQ2QsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0EsZUFBZTtBQUNmLFdBQVc7QUFDWDs7O0FBR0E7QUFDQSxhQUFhO0FBQ2IsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixtQ0FBbUM7QUFDbkM7O0FBRUE7O0FBRUEsb0NBQW9DO0FBQ3BDOzs7QUFHQTtBQUNBLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLFVBQVU7QUFDVixXQUFXOztBQUVYOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsOEJBQThCO0FBQzlCLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxTQUFTO0FBQ1QsK0JBQStCO0FBQy9CLFFBQVE7QUFDUjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG5iYWNrZ3JvdW5kOiAwO1xcbnBhZGRpbmc6IDA7XFxuYm94LXNpemluZzpib3JkZXItYm94O1xcbn1cXG5cXG5cXG46cm9vdHtcXG4tLW9yYW5nZTojRkY4RDE1O1xcbi0tb3JhbmdlOiNGRjhEMTU7XFxuLS13aGl0ZTp3aGl0ZTtcXG4tLWJsYWNrOmJsYWNrO1xcbi0tZ3JlZW46I0MxRjdDMTtcXG4tLWxpZ2h0T3JhbmdlOiNGRkU1QTc7XFxufVxcblxcbjpyb290LmRhcmt7XFxuLS1vcmFuZ2U6IzUxMkMwNTtcXG4tLXdoaXRlOmJsYWNrO1xcbi0tYmxhY2s6d2hpdGU7XFxuLS1ncmVlbjojMTYxRDE2O1xcbi0tbGlnaHRPcmFuZ2U6IzNCMzUyNztcXG59XFxuXFxuXFxuQGZvbnQtZmFjZXtcXG5mb250LWZhbWlseTogJ2RlZmF1bHQnO1xcbnNyYzogdXJsKCcuL2ZvbnQvUm9ib3RcXFxcIENydXNoLm90ZicpO1xcbn1cXG5cXG5cXG5AZm9udC1mYWNle1xcbmZvbnQtZmFtaWx5OiAnYnV0dG9uJztcXG5zcmM6IHVybCgnLi9mb250L01pbmVjcmFmdGVyLkFsdC50dGYnKTtcXG59XFxuXFxuXFxuQGZvbnQtZmFjZXtcXG5mb250LWZhbWlseTogJ3BvcFVwJztcXG5zcmM6IHVybCgnLi9mb250L0FtZXJpY2FuXFxcXCBDYXB0YWluLm90ZicpO1xcbn1cXG5cXG5ib2R5e1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5hbGlnbi1pdGVtczpjZW50ZXI7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbmZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XFxufVxcblxcblxcbnB7XFxuZm9udC1zaXplOm1heCgwLjlyZW0sMi4zdncpO1xcbn1cXG5cXG5oZWFkZXJ7XFxuZGlzcGxheTpmbGV4O1xcbnBvc2l0aW9uOmFic29sdXRlO1xcbmxlZnQ6IDA7XFxudG9wOiAwO1xcbmdhcDo1cHg7XFxufVxcblxcbiNtZXNzYWdle1xcbmZvbnQtZmFtaWx5OiAncG9wVXAnO1xcbnRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcXG5mb250LXNpemU6IDIuNXJlbTtcXG5wb3NpdGlvbjphYnNvbHV0ZTtcXG5yaWdodDogMDtcXG50b3A6IDA7XFxudHJhbnNpdGlvbjogb3BhY2l0eSA2cztcXG59XFxuXFxuYnV0dG9uIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcXG5jb2xvcjogdmFyKC0tYmxhY2spO1xcbnBhZGRpbmc6IDEwcHg7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsY29sb3IgMC41cyA7XFxuZm9udC1mYW1pbHk6ICdidXR0b24nO1xcbmZvbnQtc2l6ZToxLjNyZW07XFxufVxcblxcbmlucHV0W3R5cGU9J2ZpbGUnXTo6ZmlsZS1zZWxlY3Rvci1idXR0b257XFxuXFxuZm9udC1mYW1pbHk6ICdidXR0b24nO1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xcbmNvbG9yOiB2YXIoLS1ibGFjayk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxucGFkZGluZzogMi41cHg7XFxudHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvcixjb2xvciAwLjVzIDtcXG5ib3JkZXItcmFkaXVzOjEwcHg7XFxufVxcblxcbmJ1dHRvbjpudGgtb2YtdHlwZSg0KSxidXR0b246bnRoLW9mLXR5cGUoNSksIGlucHV0W3R5cGU9J2ZpbGUnXXtcXG5vcGFjaXR5OjA7XFxudHJhbnNpdGlvbjpvcGFjaXR5IDFzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdmaWxlJ117XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuY29sb3I6IHZhcigtLWJsYWNrKTtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcXG59XFxuXFxuYnV0dG9uOmhvdmVyOm50aC1vZi10eXBlKDQpLGJ1dHRvbjpob3ZlcjpudGgtb2YtdHlwZSg1KSwgaW5wdXQ6aG92ZXJbdHlwZT0nZmlsZSdde1xcbm9wYWNpdHk6MTtcXG59XFxuXFxuXFxuaW5wdXQ6aG92ZXJbdHlwZT0nZmlsZSdde1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0tYmxhY2spO1xcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5cXG5idXR0b246aG92ZXIsaW5wdXRbdHlwZT0nZmlsZSddOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbntcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJsYWNrKTtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5jb2xvcjogdmFyKC0td2hpdGUpO1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxubWFpbntcXG5tYXJnaW4tdG9wOjh2aDtcXG53aWR0aDo5MHZ3O1xcbmJvcmRlci1yYWRpdXM6MjBweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG59XFxuXFxubWFpbi5zY3JvbGx7XFxub3ZlcmZsb3cteTphdXRvO1xcbmhlaWdodDo5MHZoO1xcbn1cXG5cXG5cXG5tYWluPiAgZGl2e1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC10ZW1wbGF0ZToxZnIgLyAzNSUgMWZyO1xcbn1cXG5cXG5tYWluICBkaXYgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOnJvdztcXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG50ZXh0LWFsaWduOmNlbnRlcjtcXG5ib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG59XFxuXFxubWFpbiAgZGl2ID4gZGl2Omxhc3Qtb2YtdHlwZTpub3QobWFpbiBkaXY6bGFzdC1vZi10eXBlID5kaXY6bGFzdC1vZi10eXBlKSxcXG5tYWluICBkaXYgPiBkaXY6Zmlyc3Qtb2YtdHlwZTpub3QobWFpbiAgZGl2Omxhc3Qtb2YtdHlwZSA+IGRpdjpmaXJzdC1vZi10eXBlKXtcXG5ib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxufVxcblxcblxcbm1haW4gIGRpdiA+IGRpdjpsYXN0LW9mLXR5cGV7XFxuZGlzcGxheTpmbGV4IDtcXG5qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcXG5hbGlnbi1pdGVtczpjZW50ZXI7XFxucGFkZGluZy1sZWZ0OjEwcHg7XFxufVxcblxcbm1haW4gaW1ne1xcbndpZHRoOjYwcHg7XFxuaGVpZ2h0OjYwcHg7XFxuXFxufVxcblxcbiN3aW5kb3d7XFxucG9zaXRpb246YWJzb2x1dGU7XFxuZGlzcGxheTpub25lO1xcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKSA7XFxucGFkZGluZzogMTBweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuYm9yZGVyLXJhZGl1czoyMHB4O1xcbnRvcDo1MHZoIDtcXG5sZWZ0OjUwdnc7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG5nYXA6NXB4IDtcXG59XFxuXFxuaW5wdXR7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbnBhZGRpbmc6MTBweCA7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjaykgO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXM6bm90KGlucHV0W3R5cGU9J2ZpbGUnXSl7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmVlbik7XFxub3V0bGluZTowcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIihmdW5jdGlvbihhLGIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sYik7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cyliKCk7ZWxzZXtiKCksYS5GaWxlU2F2ZXI9e2V4cG9ydHM6e319LmV4cG9ydHN9fSkodGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYj9iPXthdXRvQm9tOiExfTpcIm9iamVjdFwiIT10eXBlb2YgYiYmKGNvbnNvbGUud2FybihcIkRlcHJlY2F0ZWQ6IEV4cGVjdGVkIHRoaXJkIGFyZ3VtZW50IHRvIGJlIGEgb2JqZWN0XCIpLGI9e2F1dG9Cb206IWJ9KSxiLmF1dG9Cb20mJi9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGEudHlwZSk/bmV3IEJsb2IoW1wiXFx1RkVGRlwiLGFdLHt0eXBlOmEudHlwZX0pOmF9ZnVuY3Rpb24gYyhhLGIsYyl7dmFyIGQ9bmV3IFhNTEh0dHBSZXF1ZXN0O2Qub3BlbihcIkdFVFwiLGEpLGQucmVzcG9uc2VUeXBlPVwiYmxvYlwiLGQub25sb2FkPWZ1bmN0aW9uKCl7ZyhkLnJlc3BvbnNlLGIsYyl9LGQub25lcnJvcj1mdW5jdGlvbigpe2NvbnNvbGUuZXJyb3IoXCJjb3VsZCBub3QgZG93bmxvYWQgZmlsZVwiKX0sZC5zZW5kKCl9ZnVuY3Rpb24gZChhKXt2YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Yi5vcGVuKFwiSEVBRFwiLGEsITEpO3RyeXtiLnNlbmQoKX1jYXRjaChhKXt9cmV0dXJuIDIwMDw9Yi5zdGF0dXMmJjI5OT49Yi5zdGF0dXN9ZnVuY3Rpb24gZShhKXt0cnl7YS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIikpfWNhdGNoKGMpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Yi5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsd2luZG93LDAsMCwwLDgwLDIwLCExLCExLCExLCExLDAsbnVsbCksYS5kaXNwYXRjaEV2ZW50KGIpfX12YXIgZj1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cud2luZG93PT09d2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZi5zZWxmPT09c2VsZj9zZWxmOlwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbC5nbG9iYWw9PT1nbG9iYWw/Z2xvYmFsOnZvaWQgMCxhPWYubmF2aWdhdG9yJiYvTWFjaW50b3NoLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGVXZWJLaXQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJiEvU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGc9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGUmJiFhP2Z1bmN0aW9uKGIsZyxoKXt2YXIgaT1mLlVSTHx8Zi53ZWJraXRVUkwsaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtnPWd8fGIubmFtZXx8XCJkb3dubG9hZFwiLGouZG93bmxvYWQ9ZyxqLnJlbD1cIm5vb3BlbmVyXCIsXCJzdHJpbmdcIj09dHlwZW9mIGI/KGouaHJlZj1iLGoub3JpZ2luPT09bG9jYXRpb24ub3JpZ2luP2Uoaik6ZChqLmhyZWYpP2MoYixnLGgpOmUoaixqLnRhcmdldD1cIl9ibGFua1wiKSk6KGouaHJlZj1pLmNyZWF0ZU9iamVjdFVSTChiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5yZXZva2VPYmplY3RVUkwoai5ocmVmKX0sNEU0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShqKX0sMCkpfTpcIm1zU2F2ZU9yT3BlbkJsb2JcImluIG5hdmlnYXRvcj9mdW5jdGlvbihmLGcsaCl7aWYoZz1nfHxmLm5hbWV8fFwiZG93bmxvYWRcIixcInN0cmluZ1wiIT10eXBlb2YgZiluYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihiKGYsaCksZyk7ZWxzZSBpZihkKGYpKWMoZixnLGgpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7aS5ocmVmPWYsaS50YXJnZXQ9XCJfYmxhbmtcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShpKX0pfX06ZnVuY3Rpb24oYixkLGUsZyl7aWYoZz1nfHxvcGVuKFwiXCIsXCJfYmxhbmtcIiksZyYmKGcuZG9jdW1lbnQudGl0bGU9Zy5kb2N1bWVudC5ib2R5LmlubmVyVGV4dD1cImRvd25sb2FkaW5nLi4uXCIpLFwic3RyaW5nXCI9PXR5cGVvZiBiKXJldHVybiBjKGIsZCxlKTt2YXIgaD1cImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiPT09Yi50eXBlLGk9L2NvbnN0cnVjdG9yL2kudGVzdChmLkhUTUxFbGVtZW50KXx8Zi5zYWZhcmksaj0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7aWYoKGp8fGgmJml8fGEpJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgRmlsZVJlYWRlcil7dmFyIGs9bmV3IEZpbGVSZWFkZXI7ay5vbmxvYWRlbmQ9ZnVuY3Rpb24oKXt2YXIgYT1rLnJlc3VsdDthPWo/YTphLnJlcGxhY2UoL15kYXRhOlteO10qOy8sXCJkYXRhOmF0dGFjaG1lbnQvZmlsZTtcIiksZz9nLmxvY2F0aW9uLmhyZWY9YTpsb2NhdGlvbj1hLGc9bnVsbH0say5yZWFkQXNEYXRhVVJMKGIpfWVsc2V7dmFyIGw9Zi5VUkx8fGYud2Via2l0VVJMLG09bC5jcmVhdGVPYmplY3RVUkwoYik7Zz9nLmxvY2F0aW9uPW06bG9jYXRpb24uaHJlZj1tLGc9bnVsbCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5yZXZva2VPYmplY3RVUkwobSl9LDRFNCl9fSk7Zi5zYXZlQXM9Zy5zYXZlQXM9ZyxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiYobW9kdWxlLmV4cG9ydHM9Zyl9KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmlsZVNhdmVyLm1pbi5qcy5tYXAiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbnB1dC9tYWluLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9