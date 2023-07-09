let carro = {
    marca: "VW",
    portas: 4,
    portamalas: "200L",
    motor: "1.0",
    ano: 2007
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true
}

console.log(carro)

Object.assign(carro, adicionais)

console.log(carro)