let rateLevel = document.getElementsByClassName('level')
let star = document.getElementsByClassName('star')

function selectLevel(e) {
    for (let i = 0; i < 10; i++) {
        rateLevel[i].style.backgroundColor = '#fff'
    }
    e.target.style.backgroundColor = '#fcd703'
    console.log('Probabilidade de recomendar o curso: ' + e.target.value)
}
function unselectLevel(e) {

    e.target.style.backgroundColor = '#fff'
}
function selectStars(e) {
    e.target.style.color = '#fcd703'
    for (let i = 0; i < 5; i++) {
        star[i].style.color = '#fff'
    }
    for (let i = 0; i < e.target.id; i++) {
        star[i].style.color = '#fcd703'
    }
    console.log('Avaliação da monitoria: ' + e.target.id)
}
for (let i = 0; i < rateLevel.length; i++) {
    rateLevel[i].addEventListener('click', selectLevel)
}
for (let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', selectStars)
}

