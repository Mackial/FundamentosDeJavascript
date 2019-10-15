var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}
var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 138
}
var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}
var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 90
}
var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 91
}
//Condicion para el filtro
const esAlta = ({altura}) => altura > 1.8

const esBaja = ({altura}) => altura < 1.6

var personas = [sacha, alan, martin, vicky, paula]
// Filtrar los arrays
var personasAltas = personas.filter(esAlta)

var personasBajitas = personas.filter(esBaja)

const pasarAlturaACms = persona => {
    //Retorna el nuevo obejto pero tambien se modifica el actual
    //persona.altura *= 100
    //return persona

    //Regresa un nuevo objeto modificado e independiente del anterior
    return {
        ...persona,
        //apellido: persona.apellido.toUpperCase()
        altura: persona.altura * 100
    }
}

//Version de la funcion anterior mas eficiente
const pasarAlturaACmsMejor = persona => ({
    ...persona,
    altura: persona.altura *100
})

var personasCms = personas.map(pasarAlturaACms)
//console.log(personasAltas)

var acum = 0

for (var i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros
}

const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros
}

//reduce sirve para reducir todos los valores de un atributo a uno en un total
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`El total que tienen entre todos es de ${totalDeLibros} libros`)