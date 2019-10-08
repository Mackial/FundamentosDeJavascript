var marcial = {
    nombre: 'Marcial',
    apellido: 'Ambriz',
    edad: 23,
    peso: 88
}

console.log(`Al inicio del año ${marcial.nombre} pesa ${marcial.peso}kg`)

const INCREMENTO_PESO = 0.2
const YEAR = 365

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const perderPeso = persona => persona.peso -= INCREMENTO_PESO

const gloton = () => Math.random() < 0.3
const actividad = () => Math.random() < 0.4

const META = marcial.peso - 3
var dias = 0

while (marcial.peso > META) {
    if (gloton()) {
        aumentarPeso(marcial)
    }

    if (actividad()) {
        perderPeso(marcial)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias para que ${marcial.nombre} cumpliera la meta de pesar ${marcial.peso.toFixed(1)}kg`)
