let cachorro = {
    raca: "Raça não definida",
    nome: "Nome não definido",
    idade: "Idade não definida",
    brinquedoFavorito: "Brinquedo não definido"
}

let labrador = Object.create(cachorro)
labrador.raca = "Labrador"
labrador.nome = "Rex"
labrador.idade = 4
labrador.brinquedoFavorito = "Ossinho de pelúcia"

console.log(labrador.raca)
console.log(labrador.nome)
console.log(labrador.idade)
console.log(labrador.brinquedoFavorito)