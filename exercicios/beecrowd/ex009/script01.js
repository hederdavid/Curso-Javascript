const nome = prompt(('Insira seu nome por gentileza: '))
const salarioFixo = Number(prompt(`${nome}, por favor, insira seu salário fixo.`))
const vendasNoMes = parseFloat(prompt('Insira por fim, quantos reais em vendas você fez esse mês.'))
const salarioComBonus = (vendasNoMes * 15) / 100 + salarioFixo
alert(`${nome}, com o bônus de 15% no total de vendas do mês, você receberá ${salarioComBonus} reais.`)