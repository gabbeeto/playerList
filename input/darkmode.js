let isDarkMode = matchMedia('(prefers-color-scheme: dark)').matches;

if (isDarkMode) {

  activateDarkMode()

}


function activateDarkMode() {
  let html = document.querySelector('html')
  html.classList.toggle('dark')
  let darkModeButton = document.querySelector('header > button:last-of-type');
  if (html.className == 'dark') {
    darkModeButton.innerText = 'modo claro'
  }
  else{
    darkModeButton.innerText = 'modo oscuro'

  }
}
