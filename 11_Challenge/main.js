//preguntas


let nombreP = document.getElementById('nombreP')
let direccionP = document.getElementById('direccionP')
let telefonoP = document.getElementById('telefonoP')
let preguntaP = document.getElementById('preguntaP')
let boton = document.getElementById('btn')


//respuestas 

let nombreR = document.getElementById('nombreR')
let direccionR = document.getElementById('direccionR')
let telefonoR = document.getElementById('telefonoR')
let preguntaR = document.getElementById('preguntaR')

const ordenar = ()  => {
    
    nombreR.innerHTML = nombreP.value
    direccionR.innerHTML = direccionP.value
    telefonoR.innerHTML = telefonoP.value

    
}

boton.addEventListener('click', Ordenar)

