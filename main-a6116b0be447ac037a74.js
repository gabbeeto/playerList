/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./input/darkmode.js":
/*!***************************!*\
  !*** ./input/darkmode.js ***!
  \***************************/
/***/ (() => {

let isDarkMode = matchMedia('(prefers-color-scheme: dark)').matches;

let darkModeButton = document.querySelector('header > button:last-of-type');
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


document.addEventListener('keydown', deleteSelected)

function deleteSelected(event){
if(typeof selectedPlayer == 'number' && isWindowNotOpen && event.keyCode == 46){
playerScores.splice(selectedPlayer, 1)
updateTheIndexForArray()
;(0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayArray)()
  }
}

function deletePlayer(event){
  playerScores.splice(event.target.value,1)
updateTheIndexForArray()
;(0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayArray)()


  event.stopPropagation()
}

function updateTheIndexForArray(){
for(let index in playerScores){
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

/***/ "./input/main.js":
/*!***********************!*\
  !*** ./input/main.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./input/style.css");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./input/display.js");
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window.js */ "./input/window.js");
/* harmony import */ var _darkmode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./darkmode.js */ "./input/darkmode.js");
/* harmony import */ var _darkmode_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_darkmode_js__WEBPACK_IMPORTED_MODULE_3__);





window.isHistoryNotApplied = true;
window.isWindowNotOpen = true;

document.querySelector('header > button').addEventListener('click',_window_js__WEBPACK_IMPORTED_MODULE_2__.addPlayerButton);
document.querySelector('header > button:nth-of-type(2)').addEventListener('click',_window_js__WEBPACK_IMPORTED_MODULE_2__.editPlayerButton);

class Player {
  constructor(name, score, index = 0) {
    this.name = name;
    this.score = score;
    this.index = index;
  }
}


if (localStorage.playerScores) {
  window.playerScores = JSON.parse(localStorage.playerScores);
  window.activityArray = [playerScores];
}
else {
  window.playerScores = [new Player('gabbeeto', 1),new Player('memo', 2,1),new Player('jay', 5,2)];
  window.activityArray = [playerScores];
}


(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayArray)()

function updateLocalStorage(){
localStorage.setItem('playerScores', JSON.stringify(playerScores))  
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
  (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayArray)()
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1hNjExNmIwYmU0NDdhYzAzN2E3NC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCMEM7O0FBRTFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQVk7QUFDWjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDBEQUFZOzs7QUFHWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCNkM7QUFDSDtBQUNBO0FBQ0M7QUFDUDs7O0FBR3BDOzs7QUFHQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxFQUFFLDZEQUFrQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsb0RBQVk7QUFDdEQsc0JBQXNCLCtDQUFTOztBQUUvQixzQ0FBc0Msb0RBQVk7OztBQUdsRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQSxpQkFBaUIsMENBQU87QUFDeEI7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFLDBDQUEwQztBQUMzRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRxQjtBQUNzQjtBQUNrQjtBQUN2Qzs7QUFFdEI7QUFDQTs7QUFFQSxtRUFBbUUsdURBQWU7QUFDbEYsa0ZBQWtGLHdEQUFnQjs7QUFFM0Y7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHlEQUFZOztBQUVMO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7OztBQUdBOzs7O0FBSU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RDRDO0FBQ1Q7O0FBRW5DOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBTTtBQUM5QixFQUFFLDBEQUFZO0FBQ2Q7QUFDQTs7O0FBR087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0NBQWtDO0FBQ3REO0FBQ0Esa0NBQWtDLG1DQUFtQztBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQVk7QUFDZDs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sa0ZBQWtGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVks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YWNrOi8vcGxheWVybGlzdC8uL2lucHV0L2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvbWFpbi5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvc2VsZWN0LmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9pbnB1dC93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L3N0eWxlLmNzcz9hMTNlIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBpc0RhcmtNb2RlID0gbWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XG5cbmxldCBkYXJrTW9kZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbjpsYXN0LW9mLXR5cGUnKTtcbmRhcmtNb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhY3RpdmF0ZURhcmtNb2RlKVxuXG5cbmlmIChpc0RhcmtNb2RlKSB7XG5cbiAgYWN0aXZhdGVEYXJrTW9kZSgpXG5cbn1cblxuXG5mdW5jdGlvbiBhY3RpdmF0ZURhcmtNb2RlKCkge1xuICBsZXQgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxuICBodG1sLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKVxuICBpZiAoaHRtbC5jbGFzc05hbWUgPT0gJ2RhcmsnKSB7XG4gICAgZGFya01vZGVCdXR0b24uaW5uZXJUZXh0ID0gJ21vZG8gY2xhcm8nXG4gIH1cbiAgZWxzZXtcbiAgICBkYXJrTW9kZUJ1dHRvbi5pbm5lclRleHQgPSAnbW9kbyBvc2N1cm8nXG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgZGlzcGxheUFycmF5fSBmcm9tICcuL2Rpc3BsYXkuanMnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkZWxldGVTZWxlY3RlZClcblxuZnVuY3Rpb24gZGVsZXRlU2VsZWN0ZWQoZXZlbnQpe1xuaWYodHlwZW9mIHNlbGVjdGVkUGxheWVyID09ICdudW1iZXInICYmIGlzV2luZG93Tm90T3BlbiAmJiBldmVudC5rZXlDb2RlID09IDQ2KXtcbnBsYXllclNjb3Jlcy5zcGxpY2Uoc2VsZWN0ZWRQbGF5ZXIsIDEpXG51cGRhdGVUaGVJbmRleEZvckFycmF5KClcbmRpc3BsYXlBcnJheSgpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVBsYXllcihldmVudCl7XG4gIHBsYXllclNjb3Jlcy5zcGxpY2UoZXZlbnQudGFyZ2V0LnZhbHVlLDEpXG51cGRhdGVUaGVJbmRleEZvckFycmF5KClcbmRpc3BsYXlBcnJheSgpXG5cblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVUaGVJbmRleEZvckFycmF5KCl7XG5mb3IobGV0IGluZGV4IGluIHBsYXllclNjb3Jlcyl7XG5wbGF5ZXJTY29yZXNbaW5kZXhdLmluZGV4ID0gTnVtYmVyKGluZGV4KTtcbiAgfVxuXG5cbn1cbiIsIlxuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlfSBmcm9tICcuL21haW4uanMnXG5pbXBvcnQgeyBkZWxldGVQbGF5ZXIgfSBmcm9tICcuL2RlbGV0ZS5qcydcbmltcG9ydCB7IHNlbGVjdFBsYXllciB9IGZyb20gJy4vc2VsZWN0LmpzJ1xuaW1wb3J0IHJlbW92ZUltZyBmcm9tICcuL2ltZy9yZW1vdmVJbWcucG5nJ1xuaW1wb3J0IHN0YXJJbWcgZnJvbSAnLi9pbWcvc3Rhci5wbmcnXG5cblxud2luZG93LnNvcnRlZFBsYXllciA9IHdpbmRvdy5wbGF5ZXJTY29yZXM7XG5cblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBcnJheSgpIHtcbiAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgc29ydEFycmF5KClcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKClcbiAgZm9yIChsZXQgcGxheWVyIG9mIHNvcnRlZFBsYXllcikge1xuICAgIGxldCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsZXQgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVEaXYudmFsdWUgPSBwbGF5ZXIuaW5kZXg7XG5cbiAgICBsZXQgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbGF5ZXJOYW1lLmlubmVyVGV4dCA9IHBsYXllci5uYW1lO1xuXG4gICAgbGV0IGRlbGV0ZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZGVsZXRlSW1hZ2UudmFsdWUgPSBwbGF5ZXIuaW5kZXg7XG4gICAgZGVsZXRlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQbGF5ZXIpO1xuICAgIGRlbGV0ZUltYWdlLnNyYyA9IHJlbW92ZUltZztcblxuICAgIG5hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQbGF5ZXIpXG5cblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyKTtcbiAgICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgbmFtZURpdi5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcbiAgICBuYW1lRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUltYWdlKTtcblxuXG4gICAgbGV0IHN0YXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhckRpdilcbiAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwbGF5ZXIuc2NvcmU7IGluZGV4Kyspe1xuICAgICAgbGV0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHN0YXIuc3JjID0gc3RhckltZztcbiAgICAgIHN0YXJEaXYuYXBwZW5kQ2hpbGQoc3Rhcik7XG5cbiAgICB9XG5cblxuXG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydEFycmF5KCkge1xuICB3aW5kb3cuc29ydGVkUGxheWVyID0gd2luZG93LnBsYXllclNjb3Jlcy50b1NvcnRlZCgoYSwgYikgPT4geyByZXR1cm4gTnVtYmVyKGIuc2NvcmUpIC0gTnVtYmVyKGEuc2NvcmUpIH0pXG59XG5cblxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBkaXNwbGF5QXJyYXkgfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5pbXBvcnQge2FkZFBsYXllckJ1dHRvbiwgZWRpdFBsYXllckJ1dHRvbn0gZnJvbSAnLi93aW5kb3cuanMnXG5pbXBvcnQgJy4vZGFya21vZGUuanMnXG5cbndpbmRvdy5pc0hpc3RvcnlOb3RBcHBsaWVkID0gdHJ1ZTtcbndpbmRvdy5pc1dpbmRvd05vdE9wZW4gPSB0cnVlO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkUGxheWVyQnV0dG9uKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbjpudGgtb2YtdHlwZSgyKScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlZGl0UGxheWVyQnV0dG9uKTtcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHNjb3JlLCBpbmRleCA9IDApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cbn1cblxuXG5pZiAobG9jYWxTdG9yYWdlLnBsYXllclNjb3Jlcykge1xuICB3aW5kb3cucGxheWVyU2NvcmVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucGxheWVyU2NvcmVzKTtcbiAgd2luZG93LmFjdGl2aXR5QXJyYXkgPSBbcGxheWVyU2NvcmVzXTtcbn1cbmVsc2Uge1xuICB3aW5kb3cucGxheWVyU2NvcmVzID0gW25ldyBQbGF5ZXIoJ2dhYmJlZXRvJywgMSksbmV3IFBsYXllcignbWVtbycsIDIsMSksbmV3IFBsYXllcignamF5JywgNSwyKV07XG4gIHdpbmRvdy5hY3Rpdml0eUFycmF5ID0gW3BsYXllclNjb3Jlc107XG59XG5cblxuZGlzcGxheUFycmF5KClcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSgpe1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllclNjb3JlcycsIEpTT04uc3RyaW5naWZ5KHBsYXllclNjb3JlcykpICBcbn1cblxuIiwiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5Ym9hcmROYXZlZ2F0aW9uKVxuZnVuY3Rpb24ga2V5Ym9hcmROYXZlZ2F0aW9uKGV2ZW50KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ZWRQbGF5ZXIgPT0gXCJudW1iZXJcIiAmJiBpc1dpbmRvd05vdE9wZW4pIHtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSAzNzpcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzb3J0ZWRQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHNvcnRlZFBsYXllcltpbmRleF0uaW5kZXggPT0gc2VsZWN0ZWRQbGF5ZXIgJiYgaW5kZXggPiAwKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFBsYXllciA9IHNvcnRlZFBsYXllcltpbmRleCAtIDFdLmluZGV4XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RQbGF5ZXIoZXZlbnQpXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM5OlxuICAgICAgY2FzZSA0MDpcbiAgICAgICAgbGV0IGRpbTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNvcnRlZFBsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAod2luZG93LnNvcnRlZFBsYXllcltpbmRleF0uaW5kZXggPT0gc2VsZWN0ZWRQbGF5ZXIgJiYgaW5kZXggPCBzb3J0ZWRQbGF5ZXIubGVuZ3RoIC0xICkge1xuICAgICAgICAgICAgZGltID0gd2luZG93LnNvcnRlZFBsYXllcltpbmRleCArMV0uaW5kZXg7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YgZGltID09ICdudW1iZXInKXtcbiAgICAgICAgd2luZG93LnNlbGVjdGVkUGxheWVyID0gZGltO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFBsYXllcihldmVudClcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG5cblxuICB9XG5cblxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFBsYXllcihldmVudCkge1xuICBpZiAoaXNXaW5kb3dOb3RPcGVuKSB7XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIHBsYXllclNjb3Jlcykge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBwbGF5ZXIuaW5kZXgpIHtcbiAgICAgICAgd2luZG93LnNlbGVjdGVkUGxheWVyID0gcGxheWVyLmluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgICBhZGRCYWNrZ3JvdW5kVG9TZWxlY3RlZFBsYXllcigpXG4gIH1cbn1cbmZ1bmN0aW9uIGFkZEJhY2tncm91bmRUb1NlbGVjdGVkUGxheWVyKCkge1xuICBmb3IgKGxldCBkaXYgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbWFpbiA+IGRpdiA+IGRpdjpmaXJzdC1vZi10eXBlJykpIHtcbiAgICBpZiAod2luZG93LnNlbGVjdGVkUGxheWVyID09IGRpdi52YWx1ZSkge1xuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1saWdodE9yYW5nZSknXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnXG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IGRpc3BsYXlBcnJheSB9IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL21haW4uanMnO1xuXG5sZXQgd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdycpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQbGF5ZXJCdXR0b24oKSB7XG4gIGlmIChpc1dpbmRvd05vdE9wZW4pIHtcbiAgICBpc1dpbmRvd05vdE9wZW4gPSBmYWxzZTtcbiAgICB3aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZG93Jyk7XG5cbiAgICB3aW5kb3cuaW5uZXJIVE1MID0gYDxidXR0b24gaWQ9J2Nsb3NlV2luZG93Jz5jZXJyYXI8L2J1dHRvbj5cbiAgICA8cD5ub21icmU6PC9wPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPSduYW1lJz5cbiAgICA8YnV0dG9uIGlkPSdhZGRCdXR0b24nPmFncmVnYXI8L2J1dHRvbj5gXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VXaW5kb3cnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlV2luZG93KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjbG9zZVdpbmRvd0tleWJvYXJkKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXkpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXlLZXlib2FyZClcblxuICAgIHdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3dpbmRvdyBpbnB1dFt0eXBlPSd0ZXh0J11gKS5zZWxlY3QoKVxuICB9XG59XG5cblxuXG5mdW5jdGlvbiBhZGRUb1RoZVNjb3Jlc1BsYXllckFycmF5S2V5Ym9hcmQoZXZlbnQpIHtcbiAgY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSlcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICBhZGRUb1RoZVNjb3Jlc1BsYXllckFycmF5KClcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXkoKSB7XG4gIGxldCBuYW1lVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN3aW5kb3cgaW5wdXRbdHlwZT0ndGV4dCddYCk7XG4gIGNvbnNvbGUubG9nKHBsYXllclNjb3JlcylcbiAgcGxheWVyU2NvcmVzLnB1c2gobmV3IFBsYXllcihuYW1lVGV4dC52YWx1ZSwgMSwgcGxheWVyU2NvcmVzLmxlbmd0aCkpXG4gIGRpc3BsYXlBcnJheSgpXG4gIGNsb3NlV2luZG93KClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFBsYXllckJ1dHRvbigpIHtcbiAgaWYgKGlzV2luZG93Tm90T3BlbiAmJiB0eXBlb2Ygc2VsZWN0ZWRQbGF5ZXIgPT0gXCJudW1iZXJcIikge1xuXG4gICAgaXNXaW5kb3dOb3RPcGVuID0gZmFsc2U7XG4gICAgd2luZG93LmlubmVySFRNTCA9IGA8YnV0dG9uIGlkPSdjbG9zZVdpbmRvdycgPmNlcnJhcjwvYnV0dG9uPlxuICAgIDxwPm5vbWJyZTo8L3A+XG4gICAgPGlucHV0IHZhbHVlPScke3BsYXllclNjb3Jlc1tzZWxlY3RlZFBsYXllcl0ubmFtZX0nIHR5cGU9XCJ0ZXh0XCIgaWQ9J25hbWUnIGF1dG9mb2N1cz0ndHJ1ZScgPlxuICAgIDxwPnN0YXJzOjwvcD5cbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPScke3BsYXllclNjb3Jlc1tzZWxlY3RlZFBsYXllcl0uc2NvcmV9JyAgaWQ9XCJzdGFyc1wiPlxuICAgIDxidXR0b24gaWQ9J2FwcGx5QnV0dG9uJz5hcGxpY2FyIGNhbWJpb3M8L2J1dHRvbj5gXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VXaW5kb3cnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlV2luZG93KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjbG9zZVdpbmRvd0tleWJvYXJkKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBseUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwbHlDaGFuZ2VzKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhcHBseUNoYW5nZXNLZXlib2FyZClcblxuICAgIHdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN3aW5kb3cgaW5wdXRbdHlwZT0nbnVtYmVyJ11gKS5zZWxlY3QoKVxuXG5cbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGFwcGx5Q2hhbmdlc0tleWJvYXJkKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGV2ZW50LmtleUNvZGUpXG4gIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgYXBwbHlDaGFuZ2VzKClcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGFwcGx5Q2hhbmdlcygpIHtcbiAgcGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgcGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFycycpLnZhbHVlO1xuICBkaXNwbGF5QXJyYXkoKVxuICBjbG9zZVdpbmRvdygpXG5cbn1cblxuXG5cblxuZnVuY3Rpb24gY2xvc2VXaW5kb3dLZXlib2FyZChldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC5rZXlDb2RlKVxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuICAgIGNsb3NlV2luZG93KClcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZVdpbmRvdygpIHtcbiAgd2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGlzV2luZG93Tm90T3BlbiA9IHRydWU7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjbG9zZVdpbmRvd0tleWJvYXJkKVxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXBwbHlDaGFuZ2VzS2V5Ym9hcmQpXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhZGRUb1RoZVNjb3Jlc1BsYXllckFycmF5S2V5Ym9hcmQpXG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbmJhY2tncm91bmQ6IDA7XG5wYWRkaW5nOiAwO1xuYm94LXNpemluZzpib3JkZXItYm94O1xufVxuXG46cm9vdHtcbi0tb3JhbmdlOiNGRjhEMTU7XG4tLW9yYW5nZTojRkY4RDE1O1xuLS13aGl0ZTp3aGl0ZTtcbi0tYmxhY2s6YmxhY2s7XG4tLWdyZWVuOiNDMUY3QzE7XG4tLWxpZ2h0T3JhbmdlOiNGRkU1QTc7XG59XG5cbjpyb290LmRhcmt7XG4tLW9yYW5nZTojNTEyQzA1O1xuLS13aGl0ZTpibGFjaztcbi0tYmxhY2s6d2hpdGU7XG4tLWdyZWVuOiMxNjFEMTY7XG4tLWxpZ2h0T3JhbmdlOiMzQjM1Mjc7XG59XG5cbmJvZHl7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG5hbGlnbi1pdGVtczpjZW50ZXI7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmhlYWRlcntcbmRpc3BsYXk6ZmxleDtcbnBvc2l0aW9uOmFic29sdXRlO1xubGVmdDogMDtcbnRvcDogMDtcbmdhcDo1cHg7XG59XG5cbmJ1dHRvbiB7XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcbmNvbG9yOiB2YXIoLS1ibGFjayk7XG5wYWRkaW5nOiAxMHB4O1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG50cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLGNvbG9yIDAuNXMgO1xufVxuXG5cbmJ1dHRvbjpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6dmFyKC0tYmxhY2spO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG5jb2xvcjogdmFyKC0td2hpdGUpO1xuY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYWlue1xub3ZlcmZsb3cteTpzY3JvbGw7XG5tYXJnaW4tdG9wOjh2aDtcbndpZHRoOjkwdnc7XG5oZWlnaHQ6OTB2aDtcbmJvcmRlci1yYWRpdXM6MjBweDtcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG59XG5cbm1haW4+ICBkaXZ7XG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZToxZnIgLyAyMCUgMWZyO1xufVxuXG5tYWluICBkaXYgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjpyb3c7XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xudGV4dC1hbGlnbjpjZW50ZXI7XG5ib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbn1cblxuXG5tYWluICBkaXYgPiBkaXY6bGFzdC1vZi10eXBle1xuZGlzcGxheTpmbGV4IDtcbmp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuYWxpZ24taXRlbXM6Y2VudGVyO1xuYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYmxhY2spO1xucGFkZGluZy1sZWZ0OjEwcHg7XG59XG5cbm1haW4gaW1ne1xud2lkdGg6NjBweDtcbmhlaWdodDo2MHB4O1xuXG59XG5cbiN3aW5kb3d7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbmRpc3BsYXk6bm9uZTtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spIDtcbnBhZGRpbmc6IDEwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5ib3JkZXItcmFkaXVzOjIwcHg7XG50b3A6NTB2aCA7XG5sZWZ0OjUwdnc7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuZ2FwOjVweCA7XG59XG5cbmlucHV0e1xuYm9yZGVyLXJhZGl1czoxMHB4O1xucGFkZGluZzoxMHB4IDtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spIDtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbn1cbmlucHV0OmZvY3Vze1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmVlbik7XG5vdXRsaW5lOjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGFBQWE7QUFDYixlQUFlO0FBQ2YscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixhQUFhO0FBQ2IsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixPQUFPO0FBQ1AsTUFBTTtBQUNOLE9BQU87QUFDUDs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsd0NBQXdDO0FBQ3hDOzs7QUFHQTtBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsVUFBVTtBQUNWLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBLGFBQWE7QUFDYiwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQSxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEM7OztBQUdBO0FBQ0EsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQixrQkFBa0I7QUFDbEIsb0NBQW9DO0FBQ3BDLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLFVBQVU7QUFDVixXQUFXOztBQUVYOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsOEJBQThCO0FBQzlCLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxTQUFTO0FBQ1QsK0JBQStCO0FBQy9CLFFBQVE7QUFDUjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbmJhY2tncm91bmQ6IDA7XFxucGFkZGluZzogMDtcXG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxufVxcblxcbjpyb290e1xcbi0tb3JhbmdlOiNGRjhEMTU7XFxuLS1vcmFuZ2U6I0ZGOEQxNTtcXG4tLXdoaXRlOndoaXRlO1xcbi0tYmxhY2s6YmxhY2s7XFxuLS1ncmVlbjojQzFGN0MxO1xcbi0tbGlnaHRPcmFuZ2U6I0ZGRTVBNztcXG59XFxuXFxuOnJvb3QuZGFya3tcXG4tLW9yYW5nZTojNTEyQzA1O1xcbi0td2hpdGU6YmxhY2s7XFxuLS1ibGFjazp3aGl0ZTtcXG4tLWdyZWVuOiMxNjFEMTY7XFxuLS1saWdodE9yYW5nZTojM0IzNTI3O1xcbn1cXG5cXG5ib2R5e1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5hbGlnbi1pdGVtczpjZW50ZXI7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXJ7XFxuZGlzcGxheTpmbGV4O1xcbnBvc2l0aW9uOmFic29sdXRlO1xcbmxlZnQ6IDA7XFxudG9wOiAwO1xcbmdhcDo1cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuY29sb3I6IHZhcigtLWJsYWNrKTtcXG5wYWRkaW5nOiAxMHB4O1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbmJvcmRlci1yYWRpdXM6MTBweDtcXG50cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLGNvbG9yIDAuNXMgO1xcbn1cXG5cXG5cXG5idXR0b246aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ibGFjayk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuY29sb3I6IHZhcigtLXdoaXRlKTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW57XFxub3ZlcmZsb3cteTpzY3JvbGw7XFxubWFyZ2luLXRvcDo4dmg7XFxud2lkdGg6OTB2dztcXG5oZWlnaHQ6OTB2aDtcXG5ib3JkZXItcmFkaXVzOjIwcHg7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxufVxcblxcbm1haW4+ICBkaXZ7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLXRlbXBsYXRlOjFmciAvIDIwJSAxZnI7XFxufVxcblxcbm1haW4gIGRpdiA+IGRpdjpmaXJzdC1vZi10eXBle1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246cm93O1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuYWxpZ24taXRlbXM6Y2VudGVyO1xcbnRleHQtYWxpZ246Y2VudGVyO1xcbmJvcmRlci1yaWdodDoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG59XFxuXFxuXFxubWFpbiAgZGl2ID4gZGl2Omxhc3Qtb2YtdHlwZXtcXG5kaXNwbGF5OmZsZXggO1xcbmp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG5ib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxucGFkZGluZy1sZWZ0OjEwcHg7XFxufVxcblxcbm1haW4gaW1ne1xcbndpZHRoOjYwcHg7XFxuaGVpZ2h0OjYwcHg7XFxuXFxufVxcblxcbiN3aW5kb3d7XFxucG9zaXRpb246YWJzb2x1dGU7XFxuZGlzcGxheTpub25lO1xcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKSA7XFxucGFkZGluZzogMTBweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuYm9yZGVyLXJhZGl1czoyMHB4O1xcbnRvcDo1MHZoIDtcXG5sZWZ0OjUwdnc7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG5nYXA6NXB4IDtcXG59XFxuXFxuaW5wdXR7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbnBhZGRpbmc6MTBweCA7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjaykgO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG59XFxuaW5wdXQ6Zm9jdXN7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmVlbik7XFxub3V0bGluZTowcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5wdXQvbWFpbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==