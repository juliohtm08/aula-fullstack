function useLightTheme(){
  document.body.style.color = '#212529' // cor de texto
  document.body.style.backgroundColor = '#f1f5f9'// cor do background
}

function useDarkTheme(){
  document.body.style.color = '#f1f5f9' // cor de texto
  document.body.style.backgroundColor = '#212529'// cor do background
}

function switchTheme(){
  //O "toggle" serve basicamente para altenar entre dois estados, neste caso ao clicar no mesmo botão
  //ele está alternando entre os temas claro e escuro
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)