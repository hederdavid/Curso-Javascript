alert('Irei calcular o volume de uma esfera para você')
const raio = Number(prompt('Insira o valor do raio da sua esfera:'))
const volume = (4/3) * 3.14 * raio ** 3
alert(`Sua esfera de raio ${raio}, tem como volume o valor ${volume.toFixed(1)}.`)