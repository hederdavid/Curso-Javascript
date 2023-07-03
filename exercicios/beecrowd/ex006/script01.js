alert('Iremos calcular a média das suas notas, lembrando que a primeira nota tem peso 2, a segunda tem peso de 3 e a terceira tem o peso 5.')
const nota1 = parseFloat(prompt('Insira a primeira nota:'))
const nota2 = parseFloat(prompt('Insira a segunda nota nota:'))
const nota3 = parseFloat(prompt('Insira a terceira nota nota:'))
const media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10
alert(`Sua média final é: ${media.toFixed(2)}`)