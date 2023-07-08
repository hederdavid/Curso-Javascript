alert("Programa criado com a finalidade de dizer se um número inserido é múltiplo ou não de 5")
const numero = Number(prompt("Insira um número:"))
if (numero % 5 == 0) {
    alert(`${numero} é múltiplo de 5`)

} else {
    alert(`${numero} não é múltiplo de 5`)
}