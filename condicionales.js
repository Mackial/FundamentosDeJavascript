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

function esMayor(persona){
    //retona valores booleanos, true o false
    return persona.edad >= mayoriaDeEdad
}

function mayoriaDeEdad(persona){
    if (esMayor(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} Aun no cumple la mayoria de edad`)
    }
}

mayoriaDeEdad(sacha)