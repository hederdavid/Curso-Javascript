let pessoa = {
    "nome": "Heder",
    "idade": 20,
    "profissao": "programador",
    "hobbies": ["Treinar", "Ler"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)

console.log(pessoaJSON)