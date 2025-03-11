function enviar() {
    let idade = document.getElementById('idade').value 
    let tempo = document.getElementById('tempo').value 
    let masc = document.getElementById('masc').checked
    let femi = document.getElementById('femi').checked
    let resultado = document.getElementById('resultado')

    if(!masc && !femi){
        resultado.textContent = "Por favor, selecione um gênero."
        return
    }

    if ((masc && (idade >=65 || tempo >= 35)) || (femi && (idade >=62 || tempo >= 30))) {
        resultado.textContent = "Você pode se aposentar!"
    } else {
        resultado.textContent = "Ainda não pode se aposentar."
    }

}