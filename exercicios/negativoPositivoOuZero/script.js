alert("Programa criado com a finalidade de dizer se um número inserido é 0, positivo ou negativo.")
const numero = Number(prompt("Insira um número:"))
if (numero == 0) {
    alert(`${numero} é igual a 0`)
} else if (numero % 2 == 0 ) {
    alert(`${numero} é um número par`)
} else {
    alert(`${numero} é um número ímpar`)
}