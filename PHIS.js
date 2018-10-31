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
        Diario.registros=[]
        Diario.registros=[{eventos:["carrot","exercise","weekend"], pulpo:false},
            {eventos:["bread","pudding","brushed teeth","weekend","touched tree"], pulpo:false},
            {eventos:["carrot","nachos","brushed teeth","cycling","weekend"], pulpo:false},
            {eventos:["brussel sprouts","ice cream","brushed teeth","computer","weekend"], pulpo:false},
            {eventos:["potatoes","candy","brushed teeth","exercise","weekend","dentist"], pulpo:false},
            {eventos:["brussel sprouts","pudding","brushed teeth","running","weekend"], pulpo:false},
            {eventos:["pizza","brushed teeth","computer","work","touched tree"], pulpo:false},
            {eventos:["bread","beer","brushed teeth","cycling","work"], pulpo:false},
            {eventos:["cauliflower","brushed teeth","work"], pulpo:false},
            {eventos:["pizza","brushed teeth","cycling","work"], pulpo:false},
            {eventos:["lasagna","nachos","brushed teeth","work"], pulpo:false},
            {eventos:["brushed teeth","weekend","touched tree"], pulpo:false},
            {eventos:["lettuce","brushed teeth","television","weekend"], pulpo:false},
            {eventos:["spaghetti","brushed teeth","work"], pulpo:false},
            {eventos:["brushed teeth","computer","work"], pulpo:false},
            {eventos:["lettuce","nachos","brushed teeth","work"], pulpo:false},
            {eventos:["carrot","brushed teeth","running","work"], pulpo:false},
            {eventos:["brushed teeth","work"], pulpo:false},
            {eventos:["cauliflower","reading","weekend"], pulpo:false},
            {eventos:["bread","brushed teeth","weekend"], pulpo:false},
            {eventos:["lasagna","brushed teeth","exercise","work"], pulpo:false},
            {eventos:["spaghetti","brushed teeth","reading","work"], pulpo:false},
            {eventos:["carrot","ice cream","brushed teeth","television","work"], pulpo:false},
            {eventos:["spaghetti","nachos","work"], pulpo:false},
            {eventos:["cauliflower","ice cream","brushed teeth","cycling","work"], pulpo:false},
            {eventos:["spaghetti","peanuts","computer","weekend"], pulpo:true},
            {eventos:["potatoes","ice cream","brushed teeth","computer","weekend"], pulpo:false},
            {eventos:["potatoes","ice cream","brushed teeth","work"], pulpo:false},
            {eventos:["peanuts","brushed teeth","running","work"], pulpo:false},
            {eventos:["potatoes","exercise","work"], pulpo:false},
            {eventos:["pizza","ice cream","computer","work"], pulpo:false},
            {eventos:["lasagna","ice cream","work"], pulpo:false},
            {eventos:["cauliflower","candy","reading","weekend"], pulpo:false},
            {eventos:["lasagna","nachos","brushed teeth","running","weekend"], pulpo:false},
            {eventos:["potatoes","brushed teeth","work"], pulpo:false},
            {eventos:["carrot","work"], pulpo:false},
            {eventos:["pizza","beer","work","dentist"], pulpo:false},
            {eventos:["lasagna","pudding","cycling","work"], pulpo:false},
            {eventos:["spaghetti","brushed teeth","reading","work"], pulpo:false},
            {eventos:["spaghetti","pudding","television","weekend"], pulpo:false},
            {eventos:["bread","brushed teeth","exercise","weekend"], pulpo:false},
            {eventos:["lasagna","peanuts","work"], pulpo:true},
            {eventos:["pizza","work"], pulpo:false},
            {eventos:["potatoes","exercise","work"], pulpo:false},
            {eventos:["brushed teeth","exercise","work"], pulpo:false},
            {eventos:["spaghetti","brushed teeth","television","work"], pulpo:false},
            {eventos:["pizza","cycling","weekend"], pulpo:false},
            {eventos:["carrot","brushed teeth","weekend"], pulpo:false},
            {eventos:["carrot","beer","brushed teeth","work"], pulpo:false},
            {eventos:["pizza","peanuts","candy","work"], pulpo:true},
            {eventos:["carrot","peanuts","brushed teeth","reading","work"], pulpo:false},
            {eventos:["potatoes","peanuts","brushed teeth","work"], pulpo:false},
            {eventos:["carrot","nachos","brushed teeth","exercise","work"], pulpo:false},
            {eventos:["pizza","peanuts","brushed teeth","television","weekend"], pulpo:false},
            {eventos:["lasagna","brushed teeth","cycling","weekend"], pulpo:false},
            {eventos:["cauliflower","peanuts","brushed teeth","computer","work","touched tree"], pulpo:false},
            {eventos:["lettuce","brushed teeth","television","work"], pulpo:false},
            {eventos:["potatoes","brushed teeth","computer","work"], pulpo:false},
            {eventos:["bread","candy","work"], pulpo:false},
            {eventos:["potatoes","nachos","work"], pulpo:false},
            {eventos:["carrot","pudding","brushed teeth","weekend"], pulpo:false},
            {eventos:["carrot","brushed teeth","exercise","weekend","touched tree"], pulpo:false},
            {eventos:["brussel sprouts","running","work"], pulpo:false},
            {eventos:["brushed teeth","work"], pulpo:false},
            {eventos:["lettuce","brushed teeth","running","work"], pulpo:false},
            {eventos:["candy","brushed teeth","work"], pulpo:false},
            {eventos:["brussel sprouts","brushed teeth","computer","work"], pulpo:false},
            {eventos:["bread","brushed teeth","weekend"], pulpo:false},
            {eventos:["cauliflower","brushed teeth","weekend"], pulpo:false},
            {eventos:["spaghetti","candy","television","work","touched tree"], pulpo:false},
            {eventos:["carrot","pudding","brushed teeth","work"], pulpo:false},
            {eventos:["lettuce","brushed teeth","work"], pulpo:false},
            {eventos:["carrot","ice cream","brushed teeth","cycling","work"], pulpo:false},
            {eventos:["pizza","brushed teeth","work"], pulpo:false},
            {eventos:["spaghetti","peanuts","exercise","weekend"], pulpo:true},
            {eventos:["bread","beer","computer","weekend","touched tree"], pulpo:false},
            {eventos:["brushed teeth","running","work"], pulpo:false},
            {eventos:["lettuce","peanuts","brushed teeth","work","touched tree"], pulpo:false},
            {eventos:["lasagna","brushed teeth","television","work"], pulpo:false},
            {eventos:["cauliflower","brushed teeth","running","work"], pulpo:false},
            {eventos:["carrot","brushed teeth","running","work"], pulpo:false},
            {eventos:["carrot","reading","weekend"], pulpo:false},
            {eventos:["carrot","peanuts","reading","weekend"], pulpo:true},
            {eventos:["potatoes","brushed teeth","running","work"], pulpo:false},
            {eventos:["lasagna","ice cream","work","touched tree"], pulpo:false},
            {eventos:["cauliflower","peanuts","brushed teeth","cycling","work"], pulpo:false},
            {eventos:["pizza","brushed teeth","running","work"], pulpo:false},
            {eventos:["lettuce","brushed teeth","work"], pulpo:false},
            {eventos:["bread","brushed teeth","television","weekend"], pulpo:false},
            {eventos:["cauliflower","peanuts","brushed teeth","weekend"], pulpo:false}]
        this.calcularCorrelaciones(Diario.registros)
        this.mostrarPhis()



    }
}