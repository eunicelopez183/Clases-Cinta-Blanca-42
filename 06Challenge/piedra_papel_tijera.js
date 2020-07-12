var player1 = prompt("P1 Elige piedra, papel o tijera?")
var player2 = prompt("P2 Elige piedra, papel o tijera?")

if(player1 === player2){
    console.log("Es un empate")
    
}else if(player1 === "papel" && player2 === "piedra" || player1 === "tijera" && player2 === "papel || player1 === "piedra" && player2 === "tijera") {
    console.log("Gana player1 porque " + player1 + " vence a " + player2 )
}else if