function enviar() {
    let nome = document.getElementById('nome').value.trim()
    let sobrenome = document.getElementById('sobrenome').value.trim()
    let idade = Number(document.getElementById('idade').value)
    let profissao = document.getElementById('profissao').value.trim()
    let email = document.getElementById('email').value.trim()
    let resultado = document.getElementById('resultado')

    if (nome === "" || sobrenome === "" || isNaN(idade) || profissao === "" || email === "") {
        alert("Por favor, preencha todos os campos corretamente.")
        return
    }

    resultado.textContent = `Nome: ${nome} ${sobrenome}; 
     Idade: ${idade}; 
     Profissão: ${profissao}; 
     E-mail: ${email}`
}