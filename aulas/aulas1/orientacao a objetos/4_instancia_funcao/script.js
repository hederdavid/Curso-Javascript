function criarCachorro (raca, nome, cor, idade) {
    let cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.nome = nome
    cachorro.cor = cor
    cachorro.idade = idade
    return cachorro
}

let bulldog = criarCachorro("Bulldog", "Rex", "Preto", 4)
console.log(bulldog)
