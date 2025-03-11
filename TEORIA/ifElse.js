// 📌 Estrutura do if e else
// O if avalia uma condição e, se for verdadeira, executa um bloco de código. 
// O else entra em ação quando a condição for falsa.

let idade = 18

if (idade >= 18) {
    console.log("Maior de idade.")
} else {
    console.log("Menor de idade.")
}

// 📌 else if para múltiplas condições
// Se houver mais de uma condição a ser avaliada, usamos else if.

let nota = 8.5

if (nota >= 9.0){
    console.log("Aprovado com excelência.")
} else if (nota >= 7.0) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

// 📌 Condicional com operadores lógicos
// Podemos usar operadores lógicos (&&, ||, !) para combinar condições.

let age = 20
let temCarteira = true

if (age >= 18 && temCarteira) {
    console.log("Pode dirigir.")
} else {
    console.log("Não pode dirigir.")
}

// Treino

let x = 10
let y = 20

if (x > y){
    console.log("X é maior que Y.")
} else {
    console.log("Y é maior que X.")
}

// Exercícios Práticos
// 1️⃣ Crie um programa que verifica se um número é positivo, negativo ou zero 
// e exiba no console.
let num = -8
if (num == 0){
    console.log("O número é Zero.")
} else if (num > 0){
    console.log("O número é positivo.")
} else {
    console.log("O número é negativo.")
}


// 2️⃣ Crie um sistema que verifica se uma pessoa pode votar (idade >= 16).

let anos = 15
let temTitulo = true
if (anos >= 16 && temTitulo){
    console.log("Pode votar.")
} else {
    console.log("Não pode votar.")
}
// 3️⃣ Escreva um código que verifica se um número é múltiplo de 5.

let mult5 = 25
if (mult5 % 5 == 0 || mult5 % 5 == 5){
    console.log("É múltiplo de 5")
} else {
    console.log("Não é múltiplo de 5.")
}
// 4️⃣ Peça um nome pelo prompt() e verifique se o nome tem mais de 5 caracteres.