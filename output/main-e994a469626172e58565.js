(()=>{var e={314:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var o=n(81),r=n.n(o),a=n(645),i=n.n(a),c=n(667),l=n.n(c),s=new URL(n(249),n.b),d=new URL(n(123),n.b),u=new URL(n(808),n.b),p=i()(r()),y=l()(s),f=l()(d),m=l()(u);p.push([e.id,`*{\nbackground: 0;\npadding: 0;\nbox-sizing:border-box;\n}\n\n\n:root{\n--orange:#FF8D15;\n--orange:#FF8D15;\n--white:white;\n--black:black;\n--green:#C1F7C1;\n--lightOrange:#FFE5A7;\n}\n\n:root.dark{\n--orange:#512C05;\n--white:black;\n--black:white;\n--green:#161D16;\n--lightOrange:#3B3527;\n}\n\n\n@font-face{\nfont-family: 'default';\nsrc: url(${y});\n}\n\n\n@font-face{\nfont-family: 'button';\nsrc: url(${f});\n}\n\n\n@font-face{\nfont-family: 'popUp';\nsrc: url(${m});\n}\n\nbody{\n\nbackground-color: var(--orange);\ncolor:var(--black);\ndisplay: flex;\njustify-content:center;\nflex-direction:column;\ngap:15px;\nalign-items:center;\nposition: relative;\nfont-family: 'default';\n}\n\n\np{\nfont-size:max(0.9rem,2.3vw);\n}\n\nheader{\ndisplay:flex;\nposition:absolute;\nleft: 0;\ntop: 0;\ngap:5px;\n}\n\n#message{\nfont-family: 'popUp';\ntext-transform:uppercase;\nfont-size: 2.5rem;\nposition:absolute;\nright: 0;\ntop: 0;\ntransition: opacity 6s;\n}\n\nbutton {\nbackground-color:var(--white);\ncolor: var(--black);\npadding: 10px;\nborder:2px solid var(--black);\nborder-radius:10px;\ntransition: background-color,color 0.5s ;\nfont-family: 'button';\nfont-size:1.3rem;\n}\n\ninput[type='file']::file-selector-button{\n\nfont-family: 'button';\nbackground-color:var(--white);\ncolor: var(--black);\nborder:2px solid var(--black);\npadding: 2.5px;\ntransition: background-color,color 0.5s ;\nborder-radius:10px;\n}\n\nbutton:nth-of-type(4),button:nth-of-type(5), input[type='file']{\nopacity:0;\ntransition:opacity 1s;\n}\n\ninput[type='file']{\nbackground-color:var(--white);\ncolor: var(--black);\nborder: 2px solid var(--black);\nfont-family: 'default';\n}\n\nbutton:hover:nth-of-type(4),button:hover:nth-of-type(5), input:hover[type='file']{\nopacity:1;\n}\n\n\ninput:hover[type='file']{\nbackground-color:var(--black);\ncolor: var(--white);\nborder: 2px solid var(--white);\n}\n\n\nbutton:hover,input[type='file']::file-selector-button{\nbackground-color:var(--black);\nborder:2px solid var(--white);\ncolor: var(--white);\ncursor: pointer;\n}\n\n\nmain{\nmargin-top:8vh;\nwidth:90vw;\nborder-radius:20px;\nbackground-color:var(--white);\nborder:2px solid var(--black);\n}\n\nmain.scroll{\noverflow-y:auto;\nheight:90vh;\n}\n\n\nmain>  div{\ndisplay: grid;\ngrid-template:1fr / 35% 1fr;\n}\n\nmain  div > div:first-of-type{\ndisplay: flex;\nflex-direction:row;\njustify-content:center;\nalign-items:center;\ntext-align:center;\nborder-right:2px solid var(--black);\n}\n\nmain  div > div:last-of-type:not(main div:last-of-type >div:last-of-type),\nmain  div > div:first-of-type:not(main  div:last-of-type > div:first-of-type){\nborder-bottom:2px solid var(--black);\n}\n\nmain.scroll div:last-of-type > div:last-of-type,main.scroll  div:last-of-type > div:first-of-type{\nborder-bottom:2px solid var(--black);\n}\n\nmain  div > div:last-of-type{\ndisplay:flex ;\njustify-content:flex-start;\nalign-items:center;\npadding-left:10px;\n}\n\nmain img{\nwidth:60px;\nheight:60px;\n}\n\n#window{\nposition:absolute;\ndisplay:none;\nflex-direction:column;\nborder:2px solid var(--black) ;\npadding: 10px;\nbackground-color: var(--white);\nborder-radius:20px;\ntop:50vh ;\nleft:50vw;\ntransform: translate(-50%,-50%);\ngap:5px ;\n}\n\ninput{\nborder-radius:10px;\npadding:10px ;\nborder:2px solid var(--black) ;\ncolor:var(--black);\n}\n\ninput:focus:not(input[type='file']){\nbackground-color:var(--green);\noutline:0px solid transparent;\n}\n\narticle{\nborder: 2px solid var(--black);\ndisplay: block;\nbackground-color: var(--white);\npadding:5px;\nborder-radius:10px;\n}\n\narticle img{\n\nwidth:60px;\nheight:60px;\nborder-radius:10px;\n}\n\narticle img:hover{\ncursor: pointer;\noutline:2px solid var(--black);\n}\n`,""]);const v=p},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},162:function(e,t,n){var o,r;void 0===(r="function"==typeof(o=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,i=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,n,i){var c=a.URL||a.webkitURL,l=document.createElement("a");n=n||e.name||"download",l.download=n,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?r(l):o(l.href)?t(e,n,i):r(l,l.target="_blank")):(l.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,a),n);else if(o(e))t(e,n,a);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){r(i)}))}}:function(e,n,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var c="application/octet-stream"===e.type,l=/constructor/i.test(a.HTMLElement)||a.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||c&&l||i)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},d.readAsDataURL(e)}else{var u=a.URL||a.webkitURL,p=u.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});a.saveAs=c.saveAs=c,e.exports=c})?o.apply(t,[]):o)||(e.exports=r)},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=o.base?l[0]+o.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=n(u),y={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(y);else{var f=r(y,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=o(e,r),s=0;s<a.length;s++){var d=n(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},808:(e,t,n)=>{"use strict";e.exports=n.p+"American Captain.otf"},123:(e,t,n)=>{"use strict";e.exports=n.p+"Minecrafter.Alt.ttf"},249:(e,t,n)=>{"use strict";e.exports=n.p+"Robot Crush.otf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var o={};(()=>{"use strict";n.d(o,{J5:()=>z,X5:()=>G,Wi:()=>X});var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),c=n.n(i),l=n(565),s=n.n(l),d=n(216),u=n.n(d),p=n(589),y=n.n(p),f=n(314),m={};m.styleTagTransform=y(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let v=document.querySelector("#window");function g(){isWindowNotOpen&&(isWindowNotOpen=!1,v=document.querySelector("#window"),"es"==lang?v.innerHTML="<button id='closeWindow'>cerrar</button>\n    <p>nombre:</p>\n    <input type=\"text\" id='name'>\n    <button id='addButton'>agregar</button>":v.innerHTML="<button id='closeWindow'>close</button>\n    <p>name:</p>\n    <input type=\"text\" id='name'>\n    <button id='addButton'>add</button>",document.querySelector("#closeWindow").addEventListener("click",L),document.addEventListener("keydown",E),document.querySelector("#addButton").addEventListener("click",w),document.addEventListener("keydown",b),v.style.display="flex",document.querySelector("#window input[type='text']").select())}function b(e){console.log(e.keyCode),13==e.keyCode&&w()}function h(e){function t(){e.style.opacity="0"}setTimeout((function(){e.style.opacity="1",setTimeout(t,3e3)}),500)}function w(){let e=document.querySelector("#message");h(e);let t=document.querySelector("#window input[type='text']");"es"==lang?e.innerText=`${t.value} ha sido agregado`:e.innerText=`${t.value} has been added`,console.log(playerScores),playerScores.push(new z(t.value,0,playerScores.length)),G(),C(),L()}function S(){isWindowNotOpen&&"number"==typeof selectedPlayer&&(isWindowNotOpen=!1,"es"==lang?v.innerHTML=`<button id='closeWindow' >cerrar</button>\n    <p>nombre:</p>\n    <input value='${playerScores[selectedPlayer].name}' type="text" id='name' autofocus='true' >\n    <p>estrellas:</p>\n    <input type="number" value='${playerScores[selectedPlayer].score}'  id="stars">\n    <button id='applyButton'>aplicar cambios</button>`:v.innerHTML=`<button id='closeWindow' >close</button>\n    <p>name:</p>\n    <input value='${playerScores[selectedPlayer].name}' type="text" id='name' autofocus='true' >\n    <p>stars:</p>\n    <input type="number" value='${playerScores[selectedPlayer].score}'  id="stars">\n    <button id='applyButton'>apply changes</button>`,document.querySelector("#closeWindow").addEventListener("click",L),document.addEventListener("keydown",E),document.querySelector("#applyButton").addEventListener("click",k),document.addEventListener("keydown",x),v.style.display="flex",document.querySelector("#window input[type='number']").select())}function x(e){console.log(e.keyCode),13==e.keyCode&&k()}function k(){let e=document.querySelector("#message");playerScores[selectedPlayer].score!=document.getElementById("stars").value?(h(e),"es"==lang?e.innerText=`${playerScores[selectedPlayer].name} ahora tiene ${document.getElementById("stars").value} estrellas`:e.innerText=`${playerScores[selectedPlayer].name} has ${document.getElementById("stars").value} stars right now!`):playerScores[selectedPlayer].name!=document.getElementById("name").value&&(e.style.opacity="1","es"==lang?e.innerText=`${playerScores[selectedPlayer].name} ahora se llama ${document.getElementById("name").value}`:e.innerText=`${playerScores[selectedPlayer].name} changed its name to ${document.getElementById("name").value}`),playerScores[selectedPlayer].name=document.getElementById("name").value,playerScores[selectedPlayer].score=document.getElementById("stars").value,G(),C(),L()}function E(e){console.log(e.keyCode),27==e.keyCode&&L()}function L(){v.style.display="none",isWindowNotOpen=!0,document.removeEventListener("keydown",E),document.removeEventListener("keydown",x),document.removeEventListener("keydown",b)}function A(e){console.log(playerScores[e.target.value].name);let t=document.querySelector("#message");t.innerText=`${playerScores[e.target.value].name} fue eliminado`,h(t),playerScores.splice(e.target.value,1),T(),G(),C(),e.stopPropagation()}function T(){for(let e in playerScores)playerScores[e].index=Number(e)}function q(e){if(isWindowNotOpen){for(let t of playerScores)e.target.value==t.index&&(window.selectedPlayer=t.index);!function(){for(let e of document.querySelectorAll("main > div > div:first-of-type"))window.selectedPlayer==e.value?e.style.backgroundColor="var(--lightOrange)":e.style.backgroundColor=""}()}}document.addEventListener("keydown",(function(e){switch(e.keyCode){case 219:g();break;case 221:S()}})),document.addEventListener("keydown",(function(e){"number"==typeof selectedPlayer&&isWindowNotOpen&&46==e.keyCode&&(playerScores.splice(selectedPlayer,1),T(),C())})),document.addEventListener("keydown",(function(e){if("number"==typeof selectedPlayer&&isWindowNotOpen)switch(e.keyCode){case 37:case 38:for(let e=0;e<sortedPlayer.length;e++)sortedPlayer[e].index==selectedPlayer&&e>0&&(selectedPlayer=sortedPlayer[e-1].index);q(e);break;case 39:case 40:let t;for(let e=0;e<sortedPlayer.length;e++)window.sortedPlayer[e].index==selectedPlayer&&e<sortedPlayer.length-1&&(t=window.sortedPlayer[e+1].index);"number"==typeof t&&(window.selectedPlayer=t),q(e)}}));const O=n.p+"removeImg.png",P=n.p+"star.png";window.sortedPlayer=window.playerScores;const N=document.querySelector("main");function C(){N.innerHTML="",window.sortedPlayer=window.playerScores.toSorted(((e,t)=>Number(t.score)-Number(e.score))),X();for(let e of sortedPlayer){let t=document.createElement("div"),n=document.createElement("div");n.value=e.index;let o=document.createElement("p");o.innerText=e.name;let r=document.createElement("img");r.value=e.index,r.addEventListener("click",A),r.src=O,n.addEventListener("click",q),N.appendChild(t),t.appendChild(n),n.append(o,r);let a=document.createElement("div");if(t.appendChild(a),60*e.score+10>a.clientWidth){a.innerHTML="";let t=document.createElement("img");t.src=P;let n=document.createElement("p");n.innerText=e.score,a.append(t,n)}else for(let t=0;t<e.score;t++){let e=document.createElement("img");e.src=P,a.appendChild(e)}}}let M=matchMedia("(prefers-color-scheme: dark)").matches,$=document.querySelector("header > button:nth-of-type(3)");function j(){let e=document.querySelector("html");e.classList.toggle("dark"),"dark"==e.className?$.innerText="modo claro":$.innerText="modo oscuro"}$.addEventListener("click",j),M&&j();var B=n(162);const R=document.querySelector("header > button:nth-of-type(4)"),J=document.querySelector("header > input[type='file']");function W(){let e=new Blob([JSON.stringify(playerScores)],{type:"text/json;charset=utf-8"});B.saveAs(e,"playerList.json")}function I(){let e=new FileReader,t=document.querySelector("input[type='file']").files[0];e.readAsText(t),e.onload=()=>{playerScores=JSON.parse(e.result),C()}}R.addEventListener("click",W),J.addEventListener("change",I);let U=document.querySelector("button:last-of-type"),H=document.querySelector("main");function F(){H.classList.toggle("scroll")}U.addEventListener("click",F),n.p,n.p,window.lang="es",document.querySelector("article img:first-of-type").addEventListener("click",(function(){window.lang="es",D.innerHTML='<button>agregar jugador</button>\n    <button>editar jugador</button>\n    <button>modo oscuro</button>\n    <button>descargar lista</button>\n    <input type="file"></input>\n    <button>scroll</button>',document.querySelector("header > button").addEventListener("click",g),document.querySelector("header > button:nth-of-type(2)").addEventListener("click",S),document.querySelector("header > button:nth-of-type(3)").addEventListener("click",j),document.querySelector("header > button:nth-of-type(4)").addEventListener("click",W),document.querySelector("header > input[type='file']").addEventListener("change",I),document.querySelector("header > button:last-of-type").addEventListener("click",F)})),document.querySelector("article img:last-of-type").addEventListener("click",(function(){window.lang="en",D.innerHTML='<button>add player</button>\n    <button>edit player</button>\n    <button>Dark Mode</button>\n    <button>download list</button>\n    <input type="file"></input>\n    <button>scroll</button>',document.querySelector("header > button").addEventListener("click",g),document.querySelector("header > button:nth-of-type(2)").addEventListener("click",S),document.querySelector("header > button:nth-of-type(3)").addEventListener("click",j),document.querySelector("header > button:nth-of-type(4)").addEventListener("click",W),document.querySelector("header > input[type='file']").addEventListener("change",I),document.querySelector("header > button:last-of-type").addEventListener("click",F)}));const D=document.querySelector("header");let _,Z;window.isHistoryNotApplied=!0,window.isWindowNotOpen=!0,document.querySelector("header > button").addEventListener("click",g),document.querySelector("header > button:nth-of-type(2)").addEventListener("click",S);class z{constructor(e,t,n=0){this.name=e,this.score=t,this.index=n}}function X(){localStorage.setItem("playerScores",JSON.stringify(playerScores))}function G(){Z==activityArray.length-1?(_=JSON.stringify(playerScores),activityArray.push(JSON.parse(_)),Z++,console.log(activityArray)):(console.log(`indexo:${Z}`),console.log(`activityArray.length:${activityArray.length}`),console.log("activityArray:"),console.log(activityArray),activityArray.length=Z+1,console.log(`activityArray.length:${activityArray.length}`),console.log("activityArray:"),console.log(activityArray),console.log(`indexo:${Z}`),console.log(activityArray),_=JSON.stringify(playerScores),activityArray.push(JSON.parse(_)),Z++,console.log(activityArray))}localStorage.playerScores?(window.playerScores=JSON.parse(localStorage.playerScores),_=JSON.stringify(playerScores),window.activityArray=[JSON.parse(_)],Z=activityArray.length-1):(window.playerScores=[new z("gabbeeto",1),new z("memo",2,1),new z("jay",5,2)],_=JSON.stringify(playerScores),window.activityArray=[JSON.parse(_)],Z=activityArray.length-1),C(),document.addEventListener("keydown",(function(e){switch(e.keyCode){case 90:if(0!=Z){console.log(e),Z-=1;let t=JSON.stringify(activityArray[Z]);playerScores=JSON.parse(t),C()}break;case 88:if(Z!=activityArray.length-1){console.log(e),Z+=1;let t=JSON.stringify(activityArray[Z]);playerScores=JSON.parse(t),C()}}}))})()})();