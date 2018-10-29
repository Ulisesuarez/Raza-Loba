const Registros = require('./Registros');
let registros=[]
module.exports = {
    incluirRegistro: function (registro) {
        registros.push(registro)
    },
    mostrarDiario: function (registros) {
        for (let registro in registros) {
            Registros.mostrarRegistro(registros[registro])
        }
    },
    testDiario: function () {
        this.incluirRegistro({
            eventos: ['trabajar', 'tocar un árbol', 'pizza', 'correr', 'television'],
            pulpo: false})
        this.incluirRegistro({
            eventos: ['trabajar', 'helado', 'coliflor', 'lasaña', 'tocar un árbol', 'lavarse los dientes'],
            pulpo: false
        })
        this.incluirRegistro({
            eventos: ['finde', 'bicicleta', 'descansar', 'cacahuetes', 'cerveza'],
            pulpo: true})
        this.mostrarDiario(registros)
        console.log(registros.length)
    }
}
