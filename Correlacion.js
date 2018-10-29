module.exports = {
    tabla:[ [76,9],
        [4,1]],
    phivalue:0,
    phi:function (tabla = this.tabla) {
        console.log(tabla)
        return (tabla[1][1]*tabla[0][0]-tabla[1][0]*tabla[0][1])
            /Math.sqrt((tabla[0][0]+tabla[0][1])*
            (tabla[0][0]+tabla[1][0])*(tabla[1][1]+tabla[0][1])*(tabla[1][1]+tabla[1][0]))

    },
    mostarTabla:function (tabla) {
        console.log('---------')
        console.log('| '+ tabla[0][0] + ', ' + tabla[0][1] + ' |')

        console.log('| '+ tabla[1][0] + ' , ' + tabla[1][1] + ' |')
        console.log('---------')
    },
    testCorrelacion: function () {
        this.mostarTabla(this.tabla)
        console.log('['+ this.tabla[0][0]+','+ this.tabla[0][1]+','+ this.tabla[1][0]+','+ this.tabla[1][1]+'] => phi = ' + this.phi())
    }

}