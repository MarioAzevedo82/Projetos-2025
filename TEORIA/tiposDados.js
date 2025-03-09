// Tipos Primitivos
// Os tipos primitivos são imutáveis e armazenam valores diretamente na memória.

// 1️⃣ string – Texto
// Usado para armazenar palavras, frases ou caracteres.
let nome = "Mario"
let cidade = "São Paulo"
let cao = "Pug"
let mensagem = `Olá, ${nome}`
console.log(typeof nome) 
console.log(mensagem)

// 2️⃣ number – Números
// Pode ser inteiro (int) ou decimal (float).
let idade = 43
let altura = 1.84
let temperatura = -3.9
console.log( typeof idade)

// 3️⃣ boolean – Verdadeiro ou falso (true / false)
// Usado para representar valores lógicos.
let programador = true
let jogador = true
console.log(typeof programador)
console.log(typeof jogador)

// 4️⃣ null – Valor nulo
// Representa ausência de valor.
let salario = null
console.log(typeof salario)

// 5️⃣ undefined – Valor indefinido
// Quando uma variável existe, mas não foi inicializada.
let endereco
console.log(typeof endereco)

// 6️⃣ symbol – Identificador único
// Usado para criar valores únicos, mesmo que tenham o mesmo conteúdo.
let id1 = Symbol("id")
let id2 = Symbol("id")
console.log(id1 === id2)
console.log(typeof id1)

// 🔵 Tipos de Referência (Objetos)
// Os tipos de referência armazenam referências na memória, e não o valor diretamente.

// 1️⃣ Arrays (listas de valores)
let frutas = ['Uva', 'Banana', 'Kiwi']
console.log(typeof frutas)

//2️⃣ Objetos (estrutura de chave e valor)
let carro = {marca: "Fiat", modelo: "Pálio"}
console.log(typeof carro)

//3️⃣ Funções (blocos de código reutilizáveis)
function saudacao(){
    console.log(`Olá, ${nome}`)
}
saudacao()
console.log(typeof saudacao)