var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}
var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}
var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}
var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}
var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
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

console.log(personasCms)