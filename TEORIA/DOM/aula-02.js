//aula-02
document.getElementById("idCustomizada").innerHTML = "<b>Eu sou o conteúdo HTML do JS...</b>"

//aula-03
document.getElementsByName("nomeDiv")[0].innerHTML = "<b>Div por nome no JS...</b>"
setTimeout(() => {
    document.getElementsByName("nomeDiv")[1].innerText = "Texto da div usando setTimeout de maneira didática..."  
}, 3000);

//aula-04
document.getElementsByClassName("minhaClasse")[1].innerHTML = "<b>Conteúdo do inner</b>"

setTimeout(() => {
    document.getElementsByClassName("minhaClasse")[2].innerHTML = "<b>IV</b>"
}, 3000);
setTimeout(() => {
    document.getElementsByClassName("minhaClasse")[2].innerHTML = "<b>V</b>"
}, 4000);