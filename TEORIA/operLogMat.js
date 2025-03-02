// Criando uma Calculadora Simples
// Crie um código que recebe dois números e realiza as operações básicas.

// 📌 Desafio:

// Peça ao usuário dois números.
// Realize as operações matemáticas básicas.
// Exiba os resultados no console.

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Digite o primeiro número: ", (input1) => {
//   rl.question("Digite o segundo número: ", (input2) => {
//     let num1 = Number(input1);
//     let num2 = Number(input2);

//     console.log(`Soma: ${num1 + num2}`);
//     console.log(`Subtração: ${num1 - num2}`);
//     console.log(`Multiplicação: ${num1 * num2}`);
//     console.log(`Divisão: ${num1 / num2}`);
//     console.log(`Módulo: ${num1 % num2}`);
//     console.log(`Exponenciação: ${num1 ** num2}`);

//     rl.close();
//   });
// });

const readline = require("readline-sync");

let num1 = Number(readline.question("Digite o primeiro número: "));
let num2 = Number(readline.question("Digite o segundo número: "));

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`Multiplicação: ${num1 * num2}`);
console.log(`Divisão: ${num1 / num2}`);
console.log(`Módulo: ${num1 % num2}`);
console.log(`Exponenciação: ${num1 ** num2}`);
