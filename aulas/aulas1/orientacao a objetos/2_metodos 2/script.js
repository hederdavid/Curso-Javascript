const cachorro = {
    raca: "Sem raça definida",
    latir: function () {
        console.log("Au Au")
    },
    rosnar: function () {
        console.log("GRRRRR")
    },

    setRaca: function (raca) {
        this.raca = raca
    },

    getRaca: function () {
        return "A raça é " + this.raca
    }
}

cachorro.setRaca("Bulldog")
console.log(cachorro.raca)
cachorro.latir()
cachorro.rosnar()
console.log(cachorro.getRaca())