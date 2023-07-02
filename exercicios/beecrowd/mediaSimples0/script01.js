alert('Iremos calcular a média das suas notas, lembrando que a primeira nota tem peso 3.5, e a segunda 7.5')
const nota1 = parseFloat(prompt('Insira a primeira nota:'))
const nota2 = parseFloat(prompt('Insira a segunda nota nota:'))
const media = (nota1 * 3.5 + nota2 * 7.5) / 11
alert(`Sua média final é: ${media.toFixed(2)}`)