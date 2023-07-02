const produto1 = {
    codigo: '12',
    quantidade: 1,
    valorUnitario: 5.3
}

const produto2 = {
    codigo: 13,
    quantidade: 2,
    valorUnitario: 5.1
}

const valorAPagar = produto1.quantidade * produto1.valorUnitario + produto2.quantidade * produto2.valorUnitario 

console.log(`VALOR A PAGAR: R$ ${valorAPagar}`)