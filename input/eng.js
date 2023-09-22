import './img/english.jpeg';
import './img/spanish.jpeg';
import { addScroll} from './scroll.js'
import { activateDarkMode} from './darkmode.js'
import { addPlayerButton, editPlayerButton } from './window.js';
import { downloadFile, uploadFile } from './downloadAndUpload.js';

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

document.querySelector('header > button').addEventListener('click', addPlayerButton);
document.querySelector('header > button:nth-of-type(2)').addEventListener('click', editPlayerButton);
document.querySelector('header > button:nth-of-type(3)').addEventListener('click',activateDarkMode)
document.querySelector('header > button:nth-of-type(4)').addEventListener('click', downloadFile)
document.querySelector(`header > input[type='file']`).addEventListener('change', uploadFile)
document.querySelector('header > button:last-of-type').addEventListener('click', addScroll);
}

function switchToEnglish(){
window.lang = 'en';
header.innerHTML = `<button>add player</button>
    <button>edit player</button>
    <button>Dark Mode</button>
    <button>download list</button>
    <input type="file"></input>
    <button>scroll</button>`


document.querySelector('header > button').addEventListener('click', addPlayerButton);
document.querySelector('header > button:nth-of-type(2)').addEventListener('click', editPlayerButton);
document.querySelector('header > button:nth-of-type(3)').addEventListener('click',activateDarkMode)
document.querySelector('header > button:nth-of-type(4)').addEventListener('click', downloadFile)
document.querySelector(`header > input[type='file']`).addEventListener('change', uploadFile)
document.querySelector('header > button:last-of-type').addEventListener('click', addScroll);

}


