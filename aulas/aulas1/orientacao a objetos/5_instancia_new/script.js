function Cachorro (raca, cor, nome, idade) {
    this.raca = raca
    this.cor = cor
    this.nome = nome
    this.idade = idade
    this.uivar = function() {
        console.log("AuUuuuU")
    }
}

const husky = new Cachorro("Husky", "cinza", "Tobi", 6)

console.log(husky)