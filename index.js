const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Qué yo vaya por un elote con Zoe???????? Obvio q sí, por cierto, SI ES PARA TI LA PREGUNTA ZOE QUE LE DICEN "FLOR" PQ LUEGO DICES Q ES PARA OTRA ZOE')
})

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
