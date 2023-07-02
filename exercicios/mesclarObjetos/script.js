function mesclarObjetos(objeto1, objeto2) {
    for (let propriedade in objeto2) {
      if (objeto2.hasOwnProperty(propriedade)) {
        objeto1[propriedade] = objeto2[propriedade];
      }
    }
    return objeto1;
}

const informacoes = {
    nome: 'Heder',
    sobrenome: 'David',
    idade: 19,
    altura: '1,74m'
}

const endereco = {
    estado: 'Bahia',
    cidade: 'Vitória da Conquista',
    bairro: 'Alto Maron',
    rua: 'Floriano Peixoto',
    numero: '84'
}
const objetoMesclado = mesclarObjetos(informacoes, endereco)
console.log(objetoMesclado)