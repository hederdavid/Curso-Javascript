const soma = (x) => {
    return (y) => x + y
}

const soma1 = soma(3)
console.log(soma1(5))

const contador = (i) => {
    let cont = i
    let somarContador = () => {
        console.log(cont)
        cont++
    }

    return somarContador
}

let meuContador = contador(5)
meuContador()
meuContador()
meuContador()