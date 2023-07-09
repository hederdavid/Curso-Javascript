const toPositive = (x) => {
    if (x > 0) {
        console.log("O número já é positivo")
    } else {
        console.log(x * -1)
    }
}

toPositive(-700)