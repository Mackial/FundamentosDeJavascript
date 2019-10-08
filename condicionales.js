var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}
var daniel = {
    nombre: 'Daniel',
    apellido: 'Baca',
    edad: 13,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)

    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    }

    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.dj) {
        console.log('Dj')
    }

    if (persona.drone) {
        console.log('Vuela Drones')
    }
}

imprimirProfesiones(sacha)

const MAYORIA_DE_EDAD = 18

//Asignacion de una funcion a una variable
var esMayor = function (persona) {
    return persona.edad >= mayoriaDeEdad
}
//Otra forma de asignar una funcion a una variable usando la flecha
//ARROE FUNCTION
const esMayorEdad = (persona) => {
    return persona.edad >= mayoriaDeEdad    
}

//ARROW simplificada y equivalente a la funcion de arriba
const esMayorEdadD = ({edad}) => edad >= MAYORIA_DE_EDAD

const esMenor = ({ edad }) => edad < MAYORIA_DE_EDAD

function esMayor(persona){
    //retona valores booleanos, true o false
    return persona.edad >= mayoriaDeEdad
}

function mayoriaDeEdad(persona){
    if (esMayorEdadD(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} Aun no cumple la mayoria de edad`)
    }
}

const permitirAcceso = persona => {
    if (!esMayorEdadD(persona)) {
        console.log('ACCESO DENEGADO')
    } else {
        console.log('ACCESO PERMITIDO')
    }
}

mayoriaDeEdad(sacha)