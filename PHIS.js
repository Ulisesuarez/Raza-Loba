const Tabla = require('./Tabla')
const Correlacion = require('./Correlacion')
const Diario = require('./Diario')
module.exports = {
    mapaCoeficientes:[],
    calcularCorrelaciones:function (diario){
        for (let registro in diario){
            if(diario.hasOwnProperty(registro)){
                for (let evento in diario[registro].eventos){
                    if (!(diario[registro].eventos[evento] in this.mapaCoeficientes)){
                        this.mapaCoeficientes[diario[registro].eventos[evento]]= Correlacion.phi(Tabla.tablaPara(diario[registro].eventos[evento],diario))
                    }
                }
            }
        }
    },
    mostrarPhis: function () {
        for (let evento in this.mapaCoeficientes) {
            if (this.mapaCoeficientes.hasOwnProperty(evento)) {
                console.log('La correlación para ' + evento + ' es ' + this.mapaCoeficientes[evento].toString())
            }
        }

    },
    testPHIS: function () {
        Diario.registros=[]
        Diario.incluirRegistro({eventos:["trabajar", "abrazar un árbol", "pizza", "correr", "television"], pulpo: false})
        Diario.incluirRegistro({eventos:["trabajar", "helado", "coliflor", "lasaña", "abrazar un árbol", "lavarse los dientes"], pulpo: false})
        Diario.incluirRegistro({eventos:["pescar", "bicicleta", "descansar", "mejillones", "cerveza"], pulpo: true})
        this.calcularCorrelaciones(Diario.registros)
        this.mostrarPhis()
    }
}