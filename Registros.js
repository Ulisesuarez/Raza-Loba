let registro ={
    eventos:[],
    pulpo: false
}



function contieneEvento(evento, eventos){
    return eventos.includes(evento)
}


function mostrarRegistro(registro){
    console.log ('eventos: ' + registro.eventos)

    if(registro.pulpo){
        console.log('Se transformó en pulpo')
    } else {
        console.log('No se transformó')
    }

}

function testRegistros(){
    registro.eventos=[ 'trabajar', 'tocar un árbol', 'hamburguesa', 'correr', 'twitter']
    registro.pulpo= false
    mostrarRegistro(registro)
    console.log('El tamaño del registro (' + registro.eventos.length + ') es igual a 5? ' + (registro.eventos.length===5).toString())
    console.log('Se transformó en pulpo? '+ registro.pulpo)
    console.log('El evento hamburguesa está en el registro? esperado true: ' + contieneEvento('hamburguesa',registro.eventos) )
    console.log('El evento pizza está en el registro? esperado false: ' + contieneEvento('pizza',registro.eventos) )
}

testRegistros()