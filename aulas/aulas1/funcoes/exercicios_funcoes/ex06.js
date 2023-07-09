const tipoDeDado = (dado) => {

    const tipo = typeof(dado)
    

    if (tipo == "number") {
        console.log(`${dado} é do tipo Number`)
    } else if (tipo == "string"){
        console.log(`${dado} é do tipo String`)
    } else {
        console.log(`${dado} é do tipo Boolean`)
    }
}

tipoDeDado(true)
tipoDeDado('"Oi"')
tipoDeDado(19)