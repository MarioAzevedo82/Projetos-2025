let frutas = ['Maçã', 'Uva', 'Banana']

function adicionarFruta() {
    let input = document.getElementById('fruta')
    let novaFruta = input.value.trim()

    if (novaFruta !== "") {
        frutas.push(novaFruta)
        input.value = ""
        listarFrutas()
    } else {
        alert("digite uma fruta válida")
    }
}

function removerUltima() {
    if(frutas.length > 0) {
        frutas.pop()
        listarFrutas()
    } else {
        alert("Lista vazia!")
    }
}

function removerPrimeira() {
    if (frutas.length > 0) {
        frutas.shift()
        listarFrutas()
    } else {
        alert("Lista vazia!")
    }
}

function listarFrutas() {
    let lista = document.getElementById('listaFrutas')
    lista.innerHTML = ""

    frutas.forEach(function(fruta) {
        let li = document.createElement("li")
        li.textContent = fruta
        lista.appendChild(li)
    })
}

listarFrutas()