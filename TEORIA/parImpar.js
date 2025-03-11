
function parImpar(numero) {
    
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par!`)
    } else {
        console.log(`O número ${numero} é ímpar!`)
    }
} 

parImpar(4)
parImpar(9)

// function parImpar2(number) {
//     if (number % 2 ===0){
//        return true
//     } else {
//        return false
//     }
// }

// console.log(parImpar2(4))

function parImpar2(number) {
    return number % 2 === 0
}

console.log(parImpar2(7))
console.log(parImpar2(6))