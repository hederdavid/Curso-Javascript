const soma = (x, y) => {
    if (x == undefined || y == undefined) {
        console.log("Você precisa inserir dois valores")
    } else {
        return x + y
    }
}

console.log(soma(2))

const saudacao = (nome, idade) => {
    if (idade === undefined) {
        console.log(`Prazer ${nome}!`)
    } else {
        console.log(`Prazer ${nome}, você tem ${idade} anos`)
    }
}

saudacao("heder", 19)