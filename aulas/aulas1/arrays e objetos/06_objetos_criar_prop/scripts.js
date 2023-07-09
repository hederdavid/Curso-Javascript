let pessoa = {
    nome: "Heder",
    profissao: "Programador",
    idade: 19,
    saudacao: () => {
        console.log("Olá!, me chamo Heder.")
    }
}

console.log(pessoa.nome)
pessoa.saudacao()
delete pessoa.nome
console.log(pessoa.nome)
pessoa.casado = false
console.log(pessoa.casado)