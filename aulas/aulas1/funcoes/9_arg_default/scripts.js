const potencia = (base, exp = 2) => {
    return Math.pow(base, exp)
}

const repetirFrase = (frase, n=2) => {
    for(let i = 0; i < n; i++) {
        console.log(`${frase} ${i + 1}`)
    }
}

console.log(potencia(3))

repetirFrase("OII")