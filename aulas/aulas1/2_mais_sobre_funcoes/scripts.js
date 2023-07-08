function multiplicarTresNumeros (x, y, z) {
    return x * y * z
}

const mult = multiplicarTresNumeros(2, 3, 4)
console.log(mult)

function podeDirigir (idade, cnh) {
    if (idade >= 18 && cnh === true) {
        return "Pode dirigir."
    } else {
        return "Não pode dirigir."
    }
}

console.log(podeDirigir(18, true))
console.log(podeDirigir(17, true))
console.log(podeDirigir(19, false))