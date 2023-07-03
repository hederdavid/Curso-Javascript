// Escreva um programa que leia dois valores X e Y. A seguir, mostre uma sequência de 1 até Y, passando para a próxima linha a cada X números.
let x = 3
let y = 99
let saida = ''

for (let i = 1; i <= y; i++) {
  saida += i.toString()

  if (i % x === 0) {
    console.log(saida)
    saida = '' 
  } else {
    saida += ' '
  }
}
