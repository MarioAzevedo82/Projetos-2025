const titulo = document.getElementById('titulo')
titulo.style.color = 'blue'


const paragrafos = document.querySelectorAll('.descricao')
paragrafos.forEach(p => {
    p.style.backgroundColor = "yellow"
});

const itensLista = document.querySelectorAll('.item')
itensLista.forEach((item, index) => {
    item.textContent = `Novo Item ${index + 1}`
})

const botao = document.querySelector("#btn")
const lista = document.querySelector("ul")

botao.addEventListener("click", () => {
    if(lista.style.display === "none") {
        lista.style.display = "block"
    }else {
        lista.style.display = "none"
    }
})





