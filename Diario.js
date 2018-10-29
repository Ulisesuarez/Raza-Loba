const Registros = require('./Registros');

module.exports = {
    registros:[],
    incluirRegistro: function (registro) {
        this.registros.push(registro)
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
        this.mostrarDiario(this.registros)
        console.log(this.registros.length)
    }
}
