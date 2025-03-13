const readlineSync = require("readline-sync"); // Importa biblioteca para entrada do usuário no terminal

let numero = parseInt(readlineSync.question("Digite um número para ver a tabuada: "));

if (isNaN(numero)) {
    console.log("Por favor, digite um número válido!");
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
