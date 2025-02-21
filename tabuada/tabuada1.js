function clicar() {
    const numero = document.getElementById('numero').value
    const resultado = document.getElementById('resultado')

    resultado.innerHTML = ''

    if (numero === '') {
        resultado.innerHTML = '<p>Por favor, digite um número</p>'
        resultado.style.color = 'red'
        return
    }

    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += `<p>${numero} X ${i} = ${numero * i}</p>`
    }
}