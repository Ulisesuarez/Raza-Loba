let registro = {
    eventos: [],
    pulpo: false
}
module.exports = {
    contieneEvento: function (evento, eventos)
{
    return eventos.includes(evento)
},
    mostrarRegistro: function(registro) {
    console.log('eventos: ' + registro.eventos + ' => pulpo: ' + registro.pulpo)
}, testRegistros: function() {
    registro.eventos = ['trabajar', 'tocar un árbol', 'hamburguesa', 'correr', 'twitter']
    registro.pulpo = false
    this.mostrarRegistro(registro)
    console.log('El tamaño del registro (' + registro.eventos.length + ') es igual a 5? ' + (registro.eventos.length === 5).toString())
    console.log('Se transformó en pulpo? ' + registro.pulpo)
    console.log('El evento hamburguesa está en el registro? esperado true: ' + this.contieneEvento('hamburguesa', registro.eventos))
    console.log('El evento pizza está en el registro? esperado false: ' + this.contieneEvento('pizza', registro.eventos))
}
}