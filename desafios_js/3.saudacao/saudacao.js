function enviar() {
    const nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    
    if (nome === "" || idade === "") {
        alert("Preencha todos os campos.")
        return
    }

    document.getElementById('saudacao').textContent = `Olá ${nome}, sua idade é ${idade} anos.`
}