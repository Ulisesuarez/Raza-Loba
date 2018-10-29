const Registros = require('./Registros');
const Diario = require('./Diario')
module.exports = {
    tabla:[ [0,0],
        [0,0]],
    phivalue:0,
    tablaPara: function (evento, diario) {
        let tabla=[ [0,0],
            [0,0]]
        for (let registro in diario){
            if(Registros.contieneEvento(evento,diario[registro].eventos)){
                if(diario[registro].pulpo){
                    tabla[1][1]++
                } else{
                    tabla[0][1]++
                }
            } else{
                if(diario[registro].pulpo){
                    tabla[1][0]++
                } else{
                    tabla[0][0]++
                }

            }
        }
    return tabla},
    mostrarTabla: function (evento, tabla) {
        console.log('la tabla para ' + evento + ' es ' + '[' + tabla[0][0] + ','+ tabla[0][1] + ','+ tabla[1][0] + ','+ tabla[1][1] + ']')
    },
    testTabla:function(){
        Diario.registros=[]
        Diario.incluirRegistro({eventos:["trabajar", "abrazar un árbol", "pizza", "correr", "television"], pulpo: false})
        Diario.incluirRegistro({eventos:["trabajar", "helado", "coliflor", "lasaña", "abrazar un árbol", "lavarse los dientes"], pulpo: false})
        Diario.incluirRegistro({eventos:["pescar", "bicicleta", "descansar", "mejillones", "cerveza"], pulpo: true})
        console.log(Diario.registros.length)
        this.mostrarTabla('pizza',this.tablaPara('pizza',Diario.registros))
        this.mostrarTabla('abrazar un árbol',this.tablaPara('abrazar un árbol',Diario.registros))
        this.mostrarTabla('pescar',this.tablaPara('mejillones',Diario.registros))
        this.mostrarTabla('mejillones',this.tablaPara('mejillones',Diario.registros))
    }
}
