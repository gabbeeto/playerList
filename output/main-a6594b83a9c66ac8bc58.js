/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./input/darkmode.js":
/*!***************************!*\
  !*** ./input/darkmode.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateDarkMode: () => (/* binding */ activateDarkMode)
/* harmony export */ });
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadFile: () => (/* binding */ downloadFile),
/* harmony export */   uploadFile: () => (/* binding */ uploadFile)
/* harmony export */ });
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

/***/ "./input/eng.js":
/*!**********************!*\
  !*** ./input/eng.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_english_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/english.jpeg */ "./input/img/english.jpeg");
/* harmony import */ var _img_spanish_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/spanish.jpeg */ "./input/img/spanish.jpeg");
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll.js */ "./input/scroll.js");
/* harmony import */ var _darkmode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./darkmode.js */ "./input/darkmode.js");
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./window.js */ "./input/window.js");
/* harmony import */ var _downloadAndUpload_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./downloadAndUpload.js */ "./input/downloadAndUpload.js");







window.lang = 'es';

let spanishButton = document.querySelector('article img:first-of-type');
spanishButton.addEventListener('click', switchToSpanish)

let englishButton = document.querySelector('article img:last-of-type');
englishButton.addEventListener('click', switchToEnglish)


const header = document.querySelector('header');
function switchToSpanish(){
window.lang = 'es';
header.innerHTML = `<button>agregar jugador</button>
    <button>editar jugador</button>
    <button>modo oscuro</button>
    <button>descargar lista</button>
    <input type="file"></input>
    <button>scroll</button>`

document.querySelector('header > button').addEventListener('click', _window_js__WEBPACK_IMPORTED_MODULE_4__.addPlayerButton);
document.querySelector('header > button:nth-of-type(2)').addEventListener('click', _window_js__WEBPACK_IMPORTED_MODULE_4__.editPlayerButton);
document.querySelector('header > button:nth-of-type(3)').addEventListener('click',_darkmode_js__WEBPACK_IMPORTED_MODULE_3__.activateDarkMode)
document.querySelector('header > button:nth-of-type(4)').addEventListener('click', _downloadAndUpload_js__WEBPACK_IMPORTED_MODULE_5__.downloadFile)
document.querySelector(`header > input[type='file']`).addEventListener('change', _downloadAndUpload_js__WEBPACK_IMPORTED_MODULE_5__.uploadFile)
document.querySelector('header > button:last-of-type').addEventListener('click', _scroll_js__WEBPACK_IMPORTED_MODULE_2__.addScroll);
}

function switchToEnglish(){
window.lang = 'en';
header.innerHTML = `<button>add player</button>
    <button>edit player</button>
    <button>Dark Mode</button>
    <button>download list</button>
    <input type="file"></input>
    <button>scroll</button>`


document.querySelector('header > button').addEventListener('click', _window_js__WEBPACK_IMPORTED_MODULE_4__.addPlayerButton);
document.querySelector('header > button:nth-of-type(2)').addEventListener('click', _window_js__WEBPACK_IMPORTED_MODULE_4__.editPlayerButton);
document.querySelector('header > button:nth-of-type(3)').addEventListener('click',_darkmode_js__WEBPACK_IMPORTED_MODULE_3__.activateDarkMode)
document.querySelector('header > button:nth-of-type(4)').addEventListener('click', _downloadAndUpload_js__WEBPACK_IMPORTED_MODULE_5__.downloadFile)
document.querySelector(`header > input[type='file']`).addEventListener('change', _downloadAndUpload_js__WEBPACK_IMPORTED_MODULE_5__.uploadFile)
document.querySelector('header > button:last-of-type').addEventListener('click', _scroll_js__WEBPACK_IMPORTED_MODULE_2__.addScroll);

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
/* harmony import */ var _downloadAndUpload_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./downloadAndUpload.js */ "./input/downloadAndUpload.js");
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll.js */ "./input/scroll.js");
/* harmony import */ var _eng_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eng.js */ "./input/eng.js");








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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addScroll: () => (/* binding */ addScroll)
/* harmony export */ });
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

    if(lang == 'es'){
    window.innerHTML =`<button id='closeWindow'>cerrar</button>
    <p>nombre:</p>
    <input type="text" id='name'>
    <button id='addButton'>agregar</button>`}
    else{
    window.innerHTML =`<button id='closeWindow'>close</button>
    <p>name:</p>
    <input type="text" id='name'>
    <button id='addButton'>add</button>`}

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

  if(lang == 'es'){
  msg.innerText = `${nameText.value} ha sido agregado`;
  }
  else{
  msg.innerText = `${nameText.value} has been added`;
  }
  console.log(playerScores)
  playerScores.push(new _main_js__WEBPACK_IMPORTED_MODULE_1__.Player(nameText.value, 1, playerScores.length))
  ;(0,_main_js__WEBPACK_IMPORTED_MODULE_1__.pushToActivityArray)()
  ;(0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayArray)()

  closeWindow()
}


function editPlayerButton() {
  if (isWindowNotOpen && typeof selectedPlayer == "number") {

    isWindowNotOpen = false;
    if(lang == 'es'){
    window.innerHTML = `<button id='closeWindow' >cerrar</button>
    <p>nombre:</p>
    <input value='${playerScores[selectedPlayer].name}' type="text" id='name' autofocus='true' >
    <p>estrellas:</p>
    <input type="number" value='${playerScores[selectedPlayer].score}'  id="stars">
    <button id='applyButton'>aplicar cambios</button>`
    }
    else{
    window.innerHTML = `<button id='closeWindow' >close</button>
    <p>name:</p>
    <input value='${playerScores[selectedPlayer].name}' type="text" id='name' autofocus='true' >
    <p>stars:</p>
    <input type="number" value='${playerScores[selectedPlayer].score}'  id="stars">
    <button id='applyButton'>apply changes</button>`


    }

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
    if(lang == 'es'){
    msg.innerText = `${playerScores[selectedPlayer].name} ahora tiene ${document.getElementById('stars').value} estrellas`
    }
    else{
    msg.innerText = `${playerScores[selectedPlayer].name} has ${document.getElementById('stars').value} stars right now!`
    }
  }

  else if (playerScores[selectedPlayer].name != document.getElementById('name').value) {
    msg.style.opacity = '1';



    if(lang == 'es'){
    msg.innerText = `${playerScores[selectedPlayer].name} ahora se llama ${document.getElementById('name').value}`
    }
    else{
    msg.innerText = `${playerScores[selectedPlayer].name} changed its name to ${document.getElementById('name').value}`
    }

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
flex-direction:column;
gap:15px;
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

main.scroll div:last-of-type > div:last-of-type,main.scroll  div:last-of-type > div:first-of-type{

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

article{
border: 2px solid var(--black);
display: block;
background-color: var(--white);
padding:5px;
border-radius:10px;
}

article img{

width:60px;
height:60px;
border-radius:10px;
}

article img:hover{
cursor: pointer;
outline:2px solid var(--black);
}
`, "",{"version":3,"sources":["webpack://./input/style.css"],"names":[],"mappings":"AAAA;AACA,aAAa;AACb,UAAU;AACV,qBAAqB;AACrB;;;AAGA;AACA,gBAAgB;AAChB,gBAAgB;AAChB,aAAa;AACb,aAAa;AACb,eAAe;AACf,qBAAqB;AACrB;;AAEA;AACA,gBAAgB;AAChB,aAAa;AACb,aAAa;AACb,eAAe;AACf,qBAAqB;AACrB;;;AAGA;AACA,sBAAsB;AACtB,4CAAmC;AACnC;;;AAGA;AACA,qBAAqB;AACrB,4CAAsC;AACtC;;;AAGA;AACA,oBAAoB;AACpB,4CAAwC;AACxC;;AAEA;;AAEA,+BAA+B;AAC/B,kBAAkB;AAClB,aAAa;AACb,sBAAsB;AACtB,qBAAqB;AACrB,QAAQ;AACR,kBAAkB;AAClB,kBAAkB;AAClB,sBAAsB;AACtB;;;AAGA;AACA,2BAA2B;AAC3B;;AAEA;AACA,YAAY;AACZ,iBAAiB;AACjB,OAAO;AACP,MAAM;AACN,OAAO;AACP;;AAEA;AACA,oBAAoB;AACpB,wBAAwB;AACxB,iBAAiB;AACjB,iBAAiB;AACjB,QAAQ;AACR,MAAM;AACN,sBAAsB;AACtB;;AAEA;AACA,6BAA6B;AAC7B,mBAAmB;AACnB,aAAa;AACb,6BAA6B;AAC7B,kBAAkB;AAClB,wCAAwC;AACxC,qBAAqB;AACrB,gBAAgB;AAChB;;AAEA;;AAEA,qBAAqB;AACrB,6BAA6B;AAC7B,mBAAmB;AACnB,6BAA6B;AAC7B,cAAc;AACd,wCAAwC;AACxC,kBAAkB;AAClB;;AAEA;AACA,SAAS;AACT,qBAAqB;AACrB;;AAEA;AACA,6BAA6B;AAC7B,mBAAmB;AACnB,8BAA8B;AAC9B,sBAAsB;AACtB;;AAEA;AACA,SAAS;AACT;;;AAGA;AACA,6BAA6B;AAC7B,mBAAmB;AACnB,8BAA8B;AAC9B;;;AAGA;AACA,6BAA6B;AAC7B,6BAA6B;AAC7B,mBAAmB;AACnB,eAAe;AACf;;;AAGA;AACA,cAAc;AACd,UAAU;AACV,kBAAkB;AAClB,6BAA6B;AAC7B,6BAA6B;AAC7B;;AAEA;AACA,eAAe;AACf,WAAW;AACX;;;AAGA;AACA,aAAa;AACb,2BAA2B;AAC3B;;AAEA;AACA,aAAa;AACb,kBAAkB;AAClB,sBAAsB;AACtB,kBAAkB;AAClB,iBAAiB;AACjB,mCAAmC;AACnC;;AAEA;;AAEA,oCAAoC;AACpC;;AAEA;;AAEA,oCAAoC;;AAEpC;;AAEA;AACA,aAAa;AACb,0BAA0B;AAC1B,kBAAkB;AAClB,iBAAiB;AACjB;;AAEA;AACA,UAAU;AACV,WAAW;AACX;;AAEA;AACA,iBAAiB;AACjB,YAAY;AACZ,qBAAqB;AACrB,8BAA8B;AAC9B,aAAa;AACb,8BAA8B;AAC9B,kBAAkB;AAClB,SAAS;AACT,SAAS;AACT,+BAA+B;AAC/B,QAAQ;AACR;;AAEA;AACA,kBAAkB;AAClB,aAAa;AACb,8BAA8B;AAC9B,kBAAkB;AAClB;;AAEA;AACA,6BAA6B;AAC7B,6BAA6B;AAC7B;;AAEA;AACA,8BAA8B;AAC9B,cAAc;AACd,8BAA8B;AAC9B,WAAW;AACX,kBAAkB;AAClB;;AAEA;;AAEA,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB;;AAEA;AACA,eAAe;AACf,8BAA8B;AAC9B","sourcesContent":["*{\nbackground: 0;\npadding: 0;\nbox-sizing:border-box;\n}\n\n\n:root{\n--orange:#FF8D15;\n--orange:#FF8D15;\n--white:white;\n--black:black;\n--green:#C1F7C1;\n--lightOrange:#FFE5A7;\n}\n\n:root.dark{\n--orange:#512C05;\n--white:black;\n--black:white;\n--green:#161D16;\n--lightOrange:#3B3527;\n}\n\n\n@font-face{\nfont-family: 'default';\nsrc: url('./font/Robot\\ Crush.otf');\n}\n\n\n@font-face{\nfont-family: 'button';\nsrc: url('./font/Minecrafter.Alt.ttf');\n}\n\n\n@font-face{\nfont-family: 'popUp';\nsrc: url('./font/American\\ Captain.otf');\n}\n\nbody{\n\nbackground-color: var(--orange);\ncolor:var(--black);\ndisplay: flex;\njustify-content:center;\nflex-direction:column;\ngap:15px;\nalign-items:center;\nposition: relative;\nfont-family: 'default';\n}\n\n\np{\nfont-size:max(0.9rem,2.3vw);\n}\n\nheader{\ndisplay:flex;\nposition:absolute;\nleft: 0;\ntop: 0;\ngap:5px;\n}\n\n#message{\nfont-family: 'popUp';\ntext-transform:uppercase;\nfont-size: 2.5rem;\nposition:absolute;\nright: 0;\ntop: 0;\ntransition: opacity 6s;\n}\n\nbutton {\nbackground-color:var(--white);\ncolor: var(--black);\npadding: 10px;\nborder:2px solid var(--black);\nborder-radius:10px;\ntransition: background-color,color 0.5s ;\nfont-family: 'button';\nfont-size:1.3rem;\n}\n\ninput[type='file']::file-selector-button{\n\nfont-family: 'button';\nbackground-color:var(--white);\ncolor: var(--black);\nborder:2px solid var(--black);\npadding: 2.5px;\ntransition: background-color,color 0.5s ;\nborder-radius:10px;\n}\n\nbutton:nth-of-type(4),button:nth-of-type(5), input[type='file']{\nopacity:0;\ntransition:opacity 1s;\n}\n\ninput[type='file']{\nbackground-color:var(--white);\ncolor: var(--black);\nborder: 2px solid var(--black);\nfont-family: 'default';\n}\n\nbutton:hover:nth-of-type(4),button:hover:nth-of-type(5), input:hover[type='file']{\nopacity:1;\n}\n\n\ninput:hover[type='file']{\nbackground-color:var(--black);\ncolor: var(--white);\nborder: 2px solid var(--white);\n}\n\n\nbutton:hover,input[type='file']::file-selector-button{\nbackground-color:var(--black);\nborder:2px solid var(--white);\ncolor: var(--white);\ncursor: pointer;\n}\n\n\nmain{\nmargin-top:8vh;\nwidth:90vw;\nborder-radius:20px;\nbackground-color:var(--white);\nborder:2px solid var(--black);\n}\n\nmain.scroll{\noverflow-y:auto;\nheight:90vh;\n}\n\n\nmain>  div{\ndisplay: grid;\ngrid-template:1fr / 35% 1fr;\n}\n\nmain  div > div:first-of-type{\ndisplay: flex;\nflex-direction:row;\njustify-content:center;\nalign-items:center;\ntext-align:center;\nborder-right:2px solid var(--black);\n}\n\nmain  div > div:last-of-type:not(main div:last-of-type >div:last-of-type),\nmain  div > div:first-of-type:not(main  div:last-of-type > div:first-of-type){\nborder-bottom:2px solid var(--black);\n}\n\nmain.scroll div:last-of-type > div:last-of-type,main.scroll  div:last-of-type > div:first-of-type{\n\nborder-bottom:2px solid var(--black);\n\n}\n\nmain  div > div:last-of-type{\ndisplay:flex ;\njustify-content:flex-start;\nalign-items:center;\npadding-left:10px;\n}\n\nmain img{\nwidth:60px;\nheight:60px;\n}\n\n#window{\nposition:absolute;\ndisplay:none;\nflex-direction:column;\nborder:2px solid var(--black) ;\npadding: 10px;\nbackground-color: var(--white);\nborder-radius:20px;\ntop:50vh ;\nleft:50vw;\ntransform: translate(-50%,-50%);\ngap:5px ;\n}\n\ninput{\nborder-radius:10px;\npadding:10px ;\nborder:2px solid var(--black) ;\ncolor:var(--black);\n}\n\ninput:focus:not(input[type='file']){\nbackground-color:var(--green);\noutline:0px solid transparent;\n}\n\narticle{\nborder: 2px solid var(--black);\ndisplay: block;\nbackground-color: var(--white);\npadding:5px;\nborder-radius:10px;\n}\n\narticle img{\n\nwidth:60px;\nheight:60px;\nborder-radius:10px;\n}\n\narticle img:hover{\ncursor: pointer;\noutline:2px solid var(--black);\n}\n"],"sourceRoot":""}]);
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

/***/ "./input/img/english.jpeg":
/*!********************************!*\
  !*** ./input/img/english.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "english.jpeg";

/***/ }),

/***/ "./input/img/removeImg.png":
/*!*********************************!*\
  !*** ./input/img/removeImg.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "removeImg.png";

/***/ }),

/***/ "./input/img/spanish.jpeg":
/*!********************************!*\
  !*** ./input/img/spanish.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "spanish.jpeg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLG1DQUFtQztBQUM5Qzs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVB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QTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZG93bmxvYWRBbmRVcGxvYWQuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L2VuZy5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvbWFpbi5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvc2Nyb2xsLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9pbnB1dC9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L3dpbmRvdy5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvc3R5bGUuY3NzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9pbnB1dC9zdHlsZS5jc3M/YTEzZSIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBpc0RhcmtNb2RlID0gbWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XG5cbmxldCBkYXJrTW9kZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbjpudGgtb2YtdHlwZSgzKScpO1xuZGFya01vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFjdGl2YXRlRGFya01vZGUpXG5cblxuaWYgKGlzRGFya01vZGUpIHtcblxuICBhY3RpdmF0ZURhcmtNb2RlKClcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZURhcmtNb2RlKCkge1xuICBsZXQgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxuICBodG1sLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKVxuICBpZiAoaHRtbC5jbGFzc05hbWUgPT0gJ2RhcmsnKSB7XG4gICAgZGFya01vZGVCdXR0b24uaW5uZXJUZXh0ID0gJ21vZG8gY2xhcm8nXG4gIH1cbiAgZWxzZXtcbiAgICBkYXJrTW9kZUJ1dHRvbi5pbm5lclRleHQgPSAnbW9kbyBvc2N1cm8nXG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgZGlzcGxheUFycmF5IH0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuaW1wb3J0IHsgcHVzaFRvQWN0aXZpdHlBcnJheSB9IGZyb20gJy4vbWFpbi5qcydcbmltcG9ydCB7IGRpc3BsYXlBbmRIaWRlfSBmcm9tICcuL3dpbmRvdy5qcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRlbGV0ZVNlbGVjdGVkKVxuXG5mdW5jdGlvbiBkZWxldGVTZWxlY3RlZChldmVudCkge1xuICBpZiAodHlwZW9mIHNlbGVjdGVkUGxheWVyID09ICdudW1iZXInICYmIGlzV2luZG93Tm90T3BlbiAmJiBldmVudC5rZXlDb2RlID09IDQ2KSB7XG4gICAgcGxheWVyU2NvcmVzLnNwbGljZShzZWxlY3RlZFBsYXllciwgMSlcbiAgICB1cGRhdGVUaGVJbmRleEZvckFycmF5KClcbiAgICBkaXNwbGF5QXJyYXkoKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQbGF5ZXIoZXZlbnQpIHtcblxuICBjb25zb2xlLmxvZyhwbGF5ZXJTY29yZXNbZXZlbnQudGFyZ2V0LnZhbHVlXS5uYW1lKVxuICBsZXQgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKVxuICBtc2cuaW5uZXJUZXh0ID0gYCR7cGxheWVyU2NvcmVzW2V2ZW50LnRhcmdldC52YWx1ZV0ubmFtZX0gZnVlIGVsaW1pbmFkb2BcbiAgZGlzcGxheUFuZEhpZGUobXNnKVxuICBwbGF5ZXJTY29yZXMuc3BsaWNlKGV2ZW50LnRhcmdldC52YWx1ZSwgMSlcbiAgdXBkYXRlVGhlSW5kZXhGb3JBcnJheSgpXG5cbiAgcHVzaFRvQWN0aXZpdHlBcnJheSgpXG4gIGRpc3BsYXlBcnJheSgpXG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGhlSW5kZXhGb3JBcnJheSgpIHtcbiAgZm9yIChsZXQgaW5kZXggaW4gcGxheWVyU2NvcmVzKSB7XG4gICAgcGxheWVyU2NvcmVzW2luZGV4XS5pbmRleCA9IE51bWJlcihpbmRleCk7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL21haW4uanMnXG5pbXBvcnQgeyBkZWxldGVQbGF5ZXIgfSBmcm9tICcuL2RlbGV0ZS5qcydcbmltcG9ydCB7IHNlbGVjdFBsYXllciB9IGZyb20gJy4vc2VsZWN0LmpzJ1xuaW1wb3J0IHJlbW92ZUltZyBmcm9tICcuL2ltZy9yZW1vdmVJbWcucG5nJ1xuaW1wb3J0IHN0YXJJbWcgZnJvbSAnLi9pbWcvc3Rhci5wbmcnXG5cblxud2luZG93LnNvcnRlZFBsYXllciA9IHdpbmRvdy5wbGF5ZXJTY29yZXM7XG5cblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBcnJheSgpIHtcbiAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgc29ydEFycmF5KClcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKClcbiAgZm9yIChsZXQgcGxheWVyIG9mIHNvcnRlZFBsYXllcikge1xuICAgIGxldCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsZXQgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVEaXYudmFsdWUgPSBwbGF5ZXIuaW5kZXg7XG5cbiAgICBsZXQgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbGF5ZXJOYW1lLmlubmVyVGV4dCA9IHBsYXllci5uYW1lO1xuXG4gICAgbGV0IGRlbGV0ZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZGVsZXRlSW1hZ2UudmFsdWUgPSBwbGF5ZXIuaW5kZXg7XG4gICAgZGVsZXRlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQbGF5ZXIpO1xuICAgIGRlbGV0ZUltYWdlLnNyYyA9IHJlbW92ZUltZztcblxuICAgIG5hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQbGF5ZXIpXG5cblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyKTtcbiAgICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgbmFtZURpdi5hcHBlbmQocGxheWVyTmFtZSwgZGVsZXRlSW1hZ2UpO1xuXG5cbiAgICBsZXQgc3RhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFyRGl2KVxuXG4gICAgbGV0IHNpemVPZlNjb3JlcyA9IChwbGF5ZXIuc2NvcmUgKiA2MCkgKyAxMFxuXG4gICAgaWYgKHNpemVPZlNjb3JlcyA+IHN0YXJEaXYuY2xpZW50V2lkdGgpIHtcbiAgICAgIHN0YXJEaXYuaW5uZXJIVE1MID0gJydcbiAgICAgIGxldCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBzdGFyLnNyYyA9IHN0YXJJbWc7XG4gICAgICBsZXQgc2NvcmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgc2NvcmVUZXh0LmlubmVyVGV4dCA9IHBsYXllci5zY29yZTtcbiAgICAgIHN0YXJEaXYuYXBwZW5kKHN0YXIsIHNjb3JlVGV4dCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGxheWVyLnNjb3JlOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHN0YXIuc3JjID0gc3RhckltZztcbiAgICAgICAgc3RhckRpdi5hcHBlbmRDaGlsZChzdGFyKTtcbiAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0QXJyYXkoKSB7XG4gIHdpbmRvdy5zb3J0ZWRQbGF5ZXIgPSB3aW5kb3cucGxheWVyU2NvcmVzLnRvU29ydGVkKChhLCBiKSA9PiB7IHJldHVybiBOdW1iZXIoYi5zY29yZSkgLSBOdW1iZXIoYS5zY29yZSkgfSlcbn1cblxuXG4iLCJpbXBvcnQge2Rpc3BsYXlBcnJheX0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuXG5cbnZhciBGaWxlU2F2ZXIgPSByZXF1aXJlKCdmaWxlLXNhdmVyJyk7XG5jb25zdCBkb3dubG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbjpudGgtb2YtdHlwZSg0KScpO1xuY29uc3QgdXBsb2FkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaGVhZGVyID4gaW5wdXRbdHlwZT0nZmlsZSddYCk7XG5cbmRvd25sb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG93bmxvYWRGaWxlKVxudXBsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwbG9hZEZpbGUpXG5cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUoKSB7XG5cbiAgbGV0IGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkocGxheWVyU2NvcmVzKV0sIHsgdHlwZTogXCJ0ZXh0L2pzb247Y2hhcnNldD11dGYtOFwiIH0pO1xuICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIFwicGxheWVyTGlzdC5qc29uXCIpO1xuXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZSgpIHtcbiAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBsZXQgdXBsb2FkZWRGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdHlwZT0nZmlsZSddYCkuZmlsZXNbMF1cblxuICBmaWxlUmVhZGVyLnJlYWRBc1RleHQodXBsb2FkZWRGaWxlKVxuICBmaWxlUmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICBwbGF5ZXJTY29yZXMgPSBKU09OLnBhcnNlKGZpbGVSZWFkZXIucmVzdWx0KVxuICAgIGRpc3BsYXlBcnJheSgpXG4gIH1cbn1cbiIsImltcG9ydCAnLi9pbWcvZW5nbGlzaC5qcGVnJztcbmltcG9ydCAnLi9pbWcvc3BhbmlzaC5qcGVnJztcbmltcG9ydCB7IGFkZFNjcm9sbH0gZnJvbSAnLi9zY3JvbGwuanMnXG5pbXBvcnQgeyBhY3RpdmF0ZURhcmtNb2RlfSBmcm9tICcuL2Rhcmttb2RlLmpzJ1xuaW1wb3J0IHsgYWRkUGxheWVyQnV0dG9uLCBlZGl0UGxheWVyQnV0dG9uIH0gZnJvbSAnLi93aW5kb3cuanMnO1xuaW1wb3J0IHsgZG93bmxvYWRGaWxlLCB1cGxvYWRGaWxlIH0gZnJvbSAnLi9kb3dubG9hZEFuZFVwbG9hZC5qcyc7XG5cbndpbmRvdy5sYW5nID0gJ2VzJztcblxubGV0IHNwYW5pc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlIGltZzpmaXJzdC1vZi10eXBlJyk7XG5zcGFuaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVG9TcGFuaXNoKVxuXG5sZXQgZW5nbGlzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUgaW1nOmxhc3Qtb2YtdHlwZScpO1xuZW5nbGlzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvRW5nbGlzaClcblxuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbmZ1bmN0aW9uIHN3aXRjaFRvU3BhbmlzaCgpe1xud2luZG93LmxhbmcgPSAnZXMnO1xuaGVhZGVyLmlubmVySFRNTCA9IGA8YnV0dG9uPmFncmVnYXIganVnYWRvcjwvYnV0dG9uPlxuICAgIDxidXR0b24+ZWRpdGFyIGp1Z2Fkb3I8L2J1dHRvbj5cbiAgICA8YnV0dG9uPm1vZG8gb3NjdXJvPC9idXR0b24+XG4gICAgPGJ1dHRvbj5kZXNjYXJnYXIgbGlzdGE8L2J1dHRvbj5cbiAgICA8aW5wdXQgdHlwZT1cImZpbGVcIj48L2lucHV0PlxuICAgIDxidXR0b24+c2Nyb2xsPC9idXR0b24+YFxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFBsYXllckJ1dHRvbik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b246bnRoLW9mLXR5cGUoMiknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQbGF5ZXJCdXR0b24pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyID4gYnV0dG9uOm50aC1vZi10eXBlKDMpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFjdGl2YXRlRGFya01vZGUpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b246bnRoLW9mLXR5cGUoNCknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvd25sb2FkRmlsZSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGhlYWRlciA+IGlucHV0W3R5cGU9J2ZpbGUnXWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwbG9hZEZpbGUpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b246bGFzdC1vZi10eXBlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRTY3JvbGwpO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUb0VuZ2xpc2goKXtcbndpbmRvdy5sYW5nID0gJ2VuJztcbmhlYWRlci5pbm5lckhUTUwgPSBgPGJ1dHRvbj5hZGQgcGxheWVyPC9idXR0b24+XG4gICAgPGJ1dHRvbj5lZGl0IHBsYXllcjwvYnV0dG9uPlxuICAgIDxidXR0b24+RGFyayBNb2RlPC9idXR0b24+XG4gICAgPGJ1dHRvbj5kb3dubG9hZCBsaXN0PC9idXR0b24+XG4gICAgPGlucHV0IHR5cGU9XCJmaWxlXCI+PC9pbnB1dD5cbiAgICA8YnV0dG9uPnNjcm9sbDwvYnV0dG9uPmBcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFBsYXllckJ1dHRvbik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b246bnRoLW9mLXR5cGUoMiknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQbGF5ZXJCdXR0b24pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyID4gYnV0dG9uOm50aC1vZi10eXBlKDMpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFjdGl2YXRlRGFya01vZGUpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b246bnRoLW9mLXR5cGUoNCknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvd25sb2FkRmlsZSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGhlYWRlciA+IGlucHV0W3R5cGU9J2ZpbGUnXWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwbG9hZEZpbGUpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b246bGFzdC1vZi10eXBlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRTY3JvbGwpO1xuXG59XG5cblxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBkaXNwbGF5QXJyYXkgfSBmcm9tICcuL2Rpc3BsYXkuanMnO1xuaW1wb3J0IHsgYWRkUGxheWVyQnV0dG9uLCBlZGl0UGxheWVyQnV0dG9uIH0gZnJvbSAnLi93aW5kb3cuanMnO1xuaW1wb3J0ICcuL2Rhcmttb2RlLmpzJztcbmltcG9ydCAnLi9kb3dubG9hZEFuZFVwbG9hZC5qcyc7XG5pbXBvcnQgJy4vc2Nyb2xsLmpzJztcbmltcG9ydCAnLi9lbmcuanMnO1xuXG5sZXQgbmV3QXJyYXk7XG5sZXQgaW5kZXhvO1xud2luZG93LmlzSGlzdG9yeU5vdEFwcGxpZWQgPSB0cnVlO1xud2luZG93LmlzV2luZG93Tm90T3BlbiA9IHRydWU7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUGxheWVyQnV0dG9uKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbjpudGgtb2YtdHlwZSgyKScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFBsYXllckJ1dHRvbik7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzY29yZSwgaW5kZXggPSAwKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG59XG5cblxuaWYgKGxvY2FsU3RvcmFnZS5wbGF5ZXJTY29yZXMpIHtcbiAgd2luZG93LnBsYXllclNjb3JlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnBsYXllclNjb3Jlcyk7XG4gIC8vIEkgZG8gdGhpcyBiZWNhdXNlIG9mIHRoZSByZWZlcmVuY2UgcHJvYmxlbSB3aGVuIHlvdSB0cnkgdG8gZGlyZWN0bHkgcHV0IHRoZSBhcnJheVxuICBuZXdBcnJheSA9IEpTT04uc3RyaW5naWZ5KHBsYXllclNjb3Jlcyk7XG4gIHdpbmRvdy5hY3Rpdml0eUFycmF5ID0gW0pTT04ucGFyc2UobmV3QXJyYXkpXTtcbiAgaW5kZXhvID0gYWN0aXZpdHlBcnJheS5sZW5ndGggLSAxO1xufVxuZWxzZSB7XG4gIHdpbmRvdy5wbGF5ZXJTY29yZXMgPSBbbmV3IFBsYXllcignZ2FiYmVldG8nLCAxKSwgbmV3IFBsYXllcignbWVtbycsIDIsIDEpLCBuZXcgUGxheWVyKCdqYXknLCA1LCAyKV07XG4gIC8vIEkgZG8gdGhpcyBiZWNhdXNlIG9mIHRoZSByZWZlcmVuY2UgcHJvYmxlbSB3aGVuIHlvdSB0cnkgdG8gZGlyZWN0bHkgcHV0IHRoZSBhcnJheVxuICBuZXdBcnJheSA9IEpTT04uc3RyaW5naWZ5KHBsYXllclNjb3Jlcyk7XG4gIHdpbmRvdy5hY3Rpdml0eUFycmF5ID0gW0pTT04ucGFyc2UobmV3QXJyYXkpXTtcbiAgaW5kZXhvID0gYWN0aXZpdHlBcnJheS5sZW5ndGggLSAxO1xufVxuXG5cbmRpc3BsYXlBcnJheSgpXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJTY29yZXMnLCBKU09OLnN0cmluZ2lmeShwbGF5ZXJTY29yZXMpKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVG9BY3Rpdml0eUFycmF5KCkge1xuaWYoaW5kZXhvID09IGFjdGl2aXR5QXJyYXkubGVuZ3RoIC0xICl7XG4gIC8vIEkgZG8gdGhpcyBiZWNhdXNlIG9mIHRoZSByZWZlcmVuY2UgcHJvYmxlbSB3aGVuIHlvdSB0cnkgdG8gZGlyZWN0bHkgcHV0IHRoZSBhcnJheVxuICBuZXdBcnJheSA9IEpTT04uc3RyaW5naWZ5KHBsYXllclNjb3Jlcyk7XG4gIGFjdGl2aXR5QXJyYXkucHVzaChKU09OLnBhcnNlKG5ld0FycmF5KSlcbiAgaW5kZXhvKytcbiAgLy8gY29uc29sZS5sb2coaW5kZXhvKVxuICBjb25zb2xlLmxvZyhhY3Rpdml0eUFycmF5KVxuICB9XG4gIGVsc2V7XG5cbiAgICAvLyBmb3IobGV0IGluZGV4IGluIGFjdGl2aXR5QXJyYXkpe1xuICAgIC8vICBpZihpbmRleCA+IGluZGV4byl7XG4gICAgLy8gICAgIGFjdGl2aXR5QXJyYXkuc3BsaWNlKGluZGV4LDEpXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKGBpbmRleG86JHtpbmRleG99YCk7XG4gICAgY29uc29sZS5sb2coYGFjdGl2aXR5QXJyYXkubGVuZ3RoOiR7YWN0aXZpdHlBcnJheS5sZW5ndGh9YCk7XG4gICAgY29uc29sZS5sb2coYGFjdGl2aXR5QXJyYXk6YCk7XG4gICAgY29uc29sZS5sb2coYWN0aXZpdHlBcnJheSk7XG5cbiAgYWN0aXZpdHlBcnJheS5sZW5ndGggPSBpbmRleG8gKyAxO1xuXG4gICAgY29uc29sZS5sb2coYGFjdGl2aXR5QXJyYXkubGVuZ3RoOiR7YWN0aXZpdHlBcnJheS5sZW5ndGh9YCk7XG5cbiAgICBjb25zb2xlLmxvZyhgYWN0aXZpdHlBcnJheTpgKTtcbiAgICBjb25zb2xlLmxvZyhhY3Rpdml0eUFycmF5KTtcblxuICAgIGNvbnNvbGUubG9nKGBpbmRleG86JHtpbmRleG99YCk7XG5cbiAgICBjb25zb2xlLmxvZyhhY3Rpdml0eUFycmF5KTtcbiAgbmV3QXJyYXkgPSBKU09OLnN0cmluZ2lmeShwbGF5ZXJTY29yZXMpO1xuICBhY3Rpdml0eUFycmF5LnB1c2goSlNPTi5wYXJzZShuZXdBcnJheSkpXG4gIGluZGV4bysrXG4gIGNvbnNvbGUubG9nKGFjdGl2aXR5QXJyYXkpXG5cbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbW92ZUJhY2t3YXJkc0FuZEZvcldhcmRzV2l0aEFjdGl2aXR5QXJyYXkpXG5cbmZ1bmN0aW9uIG1vdmVCYWNrd2FyZHNBbmRGb3JXYXJkc1dpdGhBY3Rpdml0eUFycmF5KGV2ZW50KSB7XG5cbiAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgY2FzZSA5MDpcbiAgICAgIGlmIChpbmRleG8gIT0gMCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICBpbmRleG8gPSBpbmRleG8gLTFcbiAgICAgICAgbGV0IHN0cmluZ28gPSBKU09OLnN0cmluZ2lmeShhY3Rpdml0eUFycmF5W2luZGV4b10pXG4gICAgICAgIHBsYXllclNjb3JlcyA9IEpTT04ucGFyc2Uoc3RyaW5nbyk7XG4gICAgICAgIGRpc3BsYXlBcnJheSgpXG4gICAgICB9O1xuICAgIGJyZWFrO1xuICAgIGNhc2UgODg6XG4gICAgICBpZiAoaW5kZXhvICE9IGFjdGl2aXR5QXJyYXkubGVuZ3RoIC0xICkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICBpbmRleG8gPSBpbmRleG8gKzFcbiAgICAgICAgbGV0IHN0cmluZ28gPSBKU09OLnN0cmluZ2lmeShhY3Rpdml0eUFycmF5W2luZGV4b10pXG4gICAgICAgIHBsYXllclNjb3JlcyA9IEpTT04ucGFyc2Uoc3RyaW5nbyk7XG4gICAgICAgIGRpc3BsYXlBcnJheSgpXG4gICAgICB9XG5cblxuXG4gIH1cblxuXG59XG4iLCJsZXQgc2Nyb2xsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uOmxhc3Qtb2YtdHlwZScpO1xubGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbnNjcm9sbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFNjcm9sbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTY3JvbGwoKXtcbm1haW5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2Nyb2xsJylcbn1cblxuXG5cblxuIiwiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5Ym9hcmROYXZlZ2F0aW9uKVxuZnVuY3Rpb24ga2V5Ym9hcmROYXZlZ2F0aW9uKGV2ZW50KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ZWRQbGF5ZXIgPT0gXCJudW1iZXJcIiAmJiBpc1dpbmRvd05vdE9wZW4pIHtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSAzNzpcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzb3J0ZWRQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHNvcnRlZFBsYXllcltpbmRleF0uaW5kZXggPT0gc2VsZWN0ZWRQbGF5ZXIgJiYgaW5kZXggPiAwKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFBsYXllciA9IHNvcnRlZFBsYXllcltpbmRleCAtIDFdLmluZGV4XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RQbGF5ZXIoZXZlbnQpXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM5OlxuICAgICAgY2FzZSA0MDpcbiAgICAgICAgbGV0IGRpbTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNvcnRlZFBsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAod2luZG93LnNvcnRlZFBsYXllcltpbmRleF0uaW5kZXggPT0gc2VsZWN0ZWRQbGF5ZXIgJiYgaW5kZXggPCBzb3J0ZWRQbGF5ZXIubGVuZ3RoIC0xICkge1xuICAgICAgICAgICAgZGltID0gd2luZG93LnNvcnRlZFBsYXllcltpbmRleCArMV0uaW5kZXg7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YgZGltID09ICdudW1iZXInKXtcbiAgICAgICAgd2luZG93LnNlbGVjdGVkUGxheWVyID0gZGltO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFBsYXllcihldmVudClcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG5cblxuICB9XG5cblxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFBsYXllcihldmVudCkge1xuICBpZiAoaXNXaW5kb3dOb3RPcGVuKSB7XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIHBsYXllclNjb3Jlcykge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBwbGF5ZXIuaW5kZXgpIHtcbiAgICAgICAgd2luZG93LnNlbGVjdGVkUGxheWVyID0gcGxheWVyLmluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgICBhZGRCYWNrZ3JvdW5kVG9TZWxlY3RlZFBsYXllcigpXG4gIH1cbn1cbmZ1bmN0aW9uIGFkZEJhY2tncm91bmRUb1NlbGVjdGVkUGxheWVyKCkge1xuICBmb3IgKGxldCBkaXYgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbWFpbiA+IGRpdiA+IGRpdjpmaXJzdC1vZi10eXBlJykpIHtcbiAgICBpZiAod2luZG93LnNlbGVjdGVkUGxheWVyID09IGRpdi52YWx1ZSkge1xuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1saWdodE9yYW5nZSknXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnXG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IGRpc3BsYXlBcnJheSB9IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgeyBQbGF5ZXIsIHB1c2hUb0FjdGl2aXR5QXJyYXkgfSBmcm9tICcuL21haW4uanMnO1xuXG5sZXQgd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdycpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb3BlbldpbmRvd3MpXG5cblxuXG5mdW5jdGlvbiBvcGVuV2luZG93cyhldmVudCkge1xuICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICBjYXNlIDIxOTpcbiAgICAgIGFkZFBsYXllckJ1dHRvbigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyMjE6XG4gICAgICBlZGl0UGxheWVyQnV0dG9uKCk7XG5cbiAgfVxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBsYXllckJ1dHRvbigpIHtcbiAgaWYgKGlzV2luZG93Tm90T3Blbikge1xuXG5cblxuXG4gICAgaXNXaW5kb3dOb3RPcGVuID0gZmFsc2U7XG4gICAgd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdycpO1xuXG4gICAgaWYobGFuZyA9PSAnZXMnKXtcbiAgICB3aW5kb3cuaW5uZXJIVE1MID1gPGJ1dHRvbiBpZD0nY2xvc2VXaW5kb3cnPmNlcnJhcjwvYnV0dG9uPlxuICAgIDxwPm5vbWJyZTo8L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9J25hbWUnPlxuICAgIDxidXR0b24gaWQ9J2FkZEJ1dHRvbic+YWdyZWdhcjwvYnV0dG9uPmB9XG4gICAgZWxzZXtcbiAgICB3aW5kb3cuaW5uZXJIVE1MID1gPGJ1dHRvbiBpZD0nY2xvc2VXaW5kb3cnPmNsb3NlPC9idXR0b24+XG4gICAgPHA+bmFtZTo8L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9J25hbWUnPlxuICAgIDxidXR0b24gaWQ9J2FkZEJ1dHRvbic+YWRkPC9idXR0b24+YH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZVdpbmRvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VXaW5kb3cpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNsb3NlV2luZG93S2V5Ym9hcmQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheUtleWJvYXJkKVxuXG4gICAgd2luZG93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjd2luZG93IGlucHV0W3R5cGU9J3RleHQnXWApLnNlbGVjdCgpXG4gIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXlLZXlib2FyZChldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC5rZXlDb2RlKVxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXkoKVxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbmRIaWRlKGVsKSB7XG4gIHNldFRpbWVvdXQoZGlzcGxheSwgNTAwKVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG4gICAgZWwuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBzZXRUaW1lb3V0KGhpZGUsIDMwMDApXG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKCkge1xuICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXkoKSB7XG4gIGxldCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpXG5cbiAgZGlzcGxheUFuZEhpZGUobXNnKTtcblxuICBsZXQgbmFtZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjd2luZG93IGlucHV0W3R5cGU9J3RleHQnXWApO1xuXG4gIGlmKGxhbmcgPT0gJ2VzJyl7XG4gIG1zZy5pbm5lclRleHQgPSBgJHtuYW1lVGV4dC52YWx1ZX0gaGEgc2lkbyBhZ3JlZ2Fkb2A7XG4gIH1cbiAgZWxzZXtcbiAgbXNnLmlubmVyVGV4dCA9IGAke25hbWVUZXh0LnZhbHVlfSBoYXMgYmVlbiBhZGRlZGA7XG4gIH1cbiAgY29uc29sZS5sb2cocGxheWVyU2NvcmVzKVxuICBwbGF5ZXJTY29yZXMucHVzaChuZXcgUGxheWVyKG5hbWVUZXh0LnZhbHVlLCAxLCBwbGF5ZXJTY29yZXMubGVuZ3RoKSlcbiAgcHVzaFRvQWN0aXZpdHlBcnJheSgpXG4gIGRpc3BsYXlBcnJheSgpXG5cbiAgY2xvc2VXaW5kb3coKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0UGxheWVyQnV0dG9uKCkge1xuICBpZiAoaXNXaW5kb3dOb3RPcGVuICYmIHR5cGVvZiBzZWxlY3RlZFBsYXllciA9PSBcIm51bWJlclwiKSB7XG5cbiAgICBpc1dpbmRvd05vdE9wZW4gPSBmYWxzZTtcbiAgICBpZihsYW5nID09ICdlcycpe1xuICAgIHdpbmRvdy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBpZD0nY2xvc2VXaW5kb3cnID5jZXJyYXI8L2J1dHRvbj5cbiAgICA8cD5ub21icmU6PC9wPlxuICAgIDxpbnB1dCB2YWx1ZT0nJHtwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLm5hbWV9JyB0eXBlPVwidGV4dFwiIGlkPSduYW1lJyBhdXRvZm9jdXM9J3RydWUnID5cbiAgICA8cD5lc3RyZWxsYXM6PC9wPlxuICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9JyR7cGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5zY29yZX0nICBpZD1cInN0YXJzXCI+XG4gICAgPGJ1dHRvbiBpZD0nYXBwbHlCdXR0b24nPmFwbGljYXIgY2FtYmlvczwvYnV0dG9uPmBcbiAgICB9XG4gICAgZWxzZXtcbiAgICB3aW5kb3cuaW5uZXJIVE1MID0gYDxidXR0b24gaWQ9J2Nsb3NlV2luZG93JyA+Y2xvc2U8L2J1dHRvbj5cbiAgICA8cD5uYW1lOjwvcD5cbiAgICA8aW5wdXQgdmFsdWU9JyR7cGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5uYW1lfScgdHlwZT1cInRleHRcIiBpZD0nbmFtZScgYXV0b2ZvY3VzPSd0cnVlJyA+XG4gICAgPHA+c3RhcnM6PC9wPlxuICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9JyR7cGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5zY29yZX0nICBpZD1cInN0YXJzXCI+XG4gICAgPGJ1dHRvbiBpZD0nYXBwbHlCdXR0b24nPmFwcGx5IGNoYW5nZXM8L2J1dHRvbj5gXG5cblxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZVdpbmRvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VXaW5kb3cpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNsb3NlV2luZG93S2V5Ym9hcmQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcGx5QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBseUNoYW5nZXMpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGFwcGx5Q2hhbmdlc0tleWJvYXJkKVxuXG4gICAgd2luZG93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3dpbmRvdyBpbnB1dFt0eXBlPSdudW1iZXInXWApLnNlbGVjdCgpXG5cblxuICB9XG59XG5cblxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzS2V5Ym9hcmQoZXZlbnQpIHtcbiAgY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSlcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICBhcHBseUNoYW5nZXMoKVxuICB9XG59XG5cblxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzKCkge1xuICBsZXQgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKVxuICBpZiAocGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5zY29yZSAhPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnMnKS52YWx1ZSkge1xuXG4gICAgZGlzcGxheUFuZEhpZGUobXNnKTtcbiAgICBpZihsYW5nID09ICdlcycpe1xuICAgIG1zZy5pbm5lclRleHQgPSBgJHtwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLm5hbWV9IGFob3JhIHRpZW5lICR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJzJykudmFsdWV9IGVzdHJlbGxhc2BcbiAgICB9XG4gICAgZWxzZXtcbiAgICBtc2cuaW5uZXJUZXh0ID0gYCR7cGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5uYW1lfSBoYXMgJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnMnKS52YWx1ZX0gc3RhcnMgcmlnaHQgbm93IWBcbiAgICB9XG4gIH1cblxuICBlbHNlIGlmIChwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLm5hbWUgIT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZSkge1xuICAgIG1zZy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuXG5cblxuICAgIGlmKGxhbmcgPT0gJ2VzJyl7XG4gICAgbXNnLmlubmVyVGV4dCA9IGAke3BsYXllclNjb3Jlc1tzZWxlY3RlZFBsYXllcl0ubmFtZX0gYWhvcmEgc2UgbGxhbWEgJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlfWBcbiAgICB9XG4gICAgZWxzZXtcbiAgICBtc2cuaW5uZXJUZXh0ID0gYCR7cGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5uYW1lfSBjaGFuZ2VkIGl0cyBuYW1lIHRvICR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZX1gXG4gICAgfVxuXG4gIH1cblxuICBwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICBwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLnNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJzJykudmFsdWU7XG5cbiAgcHVzaFRvQWN0aXZpdHlBcnJheSgpXG4gIGRpc3BsYXlBcnJheSgpXG5cbiAgY2xvc2VXaW5kb3coKVxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIGNsb3NlV2luZG93S2V5Ym9hcmQoZXZlbnQpIHtcbiAgY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSlcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMjcpIHtcbiAgICBjbG9zZVdpbmRvdygpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VXaW5kb3coKSB7XG4gIHdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBpc1dpbmRvd05vdE9wZW4gPSB0cnVlO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2xvc2VXaW5kb3dLZXlib2FyZClcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGFwcGx5Q2hhbmdlc0tleWJvYXJkKVxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheUtleWJvYXJkKVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9Sb2JvdCBDcnVzaC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvTWluZWNyYWZ0ZXIuQWx0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udC9BbWVyaWNhbiBDYXB0YWluLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuYmFja2dyb3VuZDogMDtcbnBhZGRpbmc6IDA7XG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XG59XG5cblxuOnJvb3R7XG4tLW9yYW5nZTojRkY4RDE1O1xuLS1vcmFuZ2U6I0ZGOEQxNTtcbi0td2hpdGU6d2hpdGU7XG4tLWJsYWNrOmJsYWNrO1xuLS1ncmVlbjojQzFGN0MxO1xuLS1saWdodE9yYW5nZTojRkZFNUE3O1xufVxuXG46cm9vdC5kYXJre1xuLS1vcmFuZ2U6IzUxMkMwNTtcbi0td2hpdGU6YmxhY2s7XG4tLWJsYWNrOndoaXRlO1xuLS1ncmVlbjojMTYxRDE2O1xuLS1saWdodE9yYW5nZTojM0IzNTI3O1xufVxuXG5cbkBmb250LWZhY2V7XG5mb250LWZhbWlseTogJ2RlZmF1bHQnO1xuc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cblxuQGZvbnQtZmFjZXtcbmZvbnQtZmFtaWx5OiAnYnV0dG9uJztcbnNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5cbkBmb250LWZhY2V7XG5mb250LWZhbWlseTogJ3BvcFVwJztcbnNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG5ib2R5e1xuXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5nYXA6MTVweDtcbmFsaWduLWl0ZW1zOmNlbnRlcjtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbmZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XG59XG5cblxucHtcbmZvbnQtc2l6ZTptYXgoMC45cmVtLDIuM3Z3KTtcbn1cblxuaGVhZGVye1xuZGlzcGxheTpmbGV4O1xucG9zaXRpb246YWJzb2x1dGU7XG5sZWZ0OiAwO1xudG9wOiAwO1xuZ2FwOjVweDtcbn1cblxuI21lc3NhZ2V7XG5mb250LWZhbWlseTogJ3BvcFVwJztcbnRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbmZvbnQtc2l6ZTogMi41cmVtO1xucG9zaXRpb246YWJzb2x1dGU7XG5yaWdodDogMDtcbnRvcDogMDtcbnRyYW5zaXRpb246IG9wYWNpdHkgNnM7XG59XG5cbmJ1dHRvbiB7XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcbmNvbG9yOiB2YXIoLS1ibGFjayk7XG5wYWRkaW5nOiAxMHB4O1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG50cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLGNvbG9yIDAuNXMgO1xuZm9udC1mYW1pbHk6ICdidXR0b24nO1xuZm9udC1zaXplOjEuM3JlbTtcbn1cblxuaW5wdXRbdHlwZT0nZmlsZSddOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbntcblxuZm9udC1mYW1pbHk6ICdidXR0b24nO1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5jb2xvcjogdmFyKC0tYmxhY2spO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5wYWRkaW5nOiAyLjVweDtcbnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsY29sb3IgMC41cyA7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG59XG5cbmJ1dHRvbjpudGgtb2YtdHlwZSg0KSxidXR0b246bnRoLW9mLXR5cGUoNSksIGlucHV0W3R5cGU9J2ZpbGUnXXtcbm9wYWNpdHk6MDtcbnRyYW5zaXRpb246b3BhY2l0eSAxcztcbn1cblxuaW5wdXRbdHlwZT0nZmlsZSdde1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5jb2xvcjogdmFyKC0tYmxhY2spO1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xuZm9udC1mYW1pbHk6ICdkZWZhdWx0Jztcbn1cblxuYnV0dG9uOmhvdmVyOm50aC1vZi10eXBlKDQpLGJ1dHRvbjpob3ZlcjpudGgtb2YtdHlwZSg1KSwgaW5wdXQ6aG92ZXJbdHlwZT0nZmlsZSdde1xub3BhY2l0eToxO1xufVxuXG5cbmlucHV0OmhvdmVyW3R5cGU9J2ZpbGUnXXtcbmJhY2tncm91bmQtY29sb3I6dmFyKC0tYmxhY2spO1xuY29sb3I6IHZhcigtLXdoaXRlKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbn1cblxuXG5idXR0b246aG92ZXIsaW5wdXRbdHlwZT0nZmlsZSddOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbntcbmJhY2tncm91bmQtY29sb3I6dmFyKC0tYmxhY2spO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG5jb2xvcjogdmFyKC0td2hpdGUpO1xuY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbm1haW57XG5tYXJnaW4tdG9wOjh2aDtcbndpZHRoOjkwdnc7XG5ib3JkZXItcmFkaXVzOjIwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xufVxuXG5tYWluLnNjcm9sbHtcbm92ZXJmbG93LXk6YXV0bztcbmhlaWdodDo5MHZoO1xufVxuXG5cbm1haW4+ICBkaXZ7XG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZToxZnIgLyAzNSUgMWZyO1xufVxuXG5tYWluICBkaXYgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjpyb3c7XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xudGV4dC1hbGlnbjpjZW50ZXI7XG5ib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbn1cblxubWFpbiAgZGl2ID4gZGl2Omxhc3Qtb2YtdHlwZTpub3QobWFpbiBkaXY6bGFzdC1vZi10eXBlID5kaXY6bGFzdC1vZi10eXBlKSxcbm1haW4gIGRpdiA+IGRpdjpmaXJzdC1vZi10eXBlOm5vdChtYWluICBkaXY6bGFzdC1vZi10eXBlID4gZGl2OmZpcnN0LW9mLXR5cGUpe1xuYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYmxhY2spO1xufVxuXG5tYWluLnNjcm9sbCBkaXY6bGFzdC1vZi10eXBlID4gZGl2Omxhc3Qtb2YtdHlwZSxtYWluLnNjcm9sbCAgZGl2Omxhc3Qtb2YtdHlwZSA+IGRpdjpmaXJzdC1vZi10eXBle1xuXG5ib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5cbn1cblxubWFpbiAgZGl2ID4gZGl2Omxhc3Qtb2YtdHlwZXtcbmRpc3BsYXk6ZmxleCA7XG5qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcbmFsaWduLWl0ZW1zOmNlbnRlcjtcbnBhZGRpbmctbGVmdDoxMHB4O1xufVxuXG5tYWluIGltZ3tcbndpZHRoOjYwcHg7XG5oZWlnaHQ6NjBweDtcbn1cblxuI3dpbmRvd3tcbnBvc2l0aW9uOmFic29sdXRlO1xuZGlzcGxheTpub25lO1xuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjaykgO1xucGFkZGluZzogMTBweDtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbmJvcmRlci1yYWRpdXM6MjBweDtcbnRvcDo1MHZoIDtcbmxlZnQ6NTB2dztcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG5nYXA6NXB4IDtcbn1cblxuaW5wdXR7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG5wYWRkaW5nOjEwcHggO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjaykgO1xuY29sb3I6dmFyKC0tYmxhY2spO1xufVxuXG5pbnB1dDpmb2N1czpub3QoaW5wdXRbdHlwZT0nZmlsZSddKXtcbmJhY2tncm91bmQtY29sb3I6dmFyKC0tZ3JlZW4pO1xub3V0bGluZTowcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbmFydGljbGV7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5kaXNwbGF5OiBibG9jaztcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbnBhZGRpbmc6NXB4O1xuYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuXG5hcnRpY2xlIGltZ3tcblxud2lkdGg6NjBweDtcbmhlaWdodDo2MHB4O1xuYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuXG5hcnRpY2xlIGltZzpob3ZlcntcbmN1cnNvcjogcG9pbnRlcjtcbm91dGxpbmU6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVixxQkFBcUI7QUFD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b3VuZDogMDtcXG5wYWRkaW5nOiAwO1xcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxuXFxuXFxuOnJvb3R7XFxuLS1vcmFuZ2U6I0ZGOEQxNTtcXG4tLW9yYW5nZTojRkY4RDE1O1xcbi0td2hpdGU6d2hpdGU7XFxuLS1ibGFjazpibGFjaztcXG4tLWdyZWVuOiNDMUY3QzE7XFxuLS1saWdodE9yYW5nZTojRkZFNUE3O1xcbn1cXG5cXG46cm9vdC5kYXJre1xcbi0tb3JhbmdlOiM1MTJDMDU7XFxuLS13aGl0ZTpibGFjaztcXG4tLWJsYWNrOndoaXRlO1xcbi0tZ3JlZW46IzE2MUQxNjtcXG4tLWxpZ2h0T3JhbmdlOiMzQjM1Mjc7XFxufVxcblxcblxcbkBmb250LWZhY2V7XFxuZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcXG5zcmM6IHVybCgnLi9mb250L1JvYm90XFxcXCBDcnVzaC5vdGYnKTtcXG59XFxuXFxuXFxuQGZvbnQtZmFjZXtcXG5mb250LWZhbWlseTogJ2J1dHRvbic7XFxuc3JjOiB1cmwoJy4vZm9udC9NaW5lY3JhZnRlci5BbHQudHRmJyk7XFxufVxcblxcblxcbkBmb250LWZhY2V7XFxuZm9udC1mYW1pbHk6ICdwb3BVcCc7XFxuc3JjOiB1cmwoJy4vZm9udC9BbWVyaWNhblxcXFwgQ2FwdGFpbi5vdGYnKTtcXG59XFxuXFxuYm9keXtcXG5cXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbmdhcDoxNXB4O1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxuZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcXG59XFxuXFxuXFxucHtcXG5mb250LXNpemU6bWF4KDAuOXJlbSwyLjN2dyk7XFxufVxcblxcbmhlYWRlcntcXG5kaXNwbGF5OmZsZXg7XFxucG9zaXRpb246YWJzb2x1dGU7XFxubGVmdDogMDtcXG50b3A6IDA7XFxuZ2FwOjVweDtcXG59XFxuXFxuI21lc3NhZ2V7XFxuZm9udC1mYW1pbHk6ICdwb3BVcCc7XFxudGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xcbmZvbnQtc2l6ZTogMi41cmVtO1xcbnBvc2l0aW9uOmFic29sdXRlO1xcbnJpZ2h0OiAwO1xcbnRvcDogMDtcXG50cmFuc2l0aW9uOiBvcGFjaXR5IDZzO1xcbn1cXG5cXG5idXR0b24ge1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xcbmNvbG9yOiB2YXIoLS1ibGFjayk7XFxucGFkZGluZzogMTBweDtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5ib3JkZXItcmFkaXVzOjEwcHg7XFxudHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvcixjb2xvciAwLjVzIDtcXG5mb250LWZhbWlseTogJ2J1dHRvbic7XFxuZm9udC1zaXplOjEuM3JlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nZmlsZSddOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbntcXG5cXG5mb250LWZhbWlseTogJ2J1dHRvbic7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuY29sb3I6IHZhcigtLWJsYWNrKTtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5wYWRkaW5nOiAyLjVweDtcXG50cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLGNvbG9yIDAuNXMgO1xcbmJvcmRlci1yYWRpdXM6MTBweDtcXG59XFxuXFxuYnV0dG9uOm50aC1vZi10eXBlKDQpLGJ1dHRvbjpudGgtb2YtdHlwZSg1KSwgaW5wdXRbdHlwZT0nZmlsZSdde1xcbm9wYWNpdHk6MDtcXG50cmFuc2l0aW9uOm9wYWNpdHkgMXM7XFxufVxcblxcbmlucHV0W3R5cGU9J2ZpbGUnXXtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcXG5jb2xvcjogdmFyKC0tYmxhY2spO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5mb250LWZhbWlseTogJ2RlZmF1bHQnO1xcbn1cXG5cXG5idXR0b246aG92ZXI6bnRoLW9mLXR5cGUoNCksYnV0dG9uOmhvdmVyOm50aC1vZi10eXBlKDUpLCBpbnB1dDpob3Zlclt0eXBlPSdmaWxlJ117XFxub3BhY2l0eToxO1xcbn1cXG5cXG5cXG5pbnB1dDpob3Zlclt0eXBlPSdmaWxlJ117XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ibGFjayk7XFxuY29sb3I6IHZhcigtLXdoaXRlKTtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxufVxcblxcblxcbmJ1dHRvbjpob3ZlcixpbnB1dFt0eXBlPSdmaWxlJ106OmZpbGUtc2VsZWN0b3ItYnV0dG9ue1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0tYmxhY2spO1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0td2hpdGUpO1xcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5tYWlue1xcbm1hcmdpbi10b3A6OHZoO1xcbndpZHRoOjkwdnc7XFxuYm9yZGVyLXJhZGl1czoyMHB4O1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbn1cXG5cXG5tYWluLnNjcm9sbHtcXG5vdmVyZmxvdy15OmF1dG87XFxuaGVpZ2h0Ojkwdmg7XFxufVxcblxcblxcbm1haW4+ICBkaXZ7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLXRlbXBsYXRlOjFmciAvIDM1JSAxZnI7XFxufVxcblxcbm1haW4gIGRpdiA+IGRpdjpmaXJzdC1vZi10eXBle1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246cm93O1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuYWxpZ24taXRlbXM6Y2VudGVyO1xcbnRleHQtYWxpZ246Y2VudGVyO1xcbmJvcmRlci1yaWdodDoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbn1cXG5cXG5tYWluICBkaXYgPiBkaXY6bGFzdC1vZi10eXBlOm5vdChtYWluIGRpdjpsYXN0LW9mLXR5cGUgPmRpdjpsYXN0LW9mLXR5cGUpLFxcbm1haW4gIGRpdiA+IGRpdjpmaXJzdC1vZi10eXBlOm5vdChtYWluICBkaXY6bGFzdC1vZi10eXBlID4gZGl2OmZpcnN0LW9mLXR5cGUpe1xcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG59XFxuXFxubWFpbi5zY3JvbGwgZGl2Omxhc3Qtb2YtdHlwZSA+IGRpdjpsYXN0LW9mLXR5cGUsbWFpbi5zY3JvbGwgIGRpdjpsYXN0LW9mLXR5cGUgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcXG5cXG5ib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuXFxufVxcblxcbm1haW4gIGRpdiA+IGRpdjpsYXN0LW9mLXR5cGV7XFxuZGlzcGxheTpmbGV4IDtcXG5qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcXG5hbGlnbi1pdGVtczpjZW50ZXI7XFxucGFkZGluZy1sZWZ0OjEwcHg7XFxufVxcblxcbm1haW4gaW1ne1xcbndpZHRoOjYwcHg7XFxuaGVpZ2h0OjYwcHg7XFxufVxcblxcbiN3aW5kb3d7XFxucG9zaXRpb246YWJzb2x1dGU7XFxuZGlzcGxheTpub25lO1xcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKSA7XFxucGFkZGluZzogMTBweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuYm9yZGVyLXJhZGl1czoyMHB4O1xcbnRvcDo1MHZoIDtcXG5sZWZ0OjUwdnc7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG5nYXA6NXB4IDtcXG59XFxuXFxuaW5wdXR7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbnBhZGRpbmc6MTBweCA7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjaykgO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXM6bm90KGlucHV0W3R5cGU9J2ZpbGUnXSl7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmVlbik7XFxub3V0bGluZTowcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbmFydGljbGV7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcbmRpc3BsYXk6IGJsb2NrO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5wYWRkaW5nOjVweDtcXG5ib3JkZXItcmFkaXVzOjEwcHg7XFxufVxcblxcbmFydGljbGUgaW1ne1xcblxcbndpZHRoOjYwcHg7XFxuaGVpZ2h0OjYwcHg7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbn1cXG5cXG5hcnRpY2xlIGltZzpob3ZlcntcXG5jdXJzb3I6IHBvaW50ZXI7XFxub3V0bGluZToycHggc29saWQgdmFyKC0tYmxhY2spO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYSxiLGMpe3ZhciBkPW5ldyBYTUxIdHRwUmVxdWVzdDtkLm9wZW4oXCJHRVRcIixhKSxkLnJlc3BvbnNlVHlwZT1cImJsb2JcIixkLm9ubG9hZD1mdW5jdGlvbigpe2coZC5yZXNwb25zZSxiLGMpfSxkLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGQuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLm5hdmlnYXRvciYmL01hY2ludG9zaC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmL0FwcGxlV2ViS2l0Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxnPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlJiYhYT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGIsZCxlLGcpe2lmKGc9Z3x8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGcmJihnLmRvY3VtZW50LnRpdGxlPWcuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYilyZXR1cm4gYyhiLGQsZSk7dmFyIGg9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWIudHlwZSxpPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGo9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChqfHxoJiZpfHxhKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBrPW5ldyBGaWxlUmVhZGVyO2sub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ay5yZXN1bHQ7YT1qP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGc/Zy5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxnPW51bGx9LGsucmVhZEFzRGF0YVVSTChiKX1lbHNle3ZhciBsPWYuVVJMfHxmLndlYmtpdFVSTCxtPWwuY3JlYXRlT2JqZWN0VVJMKGIpO2c/Zy5sb2NhdGlvbj1tOmxvY2F0aW9uLmhyZWY9bSxnPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2wucmV2b2tlT2JqZWN0VVJMKG0pfSw0RTQpfX0pO2Yuc2F2ZUFzPWcuc2F2ZUFzPWcsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWcpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5wdXQvbWFpbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==