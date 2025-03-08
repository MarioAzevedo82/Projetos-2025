let tarefas = []

function adicionar() {
    let input = document.getElementById('tarefa')
    let novaTarefa = input.value.trim()

    if(novaTarefa !== ''){
        tarefas.push(novaTarefa)
        input.value = ''
        listaTarefas()
    } else {
        alert("Digite uma tarefa válida!")
    }
}

function removerUltima() {
    if(tarefas.length > 0){
        tarefas.pop()
        listaTarefas()
    } else {
        alert('A lista está vazia!')
    }
}

function removerPrimeira() {
    if(tarefas.length > 0) {
        tarefas.shift()
        listaTarefas()
    } else {
        alert("A lista está vazia!")
    }
}


function listaTarefas() {
    let lista = document.getElementById('lista')
    lista.innerHTML = ""

    tarefas.forEach(function(tarefa) {
        let li = document.createElement("li")
        li.textContent = tarefa
        lista.appendChild(li)
    })
}
