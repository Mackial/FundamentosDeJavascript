var x = 4, y = '4'

//las comparaciones con == revisa las igualdad del valor
//y con === hace la comparacion del tipo del valor, numero o string

var sacha = {
    nombre: 'Sacha'
}

var otraPersona = {
    nombre: 'Sacha'
}

//Igualar una variable con un objeto, no se crea un objeto nuevo
//Seran el mismo, es decir que si se modifica cualquiera, los dos son afectados
//En terminos tecnicos, las dos variables apuntan a la misma posicion de la memoria ram donde se encuentra el objeto
var sachaOnipotente = sacha

//De esta manera se creara un objeto nuevo e independiente del que recibe los valores
var sachaClon = {
    ...sacha
}