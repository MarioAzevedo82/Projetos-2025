// O loop for em JavaScript

// Estrutura básica do for
// for (inicialização, condição, incremento) {
    // bloco de código
// }

// Exmeplo 1. Contando de 1 a 5

i=1

for (i; i <= 5; i++){
    console.log(i)
}
console.log('')
//Exemplo 2: Iterando sobre um array

const veiculos = ["carro", "moto", "jetsky"]
i = 0
for (i; i < veiculos.length; i++) {
    console.log(veiculos[i])
}
console.log(veiculos)
console.log('')

//Exemplo 3: soma de números

let soma = 0

for (let i = 1; i <= 10; i++) {
    soma += i
}

console.log(`A soma de 1 a 10 é: ${soma}`)
console.log('')

//Exemplo 4. Loop reverso

for (let i = 5; i > 0; i--) {
    console.log(i)
}
console.log('')

//Exemplo 5. Pulando números


for (let i = 0; i <= 10; i+=2) {
    console.log(i)
}
console.log('')

//Exemplo 6. Tabuada do numero 7
const numero = 7
for (let i = 1; i<=10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}
console.log('')

//Exemplo 7. Iterando sobre um objeto usando Object.keys

const pessoa = {nome: "Mario", idade: 43, cidade: "Florianópolis"}
for (let chave of Object.keys(pessoa)) {
    console.log(`${chave}: ${pessoa[chave]}`)
}

console.log("")

//Exemplo 8 Somando números pares
let somaPares = 0
for (let i = 0; i <= 20; i++) {
    if ( i % 2 == 0) {
        somaPares += i
    }
}
console.log(`A soma dos pares de 1 a 20 é ${somaPares}`)
console.log('')

// Exemplo 10: Loop aninhado (tabuada completa de 1 a 5)
for (let i = 1; i <= 5; i++) {
    console.log(`Tabuada do ${i}`)
    for(let j = 1; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`)
    }
}