function enviar() {
    let idade = document.getElementById('idade').value
    let peso = document.getElementById('peso').value
    let autorizado = document.getElementById('sim').checked
    let resultado = document.getElementById('resultado')

    if (idade == "" || peso == ""){
        alert("Preencha os campos corretamente")
        return
    }
    if (idade < 16){
        resultado.textContent = "Você não pode doar, idade menor que 16 anos."
    } else if(idade < 18 && autorizado && peso >= 50) {
        resultado.textContent = "Menor autorizado a doar sangue."
    } else if(idade >= 18 && idade <= 69 && peso >=50) {
        resultado.textContent = "Você pode doar sangue."
    } else {
        resultado.textContent = "Não pode doar sangue."
    }

} 