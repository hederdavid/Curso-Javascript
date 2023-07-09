const autoEscola = (idade) => {
    if (idade >= 18 ) {
        console.log(`Você tem ${idade} anos e pode entrar na auto-escola`)
    } else {
        console.log(`Você tem ${idade} anos e não pode entrar na auto-escola`)
    }
}

autoEscola(18)
autoEscola(17)
autoEscola(30)
