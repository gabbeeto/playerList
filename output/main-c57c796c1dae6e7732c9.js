/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./input/delete.js":
/*!*************************!*\
  !*** ./input/delete.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayArray: () => (/* binding */ displayArray)
/* harmony export */ });
/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete.js */ "./input/delete.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.js */ "./input/select.js");
/* harmony import */ var _img_removeImg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/removeImg.png */ "./input/img/removeImg.png");
/* harmony import */ var _img_star_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/star.png */ "./input/img/star.png");






window.sortedPlayer = window.playerScores;


const mainContainer = document.querySelector('main');

function displayArray() {
  mainContainer.innerHTML = '';
  sortArray()
  for (let player of sortedPlayer) {
    let playerContainer = document.createElement(`div`);
    let nameDiv = document.createElement('div');
    nameDiv.value = player.index;

    let playerName = document.createElement('p');
    playerName.innerText = player.name;

    let deleteImage = document.createElement('img');
    deleteImage.value = player.index;
    deleteImage.addEventListener('click', _delete_js__WEBPACK_IMPORTED_MODULE_0__.deletePlayer);
    deleteImage.src = _img_removeImg_png__WEBPACK_IMPORTED_MODULE_2__;

    nameDiv.addEventListener('click', _select_js__WEBPACK_IMPORTED_MODULE_1__.selectPlayer)


    mainContainer.appendChild(playerContainer);
    playerContainer.appendChild(nameDiv);
    nameDiv.appendChild(playerName);
    nameDiv.appendChild(deleteImage);


    let starDiv = document.createElement('div');
    playerContainer.appendChild(starDiv)
    for(let index = 0; index < player.score; index++){
      let star = document.createElement('img');
      star.src = _img_star_png__WEBPACK_IMPORTED_MODULE_3__;
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./input/style.css");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./input/display.js");
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window.js */ "./input/window.js");





window.isWindowNotOpen = true;

document.querySelector('header > button').addEventListener('click',_window_js__WEBPACK_IMPORTED_MODULE_2__.addPlayerButton);
document.querySelector('header > button:last-of-type').addEventListener('click',_window_js__WEBPACK_IMPORTED_MODULE_2__.editPlayerButton);

class Player {
  constructor(name, score, index = 0) {
    this.name = name;
    this.score = score;
    this.index = index;
  }
}


if (localStorage.playerScores) {
  window.playerScores = JSON.parse(localStorage.playerScores)
}
else {
  window.playerScores = [new Player('gabbeeto', 1),new Player('memo', 2,1),new Player('jay', 5,2),new Player('1234', 6,3)]
}


(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayArray)()




/***/ }),

/***/ "./input/select.js":
/*!*************************!*\
  !*** ./input/select.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      div.style.backgroundColor = '#FFE5A7'
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
--white:white;
--black:black;
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
flex-direction:column;
position:absolute;
left: 0;
top: 0;
gap:5px;
}

button {
background-color:var(--white);
padding: 10px;
border:2px solid var(--black);
border-radius:10px;
}


main{
overflow-y:scroll;
margin-top:12vh;
width:80vw;
height:85vh;
border-radius:20px;
background-color:white;
border:2px solid black;
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
padding: 20px;
background-color: var(--white);
border-radius:20px;
top:50vh ;
left:50vw;
transform: translate(-50%,-50%);


}
`, "",{"version":3,"sources":["webpack://./input/style.css"],"names":[],"mappings":"AAAA;AACA,aAAa;AACb,UAAU;AACV,qBAAqB;AACrB;;AAEA;AACA,gBAAgB;AAChB,aAAa;AACb,aAAa;AACb;;AAEA;AACA,+BAA+B;AAC/B,kBAAkB;AAClB,aAAa;AACb,sBAAsB;AACtB,kBAAkB;AAClB,kBAAkB;AAClB;;AAEA;AACA,YAAY;AACZ,qBAAqB;AACrB,iBAAiB;AACjB,OAAO;AACP,MAAM;AACN,OAAO;AACP;;AAEA;AACA,6BAA6B;AAC7B,aAAa;AACb,6BAA6B;AAC7B,kBAAkB;AAClB;;;AAGA;AACA,iBAAiB;AACjB,eAAe;AACf,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB,sBAAsB;AACtB,sBAAsB;AACtB;;AAEA;AACA,aAAa;AACb,2BAA2B;AAC3B;;AAEA;AACA,aAAa;AACb,kBAAkB;AAClB,sBAAsB;AACtB,kBAAkB;AAClB,iBAAiB;AACjB,mCAAmC;AACnC,oCAAoC;AACpC;;;AAGA;AACA,aAAa;AACb,0BAA0B;AAC1B,kBAAkB;AAClB,oCAAoC;AACpC,iBAAiB;AACjB;;AAEA;AACA,UAAU;AACV,WAAW;;AAEX;;AAEA;AACA,iBAAiB;AACjB,YAAY;AACZ,qBAAqB;AACrB,8BAA8B;AAC9B,aAAa;AACb,8BAA8B;AAC9B,kBAAkB;AAClB,SAAS;AACT,SAAS;AACT,+BAA+B;;;AAG/B","sourcesContent":["*{\nbackground: 0;\npadding: 0;\nbox-sizing:border-box;\n}\n\n:root{\n--orange:#FF8D15;\n--white:white;\n--black:black;\n}\n\nbody{\nbackground-color: var(--orange);\ncolor:var(--black);\ndisplay: flex;\njustify-content:center;\nalign-items:center;\nposition: relative;\n}\n\nheader{\ndisplay:flex;\nflex-direction:column;\nposition:absolute;\nleft: 0;\ntop: 0;\ngap:5px;\n}\n\nbutton {\nbackground-color:var(--white);\npadding: 10px;\nborder:2px solid var(--black);\nborder-radius:10px;\n}\n\n\nmain{\noverflow-y:scroll;\nmargin-top:12vh;\nwidth:80vw;\nheight:85vh;\nborder-radius:20px;\nbackground-color:white;\nborder:2px solid black;\n}\n\nmain>  div{\ndisplay: grid;\ngrid-template:1fr / 20% 1fr;\n}\n\nmain  div > div:first-of-type{\ndisplay: flex;\nflex-direction:row;\njustify-content:center;\nalign-items:center;\ntext-align:center;\nborder-right:2px solid var(--black);\nborder-bottom:2px solid var(--black);\n}\n\n\nmain  div > div:last-of-type{\ndisplay:flex ;\njustify-content:flex-start;\nalign-items:center;\nborder-bottom:2px solid var(--black);\npadding-left:10px;\n}\n\nmain img{\nwidth:60px;\nheight:60px;\n\n}\n\n#window{\nposition:absolute;\ndisplay:none;\nflex-direction:column;\nborder:2px solid var(--black) ;\npadding: 20px;\nbackground-color: var(--white);\nborder-radius:20px;\ntop:50vh ;\nleft:50vw;\ntransform: translate(-50%,-50%);\n\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

module.exports = __webpack_require__.p + "removeImg.png";

/***/ }),

/***/ "./input/img/star.png":
/*!****************************!*\
  !*** ./input/img/star.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1jNTdjNzk2YzFkYWU2ZTc3MzJjOS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7O0FBRTFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQVk7QUFDWjs7O0FBR0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsMERBQVk7OztBQUdaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0IwQztBQUNBO0FBQ0M7QUFDUDs7O0FBR3BDOzs7QUFHQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsb0RBQVk7QUFDdEQsc0JBQXNCLCtDQUFTOztBQUUvQixzQ0FBc0Msb0RBQVk7OztBQUdsRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQSxpQkFBaUIsMENBQU87QUFDeEI7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFLDBDQUEwQztBQUMzRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRHFCO0FBQ3NCO0FBQ2tCOzs7QUFHN0Q7O0FBRUEsbUVBQW1FLHVEQUFlO0FBQ2xGLGdGQUFnRix3REFBZ0I7O0FBRXpGO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHlEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQlo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7Ozs7QUFJTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUQ0QztBQUNUOztBQUVuQzs7O0FBR087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQU07QUFDOUIsRUFBRSwwREFBWTtBQUNkO0FBQ0E7OztBQUdPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBLGtDQUFrQyxtQ0FBbUM7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFZO0FBQ2Q7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLGNBQWMsNEJBQTRCLGdCQUFnQixhQUFhLHdCQUF3QixHQUFHLFVBQVUsbUJBQW1CLGdCQUFnQixnQkFBZ0IsR0FBRyxTQUFTLGtDQUFrQyxxQkFBcUIsZ0JBQWdCLHlCQUF5QixxQkFBcUIscUJBQXFCLEdBQUcsV0FBVyxlQUFlLHdCQUF3QixvQkFBb0IsVUFBVSxTQUFTLFVBQVUsR0FBRyxZQUFZLGdDQUFnQyxnQkFBZ0IsZ0NBQWdDLHFCQUFxQixHQUFHLFdBQVcsb0JBQW9CLGtCQUFrQixhQUFhLGNBQWMscUJBQXFCLHlCQUF5Qix5QkFBeUIsR0FBRyxlQUFlLGdCQUFnQiw4QkFBOEIsR0FBRyxrQ0FBa0MsZ0JBQWdCLHFCQUFxQix5QkFBeUIscUJBQXFCLG9CQUFvQixzQ0FBc0MsdUNBQXVDLEdBQUcsbUNBQW1DLGdCQUFnQiw2QkFBNkIscUJBQXFCLHVDQUF1QyxvQkFBb0IsR0FBRyxhQUFhLGFBQWEsY0FBYyxLQUFLLFlBQVksb0JBQW9CLGVBQWUsd0JBQXdCLGlDQUFpQyxnQkFBZ0IsaUNBQWlDLHFCQUFxQixZQUFZLFlBQVksa0NBQWtDLE9BQU8scUJBQXFCO0FBQzN0RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ25HMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvbWFpbi5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vaW5wdXQvc2VsZWN0LmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9pbnB1dC93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL2lucHV0L3N0eWxlLmNzcz9hMTNlIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BsYXllcmxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wbGF5ZXJsaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGxheWVybGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BsYXllcmxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpc3BsYXlBcnJheX0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZGVsZXRlU2VsZWN0ZWQpXG5cbmZ1bmN0aW9uIGRlbGV0ZVNlbGVjdGVkKGV2ZW50KXtcbmlmKHR5cGVvZiBzZWxlY3RlZFBsYXllciA9PSAnbnVtYmVyJyAmJiBpc1dpbmRvd05vdE9wZW4gJiYgZXZlbnQua2V5Q29kZSA9PSA0Nil7XG5wbGF5ZXJTY29yZXMuc3BsaWNlKHNlbGVjdGVkUGxheWVyLCAxKVxudXBkYXRlVGhlSW5kZXhGb3JBcnJheSgpXG5kaXNwbGF5QXJyYXkoKVxuICB9XG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUGxheWVyKGV2ZW50KXtcbiAgcGxheWVyU2NvcmVzLnNwbGljZShldmVudC50YXJnZXQudmFsdWUsMSlcbnVwZGF0ZVRoZUluZGV4Rm9yQXJyYXkoKVxuZGlzcGxheUFycmF5KClcblxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRoZUluZGV4Rm9yQXJyYXkoKXtcbmZvcihsZXQgaW5kZXggaW4gcGxheWVyU2NvcmVzKXtcbnBsYXllclNjb3Jlc1tpbmRleF0uaW5kZXggPSBOdW1iZXIoaW5kZXgpO1xuICB9XG5cblxufVxuIiwiaW1wb3J0IHsgZGVsZXRlUGxheWVyIH0gZnJvbSAnLi9kZWxldGUuanMnXG5pbXBvcnQgeyBzZWxlY3RQbGF5ZXIgfSBmcm9tICcuL3NlbGVjdC5qcydcbmltcG9ydCByZW1vdmVJbWcgZnJvbSAnLi9pbWcvcmVtb3ZlSW1nLnBuZydcbmltcG9ydCBzdGFySW1nIGZyb20gJy4vaW1nL3N0YXIucG5nJ1xuXG5cbndpbmRvdy5zb3J0ZWRQbGF5ZXIgPSB3aW5kb3cucGxheWVyU2NvcmVzO1xuXG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QXJyYXkoKSB7XG4gIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHNvcnRBcnJheSgpXG4gIGZvciAobGV0IHBsYXllciBvZiBzb3J0ZWRQbGF5ZXIpIHtcbiAgICBsZXQgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGV0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lRGl2LnZhbHVlID0gcGxheWVyLmluZGV4O1xuXG4gICAgbGV0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGxheWVyTmFtZS5pbm5lclRleHQgPSBwbGF5ZXIubmFtZTtcblxuICAgIGxldCBkZWxldGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlbGV0ZUltYWdlLnZhbHVlID0gcGxheWVyLmluZGV4O1xuICAgIGRlbGV0ZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUGxheWVyKTtcbiAgICBkZWxldGVJbWFnZS5zcmMgPSByZW1vdmVJbWc7XG5cbiAgICBuYW1lRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0UGxheWVyKVxuXG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckNvbnRhaW5lcik7XG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQocGxheWVyTmFtZSk7XG4gICAgbmFtZURpdi5hcHBlbmRDaGlsZChkZWxldGVJbWFnZSk7XG5cblxuICAgIGxldCBzdGFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJEaXYpXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGxheWVyLnNjb3JlOyBpbmRleCsrKXtcbiAgICAgIGxldCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBzdGFyLnNyYyA9IHN0YXJJbWc7XG4gICAgICBzdGFyRGl2LmFwcGVuZENoaWxkKHN0YXIpO1xuXG4gICAgfVxuXG5cblxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRBcnJheSgpIHtcbiAgd2luZG93LnNvcnRlZFBsYXllciA9IHdpbmRvdy5wbGF5ZXJTY29yZXMudG9Tb3J0ZWQoKGEsIGIpID0+IHsgcmV0dXJuIE51bWJlcihiLnNjb3JlKSAtIE51bWJlcihhLnNjb3JlKSB9KVxufVxuXG5cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZGlzcGxheUFycmF5IH0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuaW1wb3J0IHthZGRQbGF5ZXJCdXR0b24sIGVkaXRQbGF5ZXJCdXR0b259IGZyb20gJy4vd2luZG93LmpzJ1xuXG5cbndpbmRvdy5pc1dpbmRvd05vdE9wZW4gPSB0cnVlO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkUGxheWVyQnV0dG9uKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciA+IGJ1dHRvbjpsYXN0LW9mLXR5cGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZWRpdFBsYXllckJ1dHRvbik7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzY29yZSwgaW5kZXggPSAwKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG59XG5cblxuaWYgKGxvY2FsU3RvcmFnZS5wbGF5ZXJTY29yZXMpIHtcbiAgd2luZG93LnBsYXllclNjb3JlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnBsYXllclNjb3Jlcylcbn1cbmVsc2Uge1xuICB3aW5kb3cucGxheWVyU2NvcmVzID0gW25ldyBQbGF5ZXIoJ2dhYmJlZXRvJywgMSksbmV3IFBsYXllcignbWVtbycsIDIsMSksbmV3IFBsYXllcignamF5JywgNSwyKSxuZXcgUGxheWVyKCcxMjM0JywgNiwzKV1cbn1cblxuXG5kaXNwbGF5QXJyYXkoKVxuXG5cbiIsIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkTmF2ZWdhdGlvbilcbmZ1bmN0aW9uIGtleWJvYXJkTmF2ZWdhdGlvbihldmVudCkge1xuICBpZiAodHlwZW9mIHNlbGVjdGVkUGxheWVyID09IFwibnVtYmVyXCIgJiYgaXNXaW5kb3dOb3RPcGVuKSB7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMzc6XG4gICAgICBjYXNlIDM4OlxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc29ydGVkUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChzb3J0ZWRQbGF5ZXJbaW5kZXhdLmluZGV4ID09IHNlbGVjdGVkUGxheWVyICYmIGluZGV4ID4gMCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRQbGF5ZXIgPSBzb3J0ZWRQbGF5ZXJbaW5kZXggLSAxXS5pbmRleFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0UGxheWVyKGV2ZW50KVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOTpcbiAgICAgIGNhc2UgNDA6XG4gICAgICAgIGxldCBkaW07XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzb3J0ZWRQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5zb3J0ZWRQbGF5ZXJbaW5kZXhdLmluZGV4ID09IHNlbGVjdGVkUGxheWVyICYmIGluZGV4IDwgc29ydGVkUGxheWVyLmxlbmd0aCAtMSApIHtcbiAgICAgICAgICAgIGRpbSA9IHdpbmRvdy5zb3J0ZWRQbGF5ZXJbaW5kZXggKzFdLmluZGV4O1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mIGRpbSA9PSAnbnVtYmVyJyl7XG4gICAgICAgIHdpbmRvdy5zZWxlY3RlZFBsYXllciA9IGRpbTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RQbGF5ZXIoZXZlbnQpXG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG5cbiAgfVxuXG5cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RQbGF5ZXIoZXZlbnQpIHtcbiAgaWYgKGlzV2luZG93Tm90T3Blbikge1xuICAgIGZvciAobGV0IHBsYXllciBvZiBwbGF5ZXJTY29yZXMpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT0gcGxheWVyLmluZGV4KSB7XG4gICAgICAgIHdpbmRvdy5zZWxlY3RlZFBsYXllciA9IHBsYXllci5pbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgYWRkQmFja2dyb3VuZFRvU2VsZWN0ZWRQbGF5ZXIoKVxuICB9XG59XG5mdW5jdGlvbiBhZGRCYWNrZ3JvdW5kVG9TZWxlY3RlZFBsYXllcigpIHtcbiAgZm9yIChsZXQgZGl2IG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ21haW4gPiBkaXYgPiBkaXY6Zmlyc3Qtb2YtdHlwZScpKSB7XG4gICAgaWYgKHdpbmRvdy5zZWxlY3RlZFBsYXllciA9PSBkaXYudmFsdWUpIHtcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGRTVBNydcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJydcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgZGlzcGxheUFycmF5IH0gZnJvbSAnLi9kaXNwbGF5LmpzJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vbWFpbi5qcyc7XG5cbmxldCB3aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZG93Jyk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBsYXllckJ1dHRvbigpIHtcbiAgaWYgKGlzV2luZG93Tm90T3Blbikge1xuICAgIGlzV2luZG93Tm90T3BlbiA9IGZhbHNlO1xuICAgIHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kb3cnKTtcblxuICAgIHdpbmRvdy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBpZD0nY2xvc2VXaW5kb3cnPmNlcnJhcjwvYnV0dG9uPlxuICAgIDxwPm5vbWJyZTo8L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9J25hbWUnPlxuICAgIDxidXR0b24gaWQ9J2FkZEJ1dHRvbic+YWdyZWdhcjwvYnV0dG9uPmBcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZVdpbmRvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VXaW5kb3cpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNsb3NlV2luZG93S2V5Ym9hcmQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheUtleWJvYXJkKVxuXG4gICAgd2luZG93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjd2luZG93IGlucHV0W3R5cGU9J3RleHQnXWApLnNlbGVjdCgpXG4gIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXlLZXlib2FyZChldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC5rZXlDb2RlKVxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXkoKVxuICB9XG59XG5cblxuZnVuY3Rpb24gYWRkVG9UaGVTY29yZXNQbGF5ZXJBcnJheSgpIHtcbiAgbGV0IG5hbWVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3dpbmRvdyBpbnB1dFt0eXBlPSd0ZXh0J11gKTtcbiAgY29uc29sZS5sb2cocGxheWVyU2NvcmVzKVxuICBwbGF5ZXJTY29yZXMucHVzaChuZXcgUGxheWVyKG5hbWVUZXh0LnZhbHVlLCAxLCBwbGF5ZXJTY29yZXMubGVuZ3RoKSlcbiAgZGlzcGxheUFycmF5KClcbiAgY2xvc2VXaW5kb3coKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0UGxheWVyQnV0dG9uKCkge1xuICBpZiAoaXNXaW5kb3dOb3RPcGVuICYmIHR5cGVvZiBzZWxlY3RlZFBsYXllciA9PSBcIm51bWJlclwiKSB7XG5cbiAgICBpc1dpbmRvd05vdE9wZW4gPSBmYWxzZTtcbiAgICB3aW5kb3cuaW5uZXJIVE1MID0gYDxidXR0b24gaWQ9J2Nsb3NlV2luZG93JyA+Y2VycmFyPC9idXR0b24+XG4gICAgPHA+bm9tYnJlOjwvcD5cbiAgICA8aW5wdXQgdmFsdWU9JyR7cGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5uYW1lfScgdHlwZT1cInRleHRcIiBpZD0nbmFtZScgYXV0b2ZvY3VzPSd0cnVlJyA+XG4gICAgPHA+c3RhcnM6PC9wPlxuICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9JyR7cGxheWVyU2NvcmVzW3NlbGVjdGVkUGxheWVyXS5zY29yZX0nICBpZD1cInN0YXJzXCI+XG4gICAgPGJ1dHRvbiBpZD0nYXBwbHlCdXR0b24nPmFwbGljYXIgY2FtYmlvczwvYnV0dG9uPmBcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZVdpbmRvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VXaW5kb3cpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNsb3NlV2luZG93S2V5Ym9hcmQpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcGx5QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBseUNoYW5nZXMpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGFwcGx5Q2hhbmdlc0tleWJvYXJkKVxuXG4gICAgd2luZG93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3dpbmRvdyBpbnB1dFt0eXBlPSdudW1iZXInXWApLnNlbGVjdCgpXG5cblxuICB9XG59XG5cblxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzS2V5Ym9hcmQoZXZlbnQpIHtcbiAgY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSlcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICBhcHBseUNoYW5nZXMoKVxuICB9XG59XG5cblxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzKCkge1xuICBwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICBwbGF5ZXJTY29yZXNbc2VsZWN0ZWRQbGF5ZXJdLnNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJzJykudmFsdWU7XG4gIGRpc3BsYXlBcnJheSgpXG4gIGNsb3NlV2luZG93KClcblxufVxuXG5cblxuXG5mdW5jdGlvbiBjbG9zZVdpbmRvd0tleWJvYXJkKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGV2ZW50LmtleUNvZGUpXG4gIGlmIChldmVudC5rZXlDb2RlID09IDI3KSB7XG4gICAgY2xvc2VXaW5kb3coKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlV2luZG93KCkge1xuICB3aW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaXNXaW5kb3dOb3RPcGVuID0gdHJ1ZTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNsb3NlV2luZG93S2V5Ym9hcmQpXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhcHBseUNoYW5nZXNLZXlib2FyZClcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGFkZFRvVGhlU2NvcmVzUGxheWVyQXJyYXlLZXlib2FyZClcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuYmFja2dyb3VuZDogMDtcbnBhZGRpbmc6IDA7XG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XG59XG5cbjpyb290e1xuLS1vcmFuZ2U6I0ZGOEQxNTtcbi0td2hpdGU6d2hpdGU7XG4tLWJsYWNrOmJsYWNrO1xufVxuXG5ib2R5e1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xucG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5oZWFkZXJ7XG5kaXNwbGF5OmZsZXg7XG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5wb3NpdGlvbjphYnNvbHV0ZTtcbmxlZnQ6IDA7XG50b3A6IDA7XG5nYXA6NXB4O1xufVxuXG5idXR0b24ge1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5wYWRkaW5nOiAxMHB4O1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG59XG5cblxubWFpbntcbm92ZXJmbG93LXk6c2Nyb2xsO1xubWFyZ2luLXRvcDoxMnZoO1xud2lkdGg6ODB2dztcbmhlaWdodDo4NXZoO1xuYm9yZGVyLXJhZGl1czoyMHB4O1xuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbmJvcmRlcjoycHggc29saWQgYmxhY2s7XG59XG5cbm1haW4+ICBkaXZ7XG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZToxZnIgLyAyMCUgMWZyO1xufVxuXG5tYWluICBkaXYgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjpyb3c7XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xudGV4dC1hbGlnbjpjZW50ZXI7XG5ib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbn1cblxuXG5tYWluICBkaXYgPiBkaXY6bGFzdC1vZi10eXBle1xuZGlzcGxheTpmbGV4IDtcbmp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuYWxpZ24taXRlbXM6Y2VudGVyO1xuYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYmxhY2spO1xucGFkZGluZy1sZWZ0OjEwcHg7XG59XG5cbm1haW4gaW1ne1xud2lkdGg6NjBweDtcbmhlaWdodDo2MHB4O1xuXG59XG5cbiN3aW5kb3d7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbmRpc3BsYXk6bm9uZTtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spIDtcbnBhZGRpbmc6IDIwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5ib3JkZXItcmFkaXVzOjIwcHg7XG50b3A6NTB2aCA7XG5sZWZ0OjUwdnc7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuXG5cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGFBQWE7QUFDYjs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsT0FBTztBQUNQLE1BQU07QUFDTixPQUFPO0FBQ1A7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0IsYUFBYTtBQUNiLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEI7OztBQUdBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixVQUFVO0FBQ1YsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsbUNBQW1DO0FBQ25DLG9DQUFvQztBQUNwQzs7O0FBR0E7QUFDQSxhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCLGtCQUFrQjtBQUNsQixvQ0FBb0M7QUFDcEMsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFdBQVc7O0FBRVg7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQiw4QkFBOEI7QUFDOUIsYUFBYTtBQUNiLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsU0FBUztBQUNULFNBQVM7QUFDVCwrQkFBK0I7OztBQUcvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbmJhY2tncm91bmQ6IDA7XFxucGFkZGluZzogMDtcXG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxufVxcblxcbjpyb290e1xcbi0tb3JhbmdlOiNGRjhEMTU7XFxuLS13aGl0ZTp3aGl0ZTtcXG4tLWJsYWNrOmJsYWNrO1xcbn1cXG5cXG5ib2R5e1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5hbGlnbi1pdGVtczpjZW50ZXI7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXJ7XFxuZGlzcGxheTpmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG5wb3NpdGlvbjphYnNvbHV0ZTtcXG5sZWZ0OiAwO1xcbnRvcDogMDtcXG5nYXA6NXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xcbnBhZGRpbmc6IDEwcHg7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbn1cXG5cXG5cXG5tYWlue1xcbm92ZXJmbG93LXk6c2Nyb2xsO1xcbm1hcmdpbi10b3A6MTJ2aDtcXG53aWR0aDo4MHZ3O1xcbmhlaWdodDo4NXZoO1xcbmJvcmRlci1yYWRpdXM6MjBweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbmJvcmRlcjoycHggc29saWQgYmxhY2s7XFxufVxcblxcbm1haW4+ICBkaXZ7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLXRlbXBsYXRlOjFmciAvIDIwJSAxZnI7XFxufVxcblxcbm1haW4gIGRpdiA+IGRpdjpmaXJzdC1vZi10eXBle1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246cm93O1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuYWxpZ24taXRlbXM6Y2VudGVyO1xcbnRleHQtYWxpZ246Y2VudGVyO1xcbmJvcmRlci1yaWdodDoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG59XFxuXFxuXFxubWFpbiAgZGl2ID4gZGl2Omxhc3Qtb2YtdHlwZXtcXG5kaXNwbGF5OmZsZXggO1xcbmp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG5ib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxucGFkZGluZy1sZWZ0OjEwcHg7XFxufVxcblxcbm1haW4gaW1ne1xcbndpZHRoOjYwcHg7XFxuaGVpZ2h0OjYwcHg7XFxuXFxufVxcblxcbiN3aW5kb3d7XFxucG9zaXRpb246YWJzb2x1dGU7XFxuZGlzcGxheTpub25lO1xcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKSA7XFxucGFkZGluZzogMjBweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuYm9yZGVyLXJhZGl1czoyMHB4O1xcbnRvcDo1MHZoIDtcXG5sZWZ0OjUwdnc7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG5cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbnB1dC9tYWluLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9