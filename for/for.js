const contando = document.getElementById('contando');
for (let i = 1; i <= 5; i++) {
    contando.innerHTML += `<li>${i}</li>`
}

const frutas = ["maca", "uva", "kywi", "abacate"]
const frutasLista = document.getElementById('frutas')
for (let i = 0; i < frutas.length; i++) {
    frutasLista.innerHTML += `<li>${frutas[i]}</li>`
}

let soma = 0
for (let i = 1; i <= 10; i++) {
    soma += i
}
document.getElementById('soma').innerText = `A soma dos números de 1 a 10 é ${soma}`

const reverso = document.getElementById('reverso')
for (let i = 5; i > 0; i--) {
    reverso.innerHTML += `<li>${i}</li>`
}

const pulando = document.getElementById('pulando');
for (let i = 1; i <=10; i+=2) {
    pulando.innerHTML += `<li>${i}</li>`
}

const tabuada7 = document.getElementById('tabuada7')
for (let i = 1; i <= 10; i++) {
    tabuada7.innerHTML += `<li>7 x ${i} = ${7 * i}</li>`
    
}

const pessoa = {nome: "Mario", cidade: "Florianópolis", idade: 43, profissao:"Desenvolvedor"}
const pessoaObj = document.getElementById('pessoa')
for (let chave of Object.keys(pessoa)) {
    pessoaObj.innerHTML += `<li>${chave}: ${pessoa[chave]}</li>`
}

let somaPares = 0
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        somaPares += i
    }
}
document.getElementById('somaPares').innerHTML += `<li>A soma dos números pares de 1 a 20 é ${somaPares}</li>`

const tabuadaCompleta = document.getElementById('tabuadaCompleta')
for (let i = 1; i <= 5; i++) {
    tabuadaCompleta.innerHTML += `<li>Tabuada do ${i}</li>`
    for (let j = 1; j <=10; j++){
        tabuadaCompleta.innerHTML += `<li>${i} X ${j} = ${i * j}</li>`
    }
    tabuadaCompleta.innerHTML += `<br>`
}