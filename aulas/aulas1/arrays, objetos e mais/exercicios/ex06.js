const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3]

let numeroElementos = (array) => {
    if (array.length < 5) {
        console.log("Poucos elementos")
    } else if (array.length > 5) {
        console.log("Muitos elementos")
    }
        
}

numeroElementos(arr1)