const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isLampBroken () { //5
    return lamp.src.indexOf ( 'quebrada') > -1 //5
}


function lampOn() { //1
    if ( !isLampBroken ()) { //6
    lamp.src = './imagens/ligada.jpg'
    }
}

function lampOff() { //2
    if ( !isLampBroken ()) {  //6
    lamp.src = "./imagens/desligada.jpg"
    }
}

function lampBroken() { //4
    lamp.src = './imagens/quebrada.jpg'
}

turnOn.addEventListener ('click', lampOn )//1
turnOff.addEventListener('click', lampOff)//2
lamp.addEventListener( 'mouseover', lampOn)//3
lamp.addEventListener( 'mouseleave', lampOff)//3
lamp.addEventListener ('dblclick', lampBroken)//4


