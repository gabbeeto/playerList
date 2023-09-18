let window = document.querySelector('#window');

export function addPlayerButton() {
window = document.querySelector('#window');

  console.log(window)
window.innerHTML = `<button>close</button>
<p>name:</p>
<input type="text">
<button>agregar</button>
`
window.style.display = 'flex';
}


export function editPlayerButton() {
  alert('editing player')
}
