var marcial = {
    nombre: 'Marcial',
    apellido: 'Ambriz',
    edad: 23,
    peso: 88
}

console.log(`Al inicio del año ${marcial.nombre} pesa ${marcial.peso}kg`)

const INCREMENTO_PESO =0.2
const YEAR = 365

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const perderPeso = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= YEAR; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarPeso(marcial)
    } else if (random < 0.5) {
        perderPeso(marcial)
    }
}

console.log(`Al final del año ${marcial.nombre} pesa ${marcial.peso.toFixed(1)}kg`)