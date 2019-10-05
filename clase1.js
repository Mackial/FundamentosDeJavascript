var nombre = 'Marcial', apellido = 'Ambriz'


//Convierte las cadenas en todas en mayusculas
var nombreMayus = nombre.toUpperCase()
//Convierte las cademas en tonas en minusculas
var nombreMinus = apellido.toLowerCase()
//Guarda la primera letra del valor de la variable nombre
var primeraLetraDelNombre = nombre.charAt(0)  //Seleciona un caracter de la cadena segun la posicion en este caso M=0, a=1, r=2, etc
//Cuenta el numero de caracteres que tiene la cadena incluyendo los espacios
var cantidadDeLetrasDelNombre = nombre.length
//Concatenacion de con comillas invertidas
var nombreCompleto = `Mr. ${nombre} ${apellido}` //Se puede colocar texto plano y no afectara el resultado
//Seleccion una parte de la cadena, indicando el inicio y el fin del fragmento
var str = nombre.substr(1, 2)
console.log('Hola ' + nombreMayus + ' ' + apellido)