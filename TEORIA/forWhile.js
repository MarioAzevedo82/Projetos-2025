// 📌 6. Laços de Repetição (for e while)
// 📖 Teoria

// Os laços de repetição (loops) são usados para executar um bloco de código várias
// vezes. Os dois mais comuns são for e while.
// for: Quando o número de repetições é conhecido.
// while: Quando a condição é avaliada dinamicamente.



// 🔹 For (Quando o número de repetições é conhecido)
// A estrutura do for tem três partes principais:

// for (inicialização; condição; incremento){
//     //código a ser repetido
// }

// Inicialização: Define a variável de controle.
// Condição: Determina até quando o loop deve continuar.
// Incremento: Modifica a variável de controle a cada iteração.

// Exemplo: Exibir números de 1 a 5

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let i = 0; i <= 20; i+=2){
    console.log(i)
}

// 🔹 While (Quando a condição é avaliada dinamicamente)
// O while continua executando o código enquanto a condição for verdadeira.

// while(condição){
//     código a ser executado
// }

// Exmeplo: Excibir os números de 1 a 5

let i = 1
while(i <=5){
    console.log(i)
    i++
}
console.log("")

// 📝 Exercícios Práticos
// 1️⃣ Exibir números de 1 a 10 usando for e while
for (let a = 1; a<=10; a++){
    console.log(a)
}
console.log("")
b = 1
while(b <= 10){
    console.log(b)
    b++
}

// 2️⃣ Pedir um número ao usuário e exibir a tabuada dele

numero = 3
for(let i = 1; i <=10; i++){
    console.log(`${numero} X ${i} = ${numero * i}`)
}
num = 5
let n = 1
while(n <= 10) {
    console.log(`${num} X ${n} = ${num * n}`)
    n++
}

const readlineSync = require("readline-sync");
let num1 = parseInt(prompt("digite um número"))

for(let i = 1; i <=10; i++){
    console.log(`${num1} X ${i} = ${num1 * i}`)
}