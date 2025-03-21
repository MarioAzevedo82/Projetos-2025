// 1. getElementById
// Seleciona um único elemento pelo seu id.
// Retorna um único elemento ou null se não existir.

// let titulo = document.getElementById('meuTitulo')
// titulo.style.color = 'red'

// let itens = document.getElementsByClassName("item")
// for (let i = 0; i < itens.length; i++) {
//     itens[i].style.color = 'blue'
// }

// let paragrafos = document.getElementsByTagName('p')
// for(let i = 0; paragrafos.length; i++){
//     paragrafos[i]..style.fontWeight = 'bold'
// }

document.getElementById('meuTitulo').style.color = 'orange'
document.getElementsByClassName('item')[0].style.color = 'pink'
document.getElementsByTagName('p')[1].style.fontSize = '20px'
document.querySelector("li.destacado").style.backgroundColor = 'yellow'
document.querySelectorAll('p').forEach(p => p.style.border = '1px solid')
