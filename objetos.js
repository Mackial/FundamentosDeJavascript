var marcial = {
    nombre: 'Marcial',
    apellido: 'Ambriz',
    edad: 23
}

var marco = {
    nombre: 'Marco',
    apellido: 'Loera',
    edad: 22
}

function imprimirNombreMayusculas(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

//imprimirNombreMayusculas(marcial)
//imprimirNombreMayusculas(marco)

function imprimirNombreEdad(persona){
    var {nombre} = persona, {apellido} = persona, {edad} = persona
    console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)
}

//imprimirNombreEdad(marcial)
//imprimirNombreEdad(marco)

function cumple(persona) {
    //Regresa un objeto nuevo, mismos parametros del objeto que recibe
    return {
        //Desglosa los parametros del objeto recibido
        ...persona, 
        //Se pueden modificar e incluso agregar nuevos parametros
        edad: persona.edad + 1
    }
}