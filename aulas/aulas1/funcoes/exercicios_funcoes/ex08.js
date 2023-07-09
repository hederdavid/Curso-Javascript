const lenghtOf = (text) => {
    const lenghtText = text.length
    
    if (lenghtText > 10) {
        console.log("Texto muito longo!")
    } else {
        console.log("Texto dentro do limite.")
    }
}

lenghtOf("Abacate")