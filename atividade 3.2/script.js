const itens = document.getElementById('itens')
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
const fifth = document.getElementById('fifth')


function quantidadeItens(quantidade) {
    let quantidadeSelecionada = quantidade.options[itens.selectedIndex].value;
    console.log(quantidadeSelecionada)
    if (quantidadeSelecionada == 2) {
        first.style.display = 'flex'
        second.style.display = 'flex'
        third.style.display = 'none'
        fourth.style.display = 'none'
        fifth.style.display = 'none'
    }
    if (quantidadeSelecionada == 3) {
        first.style.display = 'flex'
        second.style.display = 'flex'
        third.style.display = 'flex'
        fourth.style.display = 'none'
        fifth.style.display = 'none'
    }
    if (quantidadeSelecionada == 5) {
        first.style.display = 'flex'
        second.style.display = 'flex'
        third.style.display = 'flex'
        fourth.style.display = 'flex'
        fifth.style.display = 'flex'
    }
}

//itens.addEventListener('onchange', quantidadeItens())