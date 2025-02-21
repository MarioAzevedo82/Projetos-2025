const img = document.getElementById('img') // 1..1
const buttons = document.getElementById('buttons') //1.2
let colorIndex = 0 //5.3

const trafficLight = (event) => { // 2
    // console.log(event.target.id) teste pra mostrar no console em qual botão está pressionando
    turnOn[event.target.id]() //4 usou o raciocíno pra chamar cada string

}

const nextIndex = () => { //6.1
    if (colorIndex < 2) {
        colorIndex++
    } else {
        colorIndex = 0
    }
}

const changeColor = () => { //5.1
    // console.log('teste cor') //teste
    const colors = ['red', 'yellow', 'green'] //5.2
    const color = colors[colorIndex] //5.3
    turnOn[color]() //5.4
    nextIndex() //6
    
}
const turnOn = { // 3
    'red': () => img.src = './img/vermelho.png', //3.1
    'yellow': () => img.src = './img/amarelo.png', //3.2
    'green': () => img.src = './img/verde.png', //3.3
    'automatic': () => setInterval(changeColor, 500 ) // 5 *500 milisegundos o tempo de pra mudar de cor
}

buttons.addEventListener( 'click', trafficLight) //1.3