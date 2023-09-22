let scrollButton = document.querySelector('button:last-of-type');
let mainContainer = document.querySelector('main');

scrollButton.addEventListener('click', addScroll);

function addScroll(){
mainContainer.classList.toggle('scroll')
}




