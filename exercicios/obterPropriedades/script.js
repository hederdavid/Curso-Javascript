function obterPropriedades(objeto) {
    for (let propriedade in objeto) {
      if (objeto.hasOwnProperty(propriedade)) {
        console.log(propriedade)
      }
    }
  }

  const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Engenheiro', 
    altura: '1,80'
  };
  
  obterPropriedades(pessoa)
  