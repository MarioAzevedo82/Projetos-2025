let lista = []

function adicionar() {
    let input = document.getElementById('carros')
    let novoCarro = input.value.trim()

    if (novoCarro !== "") {
        lista.push(novoCarro)
        input.value = ""
        listaAtual()
    } else {
        alert("digite um carro")
    }
}

function removerUltimo() {
    if (lista.length > 0) {
        lista.pop()
        listaAtual()
    } else {
        alert("Lista vazia")
    }
}

function removerPrimeiro() {
    if (lista.length > 0) {
        lista.shift()
        listaAtual()
    } else {
        alert("Lista vazia!")
    }
}


function listaAtual() {
    let listaCarros = document.getElementById('listaCarros')
    listaCarros.innerHTML = ""

    lista.forEach(function(carro){
        let li = document.createElement('li')
        li.textContent = carro
        listaCarros.appendChild(li)
    })
}