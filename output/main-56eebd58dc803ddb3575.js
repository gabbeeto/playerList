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



document.addEventListener('keydown', deleteSelected)

function deleteSelected(event) {
  if (typeof selectedPlayer == 'number' && isWindowNotOpen && event.keyCode == 46) {
    playerScores.splice(selectedPlayer, 1)
    updateTheIndexForArray()
    ;(0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayArray)()
  }
}

function deletePlayer(event) {
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
    nameDiv.appendChild(playerName);
    nameDiv.appendChild(deleteImage);


    let starDiv = document.createElement('div');
    playerContainer.appendChild(starDiv)
    for(let index = 0; index < player.score; index++){
      let star = document.createElement('img');
      star.src = _img_star_png__WEBPACK_IMPORTED_MODULE_4__;
      starDiv.appendChild(star);

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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
const downloadButton = document.querySelector('header > button:nth-of-type(4)');

downloadButton.addEventListener('click',downloadFile)

function downloadFile(){

let blob = new Blob([JSON.stringify(playerScores)], {type: "text/json;charset=utf-8"});
FileSaver.saveAs(blob, "playerList.json");


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
/* harmony import */ var _downloadAndUpload_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_downloadAndUpload_js__WEBPACK_IMPORTED_MODULE_4__);






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
/* harmony export */   editPlayerButton: () => (/* binding */ editPlayerButton)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./input/display.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./input/main.js");



let window = document.querySelector('#window');


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


function addToTheScoresPlayerArray() {
  let nameText = document.querySelector(`#window input[type='text']`);
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

button {
background-color:var(--white);
color: var(--black);
padding: 10px;
border:2px solid var(--black);
border-radius:10px;
transition: background-color,color 0.5s ;
}


button:hover{
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

`, "",{"version":3,"sources":["webpack://./input/style.css"],"names":[],"mappings":"AAAA;AACA,aAAa;AACb,UAAU;AACV,qBAAqB;AACrB;;AAEA;AACA,gBAAgB;AAChB,gBAAgB;AAChB,aAAa;AACb,aAAa;AACb,eAAe;AACf,qBAAqB;AACrB;;AAEA;AACA,gBAAgB;AAChB,aAAa;AACb,aAAa;AACb,eAAe;AACf,qBAAqB;AACrB;;AAEA;AACA,+BAA+B;AAC/B,kBAAkB;AAClB,aAAa;AACb,sBAAsB;AACtB,kBAAkB;AAClB,kBAAkB;AAClB;;AAEA;AACA,YAAY;AACZ,iBAAiB;AACjB,OAAO;AACP,MAAM;AACN,OAAO;AACP;;AAEA;AACA,6BAA6B;AAC7B,mBAAmB;AACnB,aAAa;AACb,6BAA6B;AAC7B,kBAAkB;AAClB,wCAAwC;AACxC;;;AAGA;AACA,6BAA6B;AAC7B,6BAA6B;AAC7B,mBAAmB;AACnB,eAAe;AACf;;AAEA;AACA,iBAAiB;AACjB,cAAc;AACd,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB,6BAA6B;AAC7B,6BAA6B;AAC7B;;AAEA;AACA,aAAa;AACb,2BAA2B;AAC3B;;AAEA;AACA,aAAa;AACb,kBAAkB;AAClB,sBAAsB;AACtB,kBAAkB;AAClB,iBAAiB;AACjB,mCAAmC;AACnC,oCAAoC;AACpC;;;AAGA;AACA,aAAa;AACb,0BAA0B;AAC1B,kBAAkB;AAClB,oCAAoC;AACpC,iBAAiB;AACjB;;AAEA;AACA,UAAU;AACV,WAAW;;AAEX;;AAEA;AACA,iBAAiB;AACjB,YAAY;AACZ,qBAAqB;AACrB,8BAA8B;AAC9B,aAAa;AACb,8BAA8B;AAC9B,kBAAkB;AAClB,SAAS;AACT,SAAS;AACT,+BAA+B;AAC/B,QAAQ;AACR;;AAEA;AACA,kBAAkB;AAClB,aAAa;AACb,8BAA8B;AAC9B,kBAAkB;AAClB;AACA;AACA,6BAA6B;AAC7B,6BAA6B;AAC7B","sourcesContent":["*{\nbackground: 0;\npadding: 0;\nbox-sizing:border-box;\n}\n\n:root{\n--orange:#FF8D15;\n--orange:#FF8D15;\n--white:white;\n--black:black;\n--green:#C1F7C1;\n--lightOrange:#FFE5A7;\n}\n\n:root.dark{\n--orange:#512C05;\n--white:black;\n--black:white;\n--green:#161D16;\n--lightOrange:#3B3527;\n}\n\nbody{\nbackground-color: var(--orange);\ncolor:var(--black);\ndisplay: flex;\njustify-content:center;\nalign-items:center;\nposition: relative;\n}\n\nheader{\ndisplay:flex;\nposition:absolute;\nleft: 0;\ntop: 0;\ngap:5px;\n}\n\nbutton {\nbackground-color:var(--white);\ncolor: var(--black);\npadding: 10px;\nborder:2px solid var(--black);\nborder-radius:10px;\ntransition: background-color,color 0.5s ;\n}\n\n\nbutton:hover{\nbackground-color:var(--black);\nborder:2px solid var(--white);\ncolor: var(--white);\ncursor: pointer;\n}\n\nmain{\noverflow-y:scroll;\nmargin-top:8vh;\nwidth:90vw;\nheight:90vh;\nborder-radius:20px;\nbackground-color:var(--white);\nborder:2px solid var(--black);\n}\n\nmain>  div{\ndisplay: grid;\ngrid-template:1fr / 20% 1fr;\n}\n\nmain  div > div:first-of-type{\ndisplay: flex;\nflex-direction:row;\njustify-content:center;\nalign-items:center;\ntext-align:center;\nborder-right:2px solid var(--black);\nborder-bottom:2px solid var(--black);\n}\n\n\nmain  div > div:last-of-type{\ndisplay:flex ;\njustify-content:flex-start;\nalign-items:center;\nborder-bottom:2px solid var(--black);\npadding-left:10px;\n}\n\nmain img{\nwidth:60px;\nheight:60px;\n\n}\n\n#window{\nposition:absolute;\ndisplay:none;\nflex-direction:column;\nborder:2px solid var(--black) ;\npadding: 10px;\nbackground-color: var(--white);\nborder-radius:20px;\ntop:50vh ;\nleft:50vw;\ntransform: translate(-50%,-50%);\ngap:5px ;\n}\n\ninput{\nborder-radius:10px;\npadding:10px ;\nborder:2px solid var(--black) ;\ncolor:var(--black);\n}\ninput:focus{\nbackground-color:var(--green);\noutline:0px solid transparent;\n}\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZG93bmxvYWRBbmRVcGxvYWQuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L21haW4uanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvd2luZG93LmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9pbnB1dC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9kaXN0L0ZpbGVTYXZlci5taW4uanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L3N0eWxlLmNzcz9hMTNlIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBpc0RhcmtNb2RlID0gbWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XG5cbmxldCBkYXJrTW9kZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbjpudGgtb2YtdHlwZSgzKScpO1xuZGFya01vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFjdGl2YXRlRGFya01vZGUpXG5cblxuaWYgKGlzRGFya01vZGUpIHtcblxuICBhY3RpdmF0ZURhcmtNb2RlKClcblxufVxuXG5cbmZ1bmN0aW9uIGFjdGl2YXRlRGFya01vZGUoKSB7XG4gIGxldCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXG4gIGh0bWwuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpXG4gIGlmIChodG1sLmNsYXNzTmFtZSA9PSAnZGFyaycpIHtcbiAgICBkYXJrTW9kZUJ1dHRvbi5pbm5lclRleHQgPSAnbW9kbyBjbGFybydcbiAgfVxuICBlbHNle1xuICAgIGRhcmtNb2RlQnV0dG9uLmlubmVyVGV4dCA9ICdtb2RvIG9zY3VybydcblxuICB9XG59XG4iLCJpbXBvcnQgeyBkaXNwbGF5QXJyYXkgfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5pbXBvcnQgeyBwdXNoVG9BY3Rpdml0eUFycmF5IH0gZnJvbSAnLi9tYWluLmpzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZGVsZXRlU2VsZWN0ZWQpXG5cbmZ1bmN0aW9uIGRlbGV0ZVNlbGVjdGVkKGV2ZW50KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ZWRQbGF5ZXIgPT0gJ251bWJlcicgJiYgaXNXaW5kb3dOb3RPcGVuICYmIGV2ZW50LmtleUNvZGUgPT0gNDYpIHtcbiAgICBwbGF5ZXJTY29yZXMuc3BsaWNlKHNlbGVjdGVkUGxheWVyLCAxKVxuICAgIHVwZGF0ZVRoZUluZGV4Rm9yQXJyYXkoKVxuICAgIGRpc3BsYXlBcnJheSgpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVBsYXllcihldmVudCkge1xuICBwbGF5ZXJTY29yZXMuc3BsaWNlKGV2ZW50LnRhcmdldC52YWx1ZSwgMSlcbiAgdXBkYXRlVGhlSW5kZXhGb3JBcnJheSgpXG5cbiAgcHVzaFRvQWN0aXZpdHlBcnJheSgpXG4gIGRpc3BsYXlBcnJheSgpXG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGhlSW5kZXhGb3JBcnJheSgpIHtcbiAgZm9yIChsZXQgaW5kZXggaW4gcGxheWVyU2NvcmVzKSB7XG4gICAgcGxheWVyU2NvcmVzW2luZGV4XS5pbmRleCA9IE51bWJlcihpbmRleCk7XG4gIH1cblxuXG59XG4iLCJcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZX0gZnJvbSAnLi9tYWluLmpzJ1xuaW1wb3J0IHsgZGVsZXRlUGxheWVyIH0gZnJvbSAnLi9kZWxldGUuanMnXG5pbXBvcnQgeyBzZWxlY3RQbGF5ZXIgfSBmcm9tICcuL3NlbGVjdC5qcydcbmltcG9ydCByZW1vdmVJbWcgZnJvbSAnLi9pbWcvcmVtb3ZlSW1nLnBuZydcbmltcG9ydCBzdGFySW1nIGZyb20gJy4vaW1nL3N0YXIucG5nJ1xuXG5cbndpbmRvdy5zb3J0ZWRQbGF5ZXIgPSB3aW5kb3cucGxheWVyU2NvcmVzO1xuXG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QXJyYXkoKSB7XG4gIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHNvcnRBcnJheSgpXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpXG4gIGZvciAobGV0IHBsYXllciBvZiBzb3J0ZWRQbGF5ZXIpIHtcbiAgICBsZXQgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGV0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lRGl2LnZhbHVlID0gcGxheWVyLmluZGV4O1xuXG4gICAgbGV0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGxheWVyTmFtZS5pbm5lclRleHQgPSBwbGF5ZXIubmFtZTtcblxuICAgIGxldCBkZWxldGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlbGV0ZUltYWdlLnZhbHVlID0gcGxheWVyLmluZGV4O1xuICAgIGRlbGV0ZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUGxheWVyKTtcbiAgICBkZWxldGVJbWFnZS5zcmMgPSByZW1vdmVJbWc7XG5cbiAgICBuYW1lRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0UGxheWVyKVxuXG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckNvbnRhaW5lcik7XG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQocGxheWVyTmFtZSk7XG4gICAgbmFtZURpdi5hcHBlbmRDaGlsZChkZWxldGVJbWFnZSk7XG5cblxuICAgIGxldCBzdGFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJEaXYpXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGxheWVyLnNjb3JlOyBpbmRleCsrKXtcbiAgICAgIGxldCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBzdGFyLnNyYyA9IHN0YXJJbWc7XG4gICAgICBzdGFyRGl2LmFwcGVuZENoaWxkKHN0YXIpO1xuXG4gICAgfVxuXG5cblxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRBcnJheSgpIHtcbiAgd2luZG93LnNvcnRlZFBsYXllciA9IHdpbmRvdy5wbGF5ZXJTY29yZXMudG9Tb3J0ZWQoKGEsIGIpID0+IHsgcmV0dXJuIE51bWJlcihiLnNjb3JlKSAtIE51bWJlcihhLnNjb3JlKSB9KVxufVxuXG5cbiIsInZhciBGaWxlU2F2ZXIgPSByZXF1aXJlKCdmaWxlLXNhdmVyJyk7XG5jb25zdCBkb3dubG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbjpudGgtb2YtdHlwZSg0KScpO1xuXG5kb3dubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZG93bmxvYWRGaWxlKVxuXG5mdW5jdGlvbiBkb3dubG9hZEZpbGUoKXtcblxubGV0IGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkocGxheWVyU2NvcmVzKV0sIHt0eXBlOiBcInRleHQvanNvbjtjaGFyc2V0PXV0Zi04XCJ9KTtcbkZpbGVTYXZlci5zYXZlQXMoYmxvYiwgXCJwbGF5ZXJMaXN0Lmpzb25cIik7XG5cblxufVxuXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGRpc3BsYXlBcnJheSB9IGZyb20gJy4vZGlzcGxheS5qcydcbmltcG9ydCB7IGFkZFBsYXllckJ1dHRvbiwgZWRpdFBsYXllckJ1dHRvbiB9IGZyb20gJy4vd2luZG93LmpzJ1xuaW1wb3J0ICcuL2Rhcmttb2RlLmpzJ1xuaW1wb3J0ICcuL2Rvd25sb2FkQW5kVXBsb2FkLmpzJ1xuXG5sZXQgbmV3QXJyYXk7XG5sZXQgaW5kZXhvO1xud2luZG93LmlzSGlzdG9yeU5vdEFwcGxpZWQgPSB0cnVlO1xud2luZG93LmlzV2luZG93Tm90T3BlbiA9IHRydWU7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUGxheWVyQnV0dG9uKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbjpudGgtb2YtdHlwZSgyKScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFBsYXllckJ1dHRvbik7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzY29yZSwgaW5kZXggPSAwKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG59XG5cblxuaWYgKGxvY2FsU3RvcmFnZS5wbGF5ZXJTY29yZXMpIHtcbiAgd2luZG93LnBsYXllclNjb3JlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnBsYXllclNjb3Jlcyk7XG4gIC8vIEkgZG8gdGhpcyBiZWNhdXNlIG9mIHRoZSByZWZlcmVuY2UgcHJvYmxlbSB3aGVuIHlvdSB0cnkgdG8gZGlyZWN0bHkgcHV0IHRoZSBhcnJheVxuICBuZXdBcnJheSA9IEpTT04uc3RyaW5naWZ5KHBsYXllclNjb3Jlcyk7XG4gIHdpbmRvdy5hY3Rpdml0eUFycmF5ID0gW0pTT04ucGFyc2UobmV3QXJyYXkpXTtcbiAgaW5kZXhvID0gYWN0aXZpdHlBcnJheS5sZW5ndGggLSAxO1xufVxuZWxzZSB7XG4gIHdpbmRvdy5wbGF5ZXJTY29yZXMgPSBbbmV3IFBsYXllcignZ2FiYmVldG8nLCAxKSwgbmV3IFBsYXllcignbWVtbycsIDIsIDEpLCBuZXcgUGxheWVyKCdqYXknLCA1LCAyKV07XG4gIC8vIEkgZG8gdGhpcyBiZWNhdXNlIG9mIHRoZSByZWZlcmVuY2UgcHJvYmxlbSB3aGVuIHlvdSB0cnkgdG8gZGlyZWN0bHkgcHV0IHRoZSBhcnJheVxuICBuZXdBcnJheSA9IEpTT04uc3RyaW5naWZ5KHBsYXllclNjb3Jlcyk7XG4gIHdpbmRvdy5hY3Rpdml0eUFycmF5ID0gW0pTT04ucGFyc2UobmV3QXJyYXkpXTtcbiAgaW5kZXhvID0gYWN0aXZpdHlBcnJheS5sZW5ndGggLSAxO1xufVxuXG5cbmRpc3BsYXlBcnJheSgpXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJTY29yZXMnLCBKU09OLnN0cmluZ2lmeShwbGF5ZXJTY29yZXMpKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVG9BY3Rpdml0eUFycmF5KCkge1xuaWYoaW5kZXhvID09IGFjdGl2aXR5QXJyYXkubGVuZ3RoIC0xICl7XG4gIC8vIEkgZG8gdGhpcyBiZWNhdXNlIG9mIHRoZSByZWZlcmVuY2UgcHJvYmxlbSB3aGVuIHlvdSB0cnkgdG8gZGlyZWN0bHkgcHV0IHRoZSBhcnJheVxuICBuZXdBcnJheSA9IEpTT04uc3RyaW5naWZ5KHBsYXllclNjb3Jlcyk7XG4gIGFjdGl2aXR5QXJyYXkucHVzaChKU09OLnBhcnNlKG5ld0FycmF5KSlcbiAgaW5kZXhvKytcbiAgLy8gY29uc29sZS5sb2coaW5kZXhvKVxuICBjb25zb2xlLmxvZyhhY3Rpdml0eUFycmF5KVxuICB9XG4gIGVsc2V7XG5cbiAgICAvLyBmb3IobGV0IGluZGV4IGluIGFjdGl2aXR5QXJyYXkpe1xuICAgIC8vICBpZihpbmRleCA+IGluZGV4byl7XG4gICAgLy8gICAgIGFjdGl2aXR5QXJyYXkuc3BsaWNlKGluZGV4LDEpXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKGBpbmRleG86JHtpbmRleG99YCk7XG4gICAgY29uc29sZS5sb2coYGFjdGl2aXR5QXJyYXkubGVuZ3RoOiR7YWN0aXZpdHlBcnJheS5sZW5ndGh9YCk7XG4gICAgY29uc29sZS5sb2coYGFjdGl2aXR5QXJyYXk6YCk7XG4gICAgY29uc29sZS5sb2coYWN0aXZpdHlBcnJheSk7XG5cbiAgYWN0aXZpdHlBcnJheS5sZW5ndGggPSBpbmRleG8gKyAxO1xuXG4gICAgY29uc29sZS5sb2coYGFjdGl2aXR5QXJyYXkubGVuZ3RoOiR7YWN0aXZpdHlBcnJheS5sZW5ndGh9YCk7XG5cbiAgICBjb25zb2xlLmxvZyhgYWN0aXZpdHlBcnJheTpgKTtcbiAgICBjb25zb2xlLmxvZyhhY3Rpdml0eUFycmF5KTtcblxuICAgIGNvbnNvbGUubG9nKGBpbmRleG86JHtpbmRleG99YCk7XG5cbiAgICBjb25zb2xlLmxvZyhhY3Rpdml0eUFycmF5KTtcbiAgbmV3QXJyYXkgPSBKU09OLnN0cmluZ2lmeShwbGF5ZXJTY29yZXMpO1xuICBhY3Rpdml0eUFycmF5LnB1c2goSlNPTi5wYXJzZShuZXdBcnJheSkpXG4gIGluZGV4bysrXG4gIGNvbnNvbGUubG9nKGFjdGl2aXR5QXJyYXkpXG5cbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbW92ZUJhY2t3YXJkc0FuZEZvcldhcmRzV2l0aEFjdGl2aXR5QXJyYXkpXG5cbmZ1bmN0aW9uIG1vdmVCYWNrd2FyZHNBbmRGb3JXYXJkc1dpdGhBY3Rpdml0eUFycmF5KGV2ZW50KSB7XG5cbiAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgY2FzZSA5MDpcbiAgICAgIGlmIChpbmRleG8gIT0gMCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICBpbmRleG8gPSBpbmRleG8gLTFcbiAgICAgICAgbGV0IHN0cmluZ28gPSBKU09OLnN0cmluZ2lmeShhY3Rpdml0eUFycmF5W2luZGV4b10pXG4gICAgICAgIHBsYXllclNjb3JlcyA9IEpTT04ucGFyc2Uoc3RyaW5nbyk7XG4gICAgICAgIGRpc3BsYXlBcnJheSgpXG4gICAgICB9O1xuICAgIGJyZWFrO1xuICAgIGNhc2UgODg6XG4gICAgICBpZiAoaW5kZXhvICE9IGFjdGl2aXR5QXJyYXkubGVuZ3RoIC0xICkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICBpbmRleG8gPSBpbmRleG8gKzFcbiAgICAgICAgbGV0IHN0cmluZ28gPSBKU09OLnN0cmluZ2lmeShhY3Rpdml0eUFycmF5W2luZGV4b10pXG4gICAgICAgIHBsYXllclNjb3JlcyA9IEpTT04ucGFyc2Uoc3RyaW5nbyk7XG4gICAgICAgIGRpc3BsYXlBcnJheSgpXG4gICAgICB9XG5cblxuXG4gIH1cblxuXG59XG4iLCJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZE5hdmVnYXRpb24pXG5mdW5jdGlvbiBrZXlib2FyZE5hdmVnYXRpb24oZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3RlZFBsYXllciA9PSBcIm51bWJlclwiICYmIGlzV2luZG93Tm90T3Blbikge1xuXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDM3OlxuICAgICAgY2FzZSAzODpcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNvcnRlZFBsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAoc29ydGVkUGxheWVyW2luZGV4XS5pbmRleCA9PSBzZWxlY3RlZFBsYXllciAmJiBpbmRleCA+IDApIHtcbiAgICAgICAgICAgIHNlbGVjdGVkUGxheWVyID0gc29ydGVkUGxheWVyW2luZGV4IC0gMV0uaW5kZXhcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFBsYXllcihldmVudClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzk6XG4gICAgICBjYXNlIDQwOlxuICAgICAgICBsZXQgZGltO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc29ydGVkUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmICh3aW5kb3cuc29ydGVkUGxheWVyW2luZGV4XS5pbmRleCA9PSBzZWxlY3RlZFBsYXllciAmJiBpbmRleCA8IHNvcnRlZFBsYXllci5sZW5ndGggLTEgKSB7XG4gICAgICAgICAgICBkaW0gPSB3aW5kb3cuc29ydGVkUGxheWVyW2luZGV4ICsxXS5pbmRleDtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZiBkaW0gPT0gJ251bWJlcicpe1xuICAgICAgICB3aW5kb3cuc2VsZWN0ZWRQbGF5ZXIgPSBkaW07XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0UGxheWVyKGV2ZW50KVxuICAgICAgICBicmVhaztcblxuICAgIH1cblxuXG4gIH1cblxuXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0UGxheWVyKGV2ZW50KSB7XG4gIGlmIChpc1dpbmRvd05vdE9wZW4pIHtcbiAgICBmb3IgKGxldCBwbGF5ZXIgb2YgcGxheWVyU2NvcmVzKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IHBsYXllci5pbmRleCkge1xuICAgICAgICB3aW5kb3cuc2VsZWN0ZWRQbGF5ZXIgPSBwbGF5ZXIuaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICAgIGFkZEJhY2tncm91bmRUb1NlbGVjdGVkUGxheWVyKClcbiAgfVxufVxuZnVuY3Rpb24gYWRkQmFja2dyb3VuZFRvU2VsZWN0ZWRQbGF5ZXIoKSB7XG4gIGZvciAobGV0IGRpdiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdtYWluID4gZGl2ID4gZGl2OmZpcnN0LW9mLXR5cGUnKSkge1xuICAgIGlmICh3aW5kb3cuc2VsZWN0ZWRQbGF5ZXIgPT0gZGl2LnZhbHVlKSB7XG4gICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLWxpZ2h0T3JhbmdlKSdcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJydcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgZGlzcGxheUFycmF5IH0gZnJvbSAnLi9kaXNwbGF5LmpzJztcbmltcG9ydCB7IFBsYXllciwgcHVzaFRvQWN0aXZpdHlBcnJheSB9IGZyb20gJy4vbWFpbi5qcyc7XG5cbmxldCB3aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZG93Jyk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBsYXllckJ1dHRvbigpIHtcbiAgaWYgKGlzV2luZG93Tm90T3Blbikge1xuICAgIGlzV2luZG93Tm90T3BlbiA9IGZhbHNlO1xuICAgIHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kb3cnKTtcblxuICAgIHdpbmRvdy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBpZD0nY2xvc2VXaW5kb3cnPmNlcnJhcjwvYnV0dG9uPlxuICAgIDxwPm5vbWJyZTo8L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9J25hbWUnPlxuICAgIDxidXR0b24gaWQ9J2FkZEJ1dHRvbic+YWdyZWdhcjwvYnV0dG9uPmBcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZVdpbmRvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VXaW5kb3cpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNsb3NlV2luZG93S2V5Ym9hcmQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheUtleWJvYXJkKVxuXG4gICAgd2luZG93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjd2luZG93IGlucHV0W3R5cGU9J3RleHQnXWApLnNlbGVjdCgpXG4gIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXlLZXlib2FyZChldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC5rZXlDb2RlKVxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXkoKVxuICB9XG59XG5cblxuZnVuY3Rpb24gYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheSgpIHtcbiAgbGV0IG5hbWVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3dpbmRvdyBpbnB1dFt0eXBlPSd0ZXh0J11gKTtcbiAgY29uc29sZS5sb2cocGxheWVyU2NvcmVzKVxuICBwbGF5ZXJTY29yZXMucHVzaChuZXcgUGxheWVyKG5hbWVUZXh0LnZhbHVlLCAxLCBwbGF5ZXJTY29yZXMubGVuZ3RoKSlcbiAgcHVzaFRvQWN0aXZpdHlBcnJheSgpXG4gIGRpc3BsYXlBcnJheSgpXG4gIGNsb3NlV2luZG93KClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFBsYXllckJ1dHRvbigpIHtcbiAgaWYgKGlzV2luZG93Tm90T3BlbiAmJiB0eXBlb2Ygc2VsZWN0ZWRQbGF5ZXIgPT0gXCJudW1iZXJcIikge1xuXG4gICAgaXNXaW5kb3dOb3RPcGVuID0gZmFsc2U7XG4gICAgd2luZG93LmlubmVySFRNTCA9IGA8YnV0dG9uIGlkPSdjbG9zZVdpbmRvdycgPmNlcnJhcjwvYnV0dG9uPlxuICAgIDxwPm5vbWJyZTo8L3A+XG4gICAgPGlucHV0IHZhbHVlPScke3BsYXllclNjb3Jlc1tzZWxlY3RlZFBsYXllcl0ubmFtZX0nIHR5cGU9XCJ0ZXh0XCIgaWQ9J25hbWUnIGF1dG9mb2N1cz0ndHJ1ZScgPlxuICAgIDxwPnN0YXJzOjwvcD5cbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPScke3BsYXllclNjb3Jlc1tzZWxlY3RlZFBsYXllcl0uc2NvcmV9JyAgaWQ9XCJzdGFyc1wiPlxuICAgIDxidXR0b24gaWQ9J2FwcGx5QnV0dG9uJz5hcGxpY2FyIGNhbWJpb3M8L2J1dHRvbj5gXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VXaW5kb3cnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlV2luZG93KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjbG9zZVdpbmRvd0tleWJvYXJkKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBseUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwbHlDaGFuZ2VzKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhcHBseUNoYW5nZXNLZXlib2FyZClcblxuICAgIHdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN3aW5kb3cgaW5wdXRbdHlwZT0nbnVtYmVyJ11gKS5zZWxlY3QoKVxuXG5cbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGFwcGx5Q2hhbmdlc0tleWJvYXJkKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGV2ZW50LmtleUNvZGUpXG4gIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgYXBwbHlDaGFuZ2VzKClcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGFwcGx5Q2hhbmdlcygpIHtcbiAgcGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgcGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFycycpLnZhbHVlO1xuXG4gIHB1c2hUb0FjdGl2aXR5QXJyYXkoKVxuICBkaXNwbGF5QXJyYXkoKVxuICBjbG9zZVdpbmRvdygpXG5cbn1cblxuXG5cblxuZnVuY3Rpb24gY2xvc2VXaW5kb3dLZXlib2FyZChldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC5rZXlDb2RlKVxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuICAgIGNsb3NlV2luZG93KClcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZVdpbmRvdygpIHtcbiAgd2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGlzV2luZG93Tm90T3BlbiA9IHRydWU7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjbG9zZVdpbmRvd0tleWJvYXJkKVxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXBwbHlDaGFuZ2VzS2V5Ym9hcmQpXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhZGRUb1RoZVNjb3Jlc1BsYXllckFycmF5S2V5Ym9hcmQpXG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbmJhY2tncm91bmQ6IDA7XG5wYWRkaW5nOiAwO1xuYm94LXNpemluZzpib3JkZXItYm94O1xufVxuXG46cm9vdHtcbi0tb3JhbmdlOiNGRjhEMTU7XG4tLW9yYW5nZTojRkY4RDE1O1xuLS13aGl0ZTp3aGl0ZTtcbi0tYmxhY2s6YmxhY2s7XG4tLWdyZWVuOiNDMUY3QzE7XG4tLWxpZ2h0T3JhbmdlOiNGRkU1QTc7XG59XG5cbjpyb290LmRhcmt7XG4tLW9yYW5nZTojNTEyQzA1O1xuLS13aGl0ZTpibGFjaztcbi0tYmxhY2s6d2hpdGU7XG4tLWdyZWVuOiMxNjFEMTY7XG4tLWxpZ2h0T3JhbmdlOiMzQjM1Mjc7XG59XG5cbmJvZHl7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG5hbGlnbi1pdGVtczpjZW50ZXI7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmhlYWRlcntcbmRpc3BsYXk6ZmxleDtcbnBvc2l0aW9uOmFic29sdXRlO1xubGVmdDogMDtcbnRvcDogMDtcbmdhcDo1cHg7XG59XG5cbmJ1dHRvbiB7XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcbmNvbG9yOiB2YXIoLS1ibGFjayk7XG5wYWRkaW5nOiAxMHB4O1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG50cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLGNvbG9yIDAuNXMgO1xufVxuXG5cbmJ1dHRvbjpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6dmFyKC0tYmxhY2spO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG5jb2xvcjogdmFyKC0td2hpdGUpO1xuY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYWlue1xub3ZlcmZsb3cteTpzY3JvbGw7XG5tYXJnaW4tdG9wOjh2aDtcbndpZHRoOjkwdnc7XG5oZWlnaHQ6OTB2aDtcbmJvcmRlci1yYWRpdXM6MjBweDtcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG59XG5cbm1haW4+ICBkaXZ7XG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZToxZnIgLyAyMCUgMWZyO1xufVxuXG5tYWluICBkaXYgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjpyb3c7XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xudGV4dC1hbGlnbjpjZW50ZXI7XG5ib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbn1cblxuXG5tYWluICBkaXYgPiBkaXY6bGFzdC1vZi10eXBle1xuZGlzcGxheTpmbGV4IDtcbmp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuYWxpZ24taXRlbXM6Y2VudGVyO1xuYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYmxhY2spO1xucGFkZGluZy1sZWZ0OjEwcHg7XG59XG5cbm1haW4gaW1ne1xud2lkdGg6NjBweDtcbmhlaWdodDo2MHB4O1xuXG59XG5cbiN3aW5kb3d7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbmRpc3BsYXk6bm9uZTtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spIDtcbnBhZGRpbmc6IDEwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5ib3JkZXItcmFkaXVzOjIwcHg7XG50b3A6NTB2aCA7XG5sZWZ0OjUwdnc7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuZ2FwOjVweCA7XG59XG5cbmlucHV0e1xuYm9yZGVyLXJhZGl1czoxMHB4O1xucGFkZGluZzoxMHB4IDtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spIDtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbn1cbmlucHV0OmZvY3Vze1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmVlbik7XG5vdXRsaW5lOjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGFBQWE7QUFDYixlQUFlO0FBQ2YscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixhQUFhO0FBQ2IsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixPQUFPO0FBQ1AsTUFBTTtBQUNOLE9BQU87QUFDUDs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsd0NBQXdDO0FBQ3hDOzs7QUFHQTtBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsVUFBVTtBQUNWLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBLGFBQWE7QUFDYiwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQSxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEM7OztBQUdBO0FBQ0EsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQixrQkFBa0I7QUFDbEIsb0NBQW9DO0FBQ3BDLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLFVBQVU7QUFDVixXQUFXOztBQUVYOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsOEJBQThCO0FBQzlCLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxTQUFTO0FBQ1QsK0JBQStCO0FBQy9CLFFBQVE7QUFDUjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbmJhY2tncm91bmQ6IDA7XFxucGFkZGluZzogMDtcXG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxufVxcblxcbjpyb290e1xcbi0tb3JhbmdlOiNGRjhEMTU7XFxuLS1vcmFuZ2U6I0ZGOEQxNTtcXG4tLXdoaXRlOndoaXRlO1xcbi0tYmxhY2s6YmxhY2s7XFxuLS1ncmVlbjojQzFGN0MxO1xcbi0tbGlnaHRPcmFuZ2U6I0ZGRTVBNztcXG59XFxuXFxuOnJvb3QuZGFya3tcXG4tLW9yYW5nZTojNTEyQzA1O1xcbi0td2hpdGU6YmxhY2s7XFxuLS1ibGFjazp3aGl0ZTtcXG4tLWdyZWVuOiMxNjFEMTY7XFxuLS1saWdodE9yYW5nZTojM0IzNTI3O1xcbn1cXG5cXG5ib2R5e1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5hbGlnbi1pdGVtczpjZW50ZXI7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXJ7XFxuZGlzcGxheTpmbGV4O1xcbnBvc2l0aW9uOmFic29sdXRlO1xcbmxlZnQ6IDA7XFxudG9wOiAwO1xcbmdhcDo1cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuY29sb3I6IHZhcigtLWJsYWNrKTtcXG5wYWRkaW5nOiAxMHB4O1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbmJvcmRlci1yYWRpdXM6MTBweDtcXG50cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLGNvbG9yIDAuNXMgO1xcbn1cXG5cXG5cXG5idXR0b246aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ibGFjayk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuY29sb3I6IHZhcigtLXdoaXRlKTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW57XFxub3ZlcmZsb3cteTpzY3JvbGw7XFxubWFyZ2luLXRvcDo4dmg7XFxud2lkdGg6OTB2dztcXG5oZWlnaHQ6OTB2aDtcXG5ib3JkZXItcmFkaXVzOjIwcHg7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxufVxcblxcbm1haW4+ICBkaXZ7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLXRlbXBsYXRlOjFmciAvIDIwJSAxZnI7XFxufVxcblxcbm1haW4gIGRpdiA+IGRpdjpmaXJzdC1vZi10eXBle1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246cm93O1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuYWxpZ24taXRlbXM6Y2VudGVyO1xcbnRleHQtYWxpZ246Y2VudGVyO1xcbmJvcmRlci1yaWdodDoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG59XFxuXFxuXFxubWFpbiAgZGl2ID4gZGl2Omxhc3Qtb2YtdHlwZXtcXG5kaXNwbGF5OmZsZXggO1xcbmp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG5ib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxucGFkZGluZy1sZWZ0OjEwcHg7XFxufVxcblxcbm1haW4gaW1ne1xcbndpZHRoOjYwcHg7XFxuaGVpZ2h0OjYwcHg7XFxuXFxufVxcblxcbiN3aW5kb3d7XFxucG9zaXRpb246YWJzb2x1dGU7XFxuZGlzcGxheTpub25lO1xcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKSA7XFxucGFkZGluZzogMTBweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuYm9yZGVyLXJhZGl1czoyMHB4O1xcbnRvcDo1MHZoIDtcXG5sZWZ0OjUwdnc7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG5nYXA6NXB4IDtcXG59XFxuXFxuaW5wdXR7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbnBhZGRpbmc6MTBweCA7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjaykgO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG59XFxuaW5wdXQ6Zm9jdXN7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmVlbik7XFxub3V0bGluZTowcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGEsYixjKXt2YXIgZD1uZXcgWE1MSHR0cFJlcXVlc3Q7ZC5vcGVuKFwiR0VUXCIsYSksZC5yZXNwb25zZVR5cGU9XCJibG9iXCIsZC5vbmxvYWQ9ZnVuY3Rpb24oKXtnKGQucmVzcG9uc2UsYixjKX0sZC5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxkLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5uYXZpZ2F0b3ImJi9NYWNpbnRvc2gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJi9BcHBsZVdlYktpdC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmIS9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksZz1mLnNhdmVBc3x8KFwib2JqZWN0XCIhPXR5cGVvZiB3aW5kb3d8fHdpbmRvdyE9PWY/ZnVuY3Rpb24oKXt9OlwiZG93bmxvYWRcImluIEhUTUxBbmNob3JFbGVtZW50LnByb3RvdHlwZSYmIWE/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihiLGQsZSxnKXtpZihnPWd8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxnJiYoZy5kb2N1bWVudC50aXRsZT1nLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGIpcmV0dXJuIGMoYixkLGUpO3ZhciBoPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1iLnR5cGUsaT0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxqPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoanx8aCYmaXx8YSkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaz1uZXcgRmlsZVJlYWRlcjtrLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWsucmVzdWx0O2E9aj9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxnP2cubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZz1udWxsfSxrLnJlYWRBc0RhdGFVUkwoYil9ZWxzZXt2YXIgbD1mLlVSTHx8Zi53ZWJraXRVUkwsbT1sLmNyZWF0ZU9iamVjdFVSTChiKTtnP2cubG9jYXRpb249bTpsb2NhdGlvbi5ocmVmPW0sZz1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLnJldm9rZU9iamVjdFVSTChtKX0sNEU0KX19KTtmLnNhdmVBcz1nLnNhdmVBcz1nLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1nKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcCIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2lucHV0L21haW4uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=