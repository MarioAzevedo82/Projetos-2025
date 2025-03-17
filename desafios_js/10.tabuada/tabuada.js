function enviar() {
    let num = document.getElementById('num').value 
    let resultado = document.getElementById('resultado')
    let i = 1

    if(num === ""){
        resultado.textContent = "Por favor, insira um número válido!"
        resultado.style.color = 'red'
        return
    }

    resultado.style.color = 'black'
    resultado.innerHTML = `<h3>Tabuada de ${num}</h3>`

    while (i <= 10) {
        resultado.innerHTML += `<p>${num} X ${i} = ${num * i}</p>`
        i++
    }
}