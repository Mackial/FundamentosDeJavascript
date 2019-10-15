function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}

    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.esAlto = function() {
    return this.altura >= 1.8
}

function Desarrollador(nombre, apellido) {
    this.nombre
    this.apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)    
}


var sacha = new Persona('Sacha', 'Lifszyc', 27, 1.72)
var erika = new Persona('Erika', 'Luna', 24, 1.57)
var marcial = new Persona('Marcial', 'Ambriz', 23, 1.82)

//sacha.saludar()