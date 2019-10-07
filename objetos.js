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

function imprimirNombreEdad(persona){
    var {nombre} = persona, {apellido} = persona, {edad} = persona
    console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)
}

imprimirNombreEdad(marcial)
imprimirNombreEdad(marco)

//imprimirNombreMayusculas(marcial)
//imprimirNombreMayusculas(marco)