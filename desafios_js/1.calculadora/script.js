function calcular() {
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite números válidos")
        return
    }
    
    document.getElementById("soma").textContent = num1 + num2;
    document.getElementById('sub').textContent = num1 - num2;
    document.getElementById('prod').textContent = num1 * num2;
    document.getElementById('div').textContent = num2 !== 0 ? (num1/num2).toFixed(2) : "Erro (divisão por zero)";
    document.getElementById('modulo').textContent = num2 !== 0 ? num1 % num2 : "Erro (divisão por zero)";
    document.getElementById('expon').textContent = num1 ** num2
    
}
