let num0 = 0
let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4
let num5 = 5
let num6 = 6

function imprimirNumeros (...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
}

imprimirNumeros(num0, num2, num3)
imprimirNumeros(1, 23, 3, 4, 5, 6, 7, 8, 9, 10)
