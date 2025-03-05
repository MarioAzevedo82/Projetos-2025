// 📖 Teoria Rápida
// 1️⃣ Arrays (Listas)
// Os arrays armazenam vários valores dentro de uma única variável.

let frutas = ["Maçâ", "Banana", "Uva"]
console.log(frutas)
console.log(frutas[1])
console.log('')

frutas.push("Kiwi") // adiona elemento ao final
console.log(frutas)
console.log('')

frutas.pop() // remove elemento ao final
console.log(frutas)
console.log('')

frutas.shift() // remove o primeiro elemento
console.log(frutas) 
console.log('')

frutas.unshift("Abacate") // adiciona um elemento no início
console.log(frutas)
console.log('')

frutas.push("Morango", "Limão")
console.log(frutas)
console.log(frutas.length)
console.log("")

// 2️⃣ Objetos (Dicionários)
// Os objetos armazenam dados em pares chave-valor.

pessoa = {
    nome: "Mario",
    sobrenome: "Azevedo",
    idade: 43,
    profissao: "Programador"
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)

// modificando os valores do objeto

pessoa.idade = 44
pessoa.email = 'mario@email.com' // adiciona nova chave
console.log(pessoa)
console.log("")

// Exercícios Práticos
// 1️⃣ Crie um array chamado numeros com pelo menos 5 números e exiba 
// o terceiro elemento no console.

let numeros = [10, 20, 30, 40, 50]
console.log(numeros[2]) // exibe o 3o número

// 2️⃣ Adicione um número ao final do array e remova o primeiro. 
// Exiba o array atualizado.

numeros.push(60)
numeros.shift(1)
console.log(numeros)
console.log("")

// 3️⃣ Crie um objeto chamado carro com as propriedades marca, modelo e ano. 
// Exiba o modelo no console.

carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2015
}
console.log(carro)
// 4️⃣ Modifique o ano do carro e adicione uma nova propriedade chamada cor. 
// Exiba o objeto atualizado no console.
carro.ano = 2020
carro.cor = "Preta"
console.log(carro)

