alert('Programa criado com a finalidade de calcular seu salário')
const dinheiroPorHora = parseFloat(prompt('Insira quantos reais você recebe por hora trabalhada:'))
const hora = parseFloat(prompt('Quantas horas você pretende trabalhar por dia, em média nesse mês?'))
const horasTrabalhadasNoMes = hora * 22
const salario = horasTrabalhadasNoMes * dinheiroPorHora
alert(`Trabalhando ${hora} horas por dia em média, ao final do mês você trabalhará ${horasTrabalhadasNoMes} horas por mês e recebera de salário ${salario} reais.`)
alert('Detalhe, salário baseado em um mês de 30 dias, e não trabalhando sábado e domingo.')