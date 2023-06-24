const numero = Number(prompt("Insira um número:"))
let numeroElemento = document.getElementById("numero-h1")
const texto = document.getElementById("texto")
numeroElemento.innerHTML = numero 
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}</p>`
