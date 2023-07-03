alert('Programa criado com a finalidade de verificar qual o maior número inserido.')
let num1 = Number(prompt('Insira um número:'))
let num2 = Number(prompt('Insira outro número:'))
let num3 = Number(prompt('Insira mais um número:'))

let maiorNumero = 0

if (num1 > num2 && num1 > num3) {
     maiorNumero = num1
} else if (num2 > num1 && num2 > num3) {
     maiorNumero = num2
} else {
     maiorNumero = num3
}

alert(`${maiorNumero} é o maior número inserido.`)