const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('input')
const resultInput = document.querySelector('#result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//aqui pegamos todos os componentes de mesma classe
//depois adicionamos um evendo de click a cada um deles(usando forEach())
//e acionamos uma função a qual receberá o valor de seu data-value
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

//aqui adicionamos um evento ao botão clear(C)
//o qual irá limpar o input
//além disso, também irá focar o cursor no input
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})


input.addEventListener('keydown', function(ev){
    ev.preventDefault() //aqui quero evitar que o usuário digite um caractere qualquer
    //se a tecla digitada for uma das que eu quero, ela sera incluida
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key //ev.key corresponde a tecla que o usário digitou
        return
    }
    //aqui se a tecla backspace for clicada, ela apagara os números
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if(ev.key === 'Enter'){
        calculate()
    }
})

//aqui adicionamos um evento ao botão de 'igual',
//onde acionará a função de calcular
document.getElementById('equal').addEventListener('click', calculate)

function calculate(){
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    //aqui estamos usando o método eval,
    //onde ele irá avaliar o código js escrito pelo usuário e executar este código
    //por exemplo, caso o usuário escreva 2+2 no input ele retornará 4
    //!cuidado ao usar o eval(), pois o usuário poderá acessar dados sensíveis de uma aplicação
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}

//aqui adicionamos um evento de copiar ao botão Copy
document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget //o currentTarget pega quem acionou o evento, neste caso o próprio botão
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied!' //altera o texto do botão
        button.classList.add('success') //altera sua cor para a cor da classe success
        navigator.clipboard.writeText(resultInput.value) //copia o texto do input
    }else{
        button.innerText = 'Copy' //ao clicar de novo no botão volta o tezto para 'Copy'
        button.classList.remove('success') //retorna a cor padrão do botão
    }

})

//aqui aciona a função a qual realiza a troca de themas do site
document.getElementById('themeSwitcher').addEventListener('click', function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty(`--bg-color`, '#f1f5f9')
        root.style.setProperty(`--border-color`, '#aaa')
        root.style.setProperty(`--font-color`, '#212529')
        root.style.setProperty(`--primary-color`, '#26834a')
        main.dataset.theme = 'light'
    } else{
        root.style.setProperty(`--bg-color`, '#212529')
        root.style.setProperty(`--border-color`, '#666')
        root.style.setProperty(`--font-color`, '#f1f5f9')
        root.style.setProperty(`--primary-color`, '#4dff91')
        main.dataset.theme = 'dark'
    }
})