//var pregunta = prompt ("Ingresa numero");
//var numero = Number(pregunta)

//if(numero % 2 === 0){
  //  console.log(numero + ': es par')
//}else if(numero % 2 === 1){
  //  console.log(numero + ': es inpar')
//}else {
    //console.error('Error al ingresar numeros: ' + numero)
//}
// operadores logicos

var preguntaEdad = prompt ("Ingresa tu edad");

var edad = Number(preguntaEdad)

If(edad >= 18 && edad <= 80) {
    console.log("Puedes conducir")
}else if (edad === 17 || edad === 16){
    console.log("Puedes sacar el permiso para conducir")
}else if (< 18 || edad > 80){
    console.warn("No puedes conducir")
}else{
    console.error("Ingresaste mal tu edad")
}