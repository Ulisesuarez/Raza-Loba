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