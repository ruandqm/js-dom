let input = document.querySelectorAll('.input')
let button = document.getElementById('submit')

let nome = document.getElementById('nome')
let endereco = document.getElementById('endereco')
let funcionamento = document.getElementById('funcionamento')

campos = [nome, endereco, funcionamento]
for (let i = 0; i < campos.length; i++) {
    campos[i].addEventListener('change', storage)
}

function recuperarDados() {
    for (let i = 0; i < campos.length; i++) {
        campos[i].value = window.localStorage.getItem(campos[i])
    }
}

function storage(e) {
    window.localStorage.setItem(e.target.id, e.target.value)
}
function focus(e) {
    e.target.style.border = '0.2em solid #590080'
}
function blur(e) {
    e.target.style.border = '0.1em solid #000'
}

function values() {
    for (let i = 0; i < input.length; i++) {
        let values = input[i].value
        console.log(values)
    }
    console.log('preparando o envio...')
}




/**/

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('focus', focus);
    input[i].addEventListener('blur', blur);

}


button.addEventListener('click', values)




