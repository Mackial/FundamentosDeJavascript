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


var personas = [sacha, alan, martin, vicky, paula]

for (var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}