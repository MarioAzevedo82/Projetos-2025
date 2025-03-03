function enviar() {
    let idade = document.getElementById('idade').value
    let sim = document.getElementById('sim').checked
    let nao = document.getElementById('nao')
    let resultado = document.getElementById('resultado')
    
    if (idade < 18){
        resultado.textContent = 'Menor de idade, proibido dirigir!'
    } else if (sim) {
        resultado.textContent = "Autorizado a dirigir"
    } else {
        resultado.textContent = "Maior de idade, porém sem habilitação"
    }
}