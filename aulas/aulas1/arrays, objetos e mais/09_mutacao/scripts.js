let pessoa = {
    nome: "Heder"
}

let pessoa2 = pessoa

let pessoa3 = {
    nome: "Heder"
}

console.log(pessoa2 == pessoa)
console.log(pessoa3 == pessoa)
console.log(pessoa3 == pessoa2)

console.log(pessoa2)

pessoa2.nome = "Irineu"

console.log(pessoa)